import React from 'react'
import { useLocation } from 'react-router-dom'
import { LuBell, LuUser, LuSearch } from 'react-icons/lu'
import { AiFillCustomerService } from "react-icons/ai";


const DashHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const renderLeftContent = () => {
    if (pathname === '/dashboard' || pathname === '/dashboard/overview') {
      return <h1 className='montserrat text-[22px] font-medium text-[#3A3A3ABF]'>Overview</h1>;
    }
    if (pathname === '/dashboard/profile') {
      return <h1 className='montserrat text-[22px] font-medium text-[#3A3A3ABF]'>Profile</h1>;
    }
    return (
      <div className='flex items-center bg-gray-100 rounded-full px-4 py-2 w-[400px]'>
        <input 
          type="text" 
          placeholder="Search" 
          className='bg-transparent outline-none flex-1 text-gray-700'
        />
        <LuSearch className='text-gray-500' size={18} />
      </div>
    );
  };

  return (
    <div className='bg-[#FFFFFF] flex items-center justify-between py-4 px-6'>
      {renderLeftContent()}
      <div className='flex items-center gap-4'>
        <button className='text-gray-500 hover:text-gray-700'>
          <LuBell size={24} />
        </button>
        <button className='text-gray-500 hover:text-gray-700'>
          <AiFillCustomerService size={24} />
        </button>
        <button className='text-gray-500 hover:text-gray-700'>
          <LuUser size={24} />
        </button>
      </div>
    </div>
  )
}

export default DashHeader