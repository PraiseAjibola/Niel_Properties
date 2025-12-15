import React from 'react';

const Footer = () => {
    return (
        <footer className="font-sans text-white">

            {/* --- SECTION 1: Newsletter & House Background --- */}
            {/* Added minimum height 'min-h-[400px]' to ensure the section is tall enough for the image to look good */}
            <div className="relative bg-gradient-to-r from-[#003B95] to-[#0055D4] py-20 lg:py-28 overflow-hidden min-h-[400px] lg:min-h-[500px]">

                {/* Background House Image (Left Side) */}
                {/* FIX APPLIED HERE: 
            1. Removed 'lg:left-20' so it sticks to the left edge.
            2. Changed width constraints to 'h-full' so it fills the height.
        */}
                <div className="absolute bottom-0 left-0 right-0 w-full h-full opacity-30 lg:opacity-100 pointer-events-none z-0">
                    <img
                        src="/Footer_img.png"
                        alt="House Silhouette"
                        // FIX APPLIED HERE:
                        // 1. Removed hardcoded pixel widths (w-[300px], etc).
                        // 2. Added 'h-full' to make it tall, and 'w-auto' to maintain aspect ratio.
                        // 3. Changed object position to 'object-bottom-left'.
                        className="h-full w-full object-cover object-bottom-left"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row justify-end items-center h-full">

                    {/* Newsletter Card (Right Side) */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-md shadow-2xl text-center">

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
                    </div>

                </div>
            </div>

            {/* --- SECTION 2: Footer Links --- */}
            <div className="bg-[#003B95] pt-16 pb-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

                        {/* Column 1: Brand & Socials (Spans 2 cols on Desktop) */}
                        <div className="lg:col-span-2">
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-6">
                                {/* Replace with your white logo version */}
                                <img src="/FooterLogo_img.png" alt="Niel Capital" className="h-8" />
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Company */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 font-montserrat">Company</h4>
                            <ul className="space-y-4 text-sm text-blue-100/80">
                                <li><a href="#" className="hover:text-white transition">Home</a></li>
                                <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
                                <li><a href="#" className="hover:text-white transition">Investment</a></li>
                                <li><a href="#" className="hover:text-white transition">About</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Explore */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 font-montserrat">Explore</h4>
                            <ul className="space-y-4 text-sm text-blue-100/80">
                                <li><a href="#" className="hover:text-white transition">Shortlets</a></li>
                                <li><a href="#" className="hover:text-white transition">Apartments</a></li>
                                <li><a href="#" className="hover:text-white transition">Lands</a></li>
                                <li><a href="#" className="hover:text-white transition">Savings Plan</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Support */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 font-montserrat">Support</h4>
                            <ul className="space-y-4 text-sm text-blue-100/80">
                                <li><a href="#" className="hover:text-white transition">Help Center / FAQs</a></li>
                                <li><a href="#" className="hover:text-white transition">How it Works</a></li>
                                <li><a href="#" className="hover:text-white transition">Referral Program</a></li>
                                <li><a href="#" className="hover:text-white transition">Chat with Support</a></li>
                            </ul>
                        </div>

                        {/* Column 5: Stay Connected */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 font-montserrat">Stay Connected</h4>
                            <ul className="space-y-4 text-sm text-blue-100/80">
                                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition">KYC Policy</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* Copyright */}
                    <div className="pt-8 border-t border-white/10 text-xs text-blue-200">
                        <p>© {new Date().getFullYear()} Niel Properties. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;