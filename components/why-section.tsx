'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HighlightProps {
  label: string;
  value: string;
  description: string;
  index: number;
}

function StatCard({ label, value, description, index }: HighlightProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative border border-white/10 bg-neutral-900/40 backdrop-blur-sm rounded-sm p-6 hover:border-amber-500/50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <motion.div
          className="text-3xl md:text-5xl font-light tracking-tight text-amber-500 mb-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.3 + index * 0.15 }}
        >
          {label}
        </motion.div>
        <div className="text-base md:text-lg text-white font-medium mb-2">{value}</div>
        <p className="text-neutral-300 text-xs md:text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

interface WhySectionProps {
  highlights: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export function WhySection({ highlights }: WhySectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950 flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: 'url(/images/dubai_mall_exterior.png)',
            filter: 'blur(1px) brightness(0.5)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/80" />
      </div>

      {/* Background Accent Element */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div
          className="absolute right-0 top-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          style={{ filter: 'blur(128px)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center h-full pt-8 pb-4">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4 drop-shadow-md">
            Why Dubai Mall?
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-400" />
          <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-3xl drop-shadow-md">
            The world's largest shopping mall by area is more than a destination—it's a global 
            platform for brands to reach audiences across every continent.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {highlights.map((highlight, idx) => (
            <StatCard key={idx} {...highlight} index={idx} />
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10"
        >
          <div>
            <h3 className="text-xs font-semibold text-amber-500 tracking-widest mb-2">
              GLOBAL REACH
            </h3>
            <p className="text-neutral-300 text-xs md:text-sm">
              Visitors from 195+ countries, making it one of the most diverse audience sets globally.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-amber-500 tracking-widest mb-2">
              ICONIC STATUS
            </h3>
            <p className="text-neutral-300 text-xs md:text-sm">
              Integrated with Burj Khalifa and world-class attractions that drive continuous foot traffic.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-amber-500 tracking-widest mb-2">
              PROVEN SUCCESS
            </h3>
            <p className="text-neutral-300 text-xs md:text-sm">
              Over two decades of operational excellence and consistent revenue growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
