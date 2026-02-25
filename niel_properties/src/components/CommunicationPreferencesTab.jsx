import React, { useState } from 'react';

const CommunicationPreferencesTab = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);

  return (
    <div className="animate-in fade-in duration-300 max-w-2xl mt-4">
      <div className="space-y-8">
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-bold text-base">Email Notifications</span>
          <button 
            onClick={() => setEmailNotifications(!emailNotifications)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${emailNotifications ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${emailNotifications ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-bold text-base">SMS Notifications</span>
          <button 
            onClick={() => setSmsNotifications(!smsNotifications)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${smsNotifications ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${smsNotifications ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CommunicationPreferencesTab;