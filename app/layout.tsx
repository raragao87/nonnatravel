import type { Metadata } from 'next';
import { Inter, Lato, Playfair_Display, Merriweather } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-lato' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const merriweather = Merriweather({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-merriweather' });

export const metadata: Metadata = {
  title: {
    default: 'Nonna Travel - Heritage Travel to Italian Villages',
    template: '%s | Nonna Travel',
  },
  description: 'Visit the Italian village of your grandparents with a private guide and an authentic local experience. Cook with local Nonne, taste regional wines, and explore traditions that shaped your family\'s story.',
  keywords: ['Italian village travel', 'heritage travel Italy', 'ancestral village tours', 'visit grandparents village Italy', 'Italian genealogy travel', 'heritage tourism', 'Italian roots travel'],
  authors: [{ name: 'NonnaTravel LLC' }],
  creator: 'NonnaTravel LLC',
  publisher: 'NonnaTravel LLC',
  metadataBase: new URL('https://nonnatravel.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'it-IT': '/it-IT',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nonnatravel.com',
    siteName: 'Nonna Travel',
    title: 'Nonna Travel - Heritage Travel to Italian Villages',
    description: 'Visit the Italian village of your grandparents with a private guide and an authentic local experience.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nonna Travel - Italian Village Heritage Travel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nonna Travel - Heritage Travel to Italian Villages',
    description: 'Visit the Italian village of your grandparents with a private guide and an authentic local experience.',
    images: ['/images/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable} ${playfair.variable} ${merriweather.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'NonnaTravel',
              description: 'Intimate, tailor-made journeys to Italian villages for heritage travel',
              url: 'https://nonnatravel.com',
              logo: 'https://nonnatravel.com/Logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-347-993-5093',
                contactType: 'customer service',
                email: 'hello@nonnatravel.com',
                areaServed: ['US', 'IT'],
                availableLanguage: ['English', 'Italian'],
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

