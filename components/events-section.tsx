'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic2 } from 'lucide-react';

interface EventsCapability {
  name: string;
  capacity: string;
  type: string;
}

interface EventsSectionProps {
  capabilities: EventsCapability[];
}

export function EventsSection({ capabilities }: EventsSectionProps) {
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
            backgroundImage: 'url(/images/events-activation.jpg)',
            filter: 'blur(1px) brightness(0.35)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/80" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Mic2 className="text-amber-500" size={32} />
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white drop-shadow-md">
              Global Events Platform
            </h2>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-400 mb-4" />
          <p className="text-base md:text-lg text-neutral-300 max-w-3xl drop-shadow-md">
            Host concerts, product launches, brand activations, and corporate events to 
            an audience of millions. Dubai Mall is a global stage.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {capabilities.map((capability, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative border border-white/10 bg-neutral-900/40 backdrop-blur-sm rounded-sm p-6 hover:border-amber-500/50 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-xl font-light text-white mb-2">{capability.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 font-light text-[10px] sm:text-xs tracking-widest uppercase">
                    {capability.type}
                  </span>
                  <span className="text-xl sm:text-2xl font-light text-white">{capability.capacity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Track Record */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10"
        >
          <div>
            <div className="text-3xl font-light text-amber-500 mb-2">500+</div>
            <p className="text-neutral-300 text-sm">Events hosted annually across all categories</p>
          </div>
          <div>
            <div className="text-3xl font-light text-amber-500 mb-2">50M+</div>
            <p className="text-neutral-300 text-sm">Global social media impressions from mall events</p>
          </div>
          <div>
            <div className="text-3xl font-light text-amber-500 mb-2">195+</div>
            <p className="text-neutral-300 text-sm">Countries represented in event attendees</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
