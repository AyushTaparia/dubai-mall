'use client';

import { motion } from 'framer-motion';
import { useSlide } from '@/hooks/use-slide';
import { RotateCcw } from 'lucide-react';

interface SlideCounterProps {
  currentIndex: number;
  totalSlides: number;
}

export function SlideCounter({ currentIndex, totalSlides }: SlideCounterProps) {
  const { goToSlide } = useSlide();

  return (
    <motion.div
      className="fixed bottom-8 left-0 w-full px-8 pointer-events-none z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto">
        {/* Return to home button (bottom left) */}
        {currentIndex > 1 && currentIndex < totalSlides - 1 && (
          <button
            onClick={() => goToSlide('hero')}
            className="absolute left-0 pointer-events-auto bg-neutral-900/40 hover:bg-amber-500/10 backdrop-blur-md border border-white/10 hover:border-amber-500/50 text-neutral-300 hover:text-amber-500 rounded-full px-4 py-2 text-xs flex items-center gap-2 transition-all duration-300"
          >
            <RotateCcw size={14} />
            Return to Home
          </button>
        )}

        {/* Dots Indicator */}
        <div className="pointer-events-auto bg-neutral-900/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-amber-500 w-3' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
