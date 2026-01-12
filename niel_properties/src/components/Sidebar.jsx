import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {LuLogOut} from 'react-icons/lu'

const Sidebar = () => {
    const location = useLocation();
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Overview', href: '/dashboard' },
        { name: 'My Profile', href: '#' },
        { name: 'Property Bookings', href: '#' },
        { name: 'Notifications', href: '#' },
        { name: 'Referrals', href: '#' },
        { name: 'Support Chat', href: '#' }
    ];
  return (
    <div className="w-[280px] fixed left-0 top-0 h-screen bg-[#0152BB] text-white py-6 flex flex-col justify-between">
        <div className='flex flex-col gap-10 '>
            <img className='w-[224px] object-contain px-6 mx-auto' src="/logoWhite.png" alt="Logo" />
            <div className='py-[10px]'>
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        to={link.href} 
                        className={`block py-2 inter font-[100] text-[16px] mb-[5px] ${
                            location.pathname === link.href 
                                ? 'pl-19 text-[#FFFFFF] bg-[#ECF0EF40] border-l-2 border-white' 
                                : 'pl-20 text-[#FFFFFFBF]'
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
        <Link className='inter font-[700] text-[18px] pl-20 text-[#ECF0EF]' to="#"> < LuLogOut className="inline mr-[20px] rotate-180" /> Log out</Link>
    </div>
  )
}

export default Sidebar