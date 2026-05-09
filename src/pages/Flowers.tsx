import React from 'react';
import { motion } from 'motion/react';
import { flowerData } from '../data/flowerData';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { FlowerGarden } from '../components/FlowerGarden';

const Flowers: React.FC = () => {
  const { intro } = flowerData;

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-16 py-8">
        <SectionHeading title={intro.title} subtitle={intro.subtitle} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/40 text-sm tracking-[3px] uppercase max-w-2xl mx-auto mb-12"
        >
          {intro.text}
        </motion.p>

        <FlowerGarden />
      </div>
    </PageTransition>
  );
};

export default Flowers;
