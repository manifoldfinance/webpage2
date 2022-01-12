import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="/" className="inline-block" aria-label="Cruip">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4985 16.3208C21.5691 10.5557 16.4071 6.44877 10.6537 6.79257C10.391 6.80681 10.1283 6.83161 9.86568 6.86697C5.95998 7.37458 2.7975 9.83358 1.22379 13.1441C1.01315 11.6466 1.10991 10.1232 1.50844 8.66258C1.90696 7.20196 2.59925 5.83332 3.54506 4.63634C7.42434 -0.313195 14.5687 -1.3381 19.5036 2.34628C20.3065 2.94483 21.0208 3.64875 21.6263 4.43807C24.2085 7.80614 24.5826 12.4535 22.4985 16.3208Z"
                      fill="white"
                    />
                    <path
                      d="M18.9834 28.9652C17.3106 30.4957 15.1885 31.4769 12.9151 31.7703C6.75721 32.5714 1.08216 28.2126 0.239608 22.0371C-0.0615369 19.8709 0.279984 17.6659 1.22372 15.6833C2.79721 12.3729 5.95982 9.91393 9.86568 9.4064C10.1283 9.37125 10.391 9.34642 10.6537 9.33195C8.02031 11.7263 6.57489 15.3439 7.09502 19.1579C7.36521 21.1733 8.17938 23.0825 9.45414 24.6899C11.6921 27.5037 15.21 29.1915 18.9834 28.9652Z"
                      fill="white"
                    />
                    <path
                      d="M22.1363 27.737C21.8741 27.7714 21.6113 27.7972 21.3483 27.8108C17.5752 28.0372 14.0572 26.3497 11.8196 23.5351C16.0987 24.5833 20.8613 23.0804 23.7776 19.361C24.187 18.8402 24.5505 18.2863 24.8639 17.7055C26.9484 13.8385 26.5747 9.19061 23.991 5.82225C28.0126 7.12214 31.1497 10.6381 31.76 15.1057C32.6026 21.2814 28.2945 26.9383 22.1363 27.737Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">LEI: 2549005ODLPS9WT4VE61</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="grid gap-8 md:col-span-8 lg:col-span-7 sm:grid-cols-3">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">Solutions</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    >
                      OpenMEV
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    >
                      SecureRPC
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    >
                      MultiChain Settlement
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"></Link>
                    <a
                      rel="noopener noreferrer"
                      href={"https://github.com/manifoldfinance"}
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      {" "}
                    </Link>
                    <a
                      rel="noopener noreferrer"
                      href={"https://github.com/manifoldfinance/overview-docs/"}
                    >
                      Overview Docs
                    </a>
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      {" "}
                    </Link>
                    <a
                      rel="noopener noreferrer"
                      href={"https://t.me/manifoldfinance"}
                    >
                      Telegram
                    </a>
                  </li>

                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"></Link>
                    <a
                      rel="noopener noreferrer"
                      href={"https://github.com/manifoldfinance/pki"}
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="#"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    ></Link>
                    Overview
                  </li>
                  <li className="mb-1">
                    <Link
                      href="#"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    ></Link>
                    Roadmap
                  </li>
                  <li className="mb-1">
                    <Link
                      href="#"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
                    >
                      {" "}
                    </Link>
                    Partners
                  </li>
                  <li className="mb-1">
                    <Link className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      {" "}
                    </Link>
                    <a
                      rel="noopener noreferrer"
                      href={"https://github.com/manifoldfinance/legal"}
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
              &copy; 2022 CommodityStream LP - . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
