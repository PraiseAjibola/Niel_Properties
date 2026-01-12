import React from 'react'

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    title: '2 Bedroom Flat Apartment',
    location: 'Lekki Phase 1 (end of freedom way)',
    specs: '2 bed | 2 bath | 3 balconies',
    price: 'N150,000',
    period: 'night',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2360&q=80',
    title: '2 Bedroom Flat Apartment',
    location: 'Lekki Phase 1 (end of freedom way)',
    specs: '2 bed | 2 bath | 3 balconies',
    price: 'N150,000',
    period: 'night',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    title: '2 Bedroom Flat Apartment',
    location: 'Lekki Phase 1 (end of freedom way)',
    specs: '2 bed | 2 bath | 3 balconies',
    price: 'N150,000',
    period: 'night',
  },
]

const RecommendedProperties = () => {
  return (
    <section className="w-full max-w-7xl mx-auto p-6 font-sans">
      {/* Section Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Recommended Properties
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {properties.map((property) => (
    <div
      key={property.id}
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Container - Added p-2 and rounded-b-2xl to create the "inset" look */}
      <div className="relative h-56 w-full overflow-hidden p-2">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover rounded-t-xl rounded-b-2xl hover:grayscale transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        <h3 className="text-lg font-bold text-gray-900">
          {property.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {property.location}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {property.specs}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-100 p-5 flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-gray-900">
            {property.price}
          </span>
          <span className="text-sm text-gray-500 font-normal">
            /{property.period}
          </span>
        </div>

        <button className="bg-[#0056b3] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  ))}
</div>
    </section>
  )
}

export default RecommendedProperties
