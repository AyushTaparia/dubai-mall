'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSlide } from '@/hooks/use-slide';

interface SlideNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}

export function SlideNavigation({
  onPrev,
  onNext,
  currentIndex,
  totalSlides,
  isFirstSlide,
  isLastSlide,
}: SlideNavigationProps) {
  const { goToSlide } = useSlide();

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-between px-6">
      {/* Left Arrow */}
      <motion.button
        onClick={onPrev}
        disabled={isFirstSlide}
        className="pointer-events-auto relative p-3 rounded-full border border-neutral-600 hover:border-amber-500 text-neutral-400 hover:text-amber-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        whileHover={{ scale: isFirstSlide ? 1 : 1.1 }}
        whileTap={{ scale: isFirstSlide ? 1 : 0.95 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={isLastSlide ? () => goToSlide('hero') : onNext}
        className="pointer-events-auto relative p-3 rounded-full border border-neutral-600 hover:border-amber-500 text-neutral-400 hover:text-amber-500 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isLastSlide ? "Back to Start" : "Next slide"}
      >
        <ChevronRight size={28} />
      </motion.button>
    </div>
  );
}
