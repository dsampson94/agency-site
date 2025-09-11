import {NextRequest, NextResponse} from 'next/server'
import axios from 'axios'
import FormData from 'form-data'
import {Buffer} from 'buffer'
import { prisma } from '../../../lib/prisma'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export async function POST(req: NextRequest) {
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

        return NextResponse.json({
            success: true,
            transcript: transcript,
            message: 'Voice note transcribed successfully'
        })

    } catch (error: any) {
        console.error('Voice note transcription error:', error.message)
        return NextResponse.json({error: 'Failed to transcribe voice note'}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}
