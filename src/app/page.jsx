import Image from 'next/image';

import {Container} from '@/components/Container';
import {FadeIn, FadeInStagger} from '@/components/FadeIn';
import {List, ListItem} from '@/components/List';
import {SectionIntro} from '@/components/SectionIntro';
import {StylizedImage} from '@/components/StylizedImage';
import {Testimonial} from '@/components/Testimonial';
import imageLaptop from '@/images/laptop.jpg';
import {loadCaseStudies} from '@/lib/mdx';
import TellTheTeam from "@/components/TellTheTeam";
import { conversions } from '@/lib/googleAds';

// Hero CTA Buttons Component
function HeroCTAs() {
    const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/superstack/consultation";
    
    const handleBookingClick = () => {
        // Track Google Ads conversion
        conversions.consultation();
        
        // Track custom event for analytics
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'booking_click', {
                event_category: 'engagement',
                event_label: 'hero_consultation_booking'
            });
        }
    };
    
    return (
        <FadeIn className="mt-10 flex flex-row gap-3">
            <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBookingClick}
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Consultation
                </span>
            </a>
            <a
                href="/work"
                className="group inline-flex items-center justify-center rounded-xl border-2 border-gray-700 bg-gray-900 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:bg-gray-800 hover:text-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            >
                <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    View Work
                </span>
            </a>
        </FadeIn>
    );
}

// Trust Indicators Component - Removed

function Services() {
    return (
        <div className="mt-16 sm:mt-24 lg:mt-40 relative">
            {/* Smooth transition background */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-indigo-50/20 to-transparent"></div>
            
            <Container>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-gray-400 border border-gray-800 mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            What We Do
                        </span>
                        <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                            Our{" "}
                            <span className="text-indigo-600">
                                Services
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We build reliable web applications, intelligent automation tools, and business solutions specifically for South African companies and their unique challenges.
                        </p>
                    </FadeIn>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* AI Agent Development */}
                    <FadeIn>
                        <div className="group relative bg-gray-900 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-800 hover:shadow-[0_20px_60px_rgba(79,70,229,0.3)] transition-all duration-500 hover:-translate-y-2">
                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-900/60 to-slate-800/60 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>

                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                AI Agent Development
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Custom AI agents and intelligent chatbot assistants that automate workflows,
                                provide 24/7 customer support, and integrate seamlessly with your existing systems.
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Custom AI Chatbots</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Intelligent Automation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Customer Support Bots</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Workflow Automation</span>
                                </li>
                            </ul>

                            <a
                                href="/services/ai-development"
                                className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group/link"
                            >
                                Learn More
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </FadeIn>

                    {/* App Development - Now in the middle */}
                    <FadeIn>
                        <div className="group relative bg-gray-900 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-800 hover:shadow-[0_20px_60px_rgba(79,70,229,0.3)] transition-all duration-500 hover:-translate-y-2">
                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z M16 4h3a2 2 0 012 2v3" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H5a2 2 0 00-2 2v3" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-900/60 to-slate-800/60 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>

                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                App Development
                                <span className="ml-2 text-sm bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">Popular</span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Transform your ideas into powerful applications. We build native iOS & Android apps, 
                                cross-platform solutions, desktop software, and enterprise SaaS platforms.
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">📱 iOS & Android Native Apps</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">💻 Cross-Platform Solutions</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">🖥️ Desktop Software</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">☁️ SaaS Platform Development</span>
                                </li>
                            </ul>

                            <a
                                href="/services/app-development"
                                className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group/link"
                            >
                                Learn More
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </FadeIn>

                    {/* Python Automation */}
                    <FadeIn>
                        <div className="group relative bg-gray-900 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-800 hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-translate-y-2">
                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>

                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                Python Automation
                                <span className="ml-2 text-sm bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full">New</span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Advanced Python scripting and automation solutions that streamline business processes,
                                eliminate repetitive tasks, and integrate systems seamlessly.
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Data Processing & ETL</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">API Integration & Automation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Workflow Automation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Custom Python Scripts</span>
                                </li>
                            </ul>

                            <a
                                href="/services/python-automation"
                                className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group/link"
                            >
                                Learn More
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </div>
    );
}

// Featured Projects Section
function FeaturedProjects() {
    const featuredProjects = [
        {
            id: 'multichoice-ai',
            title: 'MultiChoice',
            subtitle: 'AI Subtitle Automation',
            description: 'Advanced AI-powered subtitle automation system with open-source model implementation for real-time content processing and multi-language subtitle generation.',
            features: ['AI Subtitle Automation', 'Open Source ML Models', 'Multi-Language Support', 'Real-time Processing'],
            link: '/work/multichoice',
            bgColor: 'bg-red-500',
            textColor: 'text-white',
            image: '/images/work/multichoice-hero.jpg'
        },
        {
            id: 'absa-lms',
            title: 'ABSA',
            subtitle: 'ReadyToWork LMS Platform',
            description: 'Enterprise Learning Management System enabling skills development and training for thousands of employees across mobile and web platforms.',
            features: ['Enterprise LMS', 'Mobile App Development', 'Cloud Infrastructure', 'User Management'],
            link: '/work/absa',
            bgColor: 'bg-blue-600',
            textColor: 'text-white',
            image: '/images/work/absa-hero.jpg'
        },
        {
            id: 'zkteco-platform',
            title: 'ZKTeco',
            subtitle: 'Corporate Digital Platform',
            description: 'Modern WordPress website with dynamic product catalog, integrated customer support, and optimized performance for enterprise security solutions.',
            features: ['WhatsApp AI Support Bot', 'Dynamic Product Catalog', 'Customer Support Portal', 'Performance Optimization'],
            link: '/work/zkteco',
            bgColor: 'bg-gray-900',
            textColor: 'text-white',
            image: '/images/work/zkteco-hero.jpg'
        },
        {
            id: 'labourteq-system',
            title: 'LabourTeq',
            subtitle: 'Workforce Management',
            description: 'Enterprise workforce management system handling complex employee operations for major South African companies including AVIS car rentals.',
            features: ['Workforce Management', 'Enterprise Integration', 'Mobile Solutions', 'Multi-Company Support'],
            link: '/work/labourteq',
            bgColor: 'bg-green-600',
            textColor: 'text-white',
            image: '/images/work/labourteq-hero.jpg'
        },
        {
            id: '123tutors-platform',
            title: '123Tutors',
            subtitle: 'AI-Powered Education Platform',
            description: 'Comprehensive AI-powered tutoring platform with intelligent matching algorithms and automated scheduling systems for enhanced learning experiences.',
            features: ['AI Matching Algorithms', 'Automated Scheduling', 'Progress Tracking', 'Payment Integration'],
            link: '/work/123tutors',
            bgColor: 'bg-indigo-600',
            textColor: 'text-white',
            image: '/images/work/123tutors-hero.jpg'
        },
        {
            id: 'nora-tattoo-platform',
            title: 'NORA Platform',
            subtitle: 'AI-Powered Tattoo Studio Revolution',
            description: 'Full-stack Next.js application that transforms tattoo studios through AI-assisted tattoo generation, role-based dashboards, and comprehensive workflow management with JWT auth and cloud integration.',
            features: ['AI Tattoo Generation', 'Role-Based Dashboards', 'Zoomable Canvas UI', 'AWS S3 Integration'],
            link: '/work/nora-tattoo',
            bgColor: 'bg-pink-600',
            textColor: 'text-white',
            image: '/images/work/nora-tattoo-hero.jpg'
        }
    ];

    return (
        <div className="bg-white py-20 sm:py-24">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            Our Work
                        </span>
                        <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                            Featured <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Take a look at some of our recent AI and software development projects that have{" "}
                            <span className="font-semibold text-indigo-600">transformed businesses</span> and{" "}
                            <span className="font-semibold text-blue-600">delivered real results.</span>
                        </p>
                    </FadeIn>
                </div>

                {/* Projects Grid */}
                <div className="flex flex-wrap -mx-4">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="w-full md:w-1/3 px-4 mb-8">
                            <div className="w-full h-full group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
                                {/* Project Image/Header */}
                                <div className={`${project.bgColor} h-32 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10"></div>
                                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                        <h3 className="font-bold text-2xl text-white mb-1">{project.title}</h3>
                                        <p className="text-white/90 font-medium text-sm">{project.subtitle}</p>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {project.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                                                <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Work CTA */}
                <div className="text-center mt-16">
                    <FadeIn>
                        <a
                            href="/work"
                            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl group"
                        >
                            <span>View All Our Work</span>
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </FadeIn>
                </div>
            </Container>
        </div>
    );
}

function SuperStackJourney() {
    return null;
}

export const metadata = {
    title: 'Web Development Company South Africa | SuperStack Technology Partner',
    description:
        'Leading web development company in South Africa. Custom React applications, business automation, and software solutions for South African businesses. Your trusted technology partner across SA.',
    keywords: [
        'web development company South Africa',
        'React developer Cape Town',
        'software development South Africa',
        'business automation SA',
        'custom software development Johannesburg',
        'web developer Durban',
        'technology partner South Africa',
        'South African web development'
    ],
    openGraph: {
        title: 'Web Development Company South Africa | SuperStack Technology Partner',
        description: 'Leading web development company in South Africa. Custom React applications and business solutions for South African businesses.',
        type: 'website',
        images: [
            {
                url: 'https://www.superstack.co.za/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'SuperStack - Web Development Company South Africa',
            },
        ],
    },
};

// What is SuperStack Section
function WhatIsSuperStackSection() {
    return (
        <div className="relative">
            {/* Seamless background transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/50 to-gray-50"></div>
            
            <Container className="relative">
                {/* Main Header */}
                <div className="text-center mb-16 pt-16 sm:pt-20">
                    <FadeIn>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            What is <span className="text-indigo-600">SuperStack</span>?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Your technology partner that transforms business challenges into digital opportunities.
                        </p>
                    </FadeIn>
                </div>

                {/* Main Content Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        {/* Who We Are */}
                        <FadeIn>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Who We Are</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    A team of developers, designers, and strategists who build custom software solutions that include modern web applications, intelligent automation, and AI-powered tools when needed.
                                </p>
                            </div>
                        </FadeIn>

                        {/* What We Do */}
                        <FadeIn>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">What We Do</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    We build AI systems, web applications, mobile apps, and automation tools. From MVP to enterprise scale - we deliver solutions that actually work.
                                </p>
                            </div>
                        </FadeIn>

                        {/* How We Work */}
                        <FadeIn>
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">How We Work</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Fast, transparent, and collaborative. We understand your business first, then build exactly what you need. No fluff, just results.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Why Choose Us */}
                        <FadeIn>
                            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Why SuperStack</h3>
                                </div>
                                <p className="text-indigo-100 leading-relaxed">
                                    We don't just build software - we build success stories. Proven track record, modern tech stack, and ongoing support that scales with your growth.
                                </p>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </Container>
            
            {/* Bottom gradient blend */}
            <div className="h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
        </div>
    );
}

// AI Assistants Section
function AIAssistantsSection() {
    return (
        <div className="relative bg-gradient-to-b from-transparent via-indigo-50/30 to-indigo-50/50 py-20 sm:py-24 mt-16 sm:mt-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                AI-Powered Solutions
                            </div>
                            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                                AI Assistants to Unlock More Sales & Sky-Rocket Revenue
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Cutting-edge AI solutions to automate your business processes and boost productivity. From intelligent customer service bots to sophisticated data analysis tools, we build AI that transforms how your business operates.
                            </p>
                        </FadeIn>
                        
                        <FadeInStagger className="space-y-6">
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Smart Customer Engagement</h3>
                                        <p className="text-gray-600">Intelligent AI assistants that qualify leads, answer product questions, and guide customers through your sales funnel using advanced language models designed to dramatically increase your sales conversions.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">24/7 Customer Engagement</h3>
                                        <p className="text-gray-600">Never miss a sales opportunity with intelligent AI systems working around the clock to engage website visitors, qualify prospects, and route high-value leads directly to your sales team when they're most likely to convert.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Business Automation</h3>
                                        <p className="text-gray-600">Automate your sales data collection from initial contact to closing deals. Our AI systems can track customer interactions and buying signals and present comprehensive sales analytics that help you close more deals.</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </FadeInStagger>
                        
                        <FadeIn className="mt-8">
                            <a
                                href="https://cal.com/superstack/consultation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                            >
                                Request AI Solutions
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </FadeIn>
                    </div>
                    
                    <div className="relative lg:pl-8">
                        <FadeIn>
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Hi! I'm here to help you find the perfect solution.</p>
                                            <p className="text-sm text-gray-500">How can we boost your sales today?</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-700">I need an AI system to handle customer inquiries and generate more leads</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Perfect! Our AI solutions can increase lead conversion by up to 40%.</p>
                                            <p className="text-sm text-gray-500">Let's schedule a demo to show you exactly how.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
            
            {/* Smooth transition to next section */}
            <div className="h-16 bg-gradient-to-b from-indigo-50/50 to-transparent"></div>
        </div>
    );
}

// Modern Web Development Section
function ModernWebSection() {
    return (
        <div className="bg-white py-16 sm:py-20 -mt-16 pt-16">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative lg:pr-8">
                        <FadeIn>
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
                                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-400 to-indigo-500 h-32 rounded-lg"></div>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="w-8 h-8 bg-blue-500 rounded-lg mb-2 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-medium text-gray-900">Responsive Design</h4>
                                    </div>
                                    
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="w-8 h-8 bg-green-500 rounded-lg mb-2 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-medium text-gray-900">Performance Optimized</h4>
                                    </div>
                                    
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="w-8 h-8 bg-indigo-500 rounded-lg mb-2 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-medium text-gray-900">Secure & Scalable</h4>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    
                    <div>
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                                Web Development
                            </div>
                            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                                Modern <span className="text-blue-600">Web Development</span> That Converts
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Create stunning, high-performance websites and web applications that not only look amazing but drive business results. Our modern web development approach ensures your digital presence stands out and converts visitors into customers.
                            </p>
                        </FadeIn>
                        
                        <FadeInStagger className="space-y-6">
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Responsive Design</h3>
                                        <p className="text-gray-600">Pixel-perfect designs that work flawlessly on every device, from smartphones to desktop computers, ensuring optimal user experience across all platforms.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Performance Optimized</h3>
                                        <p className="text-gray-600">Lightning-fast loading times, SEO optimization, and modern web standards ensure your website ranks well and provides exceptional user experiences that convert visitors into customers.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Secure & Scalable</h3>
                                        <p className="text-gray-600">Built with enterprise-grade security and scalability in mind. Your website will handle traffic spikes effortlessly while keeping user data safe and secure with industry-standard protection.</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </FadeInStagger>
                        
                        <FadeIn className="mt-8">
                            <a
                                href="/work"
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                View Portfolio
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </div>
    );
}

// Mobile & Web Applications Section
function MobileWebSection() {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                                </svg>
                                Mobile & Web Apps
                            </div>
                            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                                Powerful <span className="text-gray-700">Mobile & Web Applications</span> that scale
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                From simple business tools to complex enterprise applications, we build scalable solutions that grow with your business. Our applications are designed for performance, usability, and long-term success.
                            </p>
                        </FadeIn>
                        
                        <FadeInStagger className="space-y-6">
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Cross-Platform Development</h3>
                                        <p className="text-gray-600">Build once, deploy everywhere. Our cross-platform approach ensures your application works seamlessly across iOS, Android, and web browsers with native performance and user experience.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">User-Centric Design</h3>
                                        <p className="text-gray-600">Intuitive interfaces and smooth user experiences that your customers will love. We prioritize usability testing and user feedback to ensure maximum engagement and adoption rates.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            
                            <FadeIn>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Cloud Integration</h3>
                                        <p className="text-gray-600">Seamless cloud connectivity with real-time data synchronization, offline capabilities, and automatic backups. Your business data is always accessible, secure, and up-to-date across all devices.</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </FadeInStagger>
                        
                        <FadeIn className="mt-8">
                            <a
                                href="https://cal.com/superstack/consultation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                            >
                                Start Your App
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </FadeIn>
                    </div>
                    
                    <div className="relative lg:pl-8">
                        <FadeIn>
                            <div className="relative">
                                {/* Mobile Phone Mockup */}
                                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                                    <div className="bg-white rounded-[2rem] overflow-hidden">
                                        {/* Phone Screen Header */}
                                        <div className="bg-gray-900 px-6 py-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                                <div className="w-6 h-1 bg-white rounded-full"></div>
                                            </div>
                                            <div className="text-white text-xs font-medium">9:41</div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-4 h-2 border border-white rounded-sm">
                                                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* App Content */}
                                        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 text-white">
                                            <h3 className="font-bold text-lg mb-2">Project Dashboard</h3>
                                            <p className="text-indigo-100 text-sm">Welcome back! Here's your progress overview.</p>
                                        </div>
                                        
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 text-sm">Design Review</p>
                                                        <p className="text-gray-500 text-xs">Completed</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 text-sm">Development</p>
                                                        <p className="text-gray-500 text-xs">In Progress</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 text-sm">Testing</p>
                                                        <p className="text-gray-500 text-xs">Pending</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default async function Home() {
    let caseStudies = (await loadCaseStudies()).slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <div className="relative overflow-hidden pb-16 sm:pb-20 lg:pb-8">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-gray-200/40 via-gray-100/40 to-gray-200/40 rounded-full blur-3xl"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-indigo-300/30 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-indigo-400/20 rounded-full blur-2xl"></div>
                    {/* Additional mobile background extension */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-100/20 to-transparent sm:hidden"></div>
                </div>
                
                <Container className="relative mt-20 sm:mt-24 lg:mt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
                        <div className="flex flex-col justify-center px-4 lg:px-8 pb-8 sm:pb-12 lg:pb-0">
                            <FadeIn className="mt-4 sm:mt-0 lg:-mt-8">
                                <h1 className="font-display text-5xl font-bold tracking-tight text-gray-900 [text-wrap:balance] sm:text-6xl lg:text-7xl xl:text-8xl">
                                    <span className="block">Build</span>
                                    <span className="block">
                                        <span className="text-indigo-600">&</span>
                                        {" "}Scale
                                    </span>
                                    <span className="block text-gray-600 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium">
                                        Your Business
                                    </span>
                                </h1>
                                
                                <div className="mt-6 mb-2">
                                    <span className="inline-block text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
                                        With SuperStack
                                    </span>
                                </div>
                                
                                <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    We create reliable web applications and intelligent business tools for South African companies. 
                                    <span className="block mt-2 font-semibold text-indigo-600">
                                        Your trusted technology partner across South Africa.
                                    </span>
                                </p>
                            </FadeIn>
                            <HeroCTAs />
                        </div>
                        <div className="relative flex justify-center lg:justify-end pt-4 sm:pt-8 lg:pt-0">
                            {/* Additional decorative elements */}
                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full blur-xl opacity-60"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-indigo-300 to-indigo-400 rounded-full blur-xl opacity-60"></div>
                            <TellTheTeam />
                        </div>
                    </div>
                </Container>
            </div>

            {/* What is SuperStack Section */}
            <WhatIsSuperStackSection />

            {/* Our Services */}
            <Services/>

            {/* Detailed Service Sections */}
            <AIAssistantsSection />
            <ModernWebSection />
            <MobileWebSection />

            {/* Featured Projects */}
            <FeaturedProjects />

            <SuperStackJourney />
        </>
    );
}
