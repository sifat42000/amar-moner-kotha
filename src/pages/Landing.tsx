import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { GlowButton } from '../components/GlowButton';
import { PageTransition } from '../components/PageTransition';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { landing } = siteContent;

  return (
    <PageTransition>
      <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative max-w-5xl"
        >
          <h1 className="text-6xl md:text-[6rem] font-serif text-white leading-tight tracking-tight glow-text font-normal">
            {landing.title}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-xl md:text-2xl text-accent-lavender max-w-2xl font-light leading-relaxed opacity-90"
        >
          {landing.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="pt-6"
        >
          <GlowButton onClick={() => navigate('/journey')} className="px-12 py-4">
            {landing.buttonText}
          </GlowButton>
          <p className="mt-6 text-[10px] uppercase tracking-[2px] text-white/30 italic">
            {landing.footerText}
          </p>
        </motion.div>

        {/* Floating Card Decorative Element */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ delay: 2.5, duration: 1.2 }}
          className="hidden lg:block absolute bottom-[-10%] right-[-5%] w-64 glass p-6 rounded-xl border-white/10 shadow-2xl"
        >
          <span className="text-[10px] uppercase text-accent-gold tracking-widest block mb-2">Phase 01: The Beginning</span>
          <p className="text-sm text-white/70 italic leading-relaxed">
            "প্রথম যেদিন তোমার সাথে কথা হয়েছিল, ভাবিনি সেটা কোনোদিন আমার জীবনের শ্রেষ্ঠ গল্প হয়ে যাবে।"
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Landing;
