import React from 'react';
import { motion } from 'motion/react';
import { proposalData } from '../data/proposalData';
import { GlassCard } from './GlassCard';

export const FinalMemoryNote: React.FC = () => {
  const { finalMemoryNote } = proposalData;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="w-full max-w-xl mx-auto mt-20"
    >
      <GlassCard className="p-8 border-accent-gold/20 text-center">
        <h4 className="text-accent-gold font-serif text-lg mb-4">{finalMemoryNote.title}</h4>
        <p className="text-white/60 text-sm italic leading-relaxed mb-6">
          {finalMemoryNote.text}
        </p>
        <p className="text-xs text-white/30 tracking-widest uppercase">
          {finalMemoryNote.signature}
        </p>
      </GlassCard>
    </motion.div>
  );
};
