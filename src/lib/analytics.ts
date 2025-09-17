// Google Analytics Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Google Analytics Events
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args)
  }
}

// Page view tracking
export const pageview = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_location: url,
  })
}

// Event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Conversion tracking
export const trackConsultationBooking = () => {
  event({
    action: 'consultation_booking',
    category: 'engagement',
    label: 'header_cta',
  })
}

export const trackProjectInquiry = () => {
  event({
    action: 'project_inquiry',
    category: 'engagement',
    label: 'contact_form',
  })
}

export const trackPortfolioView = (projectName: string) => {
  event({
    action: 'portfolio_view',
    category: 'engagement',
    label: projectName,
  })
}