import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import '../styles/littleThings.css';

interface FlipMemoryCardProps {
  title: string;
  frontLine: string;
  backMessage: string;
  delay?: number;
}

export const FlipMemoryCard: React.FC<FlipMemoryCardProps> = ({ title, frontLine, backMessage, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn("flip-card", isFlipped && "flipped")}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front space-y-4">
          <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
            <span className="text-xl">✨</span>
          </div>
          <h3 className="text-xl font-serif text-accent-gold">{title}</h3>
          <p className="text-xs uppercase tracking-[2px] text-white/40 italic">{frontLine}</p>
        </div>
        <div className="flip-card-back">
          <p className="text-white/80 text-sm leading-relaxed italic">
            "{backMessage}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};
