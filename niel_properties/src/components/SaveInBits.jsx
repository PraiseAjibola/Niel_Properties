import React from 'react';

// --- Sub-Component: The Phone Screen UI ---
const PhoneScreen = () => {
  return (
    <div className="bg-white w-full h-full rounded-[2.5rem] overflow-hidden relative font-sans flex flex-col border-[6px] border-gray-900 shadow-2xl">
      
      {/* 1. Status Bar & Header */}
      <div className="px-6 pt-6 pb-2 shrink-0 z-10 bg-white">
        <div className="flex justify-between items-center text-xs font-bold text-gray-900 mb-4">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2.5 bg-gray-900 rounded-sm"></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          <span className="font-bold text-gray-900 text-lg">My Savings Progress</span>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </div>
      </div>

      {/* 2. Scrollable Content with Fade Mask */}
      {/* The class [mask-image:...] creates the fade effect at the bottom */}
      <div className="flex-1 overflow-y-hidden relative">
        <div className="h-full overflow-y-auto no-scrollbar px-6 pb-20 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
          
          {/* Progress Status */}
          <p className="text-blue-700 font-medium mt-2 mb-6 text-sm">• 60% Complete</p>

          {/* Circular Chart */}
          <div className="flex justify-center mb-8 relative">
             {/* Simple CSS Conic Gradient for the chart ring */}
             <div className="w-48 h-48 rounded-full bg-[conic-gradient(#1d4ed8_60%,#eff6ff_0)] flex items-center justify-center">
                <div className="w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center text-center shadow-sm">
                   <span className="text-xs text-blue-600 font-medium">Amount Saved: <span className="font-bold">600,000</span></span>
                   <span className="text-[10px] text-gray-400 mt-1">Target Amount: 1,000,000</span>
                </div>
             </div>
          </div>

          {/* Savings Summary List */}
          <h3 className="text-gray-900 font-bold text-lg mb-4">Savings Summary</h3>
          
          <div className="bg-gray-50 rounded-xl p-5 mb-6 text-sm space-y-3">
             <div className="flex justify-between">
                <span className="text-gray-500">Plan Name:</span>
                <span className="font-semibold text-gray-800">2-Bedroom Apartment in Lekki</span>
             </div>
             <div className="flex justify-between">
                <span className="text-gray-500">Plan Type:</span>
                <span className="font-semibold text-gray-800">Monthly Fixed Savings</span>
             </div>
             <div className="flex justify-between">
                <span className="text-gray-500">Start Date:</span>
                <span className="font-semibold text-gray-800">Jan 15, 2025</span>
             </div>
             <div className="flex justify-between">
                <span className="text-gray-500">Target Date:</span>
                <span className="font-semibold text-gray-800">Jan 15, 2026</span>
             </div>
          </div>

          {/* Recent Transactions */}
          <h3 className="text-gray-900 font-bold text-lg mb-4">Recent Transactions</h3>
          <div className="space-y-3">
             <TransactionCard amount="₦50,000 saved" status="Success" date="May 10, 2025" isSuccess={true} />
             <TransactionCard amount="₦50,000 saved" status="Success" date="May 10, 2025" isSuccess={true} />
             <TransactionCard amount="₦50,000 failed" status="Retry" date="May 10, 2025" isSuccess={false} />
             <TransactionCard amount="₦50,000 saved" status="Success" date="May 09, 2025" isSuccess={true} />
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper component for transactions
const TransactionCard = ({ amount, status, date, isSuccess }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm">
    <span className={`font-semibold ${isSuccess ? 'text-gray-700' : 'text-red-500'}`}>{amount}</span>
    <div className="text-right">
       <div className={`text-xs font-bold ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>{status}</div>
       <div className="text-[10px] text-gray-400">{date}</div>
    </div>
  </div>
);


// --- Main Component ---
const SaveInBits = () => {
  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <h2 className="text-3xl font-montserrat md:text-4xl font-semi-bold text-gray-900 mb-6 leading-tight">
            Start Small, Own Big –
            <span className="text-gray-900">Save in Bits</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Create a flexible savings plan tailored to your income and pace. 
            Watch your savings grow as you move closer to owning your dream home or land.
          </p>
        </div>

        {/* Main Visual Stage */}
        <div className="relative flex flex-col items-center">
          
          {/* 1. The Phone Container (Replaces the Image) */}
          <div className="relative z-10 w-[320px] h-[640px] shrink-0 transform md:scale-100 scale-90">
             <PhoneScreen />
          </div>

          {/* 2. Floating Info Cards (Desktop Only) */}
          <div className="hidden md:flex absolute top-10 left-10 lg:left-58 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 max-w-[200px] animate-bounce-slow z-30">
            <p className="text-sm text-gray-600 font-medium">Track real-time progress visually</p>
          </div>

          <div className="hidden md:flex absolute top-20 right-10 lg:right-58 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 max-w-[200px] animate-bounce-slower z-30">
            <div className="flex items-start gap-3">
              <div className="w-1 h-8 bg-blue-600 rounded-full shrink-0"></div>
              <p className="text-sm text-gray-600 font-medium">Flexible monthly or weekly savings</p>
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-62 left-0 lg:left-50 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 max-w-[240px] z-30">
            <p className="text-sm text-gray-600 font-medium leading-relaxed">Apply your savings toward lands, shortlets, or apartments</p>
          </div>

          {/* Mobile Only Cards */}
          <div className="md:hidden grid grid-cols-1 gap-4 mt-8 w-full">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-700 font-medium">✨ Track real-time progress visually</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
               <p className="text-sm text-gray-700 font-medium">📅 Flexible monthly or weekly savings</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
               <p className="text-sm text-gray-700 font-medium">🏠 Apply savings toward properties</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center md:justify-end mt-12 md:mt-0 md:absolute md:bottom-10 md:right-0 z-40">
            <button className="bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-blue-800 transition duration-300 shadow-lg shadow-blue-700/30 transform hover:-translate-y-1">
              Start Saving Now
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: float 4s ease-in-out infinite; }
        .animate-bounce-slower { animation: float 6s ease-in-out infinite; }
        /* Utility to hide scrollbar but keep functionality */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default SaveInBits;