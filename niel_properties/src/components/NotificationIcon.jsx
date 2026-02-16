import { Bell } from 'lucide-react';

const NotificationIcon = ({ isUnread }) => (
  <div className={`w-10 h-10 rounded-full flex items-center justify-center 
    ${isUnread ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
    <Bell size={18} fill={isUnread ? 'currentColor' : 'none'} />
  </div>
);

export default NotificationIcon;
