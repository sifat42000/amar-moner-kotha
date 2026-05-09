import React from 'react';
import { motion } from 'motion/react';
import { futureData } from '../data/futureData';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { FutureTimeline } from '../components/FutureTimeline';
import { FuturePromisePanel } from '../components/FuturePromisePanel';

const Future: React.FC = () => {
  const { intro } = futureData;

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        <SectionHeading title={intro.title} subtitle={intro.subtitle} />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/60 text-lg md:text-xl font-light italic leading-relaxed max-w-3xl mx-auto"
        >
          "{intro.text}"
        </motion.p>

        <FutureTimeline />
        
        <FuturePromisePanel />
      </div>
    </PageTransition>
  );
};

export default Future;
