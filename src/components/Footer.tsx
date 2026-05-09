import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 flex flex-col items-center justify-center gap-4 text-white/40 border-t border-white/5 mt-20">
      <Heart className="w-5 h-5 fill-accent-pink/30 animate-pulse" />
      <p className="text-sm font-light italic">
        Made with a little courage & a lot of feelings.
      </p>
      <p className="text-xs">“ Amar Moner Kotha — Created with love by Rashiquzzaman Sifat”</p>
    </footer>
  );
};
