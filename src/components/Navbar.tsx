
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Start closing animation
      setIsClosing(true);
      // After animation completes, actually close the menu
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 300); // 300ms matches the animation duration
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-medium text-gray-800">Portfolio</Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors rounded-full px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors rounded-full px-4 py-2 hover:bg-gray-100">About</Link>
          <Link to="/skills" className="text-gray-600 hover:text-gray-900 transition-colors rounded-full px-4 py-2 hover:bg-gray-100">Skills</Link>
          <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors rounded-full px-4 py-2 hover:bg-gray-100">Portfolio</Link>
          <Link to="/contact" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">Contact</Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-full hover:bg-gray-100"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
          {/* Close button positioned at the top right */}
          <button 
            onClick={toggleMobileMenu}
            className="absolute top-5 right-6 text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            <Link 
              to="/" 
              className="text-xl text-gray-800 hover:text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors" 
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-xl text-gray-800 hover:text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors" 
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className="text-xl text-gray-800 hover:text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors" 
              onClick={toggleMobileMenu}
            >
              Skills
            </Link>
            <Link 
              to="/portfolio" 
              className="text-xl text-gray-800 hover:text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors" 
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="text-xl px-6 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors" 
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
