import { Search } from 'lucide-react';

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
    <Search size={64} className="text-gray-200 mb-6" />

    <h3 className="text-gray-500 text-sm mb-6">
      You don't have any notifications yet!
    </h3>

    <button className="bg-[#0055D4] text-white px-6 py-2.5 rounded-md text-sm">
      Explore Properties
    </button>
  </div>
);

export default EmptyState;
