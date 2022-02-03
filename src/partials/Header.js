import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute z-30 w-full">
      <div className="px-4 mx-auto max-w-6xl sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Manifold Finance">
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex flex-wrap justify-end items-center grow">
              <li>
                <Link
                  to="/features"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/platform"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  About us
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Support">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    to="/contact"
                    className="flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                       >
                      <a
                    className="flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600"
    href="https://github.com/manifoldfinance/support"
  >
                    Help center
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600"
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 text-gray-300 transition duration-150 ease-in-out fill-current hover:text-gray-200"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="overflow-hidden absolute left-0 top-full z-20 px-4 w-full transition-all duration-300 ease-in-out sm:px-6"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="px-4 py-2 bg-gray-800">
                <li>
                  <Link
                    to="/features"
                    className="flex py-2 text-gray-300 hover:text-gray-200"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/platform"
                    className="flex py-2 text-gray-300 hover:text-gray-200"
                  >
                    Platform
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex py-2 text-gray-300 hover:text-gray-200"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="flex justify-center py-2 w-full font-medium text-purple-600 hover:text-gray-200"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="inline-flex justify-center items-center px-4 py-2 my-2 w-full font-medium text-white bg-purple-600 rounded-sm border border-transparent transition duration-150 ease-in-out hover:bg-purple-700"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
