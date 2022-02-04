import React, { useState } from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Help() {
  const [page, setPage] = useState(1);

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
        <div className="relative px-4 mx-auto max-w-6xl sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="flex flex-col md:flex-row">
              {/* Main content */}
              <main
                className="order-1 md:flex-auto md:pl-10"
                data-aos="fade-up"
              >
                {/* FAQ’s – Frequently Asked Questions */}
                <div className={page !== 1 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="mb-4 h2">
                      FAQ’s – Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400">
                      Last updated -{' '}
                      <span className="text-purple-600">Dec 18, 2021</span>
                    </p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What is the Hub?
                      </h4>
                      <p className="text-lg text-gray-400">
                        The Hub is where our community and developing resources
                        meet. You can find everything there!
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I import my sitemap to Open PRO?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        How can I switch my subscription between essential, and
                        premium plans?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I cancel my subscription at any time?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Is there an additional discount when paid annually?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What happens if I don’t renew my license after one year?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What kind of payment methods do you provide?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* What is Open PRO */}
                <div className={page !== 2 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="mb-4 h2">What is OpenMEV</h2>
                    <p className="text-gray-400">
                      Last updated -{' '}
                      <span className="text-purple-600">December 15, 2021</span>
                    </p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I use OpenMEV without registration?
                      </h4>
                      <p className="text-lg text-gray-400">Yes.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I import my sitemap to Open PRO?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        How can I switch my subscription between essential, and
                        premium plans?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I cancel my subscription at any time?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Is there an additional discount when paid annually?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What happens if I don’t renew my license after one year?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What kind of payment methods do you provide?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Open PRO plan’s solutions */}
                <div className={page !== 3 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="mb-4 h2">Open PRO plan’s solutions</h2>
                    <p className="text-gray-400">
                      Last updated -{' '}
                      <span className="text-purple-600">June 30, 2020</span>
                    </p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        How can I use Open PRO without registration?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I import my sitemap to Open PRO?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        How can I switch my subscription between essential, and
                        premium plans?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I cancel my subscription at any time?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Is there an additional discount when paid annually?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What happens if I don’t renew my license after one year?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What kind of payment methods do you provide?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Get started */}
                <div className={page !== 4 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="mb-4 h2">Get started</h2>
                    <p className="text-gray-400">
                      Last updated -{' '}
                      <span className="text-purple-600">June 30, 2020</span>
                    </p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        How can I use Open PRO without registration?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I import my sitemap to Open PRO?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        How can I switch my subscription between essential, and
                        premium plans?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I cancel my subscription at any time?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Is there an additional discount when paid annually?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What happens if I don’t renew my license after one year?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What kind of payment methods do you provide?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Payments FAQ’s */}
                <div className={page !== 5 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="mb-4 h2">Payments FAQ’s</h2>
                    <p className="text-gray-400">
                      Last updated -{' '}
                      <span className="text-purple-600">June 30, 2020</span>
                    </p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        How can I use Open PRO without registration?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I import my sitemap to Open PRO?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        How can I switch my subscription between essential, and
                        premium plans?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Can I cancel my subscription at any time?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        Is there an additional discount when paid annually?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What happens if I don’t renew my license after one year?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                    <li className="py-4">
                      <h4 className="mb-2 text-xl font-medium">
                        What kind of payment methods do you provide?
                      </h4>
                      <p className="text-lg text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis enim lobortis scelerisque fermentum.
                      </p>
                    </li>
                  </ul>
                </div>
              </main>

              {/* Nav sidebar */}
              <aside
                className="mb-16 md:w-64 md:mb-0 md:mr-10 md:flex-shrink-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4 className="px-3 pb-3 text-lg font-medium border-b border-gray-800">
                  Choose a category
                </h4>
                <nav>
                  <ul>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${
                          page === 1 && 'text-purple-600'
                        }`}
                        to="#0"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(1);
                        }}
                      >
                        <span>Frequently Asked Questions</span>
                        <svg
                          className="flex-shrink-0 ml-2 w-3 h-3 opacity-0 transition duration-150 ease-in-out transform fill-current group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${
                          page === 2 && 'text-purple-600'
                        }`}
                        to="#0"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(2);
                        }}
                      >
                        <span>What is OpenMEV</span>
                        <svg
                          className="flex-shrink-0 ml-2 w-3 h-3 opacity-0 transition duration-150 ease-in-out transform fill-current group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${
                          page === 3 && 'text-purple-600'
                        }`}
                        to="#0"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(3);
                        }}
                      >
                        <span>How does staking work</span>
                        <svg
                          className="flex-shrink-0 ml-2 w-3 h-3 opacity-0 transition duration-150 ease-in-out transform fill-current group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${
                          page === 4 && 'text-purple-600'
                        }`}
                        to="#0"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(4);
                        }}
                      >
                        <span>Development support</span>
                        <svg
                          className="flex-shrink-0 ml-2 w-3 h-3 opacity-0 transition duration-150 ease-in-out transform fill-current group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                    <li className="py-2 border-b border-gray-800">
                      <a
                        className={`flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out ${
                          page === 5 && 'text-purple-600'
                        }`}
                        to="#0"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(5);
                        }}
                      >
                        <span>Resources and Guides</span>
                        <svg
                          className="flex-shrink-0 ml-2 w-3 h-3 opacity-0 transition duration-150 ease-in-out transform fill-current group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Help;
