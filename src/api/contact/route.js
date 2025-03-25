// app/api/contact/route.js
import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

export async function POST(request) {
    try {
        // Parse form data from the request body
        const body = await request.json()
        const { name, email, company, phone, message, budget } = body

        // 1) Save to MongoDB
        const client = new MongoClient(process.env.MONGODB_URI)
        await client.connect()
        const db = client.db() // or db('mydatabase') if needed
        const collection = db.collection('inquiries')

        const doc = {
            name,
            email,
            company,
            phone,
            message,
            budget,
            date: new Date(),
        }
        await collection.insertOne(doc)
        await client.close()

        // 2) Send Emails via AWS SES
        const sesClient = new SESClient({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        })

        const fromEmail = process.env.EMAIL_FROM
        const toEmail = process.env.EMAIL_TO // your address to be notified

        // Email to you:
        const sendToOwner = new SendEmailCommand({
            Source: fromEmail,
            Destination: { ToAddresses: [toEmail] },
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
        })

        // Email to user:
        const sendToUser = new SendEmailCommand({
            Source: fromEmail,
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
        })

        // Send them in parallel
        await Promise.all([sesClient.send(sendToOwner), sesClient.send(sendToUser)])

        // Return success response
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error in contact route:', error)
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}
