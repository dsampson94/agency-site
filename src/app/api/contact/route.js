import { NextResponse } from 'next/server';
import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';
import connectToDatabase from '@/lib/mongoose';
import Inquiry from '@/lib/models/Inquiry';

const AWS_REGION = process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export async function POST(req) {
    console.log('📬 Contact POST request received');

    try {
        console.log('🔍 Parsing request body...');
        const body = await req.json();
        const { name, email, company, phone, message, budget } = body;

        console.log('📨 Inquiry Details:', { name, email, company, phone, message });

        if (!name || !email || !message) {
            console.warn('❗ Missing required fields');
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        console.log('🌐 Connecting to MongoDB...');
        await connectToDatabase();

        console.log('💾 Saving inquiry to database...');
        await Inquiry.create({ name, email, company, phone, message });

        console.log('📡 Setting up SES client...');
        console.log('📦 ENV:', {
            AWS_REGION,
            AWS_ACCESS_KEY_ID: AWS_ACCESS_KEY_ID ? '✅ SET' : '❌ MISSING',
            AWS_SECRET_ACCESS_KEY: AWS_SECRET_ACCESS_KEY ? '✅ SET' : '❌ MISSING',
            EMAIL_FROM,
            EMAIL_TO,
        });

        const sesClient = new SESClient({
            region: AWS_REGION,
            credentials: {
                accessKeyId: AWS_ACCESS_KEY_ID,
                secretAccessKey: AWS_SECRET_ACCESS_KEY,
            },
        });

        const sendToOwner = new SendEmailCommand({
            Source: EMAIL_FROM,
            Destination: { ToAddresses: [EMAIL_TO] },
            Message: {
                Subject: { Data: `New Inquiry from ${name}` },
                Body: {
                    Text: {
                        Data: `
New inquiry details:

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}
Budget: ${budget}
Message: ${message}
`,
                    },
                },
            },
        });

        const sendToUser = new SendEmailCommand({
            Source: EMAIL_FROM,
            Destination: { ToAddresses: [email] },
            Message: {
                Subject: { Data: 'Thanks for contacting us!' },
                Body: {
                    Text: {
                        Data: `
Hi ${name},

Thanks for reaching out! We’ve received your inquiry and will contact you shortly.

Best,
Your Company
`,
                    },
                },
            },
        });

        console.log('📤 Sending emails...');
        await Promise.all([
            sesClient.send(sendToOwner),
            sesClient.send(sendToUser),
        ]);
        console.log('✅ Emails sent successfully');

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('❌ Error handling contact form:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Server error' },
            { status: 500 }
        );
    }
}
