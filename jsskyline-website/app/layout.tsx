import type { Metadata } from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JSSKYLINE - Aerial-Crafted Imaging for Land, Table, and Industry',
  description: 'Professional drone services and studio photography delivering perspective with purpose. Aerial marketing, inspections, mapping, legal documentation, and studio photography.',
  keywords: 'drone services, aerial photography, real estate photography, construction inspection, mapping, legal documentation, studio photography',
  authors: [{ name: 'JSSKYLINE' }],
  creator: 'JSSKYLINE',
  publisher: 'JSSKYLINE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jsskyline.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JSSKYLINE - Perspective with Purpose',
    description: 'Aerial-crafted imaging for land, table, and industry. Professional UAV services and studio photography.',
    url: 'https://jsskyline.com',
    siteName: 'JSSKYLINE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JSSKYLINE - Aerial Photography Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSSKYLINE - Perspective with Purpose',
    description: 'Professional drone services and studio photography delivering exceptional results.',
    images: ['/og-image.jpg'],
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
    <html lang="en" className={`${inter.variable} ${anton.variable} dark`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}