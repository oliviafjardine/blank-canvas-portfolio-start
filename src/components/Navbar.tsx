
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-medium text-gray-800">Portfolio</Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link to="/skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</Link>
          <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</Link>
          <Link to="/contact" className="px-4 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors">Contact</Link>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
