import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';

interface FutureMomentCardProps {
  moment: any;
  index: number;
}

export const FutureMomentCard: React.FC<FutureMomentCardProps> = ({ moment, index }) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="timeline-dot" />
      <GlassCard className="future-card group">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">{moment.icon}</span>
          <h3 className="text-xl font-serif text-accent-gold group-hover:glow-text transition-all">{moment.title}</h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed italic mb-6">
          "{moment.text}"
        </p>
        <div className="pt-2 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[2px] text-white/30 italic">
            — {moment.whisper}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
};
