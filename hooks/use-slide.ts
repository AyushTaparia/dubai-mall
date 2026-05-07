'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export const SLIDES = [
  'hero',
  'why',
  'retail',
  'luxury',
  'dining',
  'entertainment',
  'events',
  'cta',
];

export function useSlide() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentSlide = useMemo(() => {
    const slide = searchParams.get('slide');
    return slide && SLIDES.includes(slide) ? slide : 'hero';
  }, [searchParams]);

  const currentIndex = useMemo(() => {
    return SLIDES.indexOf(currentSlide);
  }, [currentSlide]);

  const goToSlide = useCallback((slide: string) => {
    if (SLIDES.includes(slide)) {
      router.push(`?slide=${slide}`, { scroll: false });
    }
  }, [router]);

  const nextSlide = useCallback(() => {
    if (currentIndex < SLIDES.length - 1) {
      goToSlide(SLIDES[currentIndex + 1]);
    }
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      goToSlide(SLIDES[currentIndex - 1]);
    }
  }, [currentIndex, goToSlide]);

  return {
    currentSlide,
    currentIndex,
    totalSlides: SLIDES.length,
    goToSlide,
    nextSlide,
    prevSlide,
    isFirstSlide: currentIndex === 0,
    isLastSlide: currentIndex === SLIDES.length - 1,
  };
}
