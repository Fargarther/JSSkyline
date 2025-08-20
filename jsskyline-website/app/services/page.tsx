'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';

const services = [
  {
    title: 'Aerial Marketing & Real Estate',
    description: 'Stunning property showcases, marketing content, and listing photography that elevates real estate presentations.',
    href: '/services/aerial-marketing',
    image: '/img/aerial-marketing.jpg',
    features: ['Property Showcases', 'Marketing Videos', 'Virtual Tours', 'Listing Photography']
  },
  {
    title: 'Inspections & Construction Monitoring',
    description: 'Comprehensive construction progress tracking, infrastructure inspections, and Teams/Zoom workflow integration.',
    href: '/services/inspections',
    image: '/img/inspections.jpg',
    features: ['Progress Monitoring', 'Infrastructure Inspection', 'Remote Collaboration', 'Compliance Documentation']
  },
  {
    title: 'Mapping & Site Visualization',
    description: 'Precise orthomosaics, site overlays, and detailed mapping for planning, analysis, and documentation.',
    href: '/services/mapping',
    image: '/img/mapping.jpg',
    features: ['Orthomosaic Maps', 'Site Overlays', 'Topographic Analysis', 'Progress Visualization']
  },
  {
    title: 'Legal & Investigative',
    description: 'Evidence-ready imagery with proper metadata, chain-of-custody documentation, and legal compliance.',
    href: '/services/legal',
    image: '/img/legal.jpg',
    features: ['Evidence Documentation', 'Chain of Custody', 'Legal Compliance', 'Expert Testimony Support']
  },
  {
    title: 'Studio: Macro / Food / Product / Fine-Art',
    description: 'Professional studio photography for products, food, macro work, and fine-art applications.',
    href: '/services/studio',
    image: '/img/studio.jpg',
    features: ['Product Photography', 'Food Styling', 'Macro Photography', 'Fine-Art Prints']
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="pt-32">
        <div className="text-center mb-16">
          <motion.h1
            className="display-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professional Imaging Services
          </motion.h1>
          <motion.p
            className="body-lg text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive aerial and studio photography solutions tailored to your industry needs. 
            From real estate marketing to legal documentation, we deliver perspective with purpose.
          </motion.p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="secondary" withPinline>
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Content */}
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <h2 className="display-md mb-6 text-orange-primary">
                  {service.title}
                </h2>
                <p className="body-lg text-neutral-300 mb-8">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-primary rounded-full flex-shrink-0" />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={service.href}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Overview */}
      <Section background="primary">
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6">Our Process</h2>
          <p className="body-lg text-neutral-300 max-w-2xl mx-auto">
            A systematic approach ensuring consistent quality and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: '01', title: 'Scope', description: 'Define project requirements and objectives' },
            { step: '02', title: 'Plan', description: 'Develop detailed execution strategy' },
            { step: '03', title: 'Capture', description: 'Execute imaging with precision' },
            { step: '04', title: 'Post', description: 'Professional editing and enhancement' },
            { step: '05', title: 'Handoff', description: 'Deliver client-ready assets' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-orange-primary text-neutral-950 rounded-full flex items-center justify-center text-xl font-display font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-display text-neutral-100 mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="secondary">
        <div className="text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-md mb-6">Ready to Get Started?</h2>
            <p className="body-lg text-neutral-300 mb-8">
              Contact us today to discuss your project requirements and receive a custom quote 
              tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}