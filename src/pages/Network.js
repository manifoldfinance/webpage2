import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import NetworkTables from '../partials/NetworkTables';
import Faqs from '../partials/Faqs';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import FeaturesTiles from '../components/sections/FeaturesTiles';

function Network() {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative mx-auto max-w-6xl h-0 pointer-events-none"
          aria-hidden="true"
        ></div>

        {/*  Page sections */}
        <NetworkTables />
        <Faqs />

        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Network;
/** @export Network */
