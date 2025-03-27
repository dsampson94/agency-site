import '@/styles/tailwind.css'

import type {Metadata} from 'next'

import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from "@vercel/speed-insights/next";

import {RootLayout} from '../components/RootLayout'

export const metadata: Metadata = {
    title: {
        template: '%s - SuperStack Solutions Development Studio',
        default: 'SuperStack Solutions Development Studio',
    },
    description:
        'A high-performance React & Next.js development studio based in South Africa. Build fast, scalable, and beautiful apps with the experts.',
    metadataBase: new URL('https://www.superstacksolutions.co.za'),
    keywords: [
        'React Development',
        'Next.js Studio',
        'South Africa',
        'SuperStack Solutions',
        'Full Stack JavaScript',
        'Web App Development',
    ],
    openGraph: {
        title: 'SuperStack Solutions Development Studio',
        description:
            'A high-performance React & Next.js development studio based in South Africa.',
        url: 'https://www.superstacksolutions.co.za',
        siteName: 'SuperStack Solutions',
        locale: 'en_ZA',
        type: 'website',
        images: [
            {
                url: 'https://www.superstacksolutions.co.za/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'SuperStack Solutions Website Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SuperStack Solutions Development Studio',
        description:
            'A high-performance React & Next.js development studio based in South Africa.',
        site: '@superstacksa',
        images: ['https://www.superstacksolutions.co.za/og-image.jpg'],
    },
    authors: [
        {
            name: 'David Sampson',
            url: 'https://www.superstacksolutions.co.za',
        },
    ],
    creator: 'David Sampson',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
    alternates: {
        canonical: 'https://www.superstacksolutions.co.za',
    },
    manifest: '/manifest.json',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    other: {
        facebook: 'https://www.facebook.com/profile.php?id=61574483712042',
        linkedin: 'https://www.linkedin.com/company/106934470/',
    },
}

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'SuperStack Solutions',
                        url: 'https://www.superstacksolutions.co.za',
                        founder: {
                            "@type": "Person",
                            "name": "David Sampson"
                        },
                        sameAs: [
                            'https://www.facebook.com/profile.php?id=61574483712042',
                            'https://www.linkedin.com/company/106934470/',
                        ],
                    }),
                }}
            />
        </head>
        <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    )
}
