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

// Hero CTA Buttons Component
function HeroCTAs() {
    const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/superstack/consultation";
    
    return (
        <FadeIn className="mt-10 flex flex-row gap-3">
            <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_20px_40px_rgba(147,51,234,0.3)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

function CaseStudies({caseStudies}) {
    return (
        <div className="mt-32 sm:mt-40 lg:mt-48">
            <Container>
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-purple-400 ring-1 ring-purple-500/20 mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Cost Savings & Innovation
                        </span>
                        <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                            Technology That{" "}
                            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                                Translates into Real Results
                            </span>
                        </h2>
                    </FadeIn>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn>
                        <div className="space-y-6">
                            <div className="bg-gray-900 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-800">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-white">Lightning Fast Development</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    At SuperStack Development Studio, we deliver fast, scalable, and cost-effective solutions using the
                                    greatest web and mobile frameworks like Next.js and React Native for applications of all kinds.
                                </p>
                            </div>
                            
                            <div className="bg-gray-900 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-800">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-white">Cost-Effective Solutions</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    We harness cutting-edge automation — integrating modern technologies, advanced cloud services, and
                                    productivity tools to slash work hours, boost accuracy, and eliminate delays.{" "}
                                    <span className="font-bold text-purple-400">Saving our clients money.</span>
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                    
                    <FadeIn>
                        <div className="relative">
                            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                                        <div className="text-3xl font-bold text-white mb-2">60%</div>
                                        <div className="text-sm text-gray-300">Faster Development</div>
                                    </div>
                                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                                        <div className="text-3xl font-bold text-white mb-2">40%</div>
                                        <div className="text-sm text-gray-300">Cost Reduction</div>
                                    </div>
                                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                                        <div className="text-3xl font-bold text-white mb-2">2-3x</div>
                                        <div className="text-sm text-gray-300">ROI Improvement</div>
                                    </div>
                                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                                        <div className="text-3xl font-bold text-white mb-2">24/7</div>
                                        <div className="text-sm text-gray-300">Automation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </div>
    );
}

function Services() {
    return (
        <div className="mt-16 sm:mt-24 lg:mt-40 relative">
            {/* Smooth transition background */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-purple-50/20 to-transparent"></div>
            
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
                            <span className="text-purple-600">
                                Services
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We build reliable web applications and business tools that help companies operate more efficiently and grow sustainably.
                        </p>
                    </FadeIn>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* AI Agent Development */}
                    <FadeIn>
                        <div className="group relative bg-gray-900 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-800 hover:shadow-[0_20px_60px_rgba(147,51,234,0.3)] transition-all duration-500 hover:-translate-y-2">
                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
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
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Custom AI Chatbots</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Intelligent Automation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Customer Support Bots</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Workflow Automation</span>
                                </li>
                            </ul>

                            <a
                                href="/services/ai-development"
                                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group/link"
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
                        <div className="group relative bg-gray-900 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-800 hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-translate-y-2">
                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>

                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                App Development
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Native and cross-platform mobile applications, desktop software, and SaaS
                                platforms. From MVP development to enterprise-grade solutions.
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Mobile & Web Applications</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Desktop Software</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">SaaS Development</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Custom CRM Systems</span>
                                </li>
                            </ul>

                            <a
                                href="/services/app-development"
                                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group/link"
                            >
                                Learn More
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </FadeIn>

                    {/* Website Development */}
                    <FadeIn>
                        <div className="group relative bg-gray-900 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-800 hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-translate-y-2">
                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m9 9v-9" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>

                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                Website Development
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Modern, responsive websites and web applications built with cutting-edge
                                technologies. From sleek landing pages to complex business management platforms.
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Responsive Web Design</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">WordPress Development</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">E-commerce Solutions</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-300">Business Dashboards</span>
                                </li>
                            </ul>

                            <a
                                href="/services/web-development"
                                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group/link"
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

function SuperStackJourney() {
    return (
        <div className="mt-32 sm:mt-40 lg:mt-48 bg-gradient-to-br from-gray-50 to-white">
            <Container>
                <div className="py-24">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-6 py-2 text-sm font-semibold text-purple-700 ring-1 ring-purple-200 mb-6">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Our Technology Stack
                            </span>
                            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                                Powered by{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                                    Modern Tech
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                We leverage cutting-edge technologies and frameworks to build{" "}
                                <span className="font-semibold text-purple-600">scalable solutions</span> and deliver{" "}
                                <span className="font-semibold text-blue-600">exceptional performance</span> for our clients.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Technology Grid */}
                    <FadeInStagger>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
                            {/* Python */}
                            <FadeIn>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.37.09-.5.27-.13.18-.2.39-.2.63 0 .24.07.45.2.63.13.18.3.27.5.27.2 0 .37-.09.5-.27.13-.18.2-.39.2-.63 0-.24-.07-.45-.2-.63-.13-.18-.3-.27-.5-.27z" fill="#306998"/>
                                            <path d="M21.1 7.17c0-.15-.02-.3-.05-.44-.02-.14-.05-.28-.09-.41-.04-.13-.09-.25-.15-.37-.06-.12-.13-.23-.21-.33-.08-.1-.17-.19-.27-.27-.1-.08-.21-.15-.33-.21-.12-.06-.24-.11-.37-.15-.13-.04-.27-.07-.41-.09-.14-.03-.29-.05-.44-.05h-2.61v4.33h2.61c.15 0 .3-.02.44-.05.14-.02.28-.05.41-.09.13-.04.25-.09.37-.15.12-.06.23-.13.33-.21.1-.08.19-.17.27-.27.08-.1.15-.21.21-.33.06-.12.11-.24.15-.37.04-.13.07-.27.09-.41.03-.14.05-.29.05-.44z" fill="#FFD43B"/>
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Python</h4>
                                </div>
                            </FadeIn>

                            {/* Flask */}
                            <FadeIn>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" fill="#000000"/>
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Flask</h4>
                                </div>
                            </FadeIn>

                            {/* React */}
                            <FadeIn>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#61DAFB">
                                            <circle cx="12" cy="12" r="2"/>
                                            <path d="M12,8 C8,8 5.4,9.4 5.4,11.2 C5.4,13 8,14.4 12,14.4 C16,14.4 18.6,13 18.6,11.2 C18.6,9.4 16,8 12,8 Z" transform="rotate(60 12 12)"/>
                                            <path d="M12,8 C8,8 5.4,9.4 5.4,11.2 C5.4,13 8,14.4 12,14.4 C16,14.4 18.6,13 18.6,11.2 C18.6,9.4 16,8 12,8 Z" transform="rotate(-60 12 12)"/>
                                            <path d="M12,8 C8,8 5.4,9.4 5.4,11.2 C5.4,13 8,14.4 12,14.4 C16,14.4 18.6,13 18.6,11.2 C18.6,9.4 16,8 12,8 Z"/>
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">React</h4>
                                </div>
                            </FadeIn>

                            {/* Next.js */}
                            <FadeIn>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">N</span>
                                        </div>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Next.js</h4>
                                </div>
                            </FadeIn>

                            {/* Node.js */}
                            <FadeIn>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#339933">
                                            <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Node.js</h4>
                                </div>
                            </FadeIn>

                            {/* WordPress */}
                            <FadeIn>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#21759B">
                                            <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.03-.661.854-.075.899 0 0 .554.075 1.139.105l1.708 4.684-2.388 7.15-3.96-11.834c.647-.03 1.232-.105 1.232-.105.582-.075.515-.93-.067-.899 0 0-1.754.135-2.88.135-.202 0-.438-.008-.69-.015C4.863 2.79 8.252 1.5 12 1.5c2.763 0 5.285 1.066 7.17 2.805-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014z"/>
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">WordPress</h4>
                                </div>
                            </FadeIn>

                            {/* Ollama */}
                            <FadeIn>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">AI</span>
                                        </div>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Ollama</h4>
                                </div>
                            </FadeIn>

                            {/* Supabase */}
                            <FadeIn>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group">
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#3ECF8E">
                                            <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Supabase</h4>
                                </div>
                            </FadeIn>
                        </div>
                    </FadeInStagger>

                    {/* Feature Benefits */}
                    <FadeInStagger>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <FadeIn>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3">High Performance</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Optimized frameworks and technologies ensure blazing-fast load times and seamless user experiences.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Scalable Architecture</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Built with modern frameworks that grow with your business and handle increasing demands effortlessly.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3">AI-Powered Solutions</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Seamless integration of AI models and machine learning capabilities for intelligent automation.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </FadeInStagger>

                    {/* Call to Action */}
                    <FadeIn>
                        <div className="text-center">
                            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Ready to Build with Modern Tech?</h3>
                            <p className="text-lg text-gray-600 mb-8">Let's discuss how these technologies can power your next project</p>
                            <a
                                href="https://calendly.com/davesampson15/30min"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Discuss Technology Stack
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </div>
    );
}

export const metadata = {
    description:
        'SuperStack Development Studio - AI-powered solutions, web development, and automation that transforms your business. From idea to deployment in weeks, not months.',
};

export default async function Home() {
    let caseStudies = (await loadCaseStudies()).slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <div className="relative overflow-hidden pb-16 sm:pb-20 lg:pb-8">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-gray-200/40 via-gray-100/40 to-gray-200/40 rounded-full blur-3xl"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-purple-300/30 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-purple-400/20 rounded-full blur-2xl"></div>
                    {/* Additional mobile background extension */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-100/20 to-transparent sm:hidden"></div>
                </div>
                
                <Container className="relative mt-20 sm:mt-24 lg:mt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
                        <div className="flex flex-col justify-center px-4 lg:px-8 pb-8 sm:pb-12 lg:pb-0">
                            <FadeIn className="mt-4 sm:mt-0 lg:-mt-8">
                                <h1 className="font-display text-5xl font-bold tracking-tight text-gray-900 [text-wrap:balance] sm:text-6xl lg:text-7xl xl:text-8xl">
                                    <span className="block">Build</span>
                                    <span className="block">
                                        <span className="text-purple-600">&</span>
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
                                    We create reliable web applications and business automation tools that help companies grow. 
                                    <span className="block mt-2 font-semibold text-purple-600">
                                        Professional development. Real results.
                                    </span>
                                </p>
                            </FadeIn>
                            <HeroCTAs />
                        </div>
                        <div className="relative flex justify-center lg:justify-end pt-4 sm:pt-8 lg:pt-0">
                            {/* Additional decorative elements */}
                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full blur-xl opacity-60"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full blur-xl opacity-60"></div>
                            <TellTheTeam />
                        </div>
                    </div>
                </Container>
            </div>

            <Services/>
            <CaseStudies caseStudies={caseStudies}/>
            <SuperStackJourney />
        </>
    );
}
