import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {

    // 1. Define Animation Variants
    const slideFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const slideFromRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
    };

    const slideFromTop = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
    };

    return (
        <div className="relative h-screen w-full font-sans overflow-hidden">

            {/* Background Image & Overlay (No Changes) */}
            <img
                src="/Hero_img.png"
                alt="Real Estate Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-16 text-white">

                <div className="max-w-4xl space-y-6 md:space-y-8 mt-[-150px] md:mt-0">

                    {/* --- HEADING: SLIDES FROM LEFT --- */}
                    <motion.h1
                        initial="hidden"
                        whileInView="visible" // <--- CHANGED from 'animate' to 'whileInView'
                        viewport={{ once: false }} // <--- Ensures it plays every time you see it
                        variants={slideFromLeft}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight drop-shadow-lg"
                    >
                        Invest. Rent. Own. <br className="md:hidden" /> Your Path
                        <span className="hidden md:inline"> </span>
                        to Real Estate Wealth Starts <br className="hidden md:block" />
                        Here.
                    </motion.h1>

                    {/* --- BUTTONS: SLIDE FROM RIGHT --- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible" // <--- CHANGED
                        viewport={{ once: false }}
                        variants={slideFromRight}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-medium transition duration-300 shadow-lg text-sm md:text-base w-full sm:w-auto">
                            Dashboard
                        </button>

                        <Link
                            to="/welcome"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-medium transition duration-300 shadow-lg text-sm md:text-base w-full sm:w-auto inline-block text-center"
                        >
                            Start Investing
                        </Link>
                    </motion.div>
                </div>

                {/* --- MOBILE CARD: SLIDES FROM TOP --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible" // <--- CHANGED
                    viewport={{ once: false }}
                    variants={slideFromTop}
                    className="mt-12 md:hidden bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-lg shadow-xl"
                >
                    <p className="text-base font-medium leading-relaxed drop-shadow-sm">
                        Explore flexible plans to invest, rent, or save toward premium properties.
                    </p>
                </motion.div>

                {/* --- DESKTOP CARD: SLIDES FROM TOP --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible" // <--- CHANGED
                    viewport={{ once: false }}
                    variants={slideFromTop}
                    className="absolute bottom-10 right-6 lg:right-16 max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-xl hidden md:block"
                >
                    <p className="text-lg font-medium leading-relaxed drop-shadow-sm">
                        Explore flexible plans to invest, <br /> rent, or save toward premium <br /> properties.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;