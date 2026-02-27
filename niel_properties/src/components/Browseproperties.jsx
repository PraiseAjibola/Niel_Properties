import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProperBookingHeader from "./PropertyBookingHeader";
import { Bed, Bath, Building2 } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "2 Bedroom Flat Shortlet",
    location: "Lekki Phase 1 (end of freedom way)",
    beds: 2,
    baths: 2,
    balconies: 3,
    price: "₦150,000",
    type: "Shortlet",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "2 Bedroom Flat Shortlet",
    location: "Lekki Phase 1 (end of freedom way)",
    beds: 2,
    baths: 2,
    balconies: 3,
    price: "₦150,000",
    type: "Shortlet",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "2 Bedroom Flat Shortlet",
    location: "Lekki Phase 1 (end of freedom way)",
    beds: 2,
    baths: 2,
    balconies: 3,
    price: "₦150,000",
    type: "Shortlet",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "2 Bedroom Flat Apartment",
    location: "Lekki Phase 1 (end of freedom way)",
    beds: 2,
    baths: 2,
    balconies: 3,
    price: "₦150,000",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    name: "2 Bedroom Flat Apartment",
    location: "Lekki Phase 1 (end of freedom way)",
    beds: 2,
    baths: 2,
    balconies: 3,
    price: "₦150,000",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    name: "2 Bedroom Flat Apartment",
    location: "Lekki Phase 1 (end of freedom way)",
    beds: 2,
    baths: 2,
    balconies: 3,
    price: "₦150,000",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=600",
  },
];

const tabs = ["All", "Shortlet", "Apartment"];

const BrowseProperties = () => {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  const filtered =
    activeTab === "All"
      ? properties
      : properties.filter((p) => p.type === activeTab);

  // Group filtered by type for section headers
  const shortlets = filtered.filter((p) => p.type === "Shortlet");
  const apartments = filtered.filter((p) => p.type === "Apartment");

  return (
    <div className="flex min-h-screen bg-[#F8FDFF]">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 lg:ml-[280px]">
        {/* Header */}
        <ProperBookingHeader />

        <main className="p-4 md:p-8 max-w-7xl w-full mx-auto">
          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Browse Properties</h1>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#0052CC] text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Shortlet Section */}
          {shortlets.length > 0 && (
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-gray-500 mb-4">Shortlet</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {shortlets.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}

          {/* Apartment Section */}
          {apartments.length > 0 && (
            <div className="mb-10">
              <h2 className="text-sm font-semibold text-gray-500 mb-4">Apartment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {apartments.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="h-44 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-1">{property.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{property.location}</p>

        {/* Features */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Bed size={12} /> {property.beds} bed
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Bath size={12} /> {property.baths} bath
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Building2 size={12} /> {property.balconies} balconies
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm font-bold text-gray-800">
            {property.price}
            <span className="text-xs font-normal text-gray-400">/night</span>
          </p>
          <button
            onClick={() => navigate(`/property/${property.id}`)}
            className="bg-[#0052CC] hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-all active:scale-95 shadow-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseProperties;