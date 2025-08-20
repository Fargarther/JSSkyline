'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroReverse from '@/components/HeroReverse';
import Section from '@/components/Section';

const valuePillars = [
  {
    title: 'Elevated Vision',
    description: 'Capturing perspectives that transform how you see and present your projects.',
    icon: '🚁',
  },
  {
    title: 'Detailed Craft',
    description: 'Precision in every frame, from macro studio work to aerial cinematics.',
    icon: '🎯',
  },
  {
    title: 'Technical Rigor',
    description: 'Professional-grade equipment and methodologies ensuring consistent excellence.',
    icon: '⚙️',
  },
  {
    title: 'Client-Ready Delivery',
    description: 'Polished deliverables ready for marketing, legal, or operational use.',
    icon: '📋',
  },
];

const services = [
  {
    title: 'Aerial Marketing',
    description: 'Stunning property showcases and marketing content that elevates listings.',
    href: '/services/aerial-marketing',
    image: '/img/aerial-marketing.jpg',
  },
  {
    title: 'Inspections & Monitoring',
    description: 'Detailed construction progress and infrastructure inspection services.',
    href: '/services/inspections',
    image: '/img/inspections.jpg',
  },
  {
    title: 'Mapping & Visualization',
    description: 'Precise orthomosaics and site documentation for planning and analysis.',
    href: '/services/mapping',
    image: '/img/mapping.jpg',
  },
  {
    title: 'Studio Photography',
    description: 'Professional macro, food, product, and fine-art photography.',
    href: '/services/studio',
    image: '/img/studio.jpg',
  },
];

const testimonials = [
  {
    quote: "JSSKYLINE delivered exceptional aerial footage that transformed our property marketing completely.",
    author: "Sarah Chen",
    role: "Real Estate Developer",
    company: "Urban Properties Group"
  },
  {
    quote: "The precision and professionalism in their construction monitoring saved us weeks of site visits.",
    author: "Mike Rodriguez",
    role: "Project Manager",
    company: "BuildTech Construction"
  },
  {
    quote: "Their legal documentation services provided the evidence we needed with impeccable chain of custody.",
    author: "Jennifer Walsh",
    role: "Senior Partner",
    company: "Walsh & Associates Law"
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Reverse Scroll */}
      <HeroReverse>
        <div className="text-center">
          <motion.h1
            className="hero-text mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JSSKYLINE
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Aerial-Crafted Imaging for Land, Table, and Industry
          </motion.p>
          
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-orange-primary font-display text-lg tracking-wider">
              PERSPECTIVE WITH PURPOSE
            </span>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/services" className="btn-primary text-lg px-8 py-4">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </HeroReverse>

      {/* Value Pillars Section */}
      <Section background="secondary" withPinline>
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6">Why Choose JSSKYLINE</h2>
          <p className="body-lg text-neutral-300 max-w-2xl mx-auto">
            Four foundational principles that drive every project we undertake.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-display text-orange-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-neutral-300">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section background="primary">
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6">Our Services</h2>
          <p className="body-lg text-neutral-300 max-w-2xl mx-auto">
            Comprehensive imaging solutions tailored to your industry needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div className="card group-hover:border-orange-primary/50 transition-all duration-300">
                  <div className="aspect-video bg-neutral-800 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-display text-orange-primary mb-3 group-hover:text-orange-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300">{service.description}</p>
                  <div className="mt-4 text-orange-primary group-hover:text-orange-light transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="secondary">
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6">Client Success Stories</h2>
          <p className="body-lg text-neutral-300 max-w-2xl mx-auto">
            Real results from real clients across diverse industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <blockquote className="text-neutral-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-neutral-700 pt-4">
                <div className="font-medium text-orange-primary">
                  {testimonial.author}
                </div>
                <div className="text-sm text-neutral-400">
                  {testimonial.role}
                </div>
                <div className="text-sm text-neutral-500">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-lg mb-6">Ready to Elevate Your Project?</h2>
            <p className="body-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Get professional aerial imaging and studio photography services 
              that deliver results. Contact us today for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started Today
              </Link>
              <Link href="/portfolio" className="btn-secondary text-lg px-8 py-4">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}