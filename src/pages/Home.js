import React from 'react';

import Header from '../partials/Header';
// import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Cta from '../partials/Cta';
import Process from '../partials/Process';
import SolutionsHome from '../partials/SolutionsHome';

import Tabs from '../partials/Tabs';
// import Target from '../partials/Target';
//import News from '../partials/News';
 import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}

        {/*  Page sections */}
        <HeroHome />

        <SolutionsHome />
        <Process />

        <br />
        <Tabs />
        <br />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
/**
 *  Page Sections tmp removed
 *
 *   <Tabs />
 *   <News />
 *   <Newsletter />
 *  Our solution handles connectivity to venues, executes trades via
 * your choice of a number of order types and execution algorithms, and consolidates key data.
 *   <Target />
 *   <News />
 */
export default Home;
/** @export Home */
