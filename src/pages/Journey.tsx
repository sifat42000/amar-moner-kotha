import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { SectionHeading } from '../components/SectionHeading';
import { GlowButton } from '../components/GlowButton';
import { PageTransition } from '../components/PageTransition';
import { GlassCard } from '../components/GlassCard';

const Journey: React.FC = () => {
  const navigate = useNavigate();
  const { journey } = siteContent;

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-16">
        <SectionHeading 
          title={journey.title} 
          subtitle={journey.subtitle} 
        />
        
        <GlassCard className="text-center p-12 space-y-8">
          <BookOpen className="w-16 h-16 mx-auto text-accent-gold mb-6 animate-pulse" />
          <div className="space-y-6 text-white/80 text-lg leading-relaxed font-light">
            <p>আমাদের জীবনের কিছু মুহূর্ত থাকে যা খুব স্পেশাল হয়ে রয়ে যায়।</p>
            <p>হয়তো আমি মুখ ফুটে কখনো তোমাকে এই কথাগুলো বলিনি।</p>
            <p>তাই আজ একটু অন্যভাবে আমার মনের দরজাগুলো তোমার সামনে খুলতে চাই।</p>
          </div>
          
          <div className="pt-10">
            <GlowButton onClick={() => navigate('/gates')} variant="primary">
              দরজাগুলো খুলি <ArrowRight className="ml-2 w-5 h-5" />
            </GlowButton>
          </div>
        </GlassCard>
      </div>
    </PageTransition>
  );
};

export default Journey;
