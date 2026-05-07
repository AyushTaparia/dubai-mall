'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSlide } from '@/hooks/use-slide';

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const { goToSlide } = useSlide();

  useEffect(() => {
    // Simulate video/media loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950 flex flex-col items-center justify-center">
      {/* Background Image with Overlay and Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: 'url(/images/hero-dubai-mall.jpg)',
            filter: 'blur(1px) brightness(0.6)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-neutral-950/40 to-neutral-950/80"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="h-full w-full bg-grid-pattern"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Loading Animation */}
        {isLoading && (
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-amber-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-4 drop-shadow-lg">
            DUBAI MALL
          </h1>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-neutral-200 mb-2 tracking-wide font-medium"
        >
          THE WORLD'S LARGEST SHOPPING MALL
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-neutral-300 mb-12 max-w-2xl mx-auto drop-shadow-md"
        >
          7.7 Million Square Feet. 200+ Million Annual Visitors. 1,200+ Global Brands. 
          A global platform for retail excellence, luxury experiences, and world-class entertainment.
        </motion.p>

        {/* Nav Items */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {[
            { label: 'RETAIL', slide: 'retail' },
            { label: 'LUXURY', slide: 'luxury' },
            { label: 'DINING', slide: 'dining' },
            { label: 'EVENTS', slide: 'events' }
          ].map((nav) => (
            <button
              key={nav.label}
              onClick={() => goToSlide(nav.slide)}
              className="px-6 py-2 border border-white/20 text-white/80 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 rounded-sm transition-all text-xs tracking-widest uppercase font-medium backdrop-blur-sm"
            >
              {nav.label}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
