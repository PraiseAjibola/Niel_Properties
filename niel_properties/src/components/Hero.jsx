import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full font-sans">
      
      {/* 1. Background Image */}
      <img 
        src="/Hero_img.png" 
        alt="Real Estate Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* 3. Main Content Container */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-16 text-white">
        
        {/* --- Left Side: Heading & Buttons --- */}
        <div className="max-w-4xl space-y-6 md:space-y-8 mt-16 md:mt-0">
          
          {/* RESPONSIVE TEXT FIX: 
              text-3xl (Mobile) -> md:text-5xl (Tablet) -> lg:text-6xl (Desktop) 
          */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
            Invest. Rent. Own. <br className="md:hidden" /> Your Path 
            <span className="hidden md:inline"> </span> {/* Space for desktop */}
            to Real Estate Wealth Starts <br className="hidden md:block" />
            Here.
          </h1>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-medium transition duration-300 shadow-lg text-sm md:text-base w-full sm:w-auto">
              Dashboard
            </button>

            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-medium transition duration-300 shadow-lg text-sm md:text-base w-full sm:w-auto">
              Start Investing
            </button>
          </div>
        </div>

        {/* --- MOBILE Version of Glass Card (Stacked below text) --- */}
        {/* Visible only on small screens (md:hidden) */}
        <div className="mt-12 md:hidden bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-lg shadow-xl">
           <p className="text-base font-medium leading-relaxed drop-shadow-sm">
            Explore flexible plans to invest, rent, or save toward premium properties.
          </p>
        </div>

        {/* --- DESKTOP Version of Glass Card (Floating in corner) --- */}
        {/* Visible only on medium+ screens (hidden md:block) */}
        <div className="absolute bottom-10 right-6 lg:right-16 max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-xl hidden md:block">
          <p className="text-lg font-medium leading-relaxed drop-shadow-sm">
            Explore flexible plans to invest, <br /> rent, or save toward premium <br /> properties.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;