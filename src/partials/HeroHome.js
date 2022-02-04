import React, { useState } from 'react';
// import Modal from '../utils/Modal';

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
              Connect to DeFi Opportunities
            </h1>
            <p
              className="mb-8 text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Manifold enables capital to capitalize on opportunity in
              decentralized financial markets.
            </p>
            <div className="mx-auto max-w-xs sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="mb-4 w-full text-black bg-white btn hover:bg-white sm:w-auto sm:mb-0"
                  to="https://forums.manifoldfinance.com/t/guide-how-to-stake-fold-for-xfold/150"
                >
                  Start Staking
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="w-full text-white bg-gray-700 btn hover:bg-gray-800 sm:w-auto sm:ml-4"
                  to="https://forums.manifoldfinance.com/"
                >
                  Forums
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
            >
              {/* @dev hereo image here */}
              <img
                className="mx-auto"
                src={require('../images/hero_graph.svg')}
                width="820"
                height="820"
                alt="Miner / Maximal Extracted Value"
              />
              <a
                className="absolute group"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              ></a>
              <br></br>
              <br></br>
            </div>

            {/* Modal */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroHome;
/** @export HeroHome */
