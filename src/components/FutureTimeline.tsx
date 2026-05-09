import React from 'react';
import { futureData } from '../data/futureData';
import { FutureMomentCard } from './FutureMomentCard';
import '../styles/future.css';

export const FutureTimeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      <div className="space-y-4">
        {futureData.moments.map((moment, i) => (
          <FutureMomentCard key={moment.id} moment={moment} index={i} />
        ))}
      </div>
    </div>
  );
};
