import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="logo-header pointer-events-auto">
              <img 
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667463d01a10a9f3654e3f47_Logo.svg"
                alt="Givingli Logo"
                className="w-[110px] md:w-[150px] h-auto"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-trigger lg:hidden focus:outline-none transition-transform duration-300"
            >
              <div
                className={`menu-bar h-[2px] w-6 bg-black mb-1 transform transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <div
                className={`menu-bar h-[2px] w-6 bg-black mb-1 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div
                className={`menu-bar h-[2px] w-6 bg-black transform transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>

            <nav
              className={`nav-mobile lg:flex lg:items-center lg:gap-6 transition-all duration-300 ${
                isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } lg:opacity-100 lg:max-h-full lg:flex-row lg:static absolute left-0 right-0 top-16 bg-white shadow-md lg:shadow-none`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-6 px-4 lg:px-0 pb-4 lg:pb-0">
                <Link to="/about" className="nav-link hover:text-blue-500 transition-colors">
                  About us
                </Link>
                <Link to="/pro" className="nav-link hover:text-blue-500 transition-colors">
                  Pro
                </Link>
                <a 
                  href="https://go.givingli.com/create?isOpenSubscriptionDialog=true"
                  className="button nav"
                >
                  <span className="button-label bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Start Gifting
                  </span>
                </a>
                <a 
                  href="https://94d82lc66m7.typeform.com/to/EYHkgkjD" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link hover:text-blue-500 transition-colors"
                >
                  Wildfire Assistance
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
