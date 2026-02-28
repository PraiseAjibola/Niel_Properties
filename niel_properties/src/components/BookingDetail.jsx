import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingDetail = ({ bookingData, onBack }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fallback data in case bookingData is not passed
    const booking = bookingData || {
        name: "2 Bedroom Flat Apartment",
        location: "Lekki Phase 1 (end of freedom way)",
        duration: "10 June - 15 June 2025",
        timeRemaining: "2 days left",
        payment: "₦150,000",
        status: "Ongoing"
    };

    const isOngoing = booking.status === "Ongoing";
    const isCompleted = booking.status === "Completed";
    const isCanceled = booking.status === "Canceled";

    // Status color logic
    const statusColor = isOngoing
        ? "text-emerald-600"
        : isCompleted
        ? "text-blue-600"
        : "text-red-500";

    // Page title logic
    const pageTitle = isOngoing
        ? "Ongoing Property Bookings"
        : isCompleted
        ? "Completed Property Bookings"
        : "Cancelled Property Bookings";

    return (
        <div className={`bg-slate-50 min-h-screen relative ${isModalOpen ? 'overflow-hidden' : ''}`}>

            {/* Header Section */}
            <section className='px-4 md:px-8 pt-6 pb-2'>
                <div className='flex items-center gap-4 max-w-7xl mx-auto'>
                    <button
                        onClick={onBack || (() => navigate(-1))}
                        className="p-2 hover:bg-slate-200 rounded-full transition-colors focus:outline-none"
                        aria-label="Go back"
                    >
                        <ArrowLeft className="text-slate-500" size={24} />
                    </button>
                    <h1 className='text-xl md:text-[30px] font-semibold text-slate-600 truncate'>
                        {pageTitle}
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-4 md:p-8 max-w-7xl mx-auto">

                {/* Small Preview Card (Left) */}
                <div className="w-full lg:max-w-sm bg-white rounded-3xl p-4 flex items-center gap-4 group cursor-pointer border border-slate-100 shadow-sm transition-shadow">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=200"
                            alt="Property"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-800 truncate">{booking.name}</h4>
                        <p className="text-xs text-slate-500 truncate">Lekki Phase 1</p>
                        <p className="text-xs text-slate-400 mt-1">{booking.date}</p>
                        <p className="text-sm font-bold text-slate-900 mt-1">₦150,000<span className="text-[10px] font-normal text-slate-400">/Night</span></p>
                    </div>
                    <ChevronRight className="text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" size={20} />
                </div>

                {/* Main Details Card (Right) */}
                <div className="w-full max-w-2xl bg-white rounded-[24px] md:rounded-[32px] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">

                    {/* Image Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 md:p-6">
                        <div className="sm:col-span-2 h-48 md:h-64 overflow-hidden rounded-2xl">
                            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Main View" />
                        </div>
                        <div className="hidden sm:flex flex-col gap-3">
                            <div className="h-[90px] md:h-[122px] overflow-hidden rounded-2xl">
                                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Detail 1" />
                            </div>
                            <div className="h-[90px] md:h-[122px] overflow-hidden rounded-2xl">
                                <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Detail 2" />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-5 md:px-8 pb-8">
                        <section className="divide-y divide-slate-100">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3">
                                <h1 className="text-[14px] text-gray-500">Property Name:</h1>
                                <h1 className='text-gray-800 font-medium sm:text-right'>{booking.name}</h1>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3">
                                <h1 className="text-[14px] text-gray-500">Location:</h1>
                                <h1 className='text-gray-800 font-medium sm:text-right'>Lekki Phase 1 (end of freedom way)</h1>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3">
                                <h1 className="text-[14px] text-gray-500">Booking Duration:</h1>
                                <h1 className='text-gray-800 font-medium sm:text-right'>{booking.date}</h1>
                            </div>
                            {/* Time Remaining - only for Ongoing */}
                            {isOngoing && (
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3">
                                    <h1 className="text-[14px] text-gray-500">Time Remaining:</h1>
                                    <h1 className='text-gray-800 font-medium sm:text-right text-orange-600'>2 days left</h1>
                                </div>
                            )}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3">
                                <h1 className="text-[14px] text-gray-500">Payment:</h1>
                                <h1 className='text-gray-800 font-bold sm:text-right'>₦150,000</h1>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3">
                                <h1 className="text-[14px] text-gray-500">Booking Status:</h1>
                                <h1 className={`font-bold sm:text-right uppercase text-xs tracking-wider ${statusColor}`}>
                                    {booking.status}
                                </h1>
                            </div>
                        </section>

                        {/* Cancel Button - only for Ongoing */}
                        {isOngoing && (
                            <div className="mt-8">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95 text-center"
                                >
                                    Cancel Booking
                                </button>
                            </div>
                        )}

                        {/* Book Again Button - for Completed and Canceled */}
                        {(isCompleted || isCanceled) && (
                            <div className="mt-8">
                                <button
                                    onClick={() => navigate('/property/:id')}
                                    className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95 text-center"
                                >
                                    Book Again
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Cancel Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-[32px] w-full max-w-md p-8 shadow-2xl">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Are you sure you want to cancel your booking?
                            </h2>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                This action will release your reservation. You may not be able to reclaim these dates if they are booked by someone else.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 order-2 sm:order-1 px-6 py-4 border border-blue-600 text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors"
                                >
                                    Keep Booking
                                </button>
                                <button
                                    onClick={() => navigate('/book-again')}
                                    className="flex-1 order-1 sm:order-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all"
                                >
                                    Yes, Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingDetail;