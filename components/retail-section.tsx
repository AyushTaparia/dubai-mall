'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag } from 'lucide-react';

interface RetailSectionProps {
  categories: Array<{
    name: string;
    count: number;
    brands: string[];
  }>;
}

export function RetailSection({ categories }: RetailSectionProps) {
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
            backgroundImage: 'url(/images/luxury-retail.jpg)',
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
            <ShoppingBag className="text-amber-500" size={24} />
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white drop-shadow-md">
              Retail Excellence
            </h2>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-400 mb-4" />
          <p className="text-sm md:text-base text-neutral-300 max-w-3xl drop-shadow-md">
            1,200+ brands spanning every category, from luxury flagships to emerging concepts. 
            Dubai Mall is the premier retail destination for the Middle East and beyond.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative border border-white/10 bg-neutral-900/40 backdrop-blur-sm rounded-sm p-4 hover:border-amber-500/50 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-light text-white">{category.name}</h3>
                  <motion.span
                    className="text-2xl font-light text-amber-500"
                    initial={{ scale: 0.5 }}
                    animate={inView ? { scale: 1 } : { scale: 0.5 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    {category.count}+
                  </motion.span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {category.brands.slice(0, 3).map((brand, brandIdx) => (
                    <motion.span
                      key={brandIdx}
                      className="px-2 py-0.5 bg-neutral-800/80 text-neutral-300 text-[10px] uppercase tracking-wider rounded-sm group-hover:bg-amber-500/20 group-hover:text-amber-300 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.4 + idx * 0.1 + brandIdx * 0.05 }}
                    >
                      {brand}
                    </motion.span>
                  ))}
                  {category.brands.length > 3 && (
                    <span className="px-2 py-0.5 bg-transparent text-neutral-400 text-[10px] uppercase">+{category.brands.length - 3} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Retail Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-sm p-4 md:p-6"
        >
          <h3 className="text-lg font-light text-white mb-4">Why Partners Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-amber-500 font-light text-sm mb-1">Unmatched Foot Traffic</h4>
              <p className="text-neutral-300 text-xs">
                200+ million annual visitors create unparalleled sales opportunities.
              </p>
            </div>
            <div>
              <h4 className="text-amber-500 font-light text-sm mb-1">Premium Location</h4>
              <p className="text-neutral-300 text-xs">
                Integrated with Burj Khalifa and world-class attractions.
              </p>
            </div>
            <div>
              <h4 className="text-amber-500 font-light text-sm mb-1">Global Audience</h4>
              <p className="text-neutral-300 text-xs">
                Visitors from 195+ countries seeking exclusive shopping experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
