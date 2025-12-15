import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6 flex flex-col font-sans">
      
      {/* --- HEADER --- */}
      <header className="flex justify-between items-center mb-4 px-2">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
           {/* Replace this SVG/Text with your actual Logo Image */}
           {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
           <div className="flex items-center gap-1 font-bold text-gray-900 text-lg tracking-wide">
             <img src="/Logo_img.png" alt="" />
           </div>
        </div>
        
        {/* Help Link */}
        <a href="/help" className="text-xs md:text-sm text-gray-500 font-medium hover:text-gray-900 transition">
          Help?
        </a>
      </header>

      {/* --- MAIN CONTENT CONTAINER --- */}
      {/* This creates the large rounded frame for the background image */}
      <div className="relative flex-1 rounded-[2rem] md:rounded-[2rem] overflow-hidden w-full min-h-[600px] shadow-sm bg-gray-100">
        
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-105">
          <img 
          src="/WelcomeScreen_img.png" // Replace with your image path
          alt="Building Background"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 blur-[6px] brightness-90"
        />
        </div>

        {/* Centered White Card */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-[450px] shadow-2xl text-center relative z-10 animate-fade-in-up">
            
            {/* Headline */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-montserrat">
              Welcome to <span className="text-[#0047CC]">Niel Properties</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-xs md:text-[18px] mb-10 leading-relaxed font-medium">
              Invest, Rent, Book or Sell Real Estate Securely
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              
              {/* Sign Up Button */}
              <Link to="/role">
                <button className="w-full bg-[#0047CC] hover:bg-blue-800 text-white font-bold py-4 rounded-full transition duration-300 shadow-lg shadow-blue-600/20 text-sm md:text-base">
                  Sign Up as New User
                </button>
              </Link>
              
              {/* Login Button */}
              <Link to="/login">
                <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 rounded-full border border-gray-200 transition duration-300 text-sm md:text-base">
                  Login to Your Account
                </button>
              </Link>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WelcomeScreen;