'use client';

import { FadeIn } from '@/components/FadeIn';
import { conversions } from '@/lib/googleAds';

// Hero CTA Buttons Component
export default function HeroCTAs() {
    const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/davesampson15/30min";
    
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
                    Book Meeting
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