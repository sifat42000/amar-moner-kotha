import React from 'react';
import { GateJourney } from '../components/GateJourney';
import { PageTransition } from '../components/PageTransition';

const Gates: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto">
        <GateJourney />
      </div>
    </PageTransition>
  );
};

export default Gates;
