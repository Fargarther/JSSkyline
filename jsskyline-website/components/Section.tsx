'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'primary' | 'secondary' | 'tertiary';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  withPinline?: boolean;
  animate?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  className = '',
  id,
  background = 'primary',
  padding = 'lg',
  withPinline = false,
  animate = true
}, ref) => {
  const backgroundClasses = {
    primary: 'bg-background-primary',
    secondary: 'bg-background-secondary',
    tertiary: 'bg-background-tertiary',
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-section',
    xl: 'py-24',
  };

  const sectionContent = (
    <section
      ref={ref}
      id={id}
      className={`relative ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {withPinline && (
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-800">
          <div className="pinline absolute top-4 left-0 h-12" />
        </div>
      )}
      
      <div className="container-max relative">
        {children}
      </div>
    </section>
  );

  if (!animate) {
    return sectionContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {sectionContent}
    </motion.div>
  );
});

Section.displayName = 'Section';

export default Section;