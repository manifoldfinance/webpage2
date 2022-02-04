import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
//import HeroSolutions from '../partials/HeroSolutions';
import Stats from '../partials/Stats';



import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function solutions() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
   
        <Stats />



        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default solutions;
