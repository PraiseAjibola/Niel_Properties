import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RoleSelection = () => {
    // State to track which role is selected ('renter' or 'investor')
    const [selectedRole, setSelectedRole] = useState(null);

    // Function to handle the Continue button click
    const handleContinue = () => {
        if (!selectedRole) return;
        console.log(`Navigating as: ${selectedRole}`);
        // Add your navigation logic here, e.g., navigate('/dashboard')
    };

    return (
        <div className="min-h-screen bg-[#F0F4F8] font-sans flex flex-col p-6 md:p-8 relative overflow-hidden">

            {/* --- HEADER --- */}
            <header className="flex justify-between items-center w-full z-10 animate-fade-in-down">
                {/* Logo Area */}
                <div className="flex items-center gap-2 cursor-pointer">
                    {/* Placeholder Logo Icon */}
                    <img src="/Logo_img.png" alt="" />
                </div>

                {/* Help Link */}
                <a href="/help" className="text-sm text-gray-500 font-medium hover:text-gray-900 transition-colors">
                    Help?
                </a>
            </header>

            {/* --- MAIN CONTENT --- */}
            <div className="flex-1 flex items-center justify-center z-10">

                {/* Card Container */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 w-full max-w-[650px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] text-center animate-scale-up">

                    {/* Titles */}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-montserrat">
                        Welcome to <span className="text-[#0047CC]">Niel Properties</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base mb-10 font-medium">
                        Select your role
                    </p>

                    {/* Role Selection Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">

                        {/* RENTER OPTION */}
                        <button
                            onClick={() => setSelectedRole('renter')}
                            className={`group flex items-center p-4 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-md
                ${selectedRole === 'renter'
                                    ? 'border-[#0047CC] bg-blue-50/50 ring-2 ring-blue-100'
                                    : 'border-gray-100 hover:border-gray-200 bg-white'
                                }`}
                        >
                            {/* Icon Container */}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300
                ${selectedRole === 'renter' ? 'bg-[#0047CC] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                                {/* Building Icon SVG */}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className={`font-bold text-sm md:text-base ${selectedRole === 'renter' ? 'text-[#0047CC]' : 'text-gray-900'}`}>
                                    Renter
                                </h3>
                                <p className="text-xs text-gray-400 leading-tight mt-1">
                                    Browse and book shortlets or apartments
                                </p>
                            </div>
                        </button>

                        {/* INVESTOR OPTION */}
                        <button
                            onClick={() => setSelectedRole('investor')}
                            className={`group flex items-center p-4 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-md
                ${selectedRole === 'investor'
                                    ? 'border-[#0047CC] bg-blue-50/50 ring-2 ring-blue-100'
                                    : 'border-gray-100 hover:border-gray-200 bg-white'
                                }`}
                        >
                            {/* Icon Container */}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300
                ${selectedRole === 'investor' ? 'bg-[#0047CC] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                                {/* Chart Icon SVG */}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className={`font-bold text-sm md:text-base ${selectedRole === 'investor' ? 'text-[#0047CC]' : 'text-gray-900'}`}>
                                    Investor
                                </h3>
                                <p className="text-xs text-gray-400 leading-tight mt-1">
                                    Explore investment project and track wallet
                                </p>
                            </div>
                        </button>

                    </div>

                    {/* Continue Button */}
                    <Link
                        // Logic: If renter selected -> go to /renter-page, else go to /investor-page
                        // Update these paths to match your actual route names
                        to={selectedRole === 'renter' ? '/signup' : '/signup'}

                        // Safety Check: If no role is selected,"stop the link from working
                        onClick={(e) => !selectedRole && e.preventDefault()}

                        className={`block w-full py-4 rounded-full font-bold text-center text-white transition-all duration-300 shadow-lg
    ${selectedRole
                                ? 'bg-[#0047CC] hover:bg-blue-800 hover:scale-[1.02] shadow-blue-600/30 cursor-pointer'
                                : 'bg-gray-300 cursor-not-allowed pointer-events-none'}`
                        }
                    >
                        Continue
                    </Link>

                </div>
            </div>

            {/* Background Decorative Blur (Optional Cool Factor) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px]"></div>
            </div>

            {/* --- Custom Keyframe Animations (Embed in your CSS file or style tag) --- */}
            <style>{`
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scale-up {
          animation: scaleUp 0.5s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
      `}</style>

        </div>
    );
};

export default RoleSelection;