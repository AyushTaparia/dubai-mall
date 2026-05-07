'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface IntroVideoProps {
  onComplete: () => void;
}

export function IntroVideo({ onComplete }: IntroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fallback timeout in case video fails to load or play
  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, 12000); // Max intro duration 12 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsPlaying(false);
    setTimeout(onComplete, 800); // Wait for exit animation
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          className="fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Video Player */}
          <div className="absolute inset-0 z-0">
             <video 
               ref={videoRef}
               src="/videos/intro.mp4" 
               className="w-full h-full object-cover opacity-60"
               autoPlay 
               muted={isMuted}
               playsInline
               onEnded={handleComplete}
               onError={(e) => {
                 console.log("Video failed to load, using fallback image.");
                 if (videoRef.current) videoRef.current.style.display = 'none';
               }}
             />
             
             {/* Fallback image underneath the video just in case */}
             <div 
               className="absolute inset-0 bg-cover bg-center animate-slow-zoom -z-10"
               style={{ 
                 backgroundImage: 'url(/images/hero-dubai-mall.jpg)',
                 filter: 'brightness(0.4)'
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
              transition={{ duration: 4, times: [0, 0.2, 0.8, 1] }}
              className="text-amber-500 font-light tracking-[0.3em] text-sm md:text-base uppercase"
            >
              Experience the Extraordinary
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5, duration: 1.5, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-light tracking-tighter text-white mt-4"
            >
              DUBAI MALL
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 4.5, duration: 1 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-8"
            />
          </div>

          {/* Controls */}
          <div className="absolute bottom-12 right-12 z-20 flex items-center gap-6">
            {/* Mute Toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={() => setIsMuted(!isMuted)}
              className="group flex items-center justify-center text-neutral-400 hover:text-white transition-colors bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-full p-3 hover:border-amber-500/50"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </motion.button>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={handleComplete}
              className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 hover:border-amber-500/50"
            >
              <span className="text-sm font-light tracking-widest uppercase">Skip Intro</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
