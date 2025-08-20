'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';

export default function AboutPage() {
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
            About JSSKYLINE
          </motion.h1>
          <motion.p
            className="body-lg text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "There is another world, but it is in this one." - W.B. Yeats
          </motion.p>
        </div>
      </Section>

      {/* Brand Story */}
      <Section background="secondary" withPinline>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="display-md mb-6 text-orange-primary">Our Story</h2>
            <div className="space-y-6 text-neutral-300">
              <p className="body-lg">
                JSSKYLINE was born from a simple belief: every project, property, and product 
                has a unique story waiting to be revealed through the right perspective.
              </p>
              <p className="body-md">
                We combine cutting-edge aerial technology with studio precision to capture 
                imagery that doesn't just document—it transforms how audiences connect with 
                your vision. From soaring landscapes to intricate macro details, we deliver 
                perspective with purpose.
              </p>
              <p className="body-md">
                Our approach is built on technical rigor, creative vision, and unwavering 
                commitment to client success. Every frame is crafted to serve a specific 
                purpose, whether it's selling a property, documenting progress, or creating 
                art that moves people.
              </p>
            </div>
          </div>
          
          <div className="aspect-[4/3] bg-neutral-800 rounded-xl overflow-hidden">
            <img
              src="/img/about-hero.jpg"
              alt="JSSKYLINE in action"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section background="primary">
        <div className="text-center mb-16">
          <h2 className="display-lg mb-6">Our Approach</h2>
          <p className="body-lg text-neutral-300 max-w-2xl mx-auto">
            Technical excellence meets creative vision in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Technical Precision',
              description: 'Professional-grade equipment, proper certifications, and meticulous planning ensure consistent, high-quality results.',
              icon: '⚙️'
            },
            {
              title: 'Creative Vision',
              description: 'Every shot is composed with purpose, telling your story through compelling visual narratives.',
              icon: '🎨'
            },
            {
              title: 'Client Partnership',
              description: 'We work closely with you to understand objectives and deliver assets that exceed expectations.',
              icon: '🤝'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-display text-orange-primary mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Equipment & Compliance */}
      <Section background="secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="display-md mb-8 text-orange-primary">Professional Equipment</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-neutral-200 mb-2">Aerial Systems</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• DJI Mavic 3 Pro (4K/120fps)</li>
                  <li>• DJI Phantom 4 Pro V2.0</li>
                  <li>• Professional gimbal stabilization</li>
                  <li>• Extended flight time batteries</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-200 mb-2">Studio Equipment</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Canon R5 / R6 Mark II</li>
                  <li>• Professional macro lenses</li>
                  <li>• Studio lighting systems</li>
                  <li>• Focus stacking capabilities</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="display-md mb-8 text-orange-primary">Safety & Compliance</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-neutral-200 mb-2">Certifications</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• FAA Part 107 Certified Pilot</li>
                  <li>• Comprehensive Liability Insurance</li>
                  <li>• LAANC Airspace Authorization</li>
                  <li>• Ongoing Safety Training</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-200 mb-2">Legal Compliance</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Chain-of-custody documentation</li>
                  <li>• Evidence-ready metadata</li>
                  <li>• Court-admissible imagery</li>
                  <li>• Expert testimony support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-md mb-6">Ready to Work Together?</h2>
            <p className="body-lg text-neutral-300 mb-8">
              Let's discuss how our aerial and studio expertise can elevate your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}