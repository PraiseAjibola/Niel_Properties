import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    
    // Animation Variants
    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Stagger the cards animation
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* --- LEFT SIDE: Text & Main Image (Animates from Left) --- */}
                    <motion.div 
                        className="flex flex-col gap-8 h-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }} // Animates when 20% visible
                        variants={slideInLeft}
                    >

                        {/* Header Text */}
                        <div className="max-w-md shrink-0"> 
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How It Works
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Discover how easy it is to invest, rent, or own property with Niel Properties.
                                Follow these four simple steps to begin your journey.
                            </p>
                        </div>

                        {/* Large Feature Image */}
                        <div className="relative w-full rounded-3xl lg:rounded-l-none overflow-hidden h-64 lg:h-auto lg:flex-1 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] lg:-ml-24 lg:w-[calc(100%+6rem)]">
                            <img
                                src="/Works_img.png"
                                alt="Modern House"
                                className="w-full h-full object-cover lg:absolute lg:inset-0 transform hover:scale-105 transition duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* --- RIGHT SIDE: Staggered Cards Grid (Animates from Right/Bottom) --- */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-5 relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={containerVariants} // Apply stagger effect
                    >

                        {/* Column 1 (Left): Starts lower */}
                        <div className="flex flex-col gap-5 md:mt-12">

                            {/* Card 1: Browse Properties */}
                            <motion.div variants={cardVariants} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col items-center text-center group">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Browse Properties</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Explore a wide range of verified shortlets, apartments, lands, and investment projects. Use filters to find options that match your goals, location, and budget.
                                </p>
                            </motion.div>

                            {/* Card 2: Earn Returns */}
                            <motion.div variants={cardVariants} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col items-center text-center group">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Earn Returns</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Track your investment returns or get ready to move into your booked property. Enjoy full ownership, rental access, or earnings—right from your dashboard
                                </p>
                            </motion.div>

                        </div>

                        {/* Column 2 (Right): Starts at top */}
                        <div className="flex flex-col gap-5">

                            {/* Card 3: Sign Up */}
                            <motion.div variants={cardVariants} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col items-center text-center group">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Sign Up & Verify</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Create an account using your email, phone, or social login. Complete your profile and verify your identity to access full features.
                                </p>
                            </motion.div>

                            {/* Card 4: Pay or Save */}
                            <motion.div variants={cardVariants} className="bg-white py-6 px-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col items-center text-center group">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight whitespace-nowrap">
                                    Pay or Save in Installments
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Choose to pay instantly or start a flexible savings plan toward your dream property. You can invest a fixed amount or save gradually based on your income.
                                </p>
                            </motion.div>

                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;