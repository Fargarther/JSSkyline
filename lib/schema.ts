// JSON-LD Schema helpers for structured data

interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint: {
    telephone: string;
    email: string;
    contactType: string;
  };
  address: {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  sameAs: string[];
}

interface Service {
  name: string;
  description: string;
  url: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}

interface VideoObject {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl?: string;
  duration?: string;
}

interface ImageObject {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export function generateOrganizationSchema(): Organization {
  return {
    name: 'JSSKYLINE',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jsskyline.vercel.app',
    logo: 'https://jsskyline.com/logo.png',
    description: 'Professional drone services and studio photography delivering perspective with purpose. Aerial marketing, inspections, mapping, legal documentation, and studio photography.',
    contactPoint: {
      telephone: '+1-555-123-4567',
      email: 'hello@jsskyline.com',
      contactType: 'customer service'
    },
    address: {
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      addressCountry: 'US'
    },
    sameAs: [
      'https://instagram.com/jsskyline',
      'https://linkedin.com/company/jsskyline',
      'https://youtube.com/@jsskyline'
    ]
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}): Service {
  return {
    name: service.name,
    description: service.description,
    url: service.url,
    provider: 'JSSKYLINE',
    areaServed: 'United States',
    serviceType: 'Professional Photography and Videography'
  };
}

export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl?: string;
  duration?: string;
}): VideoObject {
  return {
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    contentUrl: video.contentUrl,
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
    ...(video.duration && { duration: video.duration })
  };
}

export function generateImageSchema(image: {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}): ImageObject {
  return {
    url: image.url,
    alt: image.alt,
    ...(image.width && { width: image.width }),
    ...(image.height && { height: image.height })
  };
}

export function generateJSONLD(data: any): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': getSchemaType(data),
    ...data
  });
}

function getSchemaType(data: any): string {
  if (data.telephone) return 'Organization';
  if (data.serviceType) return 'Service';
  if (data.contentUrl) return 'VideoObject';
  if (data.alt) return 'ImageObject';
  return 'Thing';
}

// Predefined schemas for common pages
export const schemas = {
  organization: generateOrganizationSchema(),
  services: {
    aerialMarketing: generateServiceSchema({
      name: 'Aerial Marketing & Real Estate Photography',
      description: 'Professional aerial photography and videography for real estate marketing and commercial presentations.',
      url: 'https://jsskyline.com/services/aerial-marketing'
    }),
    inspections: generateServiceSchema({
      name: 'Construction Inspections & Monitoring',
      description: 'Comprehensive construction progress tracking and infrastructure inspections.',
      url: 'https://jsskyline.com/services/inspections'
    }),
    mapping: generateServiceSchema({
      name: 'Mapping & Site Visualization',
      description: 'Precise orthomosaic mapping and site visualization services.',
      url: 'https://jsskyline.com/services/mapping'
    }),
    legal: generateServiceSchema({
      name: 'Legal & Investigative Documentation',
      description: 'Evidence-ready aerial imagery for legal proceedings.',
      url: 'https://jsskyline.com/services/legal'
    }),
    studio: generateServiceSchema({
      name: 'Studio Photography',
      description: 'Professional macro, food, product, and fine art photography.',
      url: 'https://jsskyline.com/services/studio'
    })
  }
};