import { Metadata } from 'next'

interface CaseStudySEOProps {
  title: string
  description: string
  client: string
  service: string
  date: string
  image?: string
  slug: string
}

export function generateCaseStudyMetadata({
  title,
  description,
  client,
  service,
  date,
  image,
  slug,
}: CaseStudySEOProps): Metadata {
  const fullTitle = `${title} - ${client} Case Study | SuperStack`
  const seoDescription = `${description} Read our detailed case study on ${service} for ${client}.`
  const canonicalUrl = `https://www.superstack.co.za/work/${slug}`
  const imageUrl = image || 'https://www.superstack.co.za/ss-logo.png'

  return {
    title: fullTitle,
    description: seoDescription,
    keywords: [
      `${client} case study`,
      service,
      'React development',
      'Next.js project',
      'South Africa',
      'SuperStack portfolio',
    ],
    openGraph: {
      title: fullTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: date,
      authors: ['David Sampson'],
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${client} project by SuperStack`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: seoDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export function generateCaseStudyStructuredData({
  title,
  description,
  client,
  service,
  date,
  image,
  slug,
}: CaseStudySEOProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || 'https://www.superstack.co.za/ss-logo.png',
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: 'SuperStack Development Studio',
      url: 'https://www.superstack.co.za',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SuperStack Development Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.superstack.co.za/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.superstack.co.za/work/${slug}`,
    },
    about: {
      '@type': 'Service',
      name: service,
      provider: {
        '@type': 'Organization',
        name: 'SuperStack Development Studio',
      },
    },
    mentions: {
      '@type': 'Organization',
      name: client,
    },
  }
}