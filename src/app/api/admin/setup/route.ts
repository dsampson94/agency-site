import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function GET() {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash('admin', 10)

    // Create or update admin user
    const admin = await prisma.admin.upsert({
      where: { email: 'davesampson15@gmail.com' },
      update: {
        password: hashedPassword,
        role: 'admin',
      },
      create: {
        email: 'davesampson15@gmail.com',
        password: hashedPassword,
        role: 'admin',
      },
    })

    return NextResponse.json({
      success: true,
      message: '✅ Admin user created successfully!',
      instructions: 'Go to /admin to login',
      credentials: {
        email: 'davesampson15@gmail.com',
        password: 'admin'
      }
    })

  } catch (error: any) {
    console.error('Setup admin error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to create admin user',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
