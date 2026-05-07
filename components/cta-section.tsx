'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, X } from 'lucide-react';
import { useSlide } from '@/hooks/use-slide';

interface CTAButton {
  text: string;
  action: string;
  color: string;
}

interface CTASectionProps {
  buttons: CTAButton[];
}

export function CTASection({ buttons }: CTASectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { goToSlide } = useSlide();
  
  const [activeModule, setActiveModule] = useState<string | null>(null);

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

  const handleAction = (action: string) => {
    setActiveModule(action);
  };

  // Content for the modals
  const renderModuleContent = () => {
    if (activeModule === 'events') {
      return (
        <div className="text-left space-y-6">
          <h3 className="text-3xl font-light text-white mb-4">Events Module</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-amber-500 font-medium">Hosting Capabilities</h4>
              <p className="text-neutral-300 text-sm">State-of-the-art multi-purpose venues including a 2,000+ capacity Performing Arts Center, 50,000 sq ft exposition space, and high-footfall activation zones throughout the mall.</p>
            </div>
            <div>
              <h4 className="text-amber-500 font-medium">Past Highlights</h4>
              <p className="text-neutral-300 text-sm">Over 500 successful annual events including global tech product launches, international fashion weeks, and immersive art installations generating 50M+ social impressions.</p>
            </div>
          </div>
          <button className="mt-8 bg-amber-500 text-neutral-950 font-medium px-6 py-3 rounded-sm hover:bg-amber-400 transition-colors flex items-center gap-2">
            Request Venue Availability <ArrowRight size={16} />
          </button>
        </div>
      );
    }
    
    if (activeModule === 'sponsorship') {
      return (
        <div className="text-left space-y-6">
          <h3 className="text-3xl font-light text-white mb-4">Sponsorship Module</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-amber-500 font-medium">Partnership Tiers</h4>
              <p className="text-neutral-300 text-sm">We offer tailored Platinum, Gold, and Activation-only tiers. Each tier provides distinct levels of brand visibility, digital screen takeovers, and physical activation spaces.</p>
            </div>
            <div>
              <h4 className="text-amber-500 font-medium">Audience Data</h4>
              <p className="text-neutral-300 text-sm">Connect with over 200 million annual visitors from 195+ countries. Our demographic boasts high purchasing power and long dwell times averaging 3-5 hours.</p>
            </div>
            <div>
              <h4 className="text-amber-500 font-medium">Activation Examples</h4>
              <p className="text-neutral-300 text-sm">Interactive 3D billboard takeovers, atrium pop-ups with AR experiences, and exclusive VIP lounge sponsorships.</p>
            </div>
          </div>
          <button className="mt-8 bg-amber-500 text-neutral-950 font-medium px-6 py-3 rounded-sm hover:bg-amber-400 transition-colors flex items-center gap-2">
            Download Media Kit <ArrowRight size={16} />
          </button>
        </div>
      );
    }
    
    if (activeModule === 'leasing') {
      return (
        <div className="text-left space-y-6">
          <h3 className="text-3xl font-light text-white mb-4">Leasing Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-800/40 p-4 rounded-sm border border-neutral-700/50">
              <h4 className="text-amber-500 font-medium mb-1">Luxury Flagships</h4>
              <p className="text-neutral-300 text-xs">Join the world's most prestigious brands in Fashion Avenue with dedicated VIP services and high-net-worth footfall.</p>
            </div>
            <div className="bg-neutral-800/40 p-4 rounded-sm border border-neutral-700/50">
              <h4 className="text-amber-500 font-medium mb-1">High-Street Retail</h4>
              <p className="text-neutral-300 text-xs">Prime locations optimized for volume and visibility, situated near major entertainment anchors.</p>
            </div>
            <div className="bg-neutral-800/40 p-4 rounded-sm border border-neutral-700/50">
              <h4 className="text-amber-500 font-medium mb-1">F&B Concepts</h4>
              <p className="text-neutral-300 text-xs">From Michelin-starred dining to quick-service innovations with stunning fountain views.</p>
            </div>
            <div className="bg-neutral-800/40 p-4 rounded-sm border border-neutral-700/50">
              <h4 className="text-amber-500 font-medium mb-1">Experiential Pop-ups</h4>
              <p className="text-neutral-300 text-xs">Short-term leasing for product launches and limited-edition collections in high-traffic atriums.</p>
            </div>
          </div>
          <button className="mt-8 bg-amber-500 text-neutral-950 font-medium px-6 py-3 rounded-sm hover:bg-amber-400 transition-colors flex items-center gap-2">
            Submit Brand Profile <ArrowRight size={16} />
          </button>
        </div>
      );
    }
    
    return null;
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950 flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: 'url(/images/hero-dubai-mall.jpg)',
            filter: 'blur(2px) brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/90" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-40 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"
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

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col justify-center h-full">
        <div className="flex-1 flex flex-col justify-center">
          {/* Main Heading */}
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4 drop-shadow-md"
          >
            Ready to Elevate <br /> Your Brand?
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 drop-shadow-md"
          >
            Whether you're looking to lease retail space, activate a sponsorship, book our venues, 
            or explore partnership opportunities, let's talk about your vision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8"
          >
            {buttons.map((button, idx) => (
              <motion.button
                key={idx}
                variants={itemVariants}
                onClick={() => handleAction(button.action)}
                className={`group relative px-6 py-3 rounded-sm font-medium tracking-wider transition-all duration-300 text-xs md:text-sm overflow-hidden ${
                  button.color === 'primary'
                    ? 'bg-amber-500 text-neutral-950 hover:bg-amber-400'
                    : 'border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:border-amber-400 bg-neutral-950/40 backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {button.text}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Contact Info (Centered) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col items-center justify-center pt-4"
          >
            <p className="text-neutral-400 mb-2 text-sm">Or contact our commercial team</p>
            <motion.a
              href="mailto:sales@dubaimall.com"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-base"
              whileHover={{ scale: 1.05 }}
            >
              sales@dubaimall.com
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-8 pt-4 border-t border-white/10 text-center"
        >
          <p className="text-neutral-400 text-xs">
            Dubai Mall: A global platform for retail excellence, entertainment, and unforgettable experiences.
          </p>
          <p className="text-neutral-500 text-[10px] mt-2">
            © 2024 Dubai Mall. All rights reserved. | {' '}
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a> {' '}
            | {' '}
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms & Conditions</a>
          </p>
        </motion.div>
      </div>

      {/* Modal Overlay for Modules */}
      <AnimatePresence>
        {activeModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-md"
            onClick={() => setActiveModule(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-sm p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setActiveModule(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors bg-neutral-800 hover:bg-neutral-700 rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              {renderModuleContent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
