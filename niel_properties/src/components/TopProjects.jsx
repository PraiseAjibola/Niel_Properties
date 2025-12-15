import React from 'react';
import { motion } from 'framer-motion';

const TopProjects = () => {

  // Animation Variants
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* --- Header Section (Animates from Left) --- */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInLeft}
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Investment Projects
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Explore our most promising real estate investment opportunities, carefully selected for high returns and low risk.
            </p>
          </div>
          
          <div className="hidden md:block mb-2 shrink-0">
            <span className="text-blue-600 font-bold text-lg">Niel <span className="text-gray-400 font-normal">Capital.</span></span>
          </div>
        </motion.div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* --- CARD 1 (Left): Logo Box + Text Below (Animates Up with Delay) --- */}
          <motion.div 
            className="flex flex-col gap-6 group cursor-pointer h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            
            {/* The Bordered Box */}
            <div className="relative border border-gray-400 rounded-[2rem] p-8 md:p-10 h-64 md:h-80 flex items-center justify-center transition-shadow duration-300 hover:shadow-xl bg-white w-full">
              
              {/* Arrow Button */}
              <div className="absolute top-5 right-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transform transition-transform duration-300 group-hover:rotate-45 z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19L19 5M5 5h14v14"></path></svg>
              </div>

              {/* Image */}
              <img 
                src="/Top_investments_img.png" 
                alt="Niel Hostel"
                className="w-48 md:w-72 object-contain max-h-full" 
              />
            </div>

            {/* Text Below */}
            <div className="flex-grow">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-snug">
                Own, Earn, and Grow Your Wealth with NIEL CAPITAL Experience seamless real estate investment
              </h3>
            </div>
          </motion.div>

          {/* --- CARD 2 (Right): Full Image Background (Animates Up with More Delay) --- */}
          <motion.div 
            className="relative rounded-[2rem] overflow-hidden h-80 lg:h-auto min-h-[320px] group cursor-pointer w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } // 0.2s delay creates staggering effect
              }
            }}
          >
            
            <img 
              src="/Top_project_img.png" 
              alt="David's Court"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>

            {/* Arrow Button */}
            <div className="absolute top-5 right-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transform transition-transform duration-300 group-hover:rotate-45 z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19L19 5M5 5h14v14"></path></svg>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="text-white text-lg font-medium tracking-wide leading-snug">
                David's Court Abraham Adesanya, Lagos,
              </h3>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default TopProjects;