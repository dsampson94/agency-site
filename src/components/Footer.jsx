import Link from 'next/link'

import {Container} from '@/components/Container'
import {FadeIn} from '@/components/FadeIn'

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/superstack-development-studio', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
];

export default function Footer() {
    return (
        <footer className="w-full">
            <FadeIn className="w-full bg-gradient-to-br from-gray-50 to-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_0_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] px-8 py-12 sm:px-12 sm:py-16 md:px-16">
                <div className="mx-auto max-w-7xl">
                    {/* Single Row Footer */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        {/* Contact Info */}
                        {/* <div className="flex flex-col gap-3">
                            <a 
                                href="mailto:hello@superstack.dev" 
                                className="text-gray-900 hover:text-blue-600 transition-colors font-semibold text-lg"
                            >
                                hello@superstack.dev
                            </a>
                            <span className="text-gray-600 text-sm font-medium">Cape Town, South Africa</span>
                        </div> */}

                        {/* Quick Links */}
                        <div className="flex flex-wrap gap-8 text-sm font-medium">
                            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                About
                            </Link>
                            <Link href="/work" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                Work
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_0_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.1)] text-gray-600 hover:text-blue-600 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_0_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(0,0,0,0.08),0_2px_4px_0_rgba(0,0,0,0.15),0_4px_8px_0_rgba(0,0,0,0.15)] transition-all duration-200"
                                    aria-label={social.name}
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <span className="text-sm text-gray-600 font-medium">
                            © {new Date().getFullYear()} SuperStack Development Studio. All rights reserved.
                        </span>
                        <div className="flex gap-6 text-sm font-medium">
                            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </footer>
    )
}
