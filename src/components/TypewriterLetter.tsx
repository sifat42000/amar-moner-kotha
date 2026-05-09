import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewriterLetterProps {
  paragraphs: string[];
  signature: string;
  onComplete: () => void;
  replayKey: number;
}

export const TypewriterLetter: React.FC<TypewriterLetterProps> = ({ paragraphs, signature, onComplete, replayKey }) => {
  const [displayedParagraphs, setDisplayedParagraphs] = useState<string[]>([]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    setDisplayedParagraphs([]);
    setCurrentParagraphIndex(0);
    setCurrentCharIndex(0);
  }, [replayKey]);

  useEffect(() => {
    if (currentParagraphIndex < paragraphs.length) {
      if (currentCharIndex < paragraphs[currentParagraphIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedParagraphs(prev => {
            const next = [...prev];
            if (!next[currentParagraphIndex]) next[currentParagraphIndex] = '';
            next[currentParagraphIndex] += paragraphs[currentParagraphIndex][currentCharIndex];
            return next;
          });
          setCurrentCharIndex(currentCharIndex + 1);
        }, 30); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentParagraphIndex(currentParagraphIndex + 1);
          setCurrentCharIndex(0);
        }, 500); // Pause between paragraphs
        return () => clearTimeout(timeout);
      }
    } else {
      onComplete();
    }
  }, [currentParagraphIndex, currentCharIndex, paragraphs, onComplete]);

  return (
    <div className="text-primary font-serif selection:bg-accent-gold/30">
      {displayedParagraphs.map((para, i) => (
        <p key={i} className={cn("mb-4 leading-relaxed", i === 0 ? "text-xl font-bold" : "text-lg")}>
          {para}
        </p>
      ))}
      {currentParagraphIndex === paragraphs.length && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-right italic mt-8 text-primary shadow-sm"
        >
          {signature}
        </motion.p>
      )}
      {currentParagraphIndex < paragraphs.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-5 bg-accent-gold ml-1 align-middle"
        />
      )}
    </div>
  );
};

import { cn } from '../lib/utils';
