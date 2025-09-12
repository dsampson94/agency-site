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

    // Get current date and week start
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const weekStart = new Date(today)
    weekStart.setDate(today.getDate() - 7)

    // Get total counts
    const [totalEnquiries, totalUsers, todayEnquiries, weeklyEnquiries] = await Promise.all([
      prisma.enquiry.count(),
      prisma.user.count(),
      prisma.enquiry.count({
        where: {
          createdAt: {
            gte: today
          }
        }
      }),
      prisma.enquiry.count({
        where: {
          createdAt: {
            gte: weekStart
          }
        }
      })
    ])

    return NextResponse.json({
      success: true,
      stats: {
        totalEnquiries,
        totalUsers,
        todayEnquiries,
        weeklyEnquiries
      }
    })

  } catch (error) {
    console.error('Admin stats error:', error)
    
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
