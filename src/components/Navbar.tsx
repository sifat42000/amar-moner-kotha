import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Journey', path: '/journey' },
  { name: 'Gates', path: '/gates' },
  { name: 'Letter', path: '/heart-letter' },
  { name: 'Reasons', path: '/reasons' },
  { name: 'Future', path: '/future' },
  { name: 'Flowers', path: '/flowers' },
  { name: 'Proposal', path: '/proposal' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative z-50 flex justify-center p-0">
      <div className="nav-glass w-full px-16 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-accent-gold font-serif text-xl glow-text tracking-[2px] uppercase font-light">
          THE HEART'S JOURNAL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[10px] uppercase tracking-[2px] transition-all duration-300 hover:text-accent-gold",
                location.pathname === link.path ? "text-accent-gold border-b border-accent-gold" : "text-white/50"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full mt-4 left-6 right-6 glass p-8 rounded-3xl flex flex-col gap-6 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium text-center",
                  location.pathname === link.path ? "text-accent-gold" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
