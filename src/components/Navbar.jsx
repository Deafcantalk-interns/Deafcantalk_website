import React from 'react';
import { Link } from 'react-router-dom';
import deafcantalkLogo from '../assets/deafcantalk_logo.jpeg';

const Navbar = () => {
  return (
    <header
      className="text-white shadow-lg animate-slide-down mx-4 mt-2 rounded-full fixed top-0 left-0 right-0 z-50"
      style={{
        padding: '0.5rem 1.5rem',
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
          <div className="flex items-center gap-3">
            <img
              src={deafcantalkLogo}
              alt="DeafCanTalk"
              className="h-10 w-10 object-cover rounded-full shadow-md"
            />
            <span className="text-xl font-bold" style={{ color: '#0D5364' }}>DeafCanTalk</span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="flex gap-6 items-center">
          <Link
            to="/"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-200"
          >
            About
          </Link>
          <Link
            to="/education"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-300"
          >
            Education
          </Link>
          <Link
            to="/blog"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-400"
          >
            Blog
          </Link>
          <Link
            to="/gallery"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-500"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-[#1E88A8] no-underline text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in delay-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
