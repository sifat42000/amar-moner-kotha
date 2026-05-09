import React, { useEffect, useState } from 'react';
import '../styles/animations.css';

export const BackgroundEffects: React.FC = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-primary">
      {/* Immersive Atmosphere Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.3)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,105,180,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_center,#0a0b1e_0%,#050614_100%)]" />

      {/* Ornament - Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
        <div className="absolute inset-0 border border-accent-gold/20 rounded-full" />
        <div className="absolute inset-[40px] border border-accent-gold/10 rounded-full" />
        <div className="absolute inset-[80px] border border-accent-gold/5 rounded-full" />
      </div>

      {/* Stars - using the original star twinkle logic but slightly denser as per theme */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white,rgba(255,255,255,0.2)_2px,transparent_40px)] bg-[length:100px_100px]" />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--twinkle-duration': star.duration,
          } as any}
        />
      ))}

      {/* Subtle Floating Hearts (SVG) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle text-accent-pink/30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤
          </div>
        ))}
      </div>
    </div>
  );
};
