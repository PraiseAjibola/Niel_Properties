import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProfileHeader from './ProfleHeader'; // Make sure the spelling is correct based on your setup

// Import our new components
import ProfileCard from './ProfileCard';
import PersonalInformationTab from './PersonalInformationTab';
import KycRegistrationTab from './KycRegistrationTab';
import AccountSettingsTab from './AccountSettingsTab';
import CommunicationPreferencesTab from './CommunicationPreferencesTab';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [showToast, setShowToast] = useState(false);

  // Helper to trigger the success toast from the Account Settings tab
  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className='flex h-screen bg-gray-50 overflow-hidden text-sm relative'>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-45 right-16 z-50 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="w-2 h-2 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-2 h-5 text-green-600">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-semibold">Password updated successfully</span>
        </div>
      )}

      <Sidebar />

      <div className='flex-1 flex flex-col overflow-y-auto w-full md:ml-68'>
        <ProfileHeader />

        <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
          
          {/* Static Left Column */}
          <ProfileCard />

          {/* Right Column: Tab Navigation & Content */}
          <div className="flex-1 w-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-6 border-b border-gray-200 text-sm mb-8 font-medium">
              <button 
                onClick={() => setActiveTab('personal')}
                className={`pb-3 transition ${activeTab === 'personal' ? 'border-b-2 border-blue-600 text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Personal Information
              </button>
              <button 
                onClick={() => setActiveTab('kyc')}
                className={`pb-3 transition ${activeTab === 'kyc' ? 'border-b-2 border-blue-600 text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
              >
                KYC Registration
              </button>
              <button 
                onClick={() => setActiveTab('account')}
                className={`pb-3 transition ${activeTab === 'account' ? 'border-b-2 border-blue-600 text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Account Settings
              </button>
              <button 
                onClick={() => setActiveTab('communication')}
                className={`pb-3 transition ${activeTab === 'communication' ? 'border-b-2 border-blue-600 text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Communication Preferences
              </button>
            </div>

            {/* Conditionally Render Content Components */}
            {activeTab === 'personal' && <PersonalInformationTab />}
            {activeTab === 'kyc' && <KycRegistrationTab />}
            {activeTab === 'account' && <AccountSettingsTab onToast={handleShowToast} />}
            {activeTab === 'communication' && <CommunicationPreferencesTab />}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;