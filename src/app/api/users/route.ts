import {NextRequest, NextResponse} from 'next/server'
import { prisma, connectToNeon } from "../../../lib/neon";
import {verifyToken} from "../../../lib/auth";

// GET /api/users -> Return all users (admin only)
export async function GET(req: NextRequest) {
    try {
        await connectToNeon()

        const token = req.headers.get('Authorization')?.replace('Bearer ', '')
        if (!token) {
            return NextResponse.json({error: 'No token provided'}, {status: 401})
        }
        const payload = await verifyToken(token as string)
        if (!payload || payload.role !== 'ADMIN') {
            return NextResponse.json({error: 'Unauthorized'}, {status: 401})
        }

        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true
            }
        })
        return NextResponse.json(users)
    } catch (err: any) {
        console.error('GET /api/users error:', err.message)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}

// POST /api/users -> Create user (manual or if not using magic link)
export async function POST(req: NextRequest) {
    try {
        await connectToNeon()

        const body = await req.json()
        const {email, name, role} = body

        if (!email) {
            return NextResponse.json({error: 'Email is required'}, {status: 400})
        }

        let user = await prisma.user.findUnique({ where: { email } })
        if (user) {
            return NextResponse.json({error: 'User already exists'}, {status: 409})
        }

        user = await prisma.user.create({
            data: {
                email,
                name: name || null,
                role: role === 'ADMIN' ? 'ADMIN' : 'USER',
            }
        })

        return NextResponse.json({success: true, user})
    } catch (err: any) {
        console.error('POST /api/users error:', err.message)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}
