import '@/styles/tailwind.css'

import type {Metadata} from 'next'

import {Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from "@vercel/speed-insights/next";

import {RootLayout} from '../components/RootLayout'

export const metadata: Metadata = {
    title: {
        template: '%s - SuperStack Development Studio',
        default: 'SuperStack Development Studio - Your Technology Partner in South Africa',
    },
    description:
        'Your technology partner in South Africa. Expert web development, Python automation, AI integration, and custom business solutions. Build reliable applications that scale with modern React, Next.js, and intelligent automation.',
    metadataBase: new URL('https://www.superstack.co.za'),
    keywords: [
        'Technology Partner South Africa',
        'React Development Cape Town',
        'Business Solutions Development',
        'Web Application Development',
        'Python Automation Services',
        'AI Integration Solutions',
        'Custom Software Development',
        'Next.js Development Studio',
        'Business Process Automation',
        'SuperStack Solutions',
        'South African Tech Partner',
        'Intelligent Business Tools',
    ],
    category: 'Technology Services',
    classification: 'Software Development',
    openGraph: {
        title: 'SuperStack Development Studio - Your Technology Partner in South Africa',
        description:
            'Your technology partner in South Africa. Expert web development, Python automation, AI integration, and custom business solutions that scale.',
        url: 'https://www.superstack.co.za',
        siteName: 'SuperStack Development Studio',
        locale: 'en_ZA',
        type: 'website',
        images: [
            {
                url: 'https://www.superstack.co.za/ss-logo.png',
                width: 1200,
                height: 630,
                alt: 'SuperStack Development Studio - Your Technology Partner',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SuperStack Development Studio - Your Technology Partner',
        description:
            'Your technology partner in South Africa. Expert web development, Python automation, and business solutions that scale.',
        site: '@superstacksa',
        creator: '@davidsampson94',
        images: ['https://www.superstack.co.za/ss-logo.png'],
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
        canonical: 'https://www.superstack.co.za',
    },
    manifest: '/manifest.json',
    icons: {
        icon: '/icon.svg',
        apple: '/icon.svg',
        shortcut: '/icon.svg',
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
            
            {/* Google Analytics */}
            {process.env.NEXT_PUBLIC_GA_ID && (
                <>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                            `,
                        }}
                    />
                </>
            )}

            {/* Google Ads Conversion Tracking */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-963187150"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-963187150');
                    `,
                }}
            />
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'TechCompany',
                        name: 'SuperStack Development Studio',
                        alternateName: 'SuperStack',
                        url: 'https://www.superstack.co.za',
                        logo: 'https://www.superstack.co.za/logo.png',
                        description: 'Leading web development company and technology partner in South Africa. We specialize in custom React applications, business automation, and software solutions for South African businesses across all provinces.',
                        foundingDate: '2024',
                        founder: {
                            '@type': 'Person',
                            name: 'David Sampson',
                            url: 'https://www.linkedin.com/in/davidsampson94',
                            jobTitle: 'Founder & Lead Developer'
                        },
                        address: {
                            '@type': 'PostalAddress',
                            addressCountry: 'ZA',
                            addressRegion: 'Western Cape',
                            addressLocality: 'Cape Town'
                        },
                        contactPoint: {
                            '@type': 'ContactPoint',
                            contactType: 'customer service',
                            url: 'https://cal.com/superstack/consultation',
                            availableLanguage: ['English', 'Afrikaans']
                        },
                        sameAs: [
                            'https://www.linkedin.com/company/106934470/',
                            'https://github.com/dsampson94',
                            'https://twitter.com/superstacksa'
                        ],
                        serviceArea: [
                            {
                                '@type': 'State',
                                name: 'Western Cape'
                            },
                            {
                                '@type': 'State', 
                                name: 'Gauteng'
                            },
                            {
                                '@type': 'State',
                                name: 'KwaZulu-Natal'
                            }
                        ],
                        areaServed: [
                            'Cape Town',
                            'Johannesburg', 
                            'Durban',
                            'Pretoria',
                            'Port Elizabeth',
                            'Bloemfontein',
                            'South Africa'
                        ],
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Development Services',
                            itemListElement: [
                                {
                                    '@type': 'Service',
                                    name: 'Web Application Development',
                                    description: 'Custom React and Next.js applications with modern best practices'
                                },
                                {
                                    '@type': 'Service',
                                    name: 'Business Automation',
                                    description: 'Python automation and workflow optimization for business processes'
                                },
                                {
                                    '@type': 'Service',
                                    name: 'AI Integration',
                                    description: 'AI-powered features and intelligent automation when needed'
                                },
                                {
                                    '@type': 'Service',
                                    name: 'Mobile App Development',
                                    description: 'React Native and progressive web app development'
                                },
                                {
                                    '@type': 'Service',
                                    name: 'Cloud Architecture',
                                    description: 'AWS and cloud-native application development and deployment'
                                }
                            ]
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '5.0',
                            ratingCount: '12',
                            bestRating: '5',
                            worstRating: '1'
                        }
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
