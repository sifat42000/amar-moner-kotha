import React from 'react';
import { HeartLetterEnvelope } from '../components/HeartLetterEnvelope';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { heartLetterData } from '../data/heartLetterData';

const HeartLetter: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-16 py-8">
        <SectionHeading 
          title={heartLetterData.title} 
          subtitle={heartLetterData.subtitle} 
        />
        <HeartLetterEnvelope />
      </div>
    </PageTransition>
  );
};

export default HeartLetter;
