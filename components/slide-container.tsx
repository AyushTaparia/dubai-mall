'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideContainerProps {
  children: ReactNode;
  direction?: 'next' | 'prev';
}

export function SlideContainer({ children, direction = 'next' }: SlideContainerProps) {
  const slideVariants = {
    enter: {
      x: direction === 'next' ? 1000 : -1000,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: direction === 'next' ? -1000 : 1000,
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="enter"
      animate="center"
      exit="exit"
      variants={slideVariants}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      }}
      className="fixed inset-0"
    >
      {children}
    </motion.div>
  );
}
