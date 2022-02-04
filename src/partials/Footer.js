/**
 * @file Footer
 * @summary Webpage Footer
 * @version 1.0.0
 */
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="px-4 mx-auto max-w-6xl sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid gap-8 mb-8 md:grid-cols-12 lg:gap-20 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link
                  href="/"
                  className="inline-block"
                  aria-label="Manifold"
                ></Link>
              </div>
              <div className="text-gray-400">
                <br></br>
                <br></br>
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="grid gap-8 md:col-span-8 lg:col-span-7 sm:grid-cols-3">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      {' '}
                    </Link>
                    <a
                      rel="noopener noreferrer"
                      href={'https://manifoldfinance.github.io/hub/'}
                    >
                      Developer Hub
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"></Link>
                    <a
                      rel="noopener noreferrer"
                      href={'https://openmev.page.link/support-chat'}
                    >
                      Helpdesk
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"></Link>
                    <a
                      rel="noopener noreferrer"
                      href={'https://github.com/manifoldfinance/openmev-sdk'}
                    >
                      OpenMEV SDK
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"></Link>
                    <a
                      rel="noopener noreferrer"
                      href={'https://github.com/manifoldfinance/disco'}
                    >
                      Design System
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">Community</h6>
                <ul>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"></Link>
                    <a
                      rel="noopener noreferrer"
                      href={'https://forums.manifoldfinance.com/'}
                    >
                      Forums
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      {' '}
                    </Link>
                    <a
                      rel="noopener noreferrer"
                      href={
                        'https://forums.manifoldfinance.com/t/guide-how-to-stake-fold-for-xfold/150'
                      }
                    >
                      Staking Guide
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      {' '}
                    </Link>
                    <a
                      rel="noopener noreferrer"
                      href={'https://t.me/manifoldfinance'}
                    >
                      Telegram
                    </a>
                  </li>

                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"></Link>
                    <a
                      rel="noopener noreferrer"
                      href={
                        'https://github.com/manifoldfinance/security/tree/master'
                      }
                    >
                      Security and Bug Bounties
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">Links</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="https://analytics.sushi.com/tokens/0xd084944d3c05cd115c09d072b9f44ba3e0e45921"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    ></Link>
                    $FOLD Token
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://form.typeform.com/to/Sr7xLL3s"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    ></Link>
                    Partnership Inquires
                  </li>
                  <li className="mb-1">
                    <Link
                      href="#"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    >
                      {' '}
                    </Link>
                    <a
                      rel="noopener noreferrer"
                      href={
                        'https://github.com/manifoldfinance/legal/blob/master/service/privacy_policy.md'
                      }
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      {' '}
                    </Link>
                    <a
                      rel="noopener noreferrer"
                      href={'https://github.com/manifoldfinance/legal'}
                    >
                      Legal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="https://twitter.com/foldfinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 rounded-full transition duration-150 ease-in-out hover:text-gray-100 hover:bg-purple-600"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="https://github.com/manifoldfinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 rounded-full transition duration-150 ease-in-out hover:text-gray-100 hover:bg-purple-600"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="mr-4 text-sm text-gray-400">
              &copy; 2021 Manifold Finance, Inc. - All Rights Reserved
            </div>
            <div id="title" className="mr-4 text-sm text-gray-400"></div>
            <div id="status" status="wait"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
/** @export Footer */
