import React from 'react';
import { motion } from 'motion/react';

export const FloatingHearts: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="heart-particle flex items-center justify-center text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${Math.random() * 5 + 5}s`,
            bottom: '-50px'
          } as any}
        >
          {['❤', '💖', '🤍', '🌸'][Math.floor(Math.random() * 4)]}
        </div>
      ))}
    </div>
  );
};
