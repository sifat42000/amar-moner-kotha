import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { reasonsData } from '../data/reasonsData';
import { GlassCard } from './GlassCard';

interface ReasonDetailCardProps {
  selectedId: number | null;
}

export const ReasonDetailCard: React.FC<ReasonDetailCardProps> = ({ selectedId }) => {
  const reason = reasonsData.find(r => r.id === selectedId);

  return (
    <div className="min-h-[180px] md:min-h-[220px] flex items-center justify-center w-full max-w-2xl mx-auto mt-8 md:mt-12 px-4">
      <AnimatePresence mode="wait">
        {reason ? (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            <GlassCard className="text-center p-6 md:p-8 border-accent-gold/20 shadow-xl">
              <h3 className="text-xl md:text-2xl font-serif text-accent-gold mb-3 md:mb-4">{reason.title}</h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed italic">
                "{reason.detail}"
              </p>
            </GlassCard>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/30 italic text-sm tracking-widest uppercase text-center"
          >
            একটি কারণ স্পর্শ করো...
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
