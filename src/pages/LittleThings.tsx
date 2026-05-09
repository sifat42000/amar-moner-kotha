import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { GlassCard } from '../components/GlassCard';
import { LittleThingsGrid } from '../components/LittleThingsGrid';
import { GlowButton } from '../components/GlowButton';

const LittleThings: React.FC = () => {
  const navigate = useNavigate();
  const { littleThings } = siteContent;

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-16 py-8">
        <SectionHeading title={littleThings.title} subtitle={littleThings.subtitle} />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/40 text-sm tracking-[3px] uppercase mb-12"
        >
          আমি জানি না তুমি এগুলো কখনো notice করো কিনা, but এই little things গুলোই তোমাকে আমার কাছে আলাদা করে তোলে।
        </motion.p>

        <LittleThingsGrid />

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="pt-20 text-center"
        >
          <GlassCard className="max-w-2xl mx-auto p-12 border-accent-gold/20">
            <h3 className="text-2xl font-serif text-accent-gold mb-6">এই little things গুলোই…</h3>
            <p className="text-white/70 italic mb-10 leading-relaxed">
              একসময় বুঝলাম, তোমাকে ভালো লাগার পেছনে কোনো একটাই বড় কারণ নেই। ছোট ছোট অনেক অনুভূতি একসাথে মিলে তোমাকে আমার কাছে special বানিয়েছে।
            </p>
            <GlowButton onClick={() => navigate('/heart-letter')}>
              মনের চিঠি পড়ি <ArrowRight className="ml-2 w-4 h-4" />
            </GlowButton>
          </GlassCard>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default LittleThings;
