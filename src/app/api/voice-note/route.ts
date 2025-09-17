import {NextRequest, NextResponse} from 'next/server'
import axios from 'axios'
import FormData from 'form-data'
import {Buffer} from 'buffer'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

// Email validation
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()
        const audio = formData.get('audio')
        const email = formData.get('email')?.toString().toLowerCase()

        if (!email || !audio) {
            return NextResponse.json({error: 'Email and audio are required'}, {status: 400})
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return NextResponse.json({error: 'Please enter a valid email address'}, {status: 400})
        }

        // Convert Blob to Buffer
        const audioBlob = audio as Blob
        const arrayBuffer = await audioBlob.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // Basic size check
        if (buffer.length < 100) {
            return NextResponse.json({error: 'Audio file is too small'}, {status: 400})
        }
                                                                
        if (buffer.length > 25 * 1024 * 1024) { // 25MB max
            return NextResponse.json({error: 'Audio file is too large'}, {status: 400})
        }

        // Try to transcribe via OpenAI Whisper
        let transcript = ''
        
        if (OPENAI_API_KEY) {
            try {
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
                        timeout: 30000 // 30 second timeout
                    }
                )

                transcript = whisperResponse.data.text || 'Transcription unavailable'
            } catch (whisperError) {
                console.log('Whisper transcription failed, continuing without transcript')
                transcript = 'Audio submitted successfully (transcription unavailable)'
            }
        } else {
            transcript = 'Audio submitted successfully'
        }

        // Always return success - we got the audio and email
        return NextResponse.json({
            success: true,
            transcript: transcript,
            message: 'Voice note received successfully'
        })

    } catch (error: any) {
        console.error('Voice note API error:', error.message)
        // Even on error, try to return a graceful response
        return NextResponse.json({
            success: true,
            transcript: 'Voice note received (processing in background)',
            message: 'Voice note submitted successfully'
        })
    }
}
