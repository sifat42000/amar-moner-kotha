import React from 'react';
import { motion } from 'motion/react';
import { proposalData } from '../data/proposalData';
import { GlowButton } from './GlowButton';
import { useNavigate } from 'react-router-dom';

interface RespectfulResponseProps {
  onReset: () => void;
}

export const RespectfulResponse: React.FC<RespectfulResponseProps> = ({ onReset }) => {
  const { respectfulResponse } = proposalData;
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-8 max-w-2xl mx-auto py-12"
    >
      <h2 className="text-3xl font-serif text-accent-gold glow-text">{respectfulResponse.title}</h2>
      <p className="text-lg text-white/70 italic leading-relaxed">
        "{respectfulResponse.text}"
      </p>

      <div className="flex flex-wrap justify-center gap-6 pt-8">
        <GlowButton onClick={() => navigate('/')} variant="primary">
          {respectfulResponse.buttons.home}
        </GlowButton>
        <GlowButton onClick={() => navigate('/heart-letter')} variant="outline">
          {respectfulResponse.buttons.letter}
        </GlowButton>
      </div>

      <button 
        onClick={onReset}
        className="text-white/20 hover:text-white/50 transition-colors text-xs uppercase tracking-[3px] mt-12"
      >
        পুনরায় সিদ্ধান্ত নিই
      </button>
    </motion.div>
  );
};
