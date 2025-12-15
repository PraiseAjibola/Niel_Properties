import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  // State for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    // FIX 1: 'min-h-screen' allows mobile to scroll if needed. 'lg:h-screen' locks desktop height.
    <div className="min-h-screen lg:h-screen bg-white font-sans flex flex-col lg:flex-row items-center justify-center p-0 lg:p-6 overflow-x-hidden lg:overflow-hidden relative">
      
      {/* Back to Home Link */}
      {/* Adjusted position for mobile to ensure it's visible over the image or white bg */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-10 z-30">
        <a href="/" className="text-white lg:text-gray-400 text-sm hover:text-gray-200 lg:hover:text-gray-900 transition flex items-center gap-2 drop-shadow-md lg:drop-shadow-none">
          <span className="h-4 w-[1px] bg-white lg:bg-gray-300"></span>
          Back to Home
        </a>
      </div>

      {/* Main Container */}
      {/* Grid: 1 column on mobile, 2 columns on large screens */}
      <div className="w-full max-w-[1400px] h-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24">

        {/* --- LEFT SIDE (Image) --- */}
        {/* Mobile: Height fixed (h-64), rounded bottom corners. Desktop: Height full, rounded all corners */}
        <div className="relative h-64 sm:h-80 lg:h-full w-full rounded-b-[3rem] lg:rounded-[2rem] overflow-hidden order-1">
          
          {/* Background Image */}
          <img 
            src="/Login_img.png" 
            alt="Luxury Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 lg:to-transparent"></div>

          {/* Bottom Overlay Image (Hidden on Mobile to save space) */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-full p-8 z-10">
             <img 
               src="/Login_b_img.png" 
               alt="Feature overlay" 
               className="w-[40rem] h-auto rounded-2xl shadow-lg"
             />
          </div>
        </div>

        {/* --- RIGHT SIDE (Form) --- */}
        {/* Added padding for mobile content */}
        <div className="w-full max-w-md mx-auto h-full flex flex-col justify-center p-6 lg:p-0 order-2">
          
          {/* Header */}
          <div className="mb-6 mt-4 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-montserrat">
             Login to Your Account
            </h1>
            <p className="text-gray-500 text-sm">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-full hover:bg-gray-50 transition duration-300">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-bold text-gray-700">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-full hover:bg-gray-50 transition duration-300">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-5 h-5" />
              <span className="text-sm font-bold text-gray-700">Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-5">
            <div className="absolute w-full border-t border-gray-200"></div>
            <span className="relative bg-white px-4 text-xs text-gray-400 font-medium">OR</span>
          </div>

          {/* Form Fields */}
          <form className="space-y-4">
            
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-900">Email</label>
              <input 
                type="email" 
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-600 focus:bg-white transition text-sm"
              />
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-900">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-600 focus:bg-white transition text-sm"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                    ) : (
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-900">Confirm Password</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-600 focus:bg-white transition text-sm"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                     {showConfirmPassword ? (
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                    ) : (
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 pt-1">
              <input 
                type="checkbox" 
                id="terms"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
              />
              <label htmlFor="terms" className="text-gray-500 text-sm">
                I agree to the <a href="#" className="text-gray-900 underline">terms and privacy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#0047CC] hover:bg-blue-700 text-white font-bold py-3.5 rounded-full transition duration-300 shadow-lg shadow-blue-600/20"
            >
              Access My Account
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-500 font-medium pb-8 lg:pb-0">
              Don't have an account? <Link to="/signup" className="text-[#0047CC] font-bold hover:underline">Sign up</Link>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default SignUp;