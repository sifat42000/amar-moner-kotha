import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { GlowButton } from '../components/GlowButton';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 text-center">
        <SectionHeading 
          title="Oops! পথ হারিয়ে ফেলেছো?" 
          subtitle="মনে হয় তুমি এমন কোনো দরজার কাছে চলে গেছো যা এখনো তৈরি হয়নি।" 
        />
        <Link to="/">
          <GlowButton>
            <Home className="mr-2 w-5 h-5" /> বাসায় ফিরে চলো
          </GlowButton>
        </Link>
      </div>
    </PageTransition>
  );
};

export default NotFound;
