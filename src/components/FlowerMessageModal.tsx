import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { GlowButton } from './GlowButton';

interface FlowerMessageModalProps {
  flower: any;
  onClose: () => void;
}

export const FlowerMessageModal: React.FC<FlowerMessageModalProps> = ({ flower, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flower-modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="flower-modal glass max-w-lg w-full p-12 rounded-3xl border border-accent-gold/30 text-center relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-white/30 hover:text-white/70 transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="text-6xl mb-8">{flower.icon}</div>
        <h3 className="text-2xl font-serif text-accent-gold mb-6">{flower.name}</h3>
        
        <div className="p-8 border-y border-white/5 mb-10">
          <p className="text-xl text-white/80 leading-relaxed italic font-light">
            "{flower.message}"
          </p>
        </div>

        <GlowButton onClick={onClose} variant="primary" className="w-full">
          এই message রাখলাম মনে
        </GlowButton>
      </motion.div>
    </motion.div>
  );
};
