import React, { useState } from 'react';

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState('Shortlets');

  const properties = [
    {
      id: 1,
      image: '/Property_1.png', 
      title: '2 Bedroom High Rise Smart Apartment',
      location: 'Lekki Phase 1(end of freedom way)',
      specs: '2 bed | 2 bath | 3 balconies',
      price: 'N180,000',
      unit: '/night',
    },
    {
      id: 2,
      image: '/Property_2.png', 
      title: '2 Bedroom Flat Apartment',
      location: 'Lekki Phase 1(end of freedom way)',
      specs: '2 bed | 2 bath | 3 balconies',
      price: 'N150,000',
      unit: '/night',
    },
    {
      id: 3,
      image: '/Property_3.png', 
      title: '2 Bedroom Flat Apartment',
      location: 'Lekki Phase 1(end of freedom way)',
      specs: '2 bed | 2 bath | 3 balconies',
      price: 'N180,000',
      unit: '/night',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* --- Header & Tabs --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Browse our most popular and trusted property listings across Nigeria.
              From shortlets to long-term rentals and land sales, find your perfect fit today.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0">
            {['Shortlets', 'Apartments', 'Lands'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-transparent text-gray-500 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        {activeTab === 'Shortlets' ? (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div 
                key={property.id} 
                className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-5">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  
                  {/* UPDATED TITLE HERE: Added 'truncate' class */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight truncate" title={property.title}>
                    {property.title}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-3">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-500 text-sm truncate">{property.location}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 border-b border-gray-200 pb-6">
                    {property.specs}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-gray-900 font-bold text-lg">
                        {property.price}
                        <span className="text-gray-500 font-normal text-sm">{property.unit}</span>
                      </span>
                    </div>
                    
                    <button className="bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition duration-300 shadow-md shadow-blue-700/20">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        ) : (

          /* Not Available Message Box */
          <div className="w-full h-80 flex flex-col items-center justify-center bg-gray-50 rounded-3xl border border-dashed border-gray-300 text-center px-4">
             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
             </div>
             <h3 className="text-lg font-semibold text-gray-900">No Listings Found</h3>
             <p className="text-gray-500 mt-1">
               {activeTab} are not available for now. Please check back later or explore our Shortlets.
             </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProperties;