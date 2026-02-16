import React from 'react'

const ReferralStat = () => {
    const referralStats = [
        { 
            title: 'Total Referrals', 
            value: 12, 
            icon: <img src='/Referral1.png' alt="Referrals" className="w-6 h-6 object-contain" />, 
            bgColor: '#E3EFFF', 
            color: "#0152BBBF" 
        },
        { 
            title: 'Total Earnings', 
            value: '₦85,000', 
            icon: <img src='/Referral2.png' alt="Earnings" className="w-6 h-6 object-contain" />, 
            bgColor: '#F0E9FB', 
            color: "#A371F0" 
        },
        { 
            title: 'Pending Rewards', 
            value: '5% per referral', 
            icon: <img src='/Referral3.png' alt="Rewards" className="w-6 h-6 object-contain" />, 
            bgColor: '#E8F9DA', 
            color: "#9DE265" 
        }
    ];

    return (
        <div className='w-full max-w-[900px] mx-auto mt-10 px-4 lg:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    referralStats.map((stat, index) => (
                        <div key={index} className='p-6 rounded-2xl bg-white flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow duration-300'>
                            {/* Icon Container */}
                            <div 
                                className='w-[65px] h-[65px] rounded-full flex items-center justify-center shrink-0' 
                                style={{ backgroundColor: stat.bgColor }}
                            >
                                {stat.icon}
                            </div>
                            
                            {/* Text Content */}
                            <div className='flex flex-col'>
                                <div className='text-[18px] font-bold leading-tight' style={{ color: stat.color }}>
                                    {stat.value}
                                </div>
                                <div className='text-[14px] font-medium text-[#666666] mt-1'>
                                    {stat.title}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ReferralStat