/**
 * Advanced SEO Utilities with Structured Data Support
 * Implements JSON-LD, Open Graph, and Twitter Card optimization
 */

import { type Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
}

/**
 * Generate comprehensive metadata for Next.js pages
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    url,
    image = '/og-image.png',
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    tags,
    locale = 'en_ZA',
    siteName = 'SuperStack Development Studio',
  } = config;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: author,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

/**
 * JSON-LD Structured Data Generators
 */

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
  foundingDate?: string;
}

export function generateOrganizationSchema(data: OrganizationSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    email: data.email,
    telephone: data.phone,
    address: data.address
      ? {
          '@type': 'PostalAddress',
          ...data.address,
        }
      : undefined,
    sameAs: data.sameAs,
    foundingDate: data.foundingDate,
  };
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image: string[];
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: OrganizationSchema;
  url: string;
}

export function generateArticleSchema(data: ArticleSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Person',
      name: data.author.name,
      url: data.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: data.publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: data.publisher.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };
}

export interface ProductSchema {
  name: string;
  description: string;
  image: string[];
  brand: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export function generateProductSchema(data: ProductSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    image: data.image,
    brand: {
      '@type': 'Brand',
      name: data.brand,
    },
    offers: {
      '@type': 'Offer',
      url: data.offers.url,
      priceCurrency: data.offers.priceCurrency,
      price: data.offers.price,
      availability: `https://schema.org/${data.offers.availability}`,
    },
    aggregateRating: data.aggregateRating
      ? {
          '@type': 'AggregateRating',
          ratingValue: data.aggregateRating.ratingValue,
          reviewCount: data.aggregateRating.reviewCount,
        }
      : undefined,
  };
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string[];
  serviceType: string;
  url: string;
}

export function generateServiceSchema(data: ServiceSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: data.provider.name,
      url: data.provider.url,
    },
    areaServed: data.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    serviceType: data.serviceType,
    url: data.url,
  };
}

export interface BreadcrumbSchema {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function generateBreadcrumbSchema(data: BreadcrumbSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function generateFAQSchema(data: FAQSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.questions.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}

export interface LocalBusinessSchema extends OrganizationSchema {
  priceRange?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export function generateLocalBusinessSchema(data: LocalBusinessSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo,
    telephone: data.phone,
    email: data.email,
    priceRange: data.priceRange,
    address: data.address
      ? {
          '@type': 'PostalAddress',
          ...data.address,
        }
      : undefined,
    geo: data.geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: data.geo.latitude,
          longitude: data.geo.longitude,
        }
      : undefined,
    openingHoursSpecification: data.openingHours?.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours,
    })),
    aggregateRating: data.aggregateRating
      ? {
          '@type': 'AggregateRating',
          ratingValue: data.aggregateRating.ratingValue,
          reviewCount: data.aggregateRating.reviewCount,
        }
      : undefined,
    sameAs: data.sameAs,
  };
}

/**
 * Generate sitemap entry
 */
export interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemapEntry(entry: SitemapEntry): string {
  const { url, lastModified, changeFrequency = 'weekly', priority = 0.5 } = entry;

  return `
    <url>
      <loc>${url}</loc>
      ${lastModified ? `<lastmod>${lastModified.toISOString()}</lastmod>` : ''}
      <changefreq>${changeFrequency}</changefreq>
      <priority>${priority}</priority>
    </url>
  `.trim();
}

/**
 * SEO-friendly URL slugifier
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Extract meta description from content
 */
export function extractDescription(content: string, maxLength: number = 160): string {
  const cleaned = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  return cleaned.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Generate reading time estimate
 */
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Canonical URL helper
 */
export function getCanonicalURL(path: string, baseURL: string): string {
  const cleanPath = path.replace(/\/$/, ''); // Remove trailing slash
  const cleanBase = baseURL.replace(/\/$/, '');
  return cleanPath === '' ? cleanBase : `${cleanBase}${cleanPath}`;
}
