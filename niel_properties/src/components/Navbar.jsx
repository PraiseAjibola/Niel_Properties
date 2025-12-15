import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Add the curly braces

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <> 
      {/* 1. The Sticky Navbar */}
      <nav className="flex sticky top-0 justify-between items-center px-6 lg:px-16 py-4 bg-white/80 backdrop-blur-md shadow-sm font-sans z-50">
        
        {/* --- Logo --- */}
        <div className="flex-shrink-0 cursor-pointer">
          <img 
            src="/Logo_img.png"
            alt="Niel Capital Logo" 
            className="h-8"
          />
        </div>

        {/* --- Center Links --- */}
        <ul className="hidden lg:flex gap-10 list-none">
          <li><a href="/" className="text-blue-700 font-semibold">Home</a></li>
          <li><a href="/dashboard" className="text-gray-600 font-medium hover:text-blue-700 transition duration-300">Dashboard</a></li>
          <li><a href="/investment" className="text-gray-600 font-medium hover:text-blue-700 transition duration-300">Investment</a></li>
          <li><a href="/about" className="text-gray-600 font-medium hover:text-blue-700 transition duration-300">About</a></li>
          <li><a href="/contact" className="text-gray-600 font-medium hover:text-blue-700 transition duration-300">Contact</a></li>
        </ul>

        {/* --- Right Side Auth --- */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="/login" className="text-gray-700 font-medium hover:text-blue-700 transition">Log In</a>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition duration-300">
           <Link to="/signup">Sign Up</Link>
          </button>
        </div>

        {/* --- Hamburger Icon --- */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* 2. The Mobile Menu & Overlay 
         MOVED OUTSIDE the <nav>. Now 'fixed' will correctly relate to the screen window,
         not the blurred navbar container.
      */}
      
      {/* Side Menu */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b">
            <span className="font-bold text-xl text-blue-700">Menu</span>
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
        </div>

        <div className="flex flex-col p-6 gap-6">
          <a href="/" className="text-blue-700 font-semibold text-lg" onClick={toggleMenu}>Home</a>
          <a href="/dashboard" className="text-gray-600 font-medium text-lg hover:text-blue-700" onClick={toggleMenu}>Dashboard</a>
          <a href="/investment" className="text-gray-600 font-medium text-lg hover:text-blue-700" onClick={toggleMenu}>Investment</a>
          <a href="/about" className="text-gray-600 font-medium text-lg hover:text-blue-700" onClick={toggleMenu}>About</a>
          <a href="/contact" className="text-gray-600 font-medium text-lg hover:text-blue-700" onClick={toggleMenu}>Contact</a>
          
          <div className="flex flex-col gap-4 mt-4 border-t pt-6">
            <a href="/login" className="text-center text-gray-700 font-medium border border-gray-300 py-2 rounded-md hover:bg-gray-50" onClick={toggleMenu}>Log In</a>
            <button className="bg-blue-700 text-white py-2 rounded-md font-medium hover:bg-blue-800" onClick={toggleMenu}>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-[55]"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;