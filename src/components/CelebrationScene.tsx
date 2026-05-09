import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, RefreshCw, Home, Mail } from 'lucide-react';
import { proposalData } from '../data/proposalData';
import { GlowButton } from './GlowButton';
import { useNavigate } from 'react-router-dom';
import { ConfettiBurst } from './ConfettiBurst';
import { FloatingHearts } from './FloatingHearts';

interface CelebrationSceneProps {
  onReset: () => void;
}

export const CelebrationScene: React.FC<CelebrationSceneProps> = ({ onReset }) => {
  const { celebrationContent } = proposalData;
  const navigate = useNavigate();

  return (
    <div className="relative w-full py-12">
      <ConfettiBurst />
      <FloatingHearts />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center space-y-8 max-w-3xl mx-auto relative z-10"
      >
         <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-20"
        >
          <Sparkles className="w-40 h-40 text-accent-gold" />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-serif text-accent-gold glow-text">
          {celebrationContent.title}
        </h2>

        <p className="text-xl text-white/80 italic leading-relaxed">
          {celebrationContent.mainText}
        </p>

        <div className="text-accent-gold font-serif italic text-2xl md:text-3xl my-8" style={{ textShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}>
          {celebrationContent.highlight}
        </div>

        <p className="text-lg text-accent-pink/80 font-serif italic">
          {celebrationContent.finalLine}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <GlowButton onClick={onReset} className="text-xs py-4 px-4 bg-white/5 border-white/10">
            <RefreshCw className="mr-2 w-4 h-4" /> {celebrationContent.buttons.replay}
          </GlowButton>
          <GlowButton onClick={() => navigate('/')} className="text-xs py-4 px-4 bg-accent-gold text-primary">
            <Home className="mr-2 w-4 h-4" /> {celebrationContent.buttons.home}
          </GlowButton>
          <GlowButton onClick={() => navigate('/heart-letter')} className="text-xs py-4 px-4 bg-white/5 border-white/10">
            <Mail className="mr-2 w-4 h-4" /> {celebrationContent.buttons.letter}
          </GlowButton>
        </div>

        <p className="text-white/20 text-[10px] uppercase tracking-[4px] mt-12">
          Keep this moment in your heart (and a screenshot)
        </p>
      </motion.div>
    </div>
  );
};
