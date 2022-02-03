import React from 'react';

function SolutionsHome() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-6xl sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-solutions-home>
            {/* Item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div
                className="mx-auto mb-8 max-w-xl md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-solutions-home]"
              >
                <div className="relative">
                  <img
                    className="md:max-w-none"
                    src={require('../images/Globe.png')}
                    width="520"
                    height="507"
                    alt="Network Coverage"
                  />
                  <svg
                    className="absolute inset-0 mx-auto max-w-full h-auto md:max-w-none"
                    width="540"
                    height="520"
                    viewBox="0 0 540 520"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="text-purple-600 fill-current">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle
                        className="pulse pulse-1"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-2"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-3"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Content */}

              <div
                className="mx-auto max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-solutions-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* TODO change style */}
                  <div className="mb-2 text-xl text-purple-600 font-fira-sans">
                    Up to 90% cheaper trading for Sushiswap
                  </div>
                  <h3 className="mb-3 h3">
                    Trade on Sushiswap: Get paid for your costs.
                  </h3>
                  <p className="mb-4 text-xl text-gray-400">
                    When you trade on Sushiswap Manifold Finance rebates your
                    costs by offering trading protection and privacy protection
                    via OpenMEV. Stake FOLD and get excess profits from OpenMEV.
                  </p>
                  <ul className="flex flex-wrap -mx-2 -my-1 text-lg text-gray-400">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 mr-2 w-3 h-3 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Front Running Protection</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 mr-2 w-3 h-3 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cheapest Transactions for Trading</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 mr-2 w-3 h-3 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Available on Sushiswap</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 mr-2 w-3 h-3 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Get paid xSushi and USDC</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 mr-2 w-3 h-3 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Staking now live</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsHome;
/** @export SolutionsHome */
