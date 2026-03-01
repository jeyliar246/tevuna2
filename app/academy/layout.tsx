import type { Metadata } from 'next'
import { SITE_URL, SEO_SNIPPETS, SITE_CONFIG } from '@/lib/seo'

const snippets = SEO_SNIPPETS.academy

// JSON-LD for Tevuna Academy (Educational Organization)
const academyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Tevuna Academy',
  url: `${SITE_URL}/academy`,
  description: snippets.metaDescription,
  parentOrganization: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_URL,
  },
  offers: {
    '@type': 'Offer',
    description: 'Tech courses in web development, mobile apps, data analytics, AI & ML',
    url: `${SITE_URL}/academy`,
  },
}

export const metadata: Metadata = {
  title: snippets.metaTitle,
  description: snippets.metaDescription,
  keywords: snippets.metaKeywords.split(', '),
  alternates: {
    canonical: `${SITE_URL}/academy`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${SITE_URL}/academy`,
    siteName: `${SITE_CONFIG.name} Academy`,
    title: snippets.ogTitle,
    description: snippets.ogDescription,
    images: [
      {
        url: '/assets/tevunalogo2.png',
        width: 512,
        height: 512,
        alt: 'Tevuna Academy - Tech Courses & Online Learning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: snippets.ogTitle,
    description: snippets.ogDescription,
    images: ['/assets/tevunalogo2.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'GB',
  },
}

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(academyJsonLd),
        }}
      />
      {children}
    </>
  )
}
