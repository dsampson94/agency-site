import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(request: NextRequest) {
    try {
        const { email, message, hasVoiceNote, transcript } = await request.json()

        if (!email || !message) {
            return NextResponse.json(
                { success: false, error: 'Email and message are required' },
                { status: 400 }
            )
        }

        // Find or create user with upsert
        const user = await prisma.user.upsert({
            where: { email: email.toLowerCase() },
            update: {},
            create: {
                email: email.toLowerCase(),
            }
        })

        // Create new enquiry
        const newEnquiry = await prisma.enquiry.create({
            data: {
                userId: user.id,
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
