import {NextRequest, NextResponse} from 'next/server'
import connectToDatabase from "../../../lib/mongoose";
import User from "../../../lib/models/User";
import {verifyToken} from "../../../lib/auth";

// GET /api/users -> Return all users (admin only, for example)
export async function GET(req: NextRequest) {
    try {
        await connectToDatabase()

        const token = req.headers.get('Authorization')?.replace('Bearer ', '')
        if (!token) {
            return NextResponse.json({error: 'No token provided'}, {status: 401})
        }
        const payload = await verifyToken(token as string)
        if (!payload || payload.role !== 'ADMIN') {
            return NextResponse.json({error: 'Unauthorized'}, {status: 401})
        }

        const users = await User.find({})
        return NextResponse.json(users)
    } catch (err: any) {
        console.error('GET /api/users error:', err.message)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}

// POST /api/users -> Create user (manual or if not using magic link)
export async function POST(req: NextRequest) {
    try {
        await connectToDatabase()

        const body = await req.json()
        const {email, username, password, role} = body

        if (!email) {
            return NextResponse.json({error: 'Email is required'}, {status: 400})
        }

        let user = await User.findOne({email})
        if (user) {
            return NextResponse.json({error: 'User already exists'}, {status: 409})
        }

        user = await User.create({
            email,
            username: username || email.split('@')[0],
            password: password || undefined,
            role: role === 'ADMIN' ? 'ADMIN' : 'USER',
        })

        return NextResponse.json({success: true, user})
    } catch (err: any) {
        console.error('POST /api/users error:', err.message)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}
