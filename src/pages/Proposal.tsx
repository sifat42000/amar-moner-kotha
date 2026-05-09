import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { proposalData } from '../data/proposalData';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { FinalGate } from '../components/FinalGate';
import { ProposalQuestion } from '../components/ProposalQuestion';
import { CelebrationScene } from '../components/CelebrationScene';
import { RespectfulResponse } from '../components/RespectfulResponse';
import { FinalMemoryNote } from '../components/FinalMemoryNote';
import { GlowButton } from '../components/GlowButton';
import '../styles/proposal.css';

type ProposalState = 'intro' | 'gateOpened' | 'question' | 'yes' | 'think';

const Proposal: React.FC = () => {
  const { intro } = proposalData;
  const [step, setStep] = useState<ProposalState>('intro');
  const [alreadyAnswered, setAlreadyAnswered] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('proposalAnswer');
    if (saved) {
      setAlreadyAnswered(saved);
      setStep(saved === 'yes' ? 'yes' : 'think');
    }
  }, []);

  const handleGateOpen = () => setStep('gateOpened');
  const handleShowQuestion = () => setStep('question');
  
  const handleAccept = () => {
    setStep('yes');
    localStorage.setItem('proposalAnswer', 'yes');
  };

  const handleThink = () => {
    setStep('think');
    localStorage.setItem('proposalAnswer', 'think');
  };

  const handleReset = () => {
    localStorage.removeItem('proposalAnswer');
    setStep('intro');
    setAlreadyAnswered(null);
  };

  return (
    <PageTransition>
      <div className="proposal-page max-w-6xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[80vh] flex flex-col items-center justify-center py-12 space-y-12"
            >
              <SectionHeading title={intro.title} subtitle={intro.subtitle} />
              <p className="text-center text-white/50 italic max-w-2xl mx-auto leading-relaxed text-lg">
                "{intro.text}"
              </p>
              <div className="pt-8">
                <GlowButton onClick={() => setStep('gateOpened')} className="px-12 py-4">
                  {intro.openButton}
                </GlowButton>
              </div>
            </motion.div>
          )}

          {(step === 'gateOpened' || step === 'question') && (
            <motion.div
              key="gate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[80vh] flex flex-col items-center justify-start md:justify-center py-12 space-y-16"
            >
              <FinalGate 
                isOpen={step === 'gateOpened' || step === 'question'} 
                onOpen={handleGateOpen}
                onContinue={handleShowQuestion}
              />
              {step === 'question' && (
                <ProposalQuestion 
                  onAccept={handleAccept} 
                  onThink={handleThink} 
                />
              )}
            </motion.div>
          )}

          {step === 'yes' && (
            <motion.div
              key="yes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-h-[80vh] flex flex-col items-center justify-center py-12"
            >
              {alreadyAnswered === 'yes' && (
                <div className="flex flex-col items-center gap-4 mb-8">
                  <p className="text-accent-gold/40 text-[10px] uppercase tracking-[3px] text-center">
                    তোমার সুন্দর উত্তরটা এখনও এখানে রাখা আছে…
                  </p>
                  <button 
                    onClick={handleReset}
                    className="text-white/20 hover:text-accent-gold/50 transition-colors text-[9px] uppercase tracking-[2px] border border-white/5 px-3 py-1 rounded-full"
                  >
                    Answer change করবো
                  </button>
                </div>
              )}
              <CelebrationScene onReset={handleReset} />
              <FinalMemoryNote />
            </motion.div>
          )}

          {step === 'think' && (
            <motion.div
              key="think"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-h-[80vh] flex flex-col items-center justify-center py-12"
            >
              <RespectfulResponse onReset={handleReset} />
              {alreadyAnswered === 'think' && (
                <div className="mt-8 flex flex-col items-center">
                  <button 
                    onClick={handleReset}
                    className="text-white/20 hover:text-accent-gold/50 transition-colors text-[9px] uppercase tracking-[2px] border border-white/5 px-3 py-1 rounded-full"
                  >
                    প্রশ্নটা আবার দেখবো
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Proposal;
