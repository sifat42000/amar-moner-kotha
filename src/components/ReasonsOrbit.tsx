import React, { useState } from 'react';
import { motion } from 'motion/react';
import { reasonsData } from '../data/reasonsData';
import { ReasonDetailCard } from './ReasonDetailCard';
import { cn } from '../lib/utils';
import '../styles/reasons.css';

export const ReasonsOrbit: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(reasonsData[0].id);
  const [isHovered, setIsHovered] = useState(false);

  const radius = 250;
  const total = reasonsData.length;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Desktop Orbit View */}
      <div className="orbit-container hidden md:flex" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Center Orb */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="center-orb"
        >
          <span className="text-primary font-serif font-bold text-xl">তুমি</span>
          <span className="text-[8px] text-primary/60 uppercase tracking-tighter">The calm in my chaos</span>
        </motion.div>

        {/* Orbit Path */}
        <div className="orbit-path" />

        {/* Orbiting Items */}
        {reasonsData.map((reason, index) => {
          const angle = (index / total) * 2 * Math.PI;
          
          return (
            <motion.div
              key={reason.id}
              className={cn("orbiting-item", selectedId === reason.id && "selected")}
              animate={!isHovered ? {
                rotate: [0, 360]
              } : {}}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear"
              }}
              style={{
                top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                rotate: `-${(index / total) * 360}deg`
              } as any}
              onClick={() => setSelectedId(reason.id)}
            >
               <motion.div 
                 className="reason-planet"
                 animate={!isHovered ? { rotate: [0, -360] } : {}}
                 transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
               >
                 {reason.label}
               </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Grid View */}
      <div className="md:hidden w-full flex flex-col items-center">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mobile-center-card"
        >
           <h4 className="text-accent-gold text-2xl font-serif mb-2">তুমি</h4>
           <p className="text-white/40 text-[10px] uppercase tracking-widest">The calm in my chaos</p>
        </motion.div>

        <div className="reasons-mobile-grid">
          {reasonsData.map((reason, index) => (
            <motion.button
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedId(reason.id)}
              className={cn("mobile-reason-card", selectedId === reason.id && "active")}
            >
              <span className={cn(
                "text-xs uppercase tracking-widest transition-colors",
                selectedId === reason.id ? "text-accent-gold" : "text-white/60"
              )}>
                {reason.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <ReasonDetailCard selectedId={selectedId} />
    </div>
  );
};
