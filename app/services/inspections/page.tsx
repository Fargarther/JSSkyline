'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';

export default function InspectionsPage() {
  return (
    <>
      <Section background="primary" padding="xl" className="pt-32">
        <div className="text-center">
          <motion.h1
            className="display-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Inspections & Construction Monitoring
          </motion.h1>
          <motion.p
            className="body-lg text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive construction progress tracking and infrastructure inspections with Teams/Zoom integration for remote collaboration.
          </motion.p>
        </div>
      </Section>

      <Section background="secondary">
        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Request Inspection Services
          </Link>
        </div>
      </Section>
    </>
  );
}