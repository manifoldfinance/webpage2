import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-wrap flex-grow justify-end items-center">
              <li>
                <a
                  href="https://analytics.sushi.com/tokens/0xd084944d3c05cd115c09d072b9f44ba3e0e45921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  FOLD Token
                </a>
              </li>
              <li>
                <a
                  href="https://forums.manifoldfinance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Forums
                </a>
              </li>
              <li>
                <a
                  href="https://forums.manifoldfinance.com/t/guide-how-to-stake-fold-for-xfold/150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Staking
                </a>
              </li>
              <li>
                <a
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://t.me/manifoldfinance"
                >
                  Telegram
                </a>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resources">
                {/* 2nd level: hover */}
                <li>
                  <Link className="flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-white-600">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={'https://form.typeform.com/to/Sr7xLL3s'}
                    >
                      Contact us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-white-600">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={'https://manifoldfinance.github.io/hub/'}
                    >
                      Developer Hub
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://status.manifoldfinance.com"
                    className="flex px-4 py-2 text-sm font-medium leading-tight text-gray-400 hover:text-white-600"
                  >
                    Service Status
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex flex-wrap flex-grow justify-end items-center">
              <li>
                <Link className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out text-white-600 hover:text-gray-200" >
                  <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://staking.manifoldfinance.com`}
                  >
                  Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link className="ml-3 text-white btn-sm bg-white-600 hover:bg-white-700"
                >
                  <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://staking.manifoldfinance.com`}
                  >
                  Staking
                    </a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
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
                  <Link className="flex py-2 text-gray-300 hover:text-gray-200">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        'https://analytics.sushi.com/tokens/0xd084944d3c05cd115c09d072b9f44ba3e0e45921'
                      }
                    >
                      FOLD Token
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="flex py-2 text-gray-300 hover:text-gray-200">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={'https://status.manifoldfinance.com/'}
                    >
                      Service Status
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="flex py-2 text-gray-300 hover:text-gray-200">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://sambacha.github.io/primitives/`}
                    >
                      Primitives Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="flex py-2 text-gray-300 hover:text-gray-200">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://t.me/manifoldfinance`}
                    >
                      Telegram
                    </a>
                  </Link>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/foldfinance"
                  >
                    @foldfinance
                  </a>
                </li>
                <li className="py-2 my-2 border-t border-b border-gray-700">
                  <span className="flex py-2 text-gray-300">Support</span>
                  <ul className="pl-4">
                    <li>
                      <Link className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200">
                        <a href={'mailto:ops@manifoldfinance.com'}>
                          Contact us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={'https://github.com/manifoldfinance/support'}
                        >
                          Helpdesk
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/404"
                        className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                      >
                        404
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="https://app.sushi.com/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0xd084944d3c05cd115c09d072b9f44ba3e0e45921"
                    className="flex justify-center py-2 w-full font-medium text-white-600 hover:text-gray-200"
                  >
                    Trade
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://staking.manifoldfinance.com"
                    className="inline-flex justify-center items-center px-4 py-2 my-2 w-full font-medium text-white bg-gray-600 rounded-sm border border-transparent transition duration-150 ease-in-out hover:bg-white-700"
                  >
                    Staking
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
/** @export Header */
