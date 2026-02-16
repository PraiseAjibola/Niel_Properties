import NotificationItem from './NotificationItem';

const NotificationGroup = ({ groupLabel, items }) => (
  <div className="mb-6">
    <h4 className="text-xs text-gray-400 px-2 mb-2">{groupLabel}</h4>

    <div className="space-y-1">
      {items.map(item => (
        <NotificationItem key={item.id} data={item} />
      ))}
    </div>
  </div>
);

export default NotificationGroup;
