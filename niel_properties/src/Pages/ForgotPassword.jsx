import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to send email...
        navigate('/check-email');
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
                        Forgot Your Password?
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed max-w-xs mx-auto">
                        Enter your email to receive password recover instructions
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-6 py-4 rounded-full border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-[#0047CC] focus:ring-1 focus:ring-[#0047CC] transition placeholder-gray-400 text-sm"
                        />

                        {/* Recover Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#0047CC] hover:bg-blue-800 text-white font-bold py-4 rounded-full transition duration-300 shadow-lg shadow-blue-600/20 text-sm md:text-base"
                        >
                            Recover Password
                        </button>

                        {/* Back to Login */}
                        <Link
                            to="/login"
                            className="text-gray-500 hover:text-[#0047CC] text-sm font-medium transition-colors mt-2 inline-block"
                        >
                            Back to Login
                        </Link>

                    </form>

                </motion.div>
            </div>

        </div>
    );
};

export default ForgotPassword;