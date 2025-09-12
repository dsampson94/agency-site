import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { prisma } from '../../../../lib/prisma'

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

    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 50
    })

    return NextResponse.json({
      success: true,
      users: users.map(user => ({
        _id: user.id.toString(),
        email: user.email,
        createdAt: user.createdAt.toISOString()
      }))
    })

  } catch (error) {
    console.error('Admin users error:', error)
    
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
