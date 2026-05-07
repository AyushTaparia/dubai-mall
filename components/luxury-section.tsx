'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown } from 'lucide-react';

interface LuxurySectionProps {
  features: string[];
}

export function LuxurySection({ features }: LuxurySectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950 flex items-center py-4 px-4 sm:px-6 lg:px-8">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: 'url(/images/luxury-retail.jpg)',
            filter: 'blur(1px) brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />
      </div>

      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <div
          className="absolute right-1/4 bottom-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"
          style={{ filter: 'blur(128px)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Crown className="text-amber-500" size={24} />
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white drop-shadow-md">
                The Luxury <br /> Collection
              </h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-400 mb-4" />
            <p className="text-sm md:text-base text-neutral-300 mb-6 max-w-xl drop-shadow-md">
              An elevated shopping experience curated for the world's most discerning luxury consumers. 
              Exclusive brands, personalized service, and unparalleled experiences.
            </p>

            {/* CTA */}
            <motion.button
              className="px-6 py-2 border border-amber-500/50 text-amber-500 rounded-sm hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 text-sm tracking-wide bg-neutral-950/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn About Luxury Leasing
            </motion.button>
          </motion.div>

          {/* Right Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-3"
          >
            {features.map((feature, idx) => (
               <motion.div
                key={idx}
                variants={itemVariants}
                className="group flex gap-3 p-3 lg:p-4 border border-white/10 bg-neutral-900/40 backdrop-blur-md rounded-sm hover:border-amber-500/50 hover:bg-neutral-900/60 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-1.5 h-6 lg:h-8 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full group-hover:scale-y-125 transition-transform" />
                <div>
                  <h3 className="text-white font-light text-base mb-1">{feature}</h3>
                  <p className="text-neutral-300 text-xs hidden sm:block">
                    {idx === 0 && 'Round-the-clock personal shopping assistance and concierge services'}
                    {idx === 1 && 'Private showrooms and exclusive access to limited-edition collections'}
                    {idx === 2 && 'Co-branded experiences and exclusive launch opportunities'}
                    {idx === 3 && 'White-glove service standards and tailored retail experiences'}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Luxury Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10"
        >
          <div className="bg-neutral-950/40 p-4 rounded-sm border border-white/5 backdrop-blur-sm">
            <div className="text-3xl font-light text-amber-500 mb-1">150+</div>
            <p className="text-neutral-300 text-xs">Luxury flagship stores and exclusive boutiques</p>
          </div>
          <div className="bg-neutral-950/40 p-4 rounded-sm border border-white/5 backdrop-blur-sm">
            <div className="text-3xl font-light text-amber-500 mb-1">24/7</div>
            <p className="text-neutral-300 text-xs">VIP concierge and personal shopping services available</p>
          </div>
          <div className="bg-neutral-950/40 p-4 rounded-sm border border-white/5 backdrop-blur-sm">
            <div className="text-3xl font-light text-amber-500 mb-1">195+</div>
            <p className="text-neutral-300 text-xs">Countries represented in luxury customer base</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
