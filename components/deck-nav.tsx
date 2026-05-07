'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface DeckNavProps {
  sections: { id: string; title: string }[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function DeckNav({ sections, activeSection, onNavigate }: DeckNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800' : ''
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-light tracking-tight text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            DUBAI MALL
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-1">
            {sections.map((section, idx) => (
              <motion.button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-amber-500 border-b-2 border-amber-500'
                    : 'text-neutral-400 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                {section.title}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-neutral-800 rounded"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-neutral-900/95 backdrop-blur-sm lg:hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col gap-2 px-4">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    onNavigate(section.id);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 text-left font-medium rounded transition-colors ${
                    activeSection === section.id
                      ? 'bg-amber-500/20 text-amber-500'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
