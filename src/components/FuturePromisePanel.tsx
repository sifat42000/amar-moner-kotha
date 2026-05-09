import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { futureData } from '../data/futureData';
import { GlowButton } from './GlowButton';
import '../styles/future.css';

export const FuturePromisePanel: React.FC = () => {
  const navigate = useNavigate();
  const { promise } = futureData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="promise-panel glass p-12 border border-accent-gold/20 text-center relative overflow-hidden mt-24"
    >
      <div className="flex flex-col items-center max-w-2xl mx-auto space-y-8">
        <ShieldCheck className="w-12 h-12 text-accent-gold opacity-50" />
        <h2 className="text-3xl md:text-4xl font-serif text-accent-gold glow-text">{promise.title}</h2>
        <p className="text-white/70 italic leading-relaxed text-lg">
          "{promise.text}"
        </p>

        <div className="flex flex-wrap justify-center gap-4 py-6">
          {promise.chips.map((chip, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="promise-chip px-4 py-1.5 rounded-full border border-accent-gold/20 text-[10px] uppercase tracking-widest text-accent-gold/70 bg-accent-gold/5"
            >
              {chip}
            </motion.span>
          ))}
        </div>

        <GlowButton onClick={() => navigate('/flowers')} className="mt-8">
          একটা ফুল বেছে নিই <ArrowRight className="ml-2 w-5 h-5" />
        </GlowButton>
      </div>
    </motion.div>
  );
};
