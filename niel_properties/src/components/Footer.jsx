import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // For Next.js projects

const Footer = () => {
    
    // Animation Variants
    const slideUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    const containerStagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, 
                delayChildren: 0.2
            }
        }
    };

    const itemFade = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5 } 
        }
    };

    return (
        <footer className="font-sans text-white">

            {/* --- SECTION 1: Newsletter & House Background --- */}
            <div className="relative bg-gradient-to-r from-[#003B95] to-[#0055D4] py-20 lg:py-28 overflow-hidden min-h-[400px] lg:min-h-[500px]">

                {/* Background House Image */}
                <div className="absolute bottom-0 left-0 right-0 w-full h-full opacity-30 lg:opacity-100 pointer-events-none z-0">
                    <img
                        src="/Footer_img.png"
                        alt="House Silhouette"
                        className="h-full w-full object-cover object-bottom-left"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row justify-end items-center h-full">

                    {/* Newsletter Card */}
                    <motion.div 
                        className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-md shadow-2xl text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={slideUp}
                    >
                        <h2 className="text-2xl md:text-3xl font-semi-bold text-gray-900 mb-4 font-montserrat">
                            Subscribe to Our Newsletter
                        </h2>

                        <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
                            Get property alerts, investment updates and real estate tips.
                        </p>

                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-6 py-3.5 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-gray-50 placeholder-gray-400 text-sm"
                            />

                            <button
                                type="button"
                                className="w-full sm:w-auto mx-auto bg-[#0047CC] hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-full transition duration-300 shadow-lg shadow-blue-600/30"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* --- SECTION 2: Footer Links --- */}
            <div className="bg-[#003B95] pt-16 pb-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">

                    {/* Grid Container */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={containerStagger}
                    >

                        {/* Column 1: Brand & Socials */}
                        <motion.div className="lg:col-span-2" variants={itemFade}>
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/FooterLogo_img.png" alt="Niel Capital" className="h-8" />
                            </div>

                            <div className="flex gap-4">
                                <Link href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </Link>
                                <Link href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </Link>
                                <Link href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Column 2: Company */}
                        <motion.div variants={itemFade}>
                            <h4 className="font-bold text-lg mb-6 font-montserrat">Company</h4>
                            <ul className="space-y-4 text-sm text-blue-100/80">
                                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                                <li><Link href="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
                                <li><Link href="/kyc" className="hover:text-white transition">Investment</Link></li>
                                <li><Link href="/how-it-works" className="hover:text-white transition">About</Link></li>
                                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
                            </ul>
                        </motion.div>

                        {/* Column 3: Explore */}
                        <motion.div variants={itemFade}>
                            <h4 className="font-bold text-lg mb-6 font-montserrat">Explore</h4>
                            <ul className="space-y-4 text-sm text-blue-100/80">
                                <li><Link href="/featured-properties" className="hover:text-white transition">Shortlets</Link></li>
                                <li><Link href="/featured-properties" className="hover:text-white transition">Apartments</Link></li>
                                <li><Link href="/featured-properties" className="hover:text-white transition">Lands</Link></li>
                                <li><Link href="/featured-properties" className="hover:text-white transition">Savings Plan</Link></li>
                            </ul>
                        </motion.div>

                        {/* Column 4: Support */}
                        <motion.div variants={itemFade}>
                            <h4 className="font-bold text-lg mb-6 font-montserrat">Support</h4>
                            <ul className="space-y-4 text-sm text-blue-100/80">
                                <li><Link href="#" className="hover:text-white transition">Help Center / FAQs</Link></li>
                                <li><Link href="/how-it-works" className="hover:text-white transition">How it Works</Link></li>
                                <li><Link href="/dashboard/referrals" className="hover:text-white transition">Referral Program</Link></li>
                                <li><Link href="/support-chat" className="hover:text-white transition">Chat with Support</Link></li>
                            </ul>
                        </motion.div>

                        {/* Column 5: Stay Connected */}
                        <motion.div variants={itemFade}>
                            <h4 className="font-bold text-lg mb-6 font-montserrat">Stay Connected</h4>
                            <ul className="space-y-4 text-sm text-blue-100/80">
                                <li><Link href="#" className="hover:text-white transition">Terms & Conditions</Link></li>
                                <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                                <li><Link href="/kyc" className="hover:text-white transition">KYC Policy</Link></li>
                            </ul>
                        </motion.div>

                    </motion.div>

                    {/* Copyright */}
                    <motion.div 
                        className="pt-8 border-t border-white/10 text-xs text-blue-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <p>© {new Date().getFullYear()} Niel Properties. All rights reserved.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;