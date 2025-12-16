import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CheckEmail = () => {
  // You would typically get this email from your router state or context
  // For now, I'm hardcoding a masked email like in the design
  const userEmail = "ok*******20@gmail.com";

  // Animation Variant
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] font-sans flex flex-col relative overflow-hidden">
      
      {/* --- HEADER --- */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 md:px-10 z-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
           {/* Replace with your actual logo img tag */}
           <div className="flex items-center gap-1 font-bold text-gray-900 text-lg tracking-wide">
             <img src="/Logo_img.png" alt="" />
           </div>
        </div>
        
        {/* Help Link */}
        <a href="/help" className="text-sm text-gray-500 font-medium hover:text-gray-900 transition">
          Help?
        </a>
      </header>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex items-center justify-center p-4">
        
        <motion.div 
          className="bg-white w-full max-w-[500px] rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] text-center"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-montserrat">
            Check Your Email
          </h1>

          {/* Subtitle with dynamic email */}
          <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed mx-auto">
            We have sent a password recover instruction to <br className="hidden md:block"/>
            <span className="font-medium text-gray-700">{userEmail}</span>
          </p>

          {/* Next Button */}
          {/* Typically this might go to a 'Reset Password' page or back to Login */}
          <Link to="/reset-password"> 
            <button 
              className="w-full bg-[#0047CC] hover:bg-blue-800 text-white font-bold py-4 rounded-full transition duration-300 shadow-lg shadow-blue-600/20 text-sm md:text-base mb-6"
            >
              Next
            </button>
          </Link>
          
          {/* Optional: Resend Link (Common UX pattern, though not explicitly in your image) */}
          <div className="text-sm text-gray-400">
            Did not receive the email? <button className="text-[#0047CC] font-bold hover:underline">Resend</button>
          </div>

        </motion.div>
      </div>

    </div>
  );
};

export default CheckEmail;