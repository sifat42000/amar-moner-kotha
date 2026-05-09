import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { ReasonsOrbit } from '../components/ReasonsOrbit';
import { GlassCard } from '../components/GlassCard';
import { GlowButton } from '../components/GlowButton';

const Reasons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 py-4 md:py-8 px-4">
        <SectionHeading 
          title="Why You Feel So Special" 
          subtitle="কিছু কারণ আছে, যেগুলো explain করা কঠিন, but feel করা খুব easy।" 
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/40 text-xs md:text-sm tracking-[2px] md:tracking-[3px] uppercase mb-8 md:mb-12 max-w-2xl mx-auto px-4"
        >
          এই reasons গুলো কোনো checklist না। এগুলো শুধু সেই অনুভূতিগুলো, যেগুলো আমাকে বারবার তোমার কথা ভাবায়।
        </motion.p>

        <ReasonsOrbit />

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="pt-12 md:pt-20 text-center"
        >
          <GlassCard className="max-w-2xl mx-auto p-8 md:p-12 border-accent-gold/20 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-serif text-accent-gold mb-4 md:mb-6">সব কারণের শেষে…</h3>
            <p className="text-white/70 italic mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
              শেষ পর্যন্ত বুঝলাম, তোমাকে special মনে হওয়ার কারণগুলো আলাদা আলাদা নয় — সবকিছু একসাথে মিলে তুমি আমার কাছে একটা সুন্দর অনুভূতি।
            </p>
            <GlowButton onClick={() => navigate('/future')} className="w-full sm:w-auto">
              ভবিষ্যতের কথা ভাবি <ArrowRight className="ml-2 w-4 h-4" />
            </GlowButton>
          </GlassCard>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Reasons;
