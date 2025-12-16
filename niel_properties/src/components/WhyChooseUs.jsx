import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- HANDLERS ---
  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) setActiveCard(index);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveCard(null);
  };

  const features = [
    {
      title: "Flexible Investment Options",
      desc: "Start investing with as little or as much as you're comfortable with. Choose fixed or custom investment plans.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
      backContent: "We offer plans ranging from 3 to 24 months. You can automate your savings or make one-time deposits."
    },
    {
      title: "High ROI Opportunities",
      desc: "Our curated projects offer competitive returns with transparent reporting. Track your investments and watch your wealth grow.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      ),
      backContent: "Investors have historically earned between 15% - 35% per annum. We provide quarterly performance reports."
    },
    {
      title: "Verified & Trusted Listings",
      desc: "Every property on Niel Properties is vetted for legal and physical authenticity. You invest or rent confidently.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
      backContent: "Our legal team verifies C of O, Governor's Consent, and land titles. We also perform physical inspections."
    }
  ];

  return (
    <section className="py-16 md:py-14 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-montserrat md:text-4xl font-semi-bold text-gray-900 mb-4 font-montserrat">
              Why Choose Niel Properties?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We're not just a platform — we're your partner in property investment, rental, and ownership.
            </p>
          </div>
          <div className="hidden md:block mb-2">
            <span className="text-blue-600 font-bold text-lg font-montserrat">Niel <span className="text-gray-400 font-normal">Properties.</span></span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            
            // 1. OUTER CONTAINER
            <div 
              key={index} 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index)}
              className="relative w-full h-[340px] group cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              
              {/* 2. INNER CARD */}
              <motion.div
                // Removed CSS 'transition-all' to prevent conflicts
                className="w-full h-full relative will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: activeCard === index ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >

                {/* --- FRONT FACE --- */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center text-center backface-hidden subpixel-antialiased"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    // FIX: translateZ(1px) prevents the browser from flattening the text into a blur
                    transform: "translateZ(1px)" 
                  }}
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                    {feature.title}
                  </h3>
                  <p className="md:text-gray-500 text-gray-800 text-md md:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                  
                  <span className="absolute bottom-6 text-xs text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
                    Tap to flip
                  </span>
                  <span className="absolute bottom-6 text-xs text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                    Hover for more
                  </span>
                </div>

                {/* --- BACK FACE --- */}
                <div 
                  className="absolute inset-0 w-full h-full bg-blue-600 p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center backface-hidden subpixel-antialiased"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    // FIX: Rotate 180 AND translateZ(1px) for sharp text
                    transform: "rotateY(180deg) translateZ(1px)" 
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    More Details
                  </h3>
                  <p className="text-blue-50 text-sm leading-relaxed mb-6">
                    {feature.backContent}
                  </p>
                  
                  <Link 
                    to="/welcome" 
                    onClick={(e) => e.stopPropagation()} 
                    className="px-6 py-2 bg-white text-blue-700 rounded-full text-sm font-bold shadow-md hover:bg-gray-100 transition"
                  >
                    Get Started
                  </Link>
                </div>

              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;