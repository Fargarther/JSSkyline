'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/Section';

const filters = ['All', 'Aerial', 'Macro', 'Food', 'Fine-Art', 'Legal', 'Mapping'];

const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Estate Aerial',
    category: 'Aerial',
    services: ['Aerial Marketing'],
    equipment: ['DJI Mavic 3 Pro', '4K Video'],
    outcome: 'Sold 40% above asking price',
    image: '/img/portfolio/aerial-1.jpg',
    type: 'image'
  },
  {
    id: 2,
    title: 'Construction Progress',
    category: 'Aerial',
    services: ['Inspections'],
    equipment: ['DJI Phantom 4 Pro', 'Progress Mapping'],
    outcome: 'Saved 3 weeks site visits',
    image: '/img/portfolio/construction-1.jpg',
    type: 'video'
  },
  {
    id: 3,
    title: 'Fine Dining Presentation',
    category: 'Food',
    services: ['Studio Photography'],
    equipment: ['Canon R5', 'Macro Lens'],
    outcome: '300% increase in orders',
    image: '/img/portfolio/food-1.jpg',
    type: 'image'
  },
  {
    id: 4,
    title: 'Product Macro Detail',
    category: 'Macro',
    services: ['Studio Photography'],
    equipment: ['Focus Stacking', 'High-Res'],
    outcome: 'Featured in campaign',
    image: '/img/portfolio/macro-1.jpg',
    type: 'image'
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
            Portfolio
          </motion.h1>
          <motion.p
            className="body-lg text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing professional aerial and studio work across diverse industries and applications.
          </motion.p>
        </div>
      </Section>

      {/* Filter Chips */}
      <Section background="secondary" padding="md">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-orange-primary text-neutral-950'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section background="secondary" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="card group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-neutral-800 rounded-lg mb-4 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-orange-primary/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-neutral-950" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-display text-orange-primary mb-2">
                  {item.title}
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-neutral-400">Services:</span>
                    <span className="text-neutral-300">{item.services.join(', ')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-neutral-400">Equipment:</span>
                    <span className="text-neutral-300">{item.equipment.join(', ')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-neutral-400">Outcome:</span>
                    <span className="text-orange-primary font-medium">{item.outcome}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>
    </>
  );
}