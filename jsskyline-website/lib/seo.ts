import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultMetadata = {
  title: 'JSSKYLINE - Aerial-Crafted Imaging for Land, Table, and Industry',
  description: 'Professional drone services and studio photography delivering perspective with purpose. Aerial marketing, inspections, mapping, legal documentation, and studio photography.',
  keywords: 'drone services, aerial photography, real estate photography, construction inspection, mapping, legal documentation, studio photography',
  image: '/og-image.jpg',
  url: 'https://jsskyline.com',
  type: 'website' as const,
};

export function generateSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps = {}): Metadata {
  const seo = {
    title: title ? `${title} | JSSKYLINE` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    keywords: keywords || defaultMetadata.keywords,
    image: image || defaultMetadata.image,
    url: url || defaultMetadata.url,
    type,
  };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
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
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      siteName: 'JSSKYLINE',
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: 'en_US',
      type: seo.type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.image],
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
}

export const servicePages = {
  'aerial-marketing': {
    title: 'Aerial Marketing & Real Estate Photography',
    description: 'Professional aerial photography and videography for real estate marketing, property showcases, and commercial presentations.',
    keywords: 'aerial real estate photography, drone marketing, property photography, real estate drone services',
  },
  'inspections': {
    title: 'Construction Inspections & Monitoring',
    description: 'Comprehensive construction progress tracking and infrastructure inspections with remote collaboration capabilities.',
    keywords: 'construction inspection, drone monitoring, progress tracking, infrastructure inspection',
  },
  'mapping': {
    title: 'Mapping & Site Visualization',
    description: 'Precise orthomosaic mapping, site visualization, and topographic analysis for planning and documentation.',
    keywords: 'drone mapping, orthomosaic, site visualization, topographic mapping, aerial surveying',
  },
  'legal': {
    title: 'Legal & Investigative Documentation',
    description: 'Evidence-ready aerial imagery with proper chain-of-custody documentation for legal proceedings.',
    keywords: 'legal drone services, evidence documentation, investigative photography, court admissible imagery',
  },
  'studio': {
    title: 'Studio Photography - Macro, Food, Product & Fine Art',
    description: 'Professional studio photography services including macro, food styling, product photography, and fine art.',
    keywords: 'studio photography, macro photography, food photography, product photography, fine art photography',
  },
};