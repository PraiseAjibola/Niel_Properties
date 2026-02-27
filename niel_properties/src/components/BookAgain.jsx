import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProperBookingHeader from './PropertyBookingHeader';

const BookAgain = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen relative">
            <Sidebar />

            <main className="transition-all duration-300 ml-0 lg:ml-64">
                {/* Header */}
                <section className='px-4 md:px-8 pt-6 pb-2'>
                    <ProperBookingHeader />
                </section>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center px-4 py-10">

                    {/* Green Circle Icon */}
                    <div className="relative flex items-center justify-center mb-16">
                        {/* Outer faint ring */}
                        <div className="absolute w-48 h-48 rounded-full bg-green-100/60" />
                        {/* Inner ring */}
                        <div className="absolute w-36 h-36 rounded-full bg-green-200/50" />
                        {/* Icon circle */}
                        <div className="relative w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                        Booking Cancelled by You
                    </h2>
                    <p className="text-gray-500 text-sm text-center max-w-xs mb-10 leading-relaxed">
                        You have successfully cancelled your booking for the 2-Bedroom Apartment at Lekki Phase 1 (end of freedom way).
                    </p>

                    {/* Details Table */}
                    <div className="w-full max-w-md mb-10">
                        <div className="divide-y divide-gray-100">
                            <div className="flex justify-between py-3">
                                <span className="text-sm text-gray-400">Property Name:</span>
                                <span className="text-sm font-semibold text-gray-800">Bedroom Flat Shortlet</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-sm text-gray-400">Location:</span>
                                <span className="text-sm font-semibold text-gray-800">Lekki Phase 1 (end of freedom way)</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-sm text-gray-400">Type:</span>
                                <span className="text-sm font-semibold text-gray-800">Shortlet</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-sm text-gray-400">Booking Options:</span>
                                <span className="text-sm font-semibold text-gray-800">Daily</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-sm text-gray-400">Booking Duration:</span>
                                <span className="text-sm font-semibold text-gray-800">July 1 - July 4, 2025 (4 nights)</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-sm text-gray-400">Rate:</span>
                                <span className="text-sm font-semibold text-gray-800">₦150,000/night</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-sm text-gray-400">Amount Paid:</span>
                                <span className="text-sm font-semibold text-gray-800">₦85,000 (Discount)</span>
                            </div>
                        </div>
                    </div>

                    {/* Explore Properties Button */}
                    <button
                        onClick={() => navigate('/browse-properties')}
                        className="bg-[#0052CC] hover:bg-blue-700 text-white font-semibold px-16 py-3.5 rounded-lg transition-all active:scale-95 shadow-md"
                    >
                        Explore Properties
                    </button>
                </div>
            </main>
        </div>
    );
};

export default BookAgain;