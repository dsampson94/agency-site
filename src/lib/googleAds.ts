// Google Ads Conversion Tracking Utility
// Use this to track conversions when users complete important actions

export const trackConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `AW-963187150/${conversionLabel}`,
      value: value || 1,
      currency: 'ZAR'
    });
  }
};

// Predefined conversion events for your business
export const conversions = {
  // When someone books a consultation
  consultation: () => trackConversion('CONSULTATION_CONVERSION_LABEL'),
  
  // When someone submits the contact form
  contact: () => trackConversion('CONTACT_CONVERSION_LABEL'),
  
  // When someone requests a quote
  quote: () => trackConversion('QUOTE_CONVERSION_LABEL', 5000), // Average project value
  
  // When someone signs up for newsletter
  newsletter: () => trackConversion('NEWSLETTER_CONVERSION_LABEL'),
  
  // When someone downloads something
  download: () => trackConversion('DOWNLOAD_CONVERSION_LABEL'),
};

// Enhanced ecommerce tracking for service purchases
export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'ZAR',
      items: items
    });
  }
};

// Track page views for Google Ads
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-963187150', {
      page_path: url,
    });
  }
};