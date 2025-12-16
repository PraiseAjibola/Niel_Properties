import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { motion } from 'framer-motion';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // 2. Initialize the hook
  const navigate = useNavigate();

  // --- LOGIC ---
  const isLengthValid = password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Safety Check: Ensure they match before navigating
    if (password !== confirmPassword) {
       alert("Passwords do not match!");
       return;
    }
    
    // 3. Navigate to the Success Page
    // Make sure you have a route set up for '/success' or whatever you named that page
    navigate('/success'); 
  };

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
        <div className="flex items-center gap-2">
           <div className="flex items-center gap-1 font-bold text-gray-900 text-lg tracking-wide">
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
          className="bg-white w-full max-w-[500px] rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] text-center"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-montserrat">
            Reset Your Password?
          </h1>

          <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed max-w-xs mx-auto">
            Please enter your new password below. Make sure it's strong and secure.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* New Password Field */}
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-6 py-4 rounded-full border bg-white text-gray-900 focus:outline-none focus:ring-1 transition placeholder-gray-400 text-sm
                  ${isLengthValid 
                    ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                    : 'border-gray-200 focus:border-[#0047CC] focus:ring-[#0047CC]'}`
                }
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? (
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                ) : (
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                )}
              </button>
            </div>

            {/* Confirm Password Field */}
            <input 
              type="password" 
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-[#0047CC] focus:ring-1 focus:ring-[#0047CC] transition placeholder-gray-400 text-sm"
            />

            {/* Helper Text */}
            <div className="flex items-center gap-2 px-2 -mt-1 mb-2">
                <p className={`text-xs transition-colors duration-300 text-left
                    ${isLengthValid ? 'text-green-600 font-bold' : 'text-gray-400'}`
                }>
                    Password must be at least 8 characters
                </p>
            </div>

            {/* Reset Button */}
            <button 
              type="submit" 
              disabled={!isLengthValid} 
              className={`w-full font-bold py-4 rounded-full transition-all duration-300 shadow-lg text-sm md:text-base mb-4
                ${isLengthValid 
                  ? 'bg-[#0047CC] hover:bg-blue-800 text-white shadow-blue-600/20 cursor-pointer transform hover:scale-[1.02]' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'}`
              }
            >
              Reset Password
            </button>

            {/* Back to Login */}
            <Link 
              to="/login" 
              className="text-gray-500 hover:text-[#0047CC] text-sm font-medium transition-colors inline-block"
            >
              Back to Login
            </Link>

          </form>

        </motion.div>
      </div>

    </div>
  );
};

export default ResetPassword;