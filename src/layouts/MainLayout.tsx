import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackgroundEffects } from '../components/BackgroundEffects';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-gold/20">
      <BackgroundEffects />
      <Navbar />
      <main className="flex-1 pt-8 pb-20 px-6 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
