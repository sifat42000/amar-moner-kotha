import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "glow-btn",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 tracking-widest uppercase text-xs">{children}</span>
    </motion.button>
  );
};
