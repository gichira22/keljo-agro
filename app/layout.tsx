import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { Header } from './components/layout/Header';
import Footer from './components/layout/Footer';

const raleway = Raleway({ subsets: ['latin'], display: 'swap' });

const siteUrl = 'https://keljo-agro.vercel.app';
const siteName = 'Keljo Agro';

export const metadata: Metadata = {
  title: {
    default: `${siteName} - Modern Agricultural Solutions`,
    template: `%s | ${siteName}`,
  },
  description:
    'Keljo Agro is transforming agriculture through innovation, technology, and sustainable practices. We empower farmers and agribusinesses with modern solutions that promote food security, efficiency, and environmental responsibility.',
  keywords: [
    'Keljo Agro',
    'agriculture',
    'agribusiness',
    'sustainable farming',
    'farming technology',
    'agritech',
    'modern agriculture',
    'food security',
    'Nigeria agriculture',
    'African agribusiness',
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${siteName} - Modern Agricultural Solutions`,
    description:
      'Keljo Agro is transforming agriculture through innovation, technology, and sustainable practices. We empower farmers and agribusinesses with modern solutions that promote food security, efficiency, and environmental responsibility.',
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Modern Agricultural Solutions`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Modern Agricultural Solutions`,
    description: 'Transforming agriculture through innovation and sustainable practices.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'Agriculture',
  authors: [{ name: siteName }],
  publisher: siteName,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={raleway.className}>
        <Header />
        <main>{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description: 'Keljo Agro drives modern agricultural growth through sustainable practices, advanced technology, and farmer empowerment.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'Nigeria',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+234-803-224-0379',
                email: 'info@keljoagro.com',
                contactType: 'customer service',
              },
              sameAs: [
                'https://www.facebook.com/keljoagro',
                'https://www.instagram.com/keljoagro',
                'https://www.linkedin.com/company/keljoagro',
                'https://wa.me/+234 803 224 0379',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}