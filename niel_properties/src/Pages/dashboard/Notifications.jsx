import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { MOCK_NOTIFICATIONS } from '../../data/mockData';
import ModalHeader from '../../components/ModalHeader';
import FilterTabs from '../../components/FilterTabs';
import NotificationGroup from '../../components/NotificationGroup';
import EmptyState from '../../components/EmptyState';

export default function NotificationModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('all');
    const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

    const handleMarkAllAsRead = () => {
        setNotifications(prev =>
            prev.map(n => ({ ...n, isUnread: false }))
        );
    };

    const filtered = activeTab === 'unread'
        ? notifications.filter(n => n.isUnread)
        : notifications;

    const grouped = filtered.reduce((acc, n) => {
        (acc[n.group] ||= []).push(n);
        return acc;
    }, {});

    const unreadCount = notifications.filter(n => n.isUnread).length;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="fixed inset-0 z-20 overflow-y-auto mt-20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <div className="min-h-full flex justify-center items-start py-10 px-4">
                            <div className="bg-white rounded-xl w-full max-w-lg max-h-[calc(85vh-80px)] py-6 flex flex-col">

                                <ModalHeader onClose={onClose} />

                                <FilterTabs
                                    activeTab={activeTab}
                                    onTabChange={setActiveTab}
                                    unreadCount={unreadCount}
                                    onMarkAllRead={handleMarkAllAsRead}
                                />

                                <div className="flex-1 overflow-y-auto px-6">
                                    {Object.keys(grouped).length === 0
                                        ? <EmptyState />
                                        : Object.entries(grouped).map(([group, items]) => (
                                            <NotificationGroup key={group} groupLabel={group} items={items} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
