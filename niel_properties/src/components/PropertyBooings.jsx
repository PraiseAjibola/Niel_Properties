import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProperBookingHeader from "./PropertyBookingHeader";
import BookingCard from "./BookingCard";

const PropertyBookings = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [showBrowseView, setShowBrowseView] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const navigate = useNavigate(); // 👈 added

  // Data Arrays
  const ongoingBookings = [
    { id: 0, name: "2 Bedroom Flat", type: "Shortlet", status: "Ongoing", date: "July 1 - July 4, 2025 (4 nights)" }
  ];

  const completedBookings = [
    { id: 1, name: "2 Bedroom Flat", type: "Shortlet", status: "Completed", date: "July 1 - July 4, 2025 (4 nights)" },
    { id: 2, name: "2 Bedroom Flat", type: "Shortlet", status: "Completed", date: "June 1 - June 4, 2025 (4 nights)" },
    { id: 3, name: "2 Bedroom Flat", type: "Shortlet", status: "Completed", date: "April 10 - April 14, 2025 (4 nights)" },
  ];

  const canceledBookings = [
    { id: 1, name: "2 Bedroom Flat", type: "Shortlet", status: "Canceled", date: "May 1 - May 4, 2025 (4 nights)" },
    { id: 2, name: "2 Bedroom Flat", type: "Shortlet", status: "Canceled", date: "March 15 - March 18, 2025 (4 nights)" },
  ];

  // Helper to get data based on tab
  const getActiveData = () => {
    if (activeTab === "Ongoing") return ongoingBookings;
    if (activeTab === "Completed") return completedBookings;
    if (activeTab === "Canceled") return canceledBookings;
    return [];
  };

  const currentData = getActiveData();

  return (
    <div className="flex min-h-screen bg-[#F8FDFF]">
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-100 bg-white">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <ProperBookingHeader />

        <main className="p-4 md:p-8 max-w-7xl w-full mx-auto">
          {showBrowseView ? (
            /* 1. BROWSE VIEW (EMPTY STATE) */
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
            <BookingCard
              bookingData={selectedBooking}                      // 👈 passes the clicked booking
              onBack={() => setSelectedBooking(null)}            // 👈 back button returns to list
            />
          ) : (
            /* 3. MAIN DASHBOARD VIEW */
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h1 className="text-2xl font-bold text-gray-800">My Property Bookings</h1>
                <button
                  onClick={() => navigate('/browse-properties')}
                  className="bg-[#0052CC] text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 shadow-sm"
                >
                  Browse Properties
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
                {["Ongoing", "Completed", "Canceled"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap px-5 py-2 rounded-md text-sm font-medium transition-all ${activeTab === tab
                        ? "bg-[#0052CC] text-white shadow-sm"
                        : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Table / Content Area */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {currentData.length > 0 ? (
                  <div className="overflow-x-auto">
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
                        {currentData.map((booking) => (
                          <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 text-gray-700 font-medium">{booking.name}</td>
                            <td className="p-4 text-gray-600">{booking.type}</td>
                            <td className="p-4">
                              <span className={`px-2.5 py-1 rounded text-xs font-semibold ${booking.status === "Canceled" ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"
                                }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="p-4 text-gray-600 text-sm whitespace-pre-line">{booking.date}</td>
                            <td className="p-4">
                              <button
                                onClick={() => setSelectedBooking(booking)}
                                className="text-[#0052CC] font-bold hover:underline"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  /* Empty State for specific tabs */
                  <div className="flex flex-col items-center justify-center py-24 text-center px-6">
                    <div className="w-32 h-32 bg-[#F0F7FF] rounded-full flex items-center justify-center mb-8">
                      <span className="text-5xl opacity-80">📄</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">No {activeTab.toLowerCase()} bookings yet!</h2>
                    <p className="text-gray-500 max-w-sm mb-10 text-base leading-relaxed">
                      Start exploring top shortlets, apartments and properties to book.
                    </p>
                    <button
                      onClick={() => setShowBrowseView(true)}
                      className="bg-[#0052CC] text-white px-10 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-md"
                    >
                      Browse Properties
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default PropertyBookings;