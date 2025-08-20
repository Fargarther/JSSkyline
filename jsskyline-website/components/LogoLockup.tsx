'use client';

import { motion } from 'framer-motion';

interface LogoLockupProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export default function LogoLockup({ 
  size = 'md', 
  showTagline = false, 
  className = '' 
}: LogoLockupProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const taglineClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <motion.div 
      className={`flex flex-col ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Main Logo */}
      <div className={`font-display font-bold ${sizeClasses[size]} text-neutral-50 tracking-wider`}>
        <span>JS</span>
        <span className="text-orange-primary mx-1">SKYLINE</span>
      </div>
      
      {/* Tagline */}
      {showTagline && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className={`${taglineClasses[size]} text-neutral-400 font-medium tracking-wide mt-1`}
        >
          PERSPECTIVE WITH PURPOSE
        </motion.div>
      )}
      
      {/* Optional pinline accent */}
      <motion.div
        className="w-12 h-0.5 bg-orange-primary mt-2"
        initial={{ width: 0 }}
        animate={{ width: '3rem' }}
        transition={{ delay: 0.2, duration: 0.4 }}
      />
    </motion.div>
  );
}