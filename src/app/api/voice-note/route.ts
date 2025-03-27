import {NextRequest, NextResponse} from 'next/server'
import axios from 'axios'
import FormData from 'form-data'
import {Buffer} from 'buffer'
import connectToDatabase from '../../../lib/mongoose'
import User from '../../../lib/models/User'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export async function POST(req: NextRequest) {
    await connectToDatabase()

    const formData = await req.formData()
    const audio = formData.get('audio')
    const email = formData.get('email')?.toString().toLowerCase()

    if (!email || !audio) {
        return NextResponse.json({error: 'Email and audio are required'}, {status: 400})
    }

    try {
        // Convert Blob to Buffer
        const audioBlob = audio as Blob
        const arrayBuffer = await audioBlob.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

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
        const audioBase64 = buffer.toString('base64')
        const audioURL = `data:audio/webm;base64,${audioBase64}`

        // Find or create user
        let user = await User.findOne({email})
        if (!user) {
            user = await User.create({
                email,
                username: email.split('@')[0], // or your default logic
                enquiries: [],
                badges: [],
            })
        }

        // If the user has no enquiries yet, create one
        if (user.enquiries.length === 0) {
            user.enquiries.push({
                voiceNotes: [],
                responded: false,
                createdAt: new Date(),
            })
        }

        // We'll use the latest Enquiry in the array
        const currentEnquiryIndex = user.enquiries.length - 1
        const currentEnquiry = user.enquiries[currentEnquiryIndex]

        // Enforce max 3 voiceNotes
        if (currentEnquiry.voiceNotes.length >= 3) {
            return NextResponse.json(
                {error: 'This enquiry already has 3 voice notes.'},
                {status: 403}
            )
        }

        // Push the new voice note onto the array
        currentEnquiry.voiceNotes.push({
            audioURL,
            transcript,
            createdAt: new Date(),
        })

        // Save the user with updated enquiry
        await user.save()

        return NextResponse.json({
            success: true,
            message: 'Voice note saved.',
            user, // or just the updated enquiry if you prefer
        })
    } catch (error: any) {
        console.error('Voice note error:', error.message)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}
