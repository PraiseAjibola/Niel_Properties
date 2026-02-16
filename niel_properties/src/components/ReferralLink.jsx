import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaCheck } from 'react-icons/fa';

const ReferralLink = () => {
    const [isCopied, setIsCopied] = useState(false);
    const referralUrl = "https://neil.com/signup?ref=abcd1234";

    const socials = [
        { links: '#', icon: <FaFacebook />, background: '#08539A' },
        { links: '#', icon: <FaTwitter />, background: '#157ADA' },
        { links: '#', icon: <FaWhatsapp />, background: '#5EB1FF' }
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText(referralUrl).then(() => {
            setIsCopied(true);
            // Reset the copied state after 2 seconds
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        });
    };

    return (
        <div className='w-full max-w-[900px] mx-auto bg-white rounded-2xl p-6 lg:py-9 lg:px-10 shadow-sm'>
            {/* Label */}
            <div className='mb-4 lg:mb-0'>
                <p className='inter font-light text-[12px] text-white bg-[#0152BB] py-[3px] px-[10px] w-fit rounded-sm'>
                    My Referral Link
                </p>
            </div>

            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0 mt-2'>
                
                {/* Link Section */}
                <div className='w-full flex-1 flex items-center justify-between border-b border-[#3A3A3A40] pb-2 gap-4 lg:gap-10'>
                    <p className='inter font-medium text-[14px] lg:text-[16px] text-[#333333] truncate w-full'>
                        {referralUrl}
                    </p>
                    <button 
                        onClick={handleCopy}
                        className={`transition-all duration-300 inter font-medium text-[12px] lg:text-[14px] py-2 px-4 rounded-lg text-nowrap flex items-center gap-2
                        ${isCopied ? 'bg-green-100 text-green-600' : 'bg-[#FFF3CA] text-[#FFAB62] hover:bg-[#ffeebb]'}`}
                    >
                        {isCopied ? (
                            <>
                                <FaCheck /> Copied!
                            </>
                        ) : (
                            'Copy Link'
                        )}
                    </button>
                </div>

                {/* Social Icons Section */}
                <div className='flex items-center gap-3 lg:ml-8 self-center lg:self-auto'>
                    {socials.map((social, index) => (
                        <a 
                            key={index} 
                            href={social.links} 
                            // Using standard inline clip-path for the hexagon shape if you don't have the 'polygon-clip' class defined globally
                            style={{ 
                                backgroundColor: social.background,
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                            }} 
                            className='w-10 h-10 flex items-center justify-center text-white transition-transform hover:scale-105'
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ReferralLink;