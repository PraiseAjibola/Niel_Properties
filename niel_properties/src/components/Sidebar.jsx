import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuLogOut, LuX } from 'react-icons/lu'
import { useSidebar } from '../context/SidebarContext'
import { useNotification } from '../context/NotificationContext'
import { useLogout } from '../context/LogoutContext'

const Sidebar = () => {
    const { isOpen, setIsOpen } = useSidebar()
    const { openNotifications } = useNotification()
    const { openLogout } = useLogout()
    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Overview', href: '/dashboard' },
        { name: 'My Profile', href: '/profile' },
        { name: 'Property Bookings', href: '/property-bookings' },
        { name: 'Notifications', href: '#', onClick: openNotifications },
        { name: 'Referrals', href: '/dashboard/referrals' },
        { name: 'Support Chat', href: '/support-chat' }
    ];

    const handleLinkClick = (link) => {
        setIsOpen(false)
        if (link.onClick) {
            link.onClick()
        }
    }

    return (
        <>
            {/* Overlay (mobile only) */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                />
            )}

            <div className={`fixed top-0 left-0 h-screen w-[280px] bg-[#0152BB] text-white py-6 flex flex-col justify-between z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className='flex flex-col gap-10'>
                    <div className="flex items-center justify-between px-6">
                        <img className='w-[160px]' src="/logoWhite.png" alt="Logo" />

                        {/* Close button (mobile only) */}
                        <button onClick={() => setIsOpen(false)} className="md:hidden">
                            <LuX size={24} />
                        </button>
                    </div>

                    <div className='py-[10px]'>
                        {navLinks.map((link) => (
                            link.onClick ? (
                                <button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link)}
                                    className={`block w-full text-left py-2 inter text-[16px] mb-[5px] pl-20 text-[#FFFFFFBF] hover:text-white`}
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => handleLinkClick(link)}
                                    className={`block py-2 inter text-[16px] mb-[5px] ${location.pathname === link.href
                                        ? 'pl-19 bg-[#ECF0EF40] border-l-2 border-white text-white'
                                        : 'pl-20 text-[#FFFFFFBF]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>

                <button 
                    onClick={() => {
                        setIsOpen(false)
                        openLogout()
                    }}
                    className='inter font-[700] text-[18px]  text-[#ECF0EF] cursor-pointer hover:text-white transition-colors'
                >
                    <LuLogOut className="inline mr-[20px] rotate-180" /> Log out
                </button>
            </div>
        </>
    )
}

export default Sidebar
