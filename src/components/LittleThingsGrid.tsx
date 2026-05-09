import React from 'react';
import { littleThingsData } from '../data/littleThingsData';
import { FlipMemoryCard } from './FlipMemoryCard';
import '../styles/littleThings.css';

export const LittleThingsGrid: React.FC = () => {
  return (
    <div className="card-grid">
      {littleThingsData.map((thing, i) => (
        <FlipMemoryCard
          key={thing.id}
          title={thing.title}
          frontLine={thing.frontLine}
          backMessage={thing.backMessage}
          delay={i * 0.1}
        />
      ))}
    </div>
  );
};
