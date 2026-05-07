'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Utensils } from 'lucide-react';

interface DiningSectionProps {
  highlights: Array<{
    name: string;
    count: number;
  }>;
}

export function DiningSection({ highlights }: DiningSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950 flex flex-col justify-center py-4 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: 'url(/images/fine-dining.jpg)',
            filter: 'blur(1px) brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/80" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col h-full justify-center">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-6 mt-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <Utensils className="text-amber-500" size={24} />
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white drop-shadow-md">
              Culinary Destination
            </h2>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-400 mb-4" />
          <p className="text-sm md:text-base text-neutral-300 max-w-3xl drop-shadow-md">
            Dubai Mall offers world-class dining experiences from Michelin-starred establishments 
            to casual excellence, making it a culinary destination in its own right.
          </p>
        </motion.div>

        {/* Dining Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative border border-white/10 bg-neutral-900/40 backdrop-blur-sm rounded-sm p-4 hover:border-amber-500/50 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  className="text-4xl font-light text-amber-500"
                  initial={{ scale: 0.5 }}
                  animate={inView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {item.count}
                </motion.div>
                <h3 className="text-base md:text-lg font-light text-white">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dining Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10 mb-6"
        >
          <div>
            <h3 className="text-sm font-light text-white mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Michelin Excellence
            </h3>
            <p className="text-neutral-300 text-xs">
              8+ Michelin-starred restaurants showcasing world-class culinary artistry.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-light text-white mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Global Cuisine
            </h3>
            <p className="text-neutral-300 text-xs">
              150+ dining concepts from every corner of the world, curated for diverse palates.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-light text-white mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Casual Excellence
            </h3>
            <p className="text-neutral-300 text-xs">
              200+ casual dining venues offering premium experiences at accessible price points.
            </p>
          </div>
        </motion.div>

        {/* Dining Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-sm p-4 md:p-6"
        >
          <h3 className="text-lg font-light text-white mb-4">Food & Beverage Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-amber-500 font-light text-sm mb-1">Strategic Locations</h4>
              <p className="text-neutral-300 text-xs">
                Premium positioning across multiple mall zones with high-traffic foot paths.
              </p>
            </div>
            <div>
              <h4 className="text-amber-500 font-light text-sm mb-1">Proven Success</h4>
              <p className="text-neutral-300 text-xs">
                Restaurants in Dubai Mall consistently achieve top-tier performance metrics.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
