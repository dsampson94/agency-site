import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma, connectToNeon } from "../../../../lib/neon";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: NextRequest) {
    await connectToNeon();

    // Get token from URL query parameters
    const url = new URL(req.url);
    const magicLinkToken = url.searchParams.get("token");

    if (!magicLinkToken) {
        return NextResponse.json({ error: "Missing authentication token" }, { status: 401 });
    }

    try {
        // Verify the short-lived magic link token
        const decoded: any = jwt.verify(magicLinkToken, JWT_SECRET);
        if (!decoded.email) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const user = await prisma.user.findUnique({ 
            where: { email: decoded.email } 
        });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 404 });
        }

        // Generate a new session token with a long expiration (e.g., 7 days)
        const sessionToken = jwt.sign(
            { email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Redirect to root ('/') after successful login
        const response = NextResponse.redirect(new URL("/", req.url));

        // Set the httpOnly cookie with the session token
        response.cookies.set("superstack_token", sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: "/",
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }
}
