import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { proposalData } from '../data/proposalData';
import { GlowButton } from './GlowButton';
import { cn } from '../lib/utils';

interface FinalGateProps {
  isOpen: boolean;
  onOpen: () => void;
  onContinue: () => void;
}

export const FinalGate: React.FC<FinalGateProps> = ({ isOpen, onOpen, onContinue }) => {
  const { finalGateMessage } = proposalData;

  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
      <div className={cn("final-gate-wrapper", isOpen && "open")}>
        {/* Portal Background */}
        <div className="portal-content">
          <div className="portal-light" />
          
          {/* Desktop/Tablet Revealed Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="hidden md:flex flex-col text-center p-8 space-y-6 relative z-20"
              >
                <div className="text-accent-gold uppercase tracking-[4px] text-xs mb-4">
                  {finalGateMessage.title}
                </div>
                {finalGateMessage.paragraphs.map((p, i) => (
                  <p key={i} className="text-white/80 italic text-sm md:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
                <div className="pt-8">
                  <GlowButton onClick={onContinue}>
                    {finalGateMessage.button}
                  </GlowButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Gate Panels (Hidden on mobile if open to reveal content easily) */}
        {!isOpen && (
          <>
            <div className="final-gate-panel left">
              <div className="text-accent-gold/20 font-serif text-4xl rotate-12 absolute left-4">
                One
              </div>
            </div>
            <div className="final-gate-panel right">
              <div className="text-accent-gold/20 font-serif text-4xl -rotate-12 absolute right-4">
                Feeling
              </div>
            </div>
          </>
        )}
        
        {/* Decorative panels for open state on desktop */}
        {isOpen && (
          <>
            <div className="final-gate-panel left hidden md:flex" />
            <div className="final-gate-panel right hidden md:flex" />
          </>
        )}

        {/* Wax Seal / Heart Button */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute z-20 flex flex-col items-center justify-center gap-4"
          >
            <GlowButton 
              onClick={onOpen}
              className="w-20 h-20 rounded-full flex items-center justify-center p-0"
            >
              <Sparkles className="w-10 h-10 text-primary" />
            </GlowButton>
            <span className="text-accent-gold/60 text-[10px] uppercase tracking-[4px]">
              Tap to unveil
            </span>
          </motion.div>
        )}
      </div>

      {/* Mobile-Friendly Revealed Content (Rendered below the gate container) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex md:hidden flex-col items-center text-center space-y-8 w-full max-w-[90vw] z-30"
          >
            <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="text-accent-gold uppercase tracking-[4px] text-xs mb-2">
                {finalGateMessage.title}
              </div>
              {finalGateMessage.paragraphs.map((p, i) => (
                <p key={i} className="text-white/80 italic text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="pb-12">
              <GlowButton onClick={onContinue} className="w-full min-w-[260px] py-4">
                {finalGateMessage.button}
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
