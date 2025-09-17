'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { conversions } from '@/lib/googleAds'

export function ContactSection() {
  const handleContactClick = () => {
    // Track Google Ads conversion
    conversions.consultation();
    
    // Track custom event for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'booking_click', {
        event_category: 'engagement',
        event_label: 'contact_section_booking'
      });
    }
  };

  return (
    <Container className="mt-6 sm:mt-18 lg:mt-20">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button 
                href="https://cal.com/superstack/consultation" 
                invert
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleContactClick}
              >
                <p>Let&apos;s build it</p>
              </Button>
            </div>
            {/*<div className="mt-10 border-t border-white/10 pt-10">*/}
            {/*  <h3 className="font-display text-base font-semibold text-white">*/}
            {/*    Our offices*/}
            {/*  </h3>*/}
            {/*  <Offices*/}
            {/*    invert*/}
            {/*    className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
