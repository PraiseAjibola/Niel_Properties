import React from 'react';

const MobileAppSection = () => {
  return (
    <section className="py-16 md:py-0 md:pt-20 pb-0 bg-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT SIDE: Phone Mockup --- */}
          {/* We use negative margin on the bottom to let the phone touch the edge if desired, 
              or just center it. Based on the design, it stands tall. */}
          <div className="relative w-full lg:w-1/2 flex justify-center  lg:justify-end">
            {/* Background Blob/Shadow effect (Optional) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-200/50 rounded-full blur-[80px] -z-10"></div>
            
            <img 
              src="/Screen.png" // Replace with your blue phone image
              alt="Niel Properties Mobile App" 
              className="w-[280px] md:w-[340px] lg:w-[300px] drop-shadow-2xl transform hover:scale-105 transition duration-500"
            />
          </div>

          {/* --- RIGHT SIDE: Content --- */}
          <div className="w-full lg:w-3/4 text-center lg:text-left">
            <h2 className="text-3xl font-montserrat md:text-4xl lg:text-4xl font-semi-bold text-gray-900 mb-6 font-montserrat leading-tight">
              Take Niel Properties With You
              Anytime, Anywhere
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Manage your investments, book shortlets, pay in installments, or track your savings—all from your phone. Our mobile app makes real estate access seamless and portable.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
              {[
                'Real-time property booking',
                'Instant investment tracking',
                'Easy savings & payment plans',
                'Push notifications for updates'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              {/* Google Play Button */}
              <button className="flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition duration-300 group">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider leading-none">Get it on</p>
                  <p className="text-base font-bold text-gray-900 leading-none mt-0.5 group-hover:text-blue-700 transition">Google Play</p>
                </div>
              </button>

              {/* App Store Button */}
              <button className="flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition duration-300 group">
                <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 19.22c-.66 0-1.28-.16-1.85-.48-.57-.32-1.12-.48-1.64-.48-.56 0-1.1.16-1.63.48-.53.32-1.12.48-1.76.48-.7 0-1.35-.18-1.95-.54-.6-.36-1.17-.83-1.7-1.42-.54-.59-1.01-1.25-1.41-1.98-.4-.73-.6-1.52-.6-2.37 0-1.03.24-1.95.72-2.76.48-.81 1.12-1.43 1.92-1.86.8-.43 1.64-.65 2.52-.65.73 0 1.4.16 2.01.48.61.32 1.13.48 1.56.48.38 0 .88-.16 1.5-.48.62-.32 1.32-.48 2.1-.48.88 0 1.69.21 2.43.63.74.42 1.34 1 1.8 1.74-1.64.88-2.46 2.18-2.46 3.9 0 1.25.43 2.3 1.29 3.15.27.27.57.51.9.72-.27.81-.62 1.56-1.05 2.25-.43.69-.95 1.26-1.56 1.71-.62.45-1.25.68-1.89.68zM14.6 6.36c0 .73-.25 1.4-.75 2.01-.5.61-1.15.99-1.95 1.14-.11-1.64.48-3.03 1.77-4.17 1.23-1.08 2.62-1.5 4.17-1.26-.38.8-.76 1.56-1.24 2.28z"/></svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider leading-none">Download on the</p>
                  <p className="text-base font-bold text-gray-900 leading-none mt-0.5 group-hover:text-blue-700 transition">App Store</p>
                </div>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;