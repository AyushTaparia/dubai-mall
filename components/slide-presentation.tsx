'use client';

import { AnimatePresence } from 'framer-motion';
import { ComponentType, useMemo } from 'react';
import { useSlide } from '@/hooks/use-slide';
import { SlideContainer } from './slide-container';
import { SlideNavigation } from './slide-navigation';
import { SlideCounter } from './slide-counter';

interface Slide {
  id: string;
  component: ComponentType<any>;
  data?: any;
}

interface SlidePresentationProps {
  slides: Slide[];
}

export function SlidePresentation({ slides }: SlidePresentationProps) {
  const { currentSlide, currentIndex, nextSlide, prevSlide, isFirstSlide, isLastSlide, totalSlides } = useSlide();

  const activeSlide = useMemo(() => {
    return slides.find((s) => s.id === currentSlide);
  }, [slides, currentSlide]);

  const previousIndex = useMemo(() => {
    return slides.findIndex((s) => s.id === currentSlide) - 1;
  }, [slides, currentSlide]);

  const direction = useMemo(() => {
    return currentIndex > previousIndex ? 'next' : 'prev';
  }, [currentIndex, previousIndex]);

  if (!activeSlide) {
    return <div className="h-screen bg-neutral-950" />;
  }

  const Component = activeSlide.component;
  const componentProps = activeSlide.data || {};

  return (
    <main className="relative h-screen w-full overflow-hidden bg-neutral-950">
      <AnimatePresence mode="wait" initial={false}>
        <SlideContainer key={currentSlide} direction={direction}>
          <Component {...componentProps} />
        </SlideContainer>
      </AnimatePresence>

      {/* Navigation Controls */}
      <SlideNavigation
        onPrev={prevSlide}
        onNext={nextSlide}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
      />

      {/* Slide Counter */}
      <SlideCounter currentIndex={currentIndex} totalSlides={totalSlides} />
    </main>
  );
}
