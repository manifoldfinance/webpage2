import React from 'react';

function Cta() {
  return (
    <section>
      <div className="relative px-4 mx-auto max-w-6xl sm:px-6">
        <div className="pt-12 border-t border-b border-gray-800 md:pt-20">
          <div
            className="pb-12 mx-auto max-w-3xl text-center md:pb-16"
            data-aos-id-cta
          >
            {/* Section header */}
            <h1
              className="mb-4 h2"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-cta]"
            >
              Connect to a world of opportunity
            </h1>
            <p
              className="mb-8 text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-cta]"
            ></p>

            {/* CTA button */}
            <div
              className="flex justify-center mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-cta]"
            >
              <a
                className="text-white bg-purple-600 btn hover:bg-purple-700"
                to="https://manifoldfinance.github.io/hub/"
              >
                Ecosystem Hub
              </a>
            </div>

            {/* Check list */}
            <ul className="flex flex-wrap justify-center -mx-2 -my-1 text-lg text-gray-400">
              <li
                className="flex items-center mx-3 my-1"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-anchor="[data-aos-id-cta]"
              >
                <svg
                  className="flex-shrink-0 mr-2 w-3 h-3 text-green-500 fill-current"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Multichain support</span>
              </li>
              <li
                className="flex items-center mx-3 my-1"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-anchor="[data-aos-id-cta]"
              >
                <svg
                  className="flex-shrink-0 mr-2 w-3 h-3 text-green-500 fill-current"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Return value to end users</span>
              </li>
              <li
                className="flex items-center mx-3 my-1"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-anchor="[data-aos-id-cta]"
              >
                <svg
                  className="flex-shrink-0 mr-2 w-3 h-3 text-green-500 fill-current"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Privacy preserving</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
