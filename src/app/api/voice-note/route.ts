import {NextRequest, NextResponse} from 'next/server'
import axios from 'axios'
import FormData from 'form-data'
import {Buffer} from 'buffer'
import { prisma } from '../../../lib/prisma'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

// Simple rate limiting store (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

// Email validation
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// Check if email is from a disposable email service
function isDisposableEmail(email: string): boolean {
    const disposableDomains = [
        '10minutemail.com', 'tempmail.org', 'guerrillamail.com', 
        'mailinator.com', 'temp-mail.org', 'throwaway.email',
        'getnada.com', 'mohmal.com', 'sharklasers.com'
    ]
    const domain = email.split('@')[1]?.toLowerCase()
    return disposableDomains.includes(domain)
}

// Audio validation
function validateAudio(buffer: Buffer): { isValid: boolean; reason?: string } {
    // Check minimum size (should be at least 1KB for a real recording)
    if (buffer.length < 1000) {
        return { isValid: false, reason: 'Audio file too small' }
    }
    
    // Check maximum size (prevent huge uploads)
    if (buffer.length > 10 * 1024 * 1024) { // 10MB max
        return { isValid: false, reason: 'Audio file too large' }
    }
    
    return { isValid: true }
}

// Rate limiting check
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
    const now = Date.now()
    const limit = rateLimit.get(ip)
    
    if (!limit || now > limit.resetTime) {
        // Reset or create new limit (5 submissions per hour)
        rateLimit.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 })
        return { allowed: true }
    }
    
    if (limit.count >= 5) {
        return { allowed: false, resetTime: limit.resetTime }
    }
    
    limit.count++
    return { allowed: true }
}

export async function POST(req: NextRequest) {
    const formData = await req.formData()
    const audio = formData.get('audio')
    const email = formData.get('email')?.toString().toLowerCase()
    const honeypot = formData.get('honeypot')?.toString()

    // Honeypot validation - if filled, it's likely a bot
    if (honeypot && honeypot.trim() !== '') {
        console.log('Bot detected via honeypot field:', honeypot)
        return NextResponse.json({error: 'Invalid submission'}, {status: 400})
    }

    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'

    if (!email || !audio) {
        return NextResponse.json({error: 'Email and audio are required'}, {status: 400})
    }

    // Validate email format
    if (!isValidEmail(email)) {
        return NextResponse.json({error: 'Please enter a valid email address'}, {status: 400})
    }

    // Check for disposable email
    if (isDisposableEmail(email)) {
        return NextResponse.json({error: 'Please use a permanent email address'}, {status: 400})
    }

    // Check rate limiting
    const rateLimitCheck = checkRateLimit(ip)
    if (!rateLimitCheck.allowed) {
        const resetIn = Math.ceil((rateLimitCheck.resetTime! - Date.now()) / 1000 / 60)
        return NextResponse.json({
            error: `Too many submissions. Please try again in ${resetIn} minutes.`
        }, {status: 429})
    }

    try {
        // Convert Blob to Buffer
        const audioBlob = audio as Blob
        const arrayBuffer = await audioBlob.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // Validate audio file
        const audioValidation = validateAudio(buffer)
        if (!audioValidation.isValid) {
            return NextResponse.json({error: audioValidation.reason}, {status: 400})
        }

        // Transcribe via OpenAI Whisper
        const whisperForm = new FormData()
        whisperForm.append('file', buffer, {filename: 'audio.wav'})
        whisperForm.append('model', 'whisper-1')

        const whisperResponse = await axios.post(
            'https://api.openai.com/v1/audio/transcriptions',
            whisperForm,
            {
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    ...whisperForm.getHeaders(),
                },
            }
        )

        const transcript = whisperResponse.data.text

        // Validate transcript content
        if (!transcript || transcript.trim().length < 10) {
            return NextResponse.json({
                error: 'Voice note must contain meaningful speech. Please record a clear message about your project.'
            }, {status: 400})
        }

        // Check for spam patterns
        const spamPatterns = [
            /(.)\1{10,}/i, // Repeated characters
            /test\s*test\s*test/i, // Multiple "test" words
            /hello\s*hello\s*hello/i, // Multiple "hello" words
            /[^\w\s]{10,}/i, // Too many special characters
        ]
        
        if (spamPatterns.some(pattern => pattern.test(transcript))) {
            return NextResponse.json({
                error: 'Please record a genuine message about your project vision.'
            }, {status: 400})
        }

        // Find or create user by email
        let user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            user = await prisma.user.create({
                data: { email }
            })
        }

        // Check for duplicate submissions from same user within 5 minutes
        const recentSubmission = await prisma.enquiry.findFirst({
            where: {
                userId: user.id,
                hasVoiceNote: true,
                createdAt: {
                    gte: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
                }
            }
        })

        if (recentSubmission) {
            return NextResponse.json({
                error: 'You recently submitted a voice note. Please wait 5 minutes before submitting another.'
            }, {status: 429})
        }

        // Create enquiry with voice note and transcript
        const enquiry = await prisma.enquiry.create({
            data: {
                userId: user.id,
                message: `Voice note submitted`,
                hasVoiceNote: true,
                transcript: transcript,
                status: 'new'
            }
        })

        return NextResponse.json({
            success: true,
            transcript: transcript,
            enquiryId: enquiry.id,
            message: 'Voice note transcribed and saved successfully'
        })

    } catch (error: any) {
        console.error('Voice note transcription error:', error.message)
        return NextResponse.json({error: 'Failed to transcribe voice note'}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}
