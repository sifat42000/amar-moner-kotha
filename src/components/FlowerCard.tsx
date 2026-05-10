import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface FlowerCardProps {
  flower: any;
  isUnlocked: boolean;
  onClick: (flower: any) => void;
}

export const FlowerCard: React.FC<FlowerCardProps> = ({ flower, isUnlocked, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onClick(flower)}
      className={cn("flower-card glass p-8 rounded-3xl cursor-pointer transition-all duration-500 relative flex flex-col items-center justify-center text-center overflow-hidden group", isUnlocked && "unlocked")}
    >
      <div className="flower-icon">{flower.icon}</div>
      <h3 className="text-xl font-serif text-white mb-2">{flower.englishName}</h3>
      <p className="text-xs uppercase tracking-[2px] text-white/40 mb-4">{flower.name}</p>
      
      <p className="text-[10px] text-accent-gold italic tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        {flower.hint}
      </p>

      {isUnlocked && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 text-accent-gold"
        >
          <CheckCircle2 className="w-5 h-5" />
        </motion.div>
      )}

    </motion.div>
  );
};
