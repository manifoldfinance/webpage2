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
      <div className="px-4 mx-auto max-w-6xl sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 mx-auto max-w-3xl text-center">
            <h1 className="mb-4 h1" data-aos="fade-up">
              MEV: Maximal End user Value
            </h1>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Seamless connectivity to Flashbots, Eden Network, and more
            </p>
          </div>

          {/* Network tables */}
          <div>
            {/* Network toggle */}

            {/* Bottom infobox */}
            <div className="flex flex-col justify-between items-center mt-12 lg:flex-row lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800">
              <div className="mb-4 text-lg font-medium text-center lg:text-left lg:mb-0">
                Serving over 10,000 requests per second
              </div>
              <div>
                <a
                  className="text-white bg-purple-600 btn-sm hover:bg-purple-700"
                  to="https://form.typeform.com/to/Sr7xLL3s"
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
