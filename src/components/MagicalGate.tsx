import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock } from 'lucide-react';
import { cn } from '../lib/utils';
import '../styles/gate.css';

interface MagicalGateProps {
  gateNumber: number;
  title: string;
  isOpen: boolean;
  onOpen: () => void;
}

export const MagicalGate: React.FC<MagicalGateProps> = ({ gateNumber, title, isOpen, onOpen }) => {
  return (
    <div className="gate-container mb-12">
      {/* Inner Portal (Visible when doors are open) */}
      <div className="inner-portal">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="portal-glow"
        />
        <div className="z-10 flex flex-col items-center gap-2">
           <Unlock className={cn("w-12 h-12 text-accent-gold transition-opacity duration-500", isOpen ? "opacity-30" : "opacity-0")} />
        </div>
      </div>

      {/* Left Door */}
      <motion.div
        className="gate-panel gate-panel-left"
        animate={isOpen ? { rotateY: -110, x: -10 } : { rotateY: 0, x: 0 }}
        transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
      >
        <div className="gate-ornament" />
      </motion.div>

      {/* Right Door */}
      <motion.div
        className="gate-panel gate-panel-right"
        animate={isOpen ? { rotateY: 110, x: 10 } : { rotateY: 0, x: 0 }}
        transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
      >
        <div className="gate-ornament" />
      </motion.div>

      {/* Door label (Visible when closed) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 pointer-events-none"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="mb-4"
            >
              <Lock className="w-12 h-12 text-accent-gold/40" />
            </motion.div>
            <span className="text-[10px] uppercase tracking-[4px] text-accent-gold/60 mb-2">Door {gateNumber}</span>
            <h3 className="text-2xl font-serif text-white/80">{title}</h3>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
              className="mt-8 pointer-events-auto bg-transparent border border-accent-gold/30 text-accent-gold/70 px-6 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-accent-gold/10 transition-all font-light"
            >
              খুলুন
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
