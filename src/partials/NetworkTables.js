/* eslint-disable */
import React, { useState } from 'react';

function NetworkTables() {
  const [value, setValue] = useState(true);

  const [priceOutput] = useState({
    plan1: {
      false: ['$', '55', '/mo'],
      true: ['$', '49', '/mo'],
    },
    plan2: {
      false: ['$', '85', '/mo'],
      true: ['$', '79', '/mo'],
    },
    plan3: {
      false: ['$', '135', '/mo'],
      true: ['$', '129', '/mo'],
    },
  });

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Supported Networks
            </h1>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Ethereum Mainnet, Polkadot, and more.
            </p>
          </div>

          {/* Network tables */}
          <div>
            {/* Network toggle */}

            {/* Bottom infobox */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800">
              <div className="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0">
                Expecting more than 1000 Trades?
              </div>
              <div>
                <a
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                  to="#0"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NetworkTables;
