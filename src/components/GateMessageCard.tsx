import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { GateMessage } from '../data/gateMessages';
import { GlowButton } from './GlowButton';
import { GlassCard } from './GlassCard';

interface GateMessageCardProps {
  gate: GateMessage;
  onNext: () => void;
  isLast: boolean;
}

export const GateMessageCard: React.FC<GateMessageCardProps> = ({ gate, onNext, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-xl mx-auto w-full"
    >
      <GlassCard className="text-center p-10 border-accent-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="relative mb-8">
           <h3 className="text-3xl font-serif text-accent-gold glow-text">{gate.title}</h3>
        </div>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-10 min-h-[120px] flex items-center justify-center italic">
          "{gate.message}"
        </p>

        <div className="mb-12 py-4 border-y border-white/5">
           <p className="text-xs uppercase tracking-[2px] text-accent-pink/60 italic">
             — {gate.whisper}
           </p>
        </div>

        <GlowButton onClick={onNext} className="w-full">
          {isLast ? "শেষ দরজার দিকে" : "পরের দরজা খুলবো"}
          <ArrowRight className="ml-2 w-4 h-4" />
        </GlowButton>
      </GlassCard>
    </motion.div>
  );
};
