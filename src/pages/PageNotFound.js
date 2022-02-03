import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function PageNotFound() {
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
        ></div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                {/* Top image */}
                <div
                  className="relative inline-flex flex-col mb-6"
                  data-aos="fade-up"
                >
                  <img
                    className="rounded-full"
                    src={require('../images/hal.png')}
                    width="96"
                    height="96"
                    alt="404"
                  />
                </div>
                {/* 404 content */}
                <h1 className="h1 mb-4" data-aos="fade-up" data-aos-delay="200">
                  I'm afraid I can't do that, Dave.
                </h1>
                <p
                  className="text-lg text-gray-400"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Head to our{' '}
                  <Link
                    to="https://manifoldfinance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  >
                    homepage
                  </Link>{' '}
                  that does exist, or try double-checking the URL.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default PageNotFound;
