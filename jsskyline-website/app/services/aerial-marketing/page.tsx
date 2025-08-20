'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';

const useCases = [
  'Residential property marketing',
  'Commercial real estate showcases',
  'Construction marketing materials',
  'Event venue presentations',
  'Tourism and hospitality content',
  'Land development visualization'
];

const deliverables = [
  'High-resolution aerial stills (RAW + edited)',
  'Cinematic video content (4K+)',
  'Virtual tour integration assets',
  'Social media optimized content',
  'Print-ready marketing materials',
  'Web gallery with download links'
];

const caseStudies = [
  {
    title: 'Luxury Estate Showcase',
    problem: 'High-end property needed compelling visuals to justify premium pricing.',
    approach: 'Golden hour aerial cinematics combined with interior integration shots.',
    result: 'Property sold 40% above asking price within 2 weeks of listing.'
  },
  {
    title: 'Commercial Development',
    problem: 'Large mixed-use development required comprehensive marketing suite.',
    approach: 'Multi-phase aerial documentation with progress visualization.',
    result: '95% pre-lease rate achieved before construction completion.'
  }
];

export default function AerialMarketingPage() {
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
            Aerial Marketing & Real Estate
          </motion.h1>
          <motion.p
            className="body-lg text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform property presentations with stunning aerial visuals that showcase unique perspectives, 
            highlight key features, and create emotional connections with potential buyers.
          </motion.p>
        </div>
      </Section>

      {/* Where It Helps */}
      <Section background="secondary" withPinline>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="display-md mb-8 text-orange-primary">Where It Helps</h2>
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0" />
                  <p className="body-md text-neutral-300">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="display-md mb-8 text-orange-primary">Deliverables</h2>
            <div className="space-y-4">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-orange-primary rounded-full mt-3 flex-shrink-0" />
                  <p className="body-md text-neutral-300">{deliverable}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Process Overview */}
      <Section background="primary">
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6">Our Process</h2>
          <p className="body-lg text-neutral-300 max-w-2xl mx-auto">
            From initial consultation to final delivery, we ensure every project exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: 'Scope',
              title: 'Property Analysis',
              description: 'Site visit and planning for optimal shooting conditions and key feature identification.'
            },
            {
              step: 'Plan',
              title: 'Flight Planning',
              description: 'Weather monitoring, airspace clearance, and shot list development for maximum impact.'
            },
            {
              step: 'Capture',
              title: 'Professional Shooting',
              description: 'High-resolution stills and cinematic video capture using professional-grade equipment.'
            },
            {
              step: 'Handoff',
              title: 'Marketing Assets',
              description: 'Edited deliverables optimized for web, print, and social media distribution.'
            }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-orange-primary text-neutral-950 rounded-lg flex items-center justify-center font-display font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-display text-orange-primary mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="secondary">
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6">Success Stories</h2>
          <p className="body-lg text-neutral-300 max-w-2xl mx-auto">
            Real results from aerial marketing campaigns that drove exceptional outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-display text-orange-primary mb-4">
                {study.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-neutral-200 mb-2">Problem</h4>
                  <p className="text-neutral-400 text-sm">{study.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-200 mb-2">Approach</h4>
                  <p className="text-neutral-400 text-sm">{study.approach}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-200 mb-2">Result</h4>
                  <p className="text-orange-primary text-sm font-medium">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-md mb-6">Ready to Elevate Your Property Marketing?</h2>
          <p className="body-lg text-neutral-300 mb-8">
            Contact us today to discuss your aerial marketing needs and discover how professional 
            aerial imagery can transform your property presentations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Sample Work
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
}