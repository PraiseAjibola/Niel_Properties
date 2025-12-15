import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Flexible Investment Options",
      desc: "Start investing with as little or as much as you're comfortable with. Choose fixed or custom investment plans tailored to your financial goals.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
    },
    {
      title: "High ROI Opportunities",
      desc: "Our curated projects offer competitive returns with transparent reporting. Track your investments and watch your wealth grow over time.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      )
    },
    {
      title: "Verified & Trusted Listings",
      desc: "Every property on Niel Properties is vetted for legal and physical authenticity. You invest or rent confidently knowing you're dealing with verified assets.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
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
            // UPDATE: Added 'text-center', 'flex', 'flex-col', 'items-center'
            <div key={index} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition duration-300 group text-center flex flex-col items-center">
              
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg shadow-blue-600/20">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;