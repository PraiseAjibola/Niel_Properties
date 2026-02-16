import { motion } from 'framer-motion';
import { CheckCheck } from 'lucide-react';

const FilterTabs = ({ activeTab, onTabChange, unreadCount, onMarkAllRead }) => (
  <div className="flex justify-between bg-[#E5E5E580] px-6 mb-4 py-2">
    <div className="flex gap-6">
      {['all', 'unread'].map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`text-sm relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-500'}`}
        >
          {tab === 'all' ? 'All' : `Unread [${unreadCount}]`}
          {activeTab === tab && (
            <motion.div layoutId="activeTab" className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
      ))}
    </div>

    <button onClick={onMarkAllRead} className="text-xs text-blue-600 flex items-center gap-1">
      <CheckCheck size={14} />
      Mark all as read
    </button>
  </div>
);

export default FilterTabs;
