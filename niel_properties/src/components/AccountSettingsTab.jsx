import React, { useState } from 'react';

const AccountSettingsTab = ({ onToast }) => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isPasswordFormValid = currentPassword.length > 0 && newPassword.length > 0 && confirmPassword.length > 0;

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (!isPasswordFormValid) return;

    onToast(); // Call function passed from main Profile
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="animate-in fade-in duration-300 max-w-2xl">
      <div className="mb-10">
        <h3 className="text-gray-800 font-bold text-base mb-4">Change Password</h3>
        <form className="grid grid-cols-1 gap-5">
          <div>
            <label className="block text-gray-600 mb-2">Current Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400" 
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">New Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400" 
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Confirm New Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400" 
            />
          </div>
          <div className="mt-2">
            <button 
              type="button" 
              onClick={handleUpdatePassword}
              disabled={!isPasswordFormValid}
              className={`font-medium py-3 px-6 rounded-md transition ${
                isPasswordFormValid 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer shadow-sm' 
                  : 'bg-gray-200 text-white cursor-not-allowed'
              }`}
            >
              Update Password
            </button>
          </div>
        </form>
      </div>

      <hr className="border-gray-100 mb-8" />

      <div className="mb-10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h3 className="text-gray-800 font-bold text-base mb-1">Two-Factor Authentication</h3>
          <p className="text-gray-500">Add an extra layer of security to your account.</p>
        </div>
        
        <button 
          onClick={() => setIs2FAEnabled(!is2FAEnabled)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${is2FAEnabled ? 'bg-blue-600' : 'bg-gray-200'}`}
        >
          <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${is2FAEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
      </div>

      <hr className="border-gray-100 mb-8" />

      <div>
        <h3 className="text-gray-800 font-bold text-base mb-1">Danger Zone</h3>
        <p className="text-gray-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button className="border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 font-medium py-2.5 px-6 rounded-md transition">
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default AccountSettingsTab;