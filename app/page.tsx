'use client';

import { Suspense, useState, useEffect } from 'react';
import { HeroSection } from '@/components/hero-section';
import { WhySection } from '@/components/why-section';
import { RetailSection } from '@/components/retail-section';
import { LuxurySection } from '@/components/luxury-section';
import { DiningSection } from '@/components/dining-section';
import { EntertainmentSection } from '@/components/entertainment-section';
import { EventsSection } from '@/components/events-section';
import { CTASection } from '@/components/cta-section';
import { SlidePresentation } from '@/components/slide-presentation';
import { IntroVideo } from '@/components/intro-video';
import { deckSections } from '@/lib/deck-data';

const slides = [
  {
    id: 'hero',
    component: HeroSection,
    data: deckSections.find((s) => s.id === 'hero'),
  },
  {
    id: 'why',
    component: WhySection,
    data: deckSections.find((s) => s.id === 'why'),
  },
  {
    id: 'retail',
    component: RetailSection,
    data: deckSections.find((s) => s.id === 'retail'),
  },
  {
    id: 'luxury',
    component: LuxurySection,
    data: deckSections.find((s) => s.id === 'luxury'),
  },
  {
    id: 'dining',
    component: DiningSection,
    data: deckSections.find((s) => s.id === 'dining'),
  },
  {
    id: 'entertainment',
    component: EntertainmentSection,
    data: deckSections.find((s) => s.id === 'entertainment'),
  },
  {
    id: 'events',
    component: EventsSection,
    data: deckSections.find((s) => s.id === 'events'),
  },
  {
    id: 'cta',
    component: CTASection,
    data: deckSections.find((s) => s.id === 'cta'),
  },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // We always show intro on initial load, even if URL has ?slide= 
  // so that the user sees the video when reloading the page.
  useEffect(() => {
    // If you want to skip intro in dev mode, uncomment the line below
    // setShowIntro(false);
  }, []);

  return (
    <Suspense fallback={<div className="h-screen bg-neutral-950" />}>
      {showIntro ? (
        <IntroVideo onComplete={() => setShowIntro(false)} />
      ) : (
        <SlidePresentation slides={slides} />
      )}
    </Suspense>
  );
}
