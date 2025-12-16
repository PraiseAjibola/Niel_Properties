import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SuccessPage = () => {

  // Animation Variant
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] font-sans flex flex-col relative overflow-hidden">
      
      {/* --- HEADER --- */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 md:px-10 z-20">
        <div className="flex items-center gap-2">
           <div className="flex items-center gap-1 font-bold text-gray-900 text-lg tracking-wide">
             {/* Replace with your logo */}
             <img src="/Logo_img.png" alt="Niel Capital" className="h-8" />
           </div>
        </div>
        
        <a href="/help" className="text-sm text-gray-500 font-medium hover:text-gray-900 transition">
          Help?
        </a>
      </header>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex items-center justify-center p-4">
        
        <motion.div 
          className="bg-white w-full max-w-[500px] rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={scaleUp}
        >
          
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-montserrat">
            Success!
          </h1>

          {/* Success Icon (Shield with Checkmark) */}
          <div className="mb-8 relative">
            {/* Blue Shield Shape */}
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0047CC]">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="currentColor" />
            </svg>
            
            {/* White Checkmark (Positioned absolutely in center) */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          {/* Success Message */}
          <p className="text-gray-500 text-sm md:text-base mb-10 leading-relaxed max-w-[280px]">
            Your password has been successfully reset. You can now log in
          </p>

          {/* Login Button */}
          <Link to="/login">
            <button 
              className="bg-[#0047CC] hover:bg-blue-800 text-white font-bold py-3 px-12 rounded-full transition duration-300 shadow-lg shadow-blue-600/20 text-sm md:text-base"
            >
              Log In
            </button>
          </Link>

        </motion.div>
      </div>

    </div>
  );
};

export default SuccessPage;