import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { heartLetterData } from '../data/heartLetterData';
import { TypewriterLetter } from './TypewriterLetter';
import { GlowButton } from './GlowButton';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import '../styles/heartLetter.css';

export const HeartLetterEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const navigate = useNavigate();

  const handleOpen = () => setIsOpen(true);
  const handleReplay = () => {
    setIsComplete(false);
    setReplayKey(prev => prev + 1);
  };

  return (
    <div className={cn("flex flex-col items-center w-full max-w-4xl mx-auto py-12 px-4 transition-all duration-1000", isOpen ? "gap-24" : "gap-12")}>
      <div className={cn("envelope-wrapper w-full", isOpen && "mb-[400px] md:mb-[500px]")}>
        <div className={cn("envelope", isOpen && "open")}>
          <div className="envelope-flap" />
          
          <div className="letter-paper">
            <AnimatePresence>
              {isOpen && (
                <TypewriterLetter
                  paragraphs={heartLetterData.letterParagraphs}
                  signature={heartLetterData.signature}
                  onComplete={() => setIsComplete(true)}
                  replayKey={replayKey}
                />
              )}
            </AnimatePresence>
          </div>

          <div className="wax-seal">
            <Heart className="text-white w-6 h-6 fill-white" />
          </div>

          <AnimatePresence>
            {!isOpen && (
              <div className="absolute inset-0 z-50 flex items-center justify-center">
                 <GlowButton onClick={handleOpen} className="px-8 py-3 bg-accent-gold text-primary">
                   চিঠিটা খুলুন
                 </GlowButton>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-md mx-auto"
          >
            <GlowButton onClick={() => navigate('/reasons')} className="w-full md:w-auto px-10 py-4">
              আরও কিছু কারণ দেখি
            </GlowButton>
            <button 
              onClick={handleReplay}
              className="text-white/40 hover:text-white/70 transition-all text-[10px] uppercase tracking-[4px] py-4"
            >
              আবার পড়বো
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
