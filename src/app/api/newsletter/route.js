import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import NewsletterSubscriber from '@/lib/models/NewsletterSubscriber';

export async function POST(req) {
    try {
        const { email } = await req.json();

        // Check if the email is already in the database
        await connectToDatabase();
        const existingSubscriber = await NewsletterSubscriber.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json(
                { success: false, error: 'You are already subscribed to the newsletter.' },
                { status: 400 }
            );
        }

        // Save the email to the database
        await NewsletterSubscriber.create({ email });

        return NextResponse.json(
            { success: true, message: 'Thank you for subscribing to our newsletter!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error in newsletter subscription:', error);
        return NextResponse.json(
            { success: false, error: 'An error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
