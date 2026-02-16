import React from 'react'

const ReferralList = () => {
    const InvitedFriends = [
        { email: 'okewaleflourish20@gmail.com', status: true },
        { email: 'flourish_0@gmail.com', status: false },
        { email: 'Sam_egwu@gmail.com', status: true },
        { email: 'philipmark@gmail.com', status: true },
        { email: 'example@gmail.com', status: false },
        { email: 'newfriend@gmail.com', status: true }
    ]

    return (
        <div className='w-full max-w-[900px] mx-auto px-4 lg:px-0'>
            {/* Header */}
            <h1 className='text-[#3A3A3A] mt-[40px] lg:mt-[50px] inter font-semibold text-[18px] lg:text-[20px] mb-[15px] lg:mb-[20px]'>
                Invited Friends
            </h1>

            {/* List Container */}
            <div className='max-h-[300px] overflow-y-auto w-full bg-white rounded-2xl px-4 lg:px-6 pb-4 shadow-sm custom-scrollbar'>
                {InvitedFriends.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-10'>
                        <img 
                            src="/noReferral.png" 
                            alt="no referral image" 
                            className='w-[140px] lg:w-[165px] object-contain mb-4' 
                        />
                        <p className='text-center text-[16px] lg:text-[18px] font-medium text-[#3A3A3ABF]'>
                            You don’t have invited friends yet!
                        </p>
                    </div>
                ) : (
                    InvitedFriends.map((friend, index) => (
                        <div key={index} className='flex justify-between items-center border-b border-[#3A3A3A40] py-4'>
                            {/* Email - with truncation for small screens */}
                            <p className='text-[14px] lg:text-[16px] inter font-semibold text-[#3A3A3ABF] truncate pr-4'>
                                {friend.email}
                            </p>
                            
                            {/* Status - with color coding */}
                            <div className={`
                                text-[13px] lg:text-[15px] inter font-medium px-3 py-1 rounded-full text-nowrap
                                ${friend.status 
                                    ? 'text-green-600 bg-green-50' 
                                    : 'text-amber-600 bg-amber-50'}
                            `}>
                                {friend.status ? 'Successful' : 'Pending'}
                            </div>
                        </div>
                    ))
                )}
            </div>
            
            {/* Optional: Add this CSS to your global stylesheet or style block for the nicer scrollbar */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </div>
    )
}

export default ReferralList