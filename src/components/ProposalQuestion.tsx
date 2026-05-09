import React from 'react';
import { motion } from 'motion/react';
import { proposalData } from '../data/proposalData';
import { GlowButton } from './GlowButton';
import { GlassCard } from './GlassCard';

interface ProposalQuestionProps {
  onAccept: () => void;
  onThink: () => void;
}

export const ProposalQuestion: React.FC<ProposalQuestionProps> = ({ onAccept, onThink }) => {
  const { proposalQuestion } = proposalData;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-4xl mx-auto flex flex-col items-center gap-16 py-12"
    >
      <div className="text-center space-y-8">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent-gold text-lg md:text-2xl font-serif italic"
        >
          {proposalQuestion.title}
        </motion.p>
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          {proposalQuestion.question}
        </motion.h2>
      </div>

      <GlassCard className="p-10 md:p-16 border-accent-gold/20 text-center space-y-10 w-full shadow-2xl relative overflow-visible">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary border border-accent-gold rounded-full flex items-center justify-center">
          <span className="text-accent-gold">✨</span>
        </div>

        <p className="text-xl md:text-3xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
          "{proposalQuestion.banglaLine}"
        </p>
        
        <p className="text-xs md:text-sm text-white/30 tracking-[3px] uppercase max-w-md mx-auto">
          {proposalQuestion.supportText}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-6">
          <GlowButton 
            onClick={onAccept}
            className="px-20 py-8 text-2xl bg-accent-gold text-primary font-bold w-full md:w-auto min-w-[280px]"
          >
            {proposalQuestion.yesButton}
          </GlowButton>
          
          <button 
            onClick={onThink}
            className="text-white/40 hover:text-white/80 transition-all text-xs uppercase tracking-[4px] border-b border-white/5 pb-2 hover:border-white/20"
          >
            {proposalQuestion.thinkButton}
          </button>
        </div>
      </GlassCard>
    </motion.div>
  );
};
