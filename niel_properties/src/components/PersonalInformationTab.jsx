import React, { useState } from 'react';
import DatePicker from './DatePicker';

const PersonalInformationTab = () => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [dob, setDob] = useState(null);

  const formatDate = (dateObj) => {
    if (!dateObj) return "DD/MM/YYYY";
    const d = String(dateObj.getDate()).padStart(2, '0');
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const y = dateObj.getFullYear();
    return `${d}/${m}/${y}`;
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
      <div>
        <label className="block text-gray-600 mb-2">Full Name</label>
        <input type="text" placeholder='Full Name' className="w-full border border-blue-300 bg-blue-50/30 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
      </div>

      <div>
        <label className="block text-gray-600 mb-2">Email Address</label>
        <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400" />
      </div>

      <div className="relative">
        <label className="block text-gray-600 mb-2">Date of Birth</label>
        <div onClick={() => setIsDatePickerOpen(!isDatePickerOpen)} className={`border rounded-md p-3 flex justify-between items-center cursor-pointer transition ${dob ? 'text-gray-800 border-gray-300' : 'text-gray-400 border-gray-200 hover:bg-gray-50'}`}>
          <span>{formatDate(dob)}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${isDatePickerOpen ? 'rotate-180' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        {isDatePickerOpen && (
          <DatePicker initialDate={dob} onClose={() => setIsDatePickerOpen(false)} onApply={(selectedDate) => setDob(selectedDate)} />
        )}
      </div>

      <div>
        <label className="block text-gray-600 mb-2">Phone Number</label>
        <div className="flex border border-gray-200 rounded-md overflow-hidden">
          <div className="flex items-center gap-2 bg-white px-3 border-r border-gray-200">
            <img src="https://flagcdn.com/w20/ng.png" alt="Nigeria" className="w-5" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400">
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
          <input type="text" placeholder="0703 844 0940" className="w-full p-3 outline-none focus:bg-gray-50 placeholder-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-gray-600 mb-2">Gender</label>
        <div className="flex gap-4">
          <label className="flex-1 flex items-center gap-3 border border-gray-200 rounded-md p-3 cursor-pointer hover:bg-gray-50">
            <input type="radio" name="gender" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="text-gray-600">Male</span>
          </label>
          <label className="flex-1 flex items-center gap-3 border border-gray-200 rounded-md p-3 cursor-pointer hover:bg-gray-50">
            <input type="radio" name="gender" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="text-gray-600">Female</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-gray-600 mb-2">Nationality</label>
        <input type="text" placeholder="Nationality" className="w-full border border-gray-200 rounded-md p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400" />
      </div>

      <div className="md:col-span-2">
        <label className="block text-gray-600 mb-2">Residential Address</label>
        <textarea placeholder="Lekki Phase 1, Lagos" className="w-full h-24 resize-none border border-gray-200 rounded-md p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"></textarea>
      </div>

      <div className="md:col-span-2 mt-2">
        <button disabled className="bg-gray-200 text-white font-medium py-3 px-6 rounded-md cursor-not-allowed hover:bg-gray-300 transition">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default PersonalInformationTab;