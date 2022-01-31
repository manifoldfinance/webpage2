import React from 'react';

function Platform() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-solutions-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-solutions-home]"
              >
                <div className="relative">
                  <img
                    className="md:max-w-none"
                    src={require('../images/Globe.png').default}
                    width="520"
                    height="507"
                    alt="Network Coverage"
                  />
                  <svg
                    className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                    width="540"
                    height="520"
                    viewBox="0 0 540 520"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-purple-600">
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
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-solutions-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* TODO change style */}
                  <div className="font-fira-sans text-xl text-purple-600 mb-2">
                    Leading Smart Order Routing
                  </div>
                  <h3 className="h3 mb-3">Maximal Extracted Value</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    With improved transparency of profit opportunities and a
                    reduction in information asymmetry, we connect with the
                    leading Block Production pools to ensure efficient
                    transaction protection and value maximization.
                  </p>
                  <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Multichain support</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Debug failing transactions</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>No cost transaction fails</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>More publicly accessible</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ZK-based reputation system</span>
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

export default Platform;
/** @export Platform */
