// eslint-disable
import React, { useState } from 'react';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="relative px-4 mx-auto max-w-6xl sm:px-6">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="pb-12 mx-auto max-w-3xl text-center md:pb-16">
            <h1 className="mb-4 h1" data-aos="fade-up">
              Connect to a world of opportunities
            </h1>
            <p
              className="mb-8 text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Protect Your Transactions with Manifold
            </p>
            <div className="mx-auto max-w-xs sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="mb-4 w-full text-black bg-white btn hover:bg-white sm:w-auto sm:mb-0"
                  to="#"
                >
                  Get Started
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="w-full text-white bg-gray-700 btn hover:bg-gray-800 sm:w-auto sm:ml-4"
                  to="#"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="flex relative justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-target]"
            >
              <img
                className="mx-auto md:max-w-none"
                src={require('./banner.svg').default}
                width="640"
                height="510"
                alt="MEV Service"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroHome;
/** @export HeroHome */
