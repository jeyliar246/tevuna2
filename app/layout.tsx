import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SITE_URL, SEO_SNIPPETS, SITE_CONFIG } from '@/lib/seo'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const snippets = SEO_SNIPPETS.home

// JSON-LD structured data for rich snippets
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/tevunalogo2.png`,
  description: SITE_CONFIG.description,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    contactType: 'customer service',
    availableLanguage: 'English',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_CONFIG.name,
  url: SITE_URL,
  description: SITE_CONFIG.description,
  publisher: organizationJsonLd,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: snippets.metaTitle,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: snippets.metaDescription,
  keywords: snippets.metaKeywords.split(', '),
  authors: [{ name: SITE_CONFIG.name, url: SITE_URL }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  applicationName: SITE_CONFIG.name,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    title: snippets.ogTitle,
    description: snippets.ogDescription,
    images: [
      {
        url: '/assets/tevunalogo2.png',
        width: 512,
        height: 512,
        alt: `${SITE_CONFIG.name} - Tech Solutions Agency`,
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
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/assets/tevunalogo2.png',
    shortcut: '/assets/tevunalogo2.png',
    apple: '/assets/tevunalogo2.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    'geo.region': 'GB',
    'theme-color': '#0ea5e9',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  )
}



