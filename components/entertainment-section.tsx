'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

interface EntertainmentSectionProps {
  attractions: Array<{
    name: string;
    type: string;
    visitors: string;
  }>;
}

export function EntertainmentSection({ attractions }: EntertainmentSectionProps) {
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
        staggerChildren: 0.15,
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
            backgroundImage: 'url(/images/entertainment-venue.jpg)',
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
            <Sparkles className="text-amber-500" size={24} />
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white drop-shadow-md">
              Entertainment & Attractions
            </h2>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-400 mb-4" />
          <p className="text-sm md:text-base text-neutral-300 max-w-3xl drop-shadow-md">
            World-class attractions integrated throughout the mall drive consistent, year-round 
            foot traffic and create unforgettable experiences for visitors.
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {attractions.map((attraction, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative border border-white/10 bg-neutral-900/40 backdrop-blur-sm rounded-sm p-4 hover:border-amber-500/50 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.h3
                  className="text-xl font-light text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {attraction.name}
                </motion.h3>
                <div className="flex flex-col gap-1 mb-2">
                  <span className="text-amber-500 text-[10px] uppercase font-medium tracking-widest">
                    {attraction.type}
                  </span>
                  <span className="text-neutral-300 text-xs">{attraction.visitors}</span>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed hidden sm:block">
                  {idx === 0 && "Iconic observation deck drawing millions of visitors annually."}
                  {idx === 1 && "Interactive marine experiences in one of the world's largest aquariums."}
                  {idx === 2 && "A premier shopping and cultural destination."}
                  {idx === 3 && "Premium multiplex cinemas offering the latest blockbusters."}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Entertainment Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-sm p-4 md:p-6"
        >
          <h3 className="text-lg font-light text-white mb-4">Why Attractions Drive Revenue</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-amber-500 font-light text-sm mb-1">Extended Visits</h4>
              <p className="text-neutral-300 text-xs">
                Visitors spend 3-5 hours on average, visiting multiple zones.
              </p>
            </div>
            <div>
              <h4 className="text-amber-500 font-light text-sm mb-1">Year-Round Traffic</h4>
              <p className="text-neutral-300 text-xs">
                Consistent foot traffic regardless of season, stabilizing performance.
              </p>
            </div>
            <div>
              <h4 className="text-amber-500 font-light text-sm mb-1">Global Draw</h4>
              <p className="text-neutral-300 text-xs">
                Positions Dubai Mall as a destination in its own right.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
