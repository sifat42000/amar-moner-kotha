import React from 'react';

export const ConfettiBurst: React.FC = () => {
  const colors = ['#D4AF37', '#FFB7C5', '#E0B0FF', '#ffffff'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            '--color': colors[Math.floor(Math.random() * colors.length)],
            '--delay': `${Math.random() * 3}s`,
            '--duration': `${Math.random() * 3 + 2}s`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 12 + 6}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px'
          } as any}
        />
      ))}
    </div>
  );
};
