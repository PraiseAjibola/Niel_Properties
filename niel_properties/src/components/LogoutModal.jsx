import { motion, AnimatePresence } from 'framer-motion';

export default function LogoutModal({ isOpen, onClose }) {
    const handleLogout = () => {
        // Logout logic will be implemented later
        console.log('Logging out...')
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="bg-white rounded-xl w-full max-w-sm p-6 sm:p-8 shadow-xl">
                            {/* Modal Content */}
                            <div className="text-center">
                                <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-6 sm:mb-8">
                                    Are you sure you want to<br />log out
                                </h2>

                                {/* Buttons */}
                                <div className="flex gap-3 sm:gap-4">
                                    <button
                                        onClick={handleLogout}
                                        className="flex-1 py-2.5 sm:py-3 px-4 border border-[#0152BB] text-[#0152BB] rounded-lg font-medium text-sm sm:text-base hover:bg-blue-50 transition-colors cursor-pointer"
                                    >
                                        Log me out
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="flex-1 py-2.5 sm:py-3 px-4 bg-[#0152BB] text-white rounded-lg font-medium text-sm sm:text-base hover:bg-[#013d8a] transition-colors cursor-pointer"
                                    >
                                        Stay logged in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
