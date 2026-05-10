import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, ArrowRight } from 'lucide-react';
import { gateMessages } from '../data/gateMessages';
import { ProgressStars } from './ProgressStars';
import { MagicalGate } from './MagicalGate';
import { GateMessageCard } from './GateMessageCard';
import { GlowButton } from './GlowButton';
import { SectionHeading } from './SectionHeading';
import { useScrollToTopOnChange } from '../lib/useScrollToTopOnChange';

export const GateJourney: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isJourneyComplete, setIsJourneyComplete] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Persistence
  useEffect(() => {
    const saved = localStorage.getItem('gate_progress');
    if (saved) {
      const data = JSON.parse(saved);
      setCurrentIndex(data.index);
      setIsOpen(false);
      setShowIntro(false);
    }
  }, []);

  const handleOpen = () => setIsOpen(true);

  const handleNext = () => {
    if (currentIndex < gateMessages.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setIsOpen(false);
      localStorage.setItem('gate_progress', JSON.stringify({ index: nextIndex }));
    } else {
      setIsJourneyComplete(true);
      localStorage.removeItem('gate_progress');
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsOpen(false);
    setIsJourneyComplete(false);
    setShowIntro(true);
    localStorage.removeItem('gate_progress');
  };

  const currentGate = gateMessages[currentIndex];

  useScrollToTopOnChange([currentIndex, isOpen, showIntro, isJourneyComplete], 'smooth');

  if (showIntro) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="flex flex-col items-center justify-center text-center space-y-12 py-12"
      >
        <SectionHeading 
          title="Gate of Feelings" 
          subtitle="একটা একটা করে দরজা খুলবে, আর প্রতিটা দরজার পেছনে থাকবে আমার মনের একটা সত্যি কথা।"
        />
        <div className="max-w-lg space-y-8">
           <p className="text-white/40 text-sm tracking-widest uppercase">Take your time… এই journey টা শুধু তোমার জন্য।</p>
           <GlowButton onClick={() => setShowIntro(false)}>
             প্রথম দরজা খুলুন
           </GlowButton>
        </div>
      </motion.div>
    );
  }

  if (isJourneyComplete) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="flex flex-col items-center justify-center text-center space-y-12 py-12"
      >
        <div className="w-24 h-24 rounded-full bg-accent-gold/20 flex items-center justify-center mb-4">
           <motion.div 
             animate={{ scale: [1, 1.2, 1] }} 
             transition={{ repeat: Infinity, duration: 2 }}
           />
        </div>
        <SectionHeading 
          title="সব দরজা খুলে গেছে..." 
          subtitle="এখন শুধু শেষ একটা দরজা বাকি। তুমি যদি ready হও, তাহলে আমি আমার সবচেয়ে important কথাটা বলতে চাই।"
        />
        <div className="flex flex-col md:flex-row gap-6">
          <GlowButton onClick={() => navigate('/little-things')} className="px-8 py-4 bg-white/5 border-white/10">
            পুরো journey continue করি <ArrowRight className="ml-2 w-4 h-4 opacity-50" />
          </GlowButton>
          <GlowButton onClick={() => navigate('/proposal')} className="px-12 py-4">
            শেষ প্রশ্নের দিকে যাই <ArrowRight className="ml-2 w-5 h-5" />
          </GlowButton>
        </div>
          <button 
            onClick={handleReset}
            className="flex items-center justify-center gap-2 text-white/30 hover:text-white/60 transition-colors text-xs uppercase tracking-widest"
          >
            <RefreshCw className="w-3 h-3" /> Journey আবার শুরু করি
          </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-12 py-8">
      <ProgressStars total={gateMessages.length} current={currentIndex} />
      
      <div className="w-full max-w-4xl min-h-[600px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key={`gate-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9, blur: '10px' }}
              animate={{ opacity: 1, scale: 1, blur: '0px' }}
              exit={{ opacity: 0, scale: 1.1, blur: '10px' }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <MagicalGate 
                gateNumber={currentGate.id}
                title={currentGate.title}
                isOpen={isOpen}
                onOpen={handleOpen}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`message-${currentIndex}`}
              className="w-full flex flex-col items-center"
            >
               <MagicalGate 
                gateNumber={currentGate.id}
                title={currentGate.title}
                isOpen={isOpen}
                onOpen={handleOpen}
              />
              <GateMessageCard 
                gate={currentGate}
                onNext={handleNext}
                isLast={currentIndex === gateMessages.length - 1}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button 
        onClick={handleReset}
        className="mt-12 flex items-center gap-2 text-white/20 hover:text-white/50 transition-colors text-[10px] uppercase tracking-[3px]"
      >
        <RefreshCw className="w-3 h-3" /> Reset Journey
      </button>
    </div>
  );
};
