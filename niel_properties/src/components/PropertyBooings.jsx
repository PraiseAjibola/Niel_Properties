import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProperBookingHeader from "./PropertyBookingHeader";

const PropertyBookings = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [showBrowseView, setShowBrowseView] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const completedBookings = [
    { id: 1, name: "2 Bedroom Flat", type: "Shortlet", status: "Completed", date: "July 1 - July 4, 2025 (4 nights)" },
    { id: 2, name: "2 Bedroom Flat", type: "Shortlet", status: "Completed", date: "June 1 - June 4, 2025 (4 nights)" },
    { id: 3, name: "2 Bedroom Flat", type: "Shortlet", status: "Completed", date: "April 10 - April 14, 2025 (4 nights)" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FDFF]">
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-100 bg-white">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <ProperBookingHeader />

        <main className="p-4 md:p-8 max-w-7xl w-full mx-auto">
          {/* 1. BROWSE VIEW (EMPTY STATE) */}
          {showBrowseView ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-gray-100 p-8 rounded-full mb-6">
                <span className="text-6xl grayscale opacity-50">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No property bookings yet.</h2>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                Start exploring top shortlets, apartments and properties to book.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setShowBrowseView(false)} className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50">
                  Go Back
                </button>
                <button className="bg-[#0052CC] text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-blue-700 shadow-md">
                  Find a Property
                </button>
              </div>
            </div>
          ) : selectedBooking ? (
            /* 2. SELECTED BOOKING DETAIL VIEW */
            <div className="pb-20 animate-in fade-in duration-500">
              <button 
                onClick={() => setSelectedBooking(null)}
                className="flex items-center text-sm font-semibold text-gray-500 hover:text-[#0052CC] mb-6 transition-colors"
              >
                <span className="mr-2 text-lg">←</span> My Property Bookings
              </button>

              <div className="rounded-3xl overflow-hidden mb-8 h-[350px] md:h-[450px] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2070"
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Side: Description & Itinerary */}
                <div className="flex-1">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedBooking.name}</h1>
                    <p className="text-gray-500 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      Lagos, Nigeria
                    </p>
                  </div>

                  <div className="space-y-8">
                    <section>
                      <h2 className="text-xl font-bold text-gray-900 mb-4">Property Description</h2>
                      <p className="text-gray-600 leading-relaxed">
                        This elegant 2-bedroom flat offers a blend of modern luxury and comfort.
                        Located in a serene neighborhood, it features spacious rooms, a fully
                        equipped kitchen, and high-speed internet.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-gray-900 mb-6">Your Itinerary</h2>
                      <div className="relative border-l-2 border-dashed border-gray-200 ml-3 space-y-10">
                        <div className="relative pl-8">
                          <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-2 border-blue-600 rounded-full"></div>
                          <div>
                            <h4 className="font-bold text-gray-900">Check-in</h4>
                            <p className="text-gray-500 text-sm">Tuesday, July 1, 2025 (12:00 PM)</p>
                          </div>
                        </div>
                        <div className="relative pl-8">
                          <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-2 border-gray-300 rounded-full"></div>
                          <div>
                            <h4 className="font-bold text-gray-900">Check-out</h4>
                            <p className="text-gray-500 text-sm">Friday, July 4, 2025 (11:00 AM)</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Right Side: Price Card */}
                <div className="w-full lg:w-[400px]">
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 sticky top-8">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-lg font-bold text-gray-900">Reservation Summary</h3>
                      <span className="bg-blue-50 text-[#0052CC] px-4 py-1.5 rounded-full text-xs font-bold">
                        {selectedBooking.status}
                      </span>
                    </div>

                    <div className="space-y-5 mb-8">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-medium">Date</span>
                        <span className="font-bold text-gray-800">July 1 - July 4</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-medium">Duration</span>
                        <span className="font-bold text-gray-800">4 Nights</span>
                      </div>
                      <hr className="border-gray-50" />
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-blue-600 font-bold">Amount Paid</span>
                        <span className="font-black text-2xl text-blue-600">₦120,000</span>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <button className="w-full bg-[#0052CC] text-white py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200">
                        Download Receipt
                      </button>
                      <button className="w-full bg-white text-gray-600 border border-gray-200 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                        Contact Host
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* 3. MAIN DASHBOARD VIEW */
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h1 className="text-2xl font-bold text-gray-800">My Property Bookings</h1>
                <button
                  onClick={() => setShowBrowseView(true)}
                  className="bg-[#0052CC] text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 shadow-sm"
                >
                  Browse Properties
                </button>
              </div>

              <div className="flex gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
                {["Ongoing", "Completed", "Canceled"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap flex items-center gap-2 px-5 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === tab 
                      ? "bg-[#0052CC] text-white shadow-sm" 
                      : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  {activeTab !== "Canceled" ? (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                          <th className="p-4 text-sm font-medium text-gray-400">Property Name</th>
                          <th className="p-4 text-sm font-medium text-gray-400">Type</th>
                          <th className="p-4 text-sm font-medium text-gray-400">Status</th>
                          <th className="p-4 text-sm font-medium text-gray-400">Date</th>
                          <th className="p-4 text-sm font-medium text-gray-400">View</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {activeTab === "Ongoing" && (
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 text-gray-700 font-medium">2 Bedroom Flat</td>
                            <td className="p-4 text-gray-600">Shortlet</td>
                            <td className="p-4">
                              <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded text-xs font-semibold">Ongoing</span>
                            </td>
                            <td className="p-4 text-gray-600 font-medium whitespace-pre-line">
                              July 1 - July 4, {"\n"}
                              <span className="text-xs text-gray-400 font-normal">2025 (4 nights)</span>
                            </td>
                            <td className="p-4">
                              <button
                                onClick={() => setSelectedBooking({ name: "2 Bedroom Flat", type: "Shortlet", status: "Ongoing", date: "July 1 - July 4, 2025" })}
                                className="text-[#0052CC] font-bold hover:underline"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        )}
                        {activeTab === "Completed" && completedBookings.map((booking) => (
                          <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 text-gray-700 font-medium">{booking.name}</td>
                            <td className="p-4 text-gray-600">{booking.type}</td>
                            <td className="p-4 text-gray-600 font-medium">{booking.status}</td>
                            <td className="p-4 text-gray-600 text-sm whitespace-pre-line">{booking.date}</td>
                            <td className="p-4">
                              <button onClick={() => setSelectedBooking(booking)} className="text-[#0052CC] font-bold hover:underline">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center px-6">
                      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                        <span className="text-5xl opacity-30 grayscale">📋</span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">No canceled bookings yet!</h2>
                      <p className="text-gray-500 max-w-sm mb-10 text-sm md:text-base leading-relaxed">
                        Start exploring top shortlets, apartments and properties to book.
                      </p>
                      <button onClick={() => setShowBrowseView(true)} className="bg-[#0052CC] text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-700 shadow-md">
                        Browse Properties
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default PropertyBookings;