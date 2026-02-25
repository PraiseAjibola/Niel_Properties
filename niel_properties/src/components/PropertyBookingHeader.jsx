import React from 'react'
import { useLocation } from 'react-router-dom'
import { LuBell, LuUser, LuSearch, LuMenu } from 'react-icons/lu'
import { AiFillCustomerService } from "react-icons/ai";
import { useSidebar } from '../context/SidebarContext'

const ProperBookingHeader = () => {
    const location = useLocation();
    const { setIsOpen } = useSidebar();
    const pathname = location.pathname;

    const renderLeftContent = () => {
        if (pathname === '/dashboard' || pathname === '/dashboard/overview') {
            return <h1 className='montserrat text-[22px] font-medium text-[#3A3A3ABF]'>Overview</h1>;
        }

        if (pathname === '/dashboard/profile') {
            return <h1 className='montserrat text-[22px] font-medium text-[#3A3A3ABF]'>Profile</h1>;
        }

        return (
          <div className='hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[400px]'>
            <input 
              type="text" 
              placeholder="Search" 
              className='bg-transparent outline-none flex-1 text-gray-700'
            />
            <LuSearch className='text-gray-500' size={18} />
          </div>
        );

        // return <h1 className='montserrat text-[22px] font-medium text-[#3A3A3ABF]'>My Profile</h1>;
    };

    return (
        <div className='bg-[#FFFFFF] flex items-center justify-between py-4 px-6 sticky top-0 z-30'>

            <div className="flex items-center gap-3">
                {/* Hamburger (mobile only) */}
                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <LuMenu size={26} />
                </button>

                {renderLeftContent()}
            </div>

            <div className='flex items-center gap-4'>
                <LuBell className='text-[#1E1E1E80]' size={24} />
                <AiFillCustomerService className='text-[#1E1E1E80]' size={24} />
                <LuUser className='text-[#1E1E1E80]' size={24} />
            </div>
        </div>
    )
}

export default ProperBookingHeader
