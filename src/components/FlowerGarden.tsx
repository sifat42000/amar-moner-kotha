import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { flowerData } from '../data/flowerData';
import { FlowerCard } from './FlowerCard';
import { FlowerMessageModal } from './FlowerMessageModal';
import { GlowButton } from './GlowButton';
import '../styles/flowers.css';

export const FlowerGarden: React.FC = () => {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [selectedFlower, setSelectedFlower] = useState<any>(null);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('unlocked_flowers');
    if (saved) {
      setUnlocked(JSON.parse(saved));
    }
  }, []);

  const handleFlowerClick = (flower: any) => {
    setSelectedFlower(flower);
    if (!unlocked.includes(flower.id)) {
      const nextUnlocked = [...unlocked, flower.id];
      setUnlocked(nextUnlocked);
      localStorage.setItem('unlocked_flowers', JSON.stringify(nextUnlocked));
    }
  };

  const handleReset = () => {
    setUnlocked([]);
    setShowFinal(false);
    localStorage.removeItem('unlocked_flowers');
  };

  useEffect(() => {
    if (unlocked.length === flowerData.flowers.length) {
      setTimeout(() => setShowFinal(true), 1000);
    }
  }, [unlocked]);

  return (
    <div className="flex flex-col items-center w-full py-12 relative">
      {/* Floating Petals Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="petal-particle"
            style={{
              left: `${Math.random() * 100}%`,
              '--x': `${(Math.random() - 0.5) * 200}px`,
              '--duration': `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            } as any}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="flower-garden-grid relative z-10">
        {flowerData.flowers.map((flower) => (
          <FlowerCard
            key={flower.id}
            flower={flower}
            isUnlocked={unlocked.includes(flower.id)}
            onClick={handleFlowerClick}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedFlower && (
          <FlowerMessageModal
            flower={selectedFlower}
            onClose={() => setSelectedFlower(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFinal && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="final-reveal-card glass z-20 w-full max-w-3xl p-16 border border-accent-gold mt-20 relative overflow-visible text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-accent-gold glow-text mb-8">
              {flowerData.finalReveal.title}
            </h2>
            <p className="text-xl text-white/80 italic leading-relaxed mb-12">
              "{flowerData.finalReveal.text}"
            </p>
            <div className="flex flex-col items-center gap-6">
              <GlowButton onClick={() => navigate('/proposal')} className="px-16 py-5">
                শেষ প্রশ্নের দিকে যাই <ArrowRight className="ml-2 w-5 h-5" />
              </GlowButton>
              <button onClick={handleReset} className="flex items-center gap-2 text-white/20 hover:text-white/50 transition-colors text-xs uppercase tracking-widest">
                 <RefreshCw className="w-3 h-3" /> আবার ফুলগুলো দেখি
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showFinal && (
        <div className="mt-16 text-center text-white/30 text-[10px] uppercase tracking-[4px]">
          {unlocked.length} of {flowerData.flowers.length} Flowers Unlocked
        </div>
      )}

      {/* Navigation CTA - Visible even if not all flowers are unlocked */}
      {!showFinal && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-white/5 w-full flex flex-col items-center text-center px-4"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-accent-gold mb-4">এখন শেষ প্রশ্নের সময়…</h3>
          <p className="text-white/40 italic mb-10 max-w-lg mx-auto text-sm md:text-base">
            সব hidden message দেখা হয়ে গেছে। এবার আমি আমার সবচেয়ে important কথাটা বলতে চাই।
          </p>
          <GlowButton onClick={() => navigate('/proposal')} className="px-12 py-4">
            শেষ প্রশ্নে যাই <ArrowRight className="ml-2 w-5 h-5" />
          </GlowButton>
        </motion.div>
      )}
    </div>
  );
};
