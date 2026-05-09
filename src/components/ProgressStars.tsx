import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProgressStarsProps {
  total: number;
  current: number;
}

export const ProgressStars: React.FC<ProgressStarsProps> = ({ total, current }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="star-progress">
        {[...Array(total)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "star-dot",
              i === current ? "active" : i < current ? "completed" : ""
            )}
            initial={false}
            animate={i === current ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={i === current ? { repeat: Infinity, duration: 2 } : {}}
          />
        ))}
      </div>
      <p className="text-[10px] uppercase tracking-[3px] text-white/40">
        Gate {current + 1} of {total}
      </p>
    </div>
  );
};
