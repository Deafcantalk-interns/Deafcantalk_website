import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import deafcantalkLogo from '../assets/deafcantalk_logo.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="text-white shadow-lg animate-slide-down mx-2 md:mx-4 mt-2 rounded-full fixed top-0 left-0 right-0 z-50 py-4 px-5 md:px-6 lg:px-8"
      style={{
        padding: '0.5rem 1rem md:0.5rem 1.5rem',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)'
      }}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo and brand */}
        <Link to="/" className="no-underline">
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src={deafcantalkLogo}
              alt="DeafCanTalk"
              className="h-8 w-8 md:h-10 md:w-10 object-cover rounded-full shadow-md"
            />
            <span className="text-base md:text-xl font-bold" style={{ color: '#0D5364' }}>DeafCanTalk</span>
          </div>
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links - Desktop */}
        <nav className="hidden md:flex gap-3 lg:gap-6 items-center flex-wrap mr-4 lg:mr-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-sm lg:text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-100 whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-sm lg:text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-200 whitespace-nowrap"
          >
            About
          </Link>
          <Link
            to="/education"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-sm lg:text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-300 whitespace-nowrap"
          >
            Education
          </Link>
          <Link
            to="/blog"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-sm lg:text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-400 whitespace-nowrap"
          >
            Blog
          </Link>
          <Link
            to="/gallery"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-sm lg:text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-500 whitespace-nowrap"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-sm lg:text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-600 whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
          >
            About
          </Link>
          <Link
            to="/education"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
          >
            Education
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
          >
            Blog
          </Link>
          <Link
            to="/gallery"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
