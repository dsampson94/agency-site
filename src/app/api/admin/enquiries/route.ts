import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { prisma } from '../../../../lib/neon'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

async function verifyAdmin(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided')
  }

  const token = authHeader.substring(7)
  const decoded = jwt.verify(token, JWT_SECRET) as any
  
  if (decoded.role !== 'admin') {
    throw new Error('Insufficient permissions')
  }

  return decoded
}

export async function GET(request: NextRequest) {
  try {
    await verifyAdmin(request)

    const enquiries = await prisma.enquiry.findMany({
      include: {
        user: {
          select: {
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 50
    })

    return NextResponse.json({
      success: true,
      enquiries: enquiries.map(enquiry => ({
        _id: enquiry.id.toString(),
        email: enquiry.email, // Use enquiry.email directly since it's now part of the enquiry model
        name: enquiry.name,
        company: enquiry.company,
        phone: enquiry.phone,
        budget: enquiry.budget,
        message: enquiry.message,
        hasVoiceNote: enquiry.hasVoiceNote,
        transcript: enquiry.transcript,
        createdAt: enquiry.createdAt.toISOString()
      }))
    })

  } catch (error) {
    console.error('Admin enquiries error:', error)
    
    if (error instanceof Error && (error.message === 'No token provided' || error.message === 'Insufficient permissions')) {
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
