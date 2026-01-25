import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/neon'

export async function POST(request: NextRequest) {
    try {
        const { email, name, message, hasVoiceNote, transcript } = await request.json()

        if (!email || !message || !name) {
            return NextResponse.json(
                { success: false, error: 'Email, name and message are required' },
                { status: 400 }
            )
        }

        // Create new enquiry directly with all required fields
        const newEnquiry = await prisma.enquiry.create({
            data: {
                name,
                email: email.toLowerCase(),
                message,
                hasVoiceNote: hasVoiceNote || false,
                transcript: transcript || null,
                status: 'new',
            }
        })

        return NextResponse.json({
            success: true,
            message: 'Enquiry submitted successfully',
            enquiry: newEnquiry
        })

    } catch (error) {
        console.error('Error submitting enquiry:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to submit enquiry' },
            { status: 500 }
        )
    } finally {
        await prisma.$disconnect()
    }
}
