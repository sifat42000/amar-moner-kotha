import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { MainLayout } from '../layouts/MainLayout';
import Landing from '../pages/Landing';
import Journey from '../pages/Journey';
import Gates from '../pages/Gates';
import LittleThings from '../pages/LittleThings';
import HeartLetter from '../pages/HeartLetter';
import Reasons from '../pages/Reasons';
import Future from '../pages/Future';
import Flowers from '../pages/Flowers';
import Proposal from '../pages/Proposal';
import NotFound from '../pages/NotFound';

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="journey" element={<Journey />} />
          <Route path="gates" element={<Gates />} />
          <Route path="little-things" element={<LittleThings />} />
          <Route path="heart-letter" element={<HeartLetter />} />
          <Route path="reasons" element={<Reasons />} />
          <Route path="future" element={<Future />} />
          <Route path="flowers" element={<Flowers />} />
          <Route path="proposal" element={<Proposal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
