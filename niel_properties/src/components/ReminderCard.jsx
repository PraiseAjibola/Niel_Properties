import React from 'react';

const ReminderCard = () => {
    return (
        <div className="relative w-[320px] h-[320px] overflow-hidden rounded-2xl font-sans flex-shrink-0">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/reminderbg.png" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="relative flex flex-col h-full z-10 px-6 py-6">
                <div>
                    <h3 className="text-[18px] font-bold text-white">
                        Reminder
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-white/80 font-normal">
                        Verify your ID to enjoy full features like property booking, messaging, and savings plans.
                    </p>
                </div>

                <button className="mt-auto rounded-lg w-fit bg-white px-6 py-3 text-[14px] font-bold text-[#0152BB] shadow-md transition-transform hover:scale-105 active:scale-95">
                    Verify Now
                </button>
            </div>
        </div>
    );
};

export default ReminderCard;