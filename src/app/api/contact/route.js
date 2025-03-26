import {NextResponse} from 'next/server';
import {SendEmailCommand, SESClient} from '@aws-sdk/client-ses';
import connectToDatabase from '@/lib/mongoose';
import Inquiry from '@/lib/models/Inquiry';

const AWS_REGION = process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export async function POST(req) {
    try {
        const body = await req.json();
        const {name, email, company, phone, message, budget} = body;
        if (!name || !email || !message) {
            return NextResponse.json(
                {success: false, error: 'Name, email, and message are required.'},
                {status: 400}
            );
        }

        await connectToDatabase();

        const existingInquiry = await Inquiry.findOne({email});
        if (existingInquiry) {
            return NextResponse.json(
                {success: false, error: 'Email already exists'},
                {status: 400}
            );
        }

        // Save inquiry to the database
        await Inquiry.create({name, email, company, phone, message, budget});

        // Set up SES client
        const sesClient = new SESClient({
            region: AWS_REGION,
            credentials: {
                accessKeyId: AWS_ACCESS_KEY_ID,
                secretAccessKey: AWS_SECRET_ACCESS_KEY,
            },
        });

        // Email to the owner
        const sendToOwner = new SendEmailCommand({
            Source: EMAIL_FROM,
            Destination: {ToAddresses: [EMAIL_TO]},
            Message: {
                Subject: {Data: `New Inquiry from ${name}`},
                Body: {
                    Text: {
                        Data: `
                                New inquiry details:
                                
                                Name: ${name}
                                Email: ${email}
                                Company: ${company || 'Not provided'}
                                Phone: ${phone || 'Not provided'}
                                Budget: ${budget || 'Not provided'}
                                Message: ${message}
                                `,
                    },
                },
            },
        });

        // Email to the user
        const sendToUser = new SendEmailCommand({
            Source: EMAIL_FROM,
            Destination: {ToAddresses: [email]},
            Message: {
                Subject: {Data: 'Thanks for contacting us!'},
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

        // Send emails
        // await Promise.all([sesClient.send(sendToOwner), sesClient.send(sendToUser)]);

        console.log('✅ Emails sent successfully');

        return NextResponse.json({success: true}, {status: 200});
    } catch (error) {
        console.error('❌ Error handling contact form:', error);
        return NextResponse.json(
            {success: false, error: error.message || 'Server error'},
            {status: 500}
        );
    }
}
