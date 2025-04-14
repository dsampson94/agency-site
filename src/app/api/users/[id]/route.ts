import {NextRequest, NextResponse} from 'next/server'
import connectToDatabase from "../../../../lib/mongoose";
import User from "../../../../lib/models/User";
import {verifyToken} from "../../../../lib/auth";

export async function GET(
    req: NextRequest,
    {params}: { params: { id: string } }
) {
    try {
        await connectToDatabase()

        // Optionally check if user is authenticated
        const token = req.headers.get('Authorization')?.replace('Bearer ', '')
        const payload = await verifyToken(token)
        if (!payload) {
            return NextResponse.json({error: 'Unauthorized'}, {status: 401})
        }

        const user = await User.findById(params.id)
        if (!user) {
            return NextResponse.json({error: 'Not Found'}, {status: 404})
        }

        if (payload.role !== 'ADMIN' && payload.id !== user._id.toString()) {
            return NextResponse.json({error: 'Forbidden'}, {status: 403})
        }

        return NextResponse.json(user)
    } catch (err: any) {
        console.error('GET /api/users/[id] error:', err.message)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}

export async function PATCH(
    req: NextRequest,
    {params}: { params: { id: string } }
) {
    try {
        await connectToDatabase()

        const token = req.headers.get('Authorization')?.replace('Bearer ', '')
        const payload = await verifyToken(token)
        if (!payload) {
            return NextResponse.json({error: 'Unauthorized'}, {status: 401})
        }

        const user = await User.findById(params.id)
        if (!user) {
            return NextResponse.json({error: 'User not found'}, {status: 404})
        }

        if (payload.role !== 'ADMIN' && payload.id !== user._id.toString()) {
            return NextResponse.json({error: 'Forbidden'}, {status: 403})
        }

        const body = await req.json()
        if (body.username) user.username = body.username
        if (body.usageCountThisMonth !== undefined) {
            user.usageCountThisMonth = body.usageCountThisMonth
        }

        await user.save()

        return NextResponse.json({success: true, user})
    } catch (err: any) {
        console.error('PATCH /api/users/[id] error:', err.message)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}

export async function DELETE(
    req: NextRequest,
    {params}: { params: { id: string } }
) {
    try {
        await connectToDatabase()

        const token = req.headers.get('Authorization')?.replace('Bearer ', '')
        const payload = await verifyToken(token)
        if (!payload || payload.role !== 'ADMIN') {
            return NextResponse.json({error: 'Admin only'}, {status: 403})
        }

        const user = await User.findById(params.id)
        if (!user) {
            return NextResponse.json({error: 'User not found'}, {status: 404})
        }

        await user.deleteOne()
        return NextResponse.json({success: true, message: 'User deleted'})
    } catch (err: any) {
        console.error('DELETE /api/users/[id] error:', err.message)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}
