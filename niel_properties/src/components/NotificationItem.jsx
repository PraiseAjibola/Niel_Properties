import NotificationIcon from './NotificationIcon';

const NotificationItem = ({ data }) => (
  <div className="flex gap-3 py-3 px-2 hover:bg-gray-50 rounded-lg cursor-pointer">
    <NotificationIcon isUnread={data.isUnread} />

    <div className="flex-1 min-w-0">
      <p className={`text-sm truncate ${data.isUnread ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
        {data.title}
      </p>

      <div className="flex gap-2 text-xs text-gray-400 mt-1">
        <span>{data.date}</span>
        <span>•</span>
        <span>{data.time}</span>
      </div>
    </div>

    {data.isUnread && <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />}
  </div>
);

export default NotificationItem;
