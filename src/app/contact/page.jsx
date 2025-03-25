// app/contact/page.jsx

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import {ContactForm} from '@/components/ContactForm';
import {ContactDetails} from '@/components/ContactDetails';

// Import your new client components

// ✔ Server component can export metadata
export const metadata = {
    title: 'Contact Us',
    description: 'Let’s work together. We can’t wait to hear from you.',
}

// ✔ No "use client" here, so we can use metadata
export default function Contact() {
    return (
        <div className="mt-64">
            <PageIntro eyebrow="Contact us" title="Let’s work together">
                <p>We hope to hear from you.</p>
            </PageIntro>

            <Container className="mt-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                    {/* Client components (can use hooks) */}
                    <ContactDetails />
                    <ContactForm />
                </div>
            </Container>
        </div>
    )
}
