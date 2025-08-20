'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

interface HeroReverseProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
}

export default function HeroReverse({ 
  children, 
  className = '', 
  height = '220vh' 
}: HeroReverseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  // Transform values for the reverse reveal effect
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(100% 0 0% 0)', 'inset(0% 0 0% 0)']
  );
  
  const pinlineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );
  
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, 0]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 1, 1]
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Reduced motion fallback
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  if (prefersReducedMotion) {
    return (
      <section 
        className={`hero-reverse-fallback bg-background-primary ${className}`}
        style={{ minHeight: '100vh' }}
      >
        <div className="container-max flex items-center justify-center min-h-screen">
          {children}
        </div>
      </section>
    );
  }

  if (!isClient) {
    return (
      <section 
        className={`hero-reverse-loading bg-background-primary ${className}`}
        style={{ height }}
      >
        <div className="container-max flex items-center justify-center h-screen">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef}
      className={`hero-reverse-scroll relative bg-background-primary ${className}`}
      style={{ height }}
    >
      {/* Orange pinline that grows upward */}
      <div className="fixed left-8 top-0 z-20 w-0.5 h-screen bg-neutral-800">
        <motion.div
          className="pinline absolute bottom-0 left-0"
          style={{ height: pinlineHeight }}
        />
      </div>
      
      {/* Sticky content container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          ref={contentRef}
          className="hero-content relative h-full flex items-center justify-center"
          style={{
            clipPath,
            y: contentY,
            opacity
          }}
        >
          <div className="container-max w-full">
            {children}
          </div>
        </motion.div>
        
        {/* Background video overlay (optional) */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/poster/hero.jpg"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-5 bg-gradient-to-t from-background-primary/80 via-background-primary/40 to-background-primary/80" />
      </div>
    </section>
  );
}