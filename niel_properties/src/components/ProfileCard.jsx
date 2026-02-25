import React, { useState } from 'react';

const ProfileCard = () => {
  // State to hold the current profile image
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=256&h=256&auto=format&fit=crop"
  );

  // Handler to update the image preview when a file is selected
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a temporary local URL to preview the selected image
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="w-full lg:w-1/3 xl:w-1/4 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center">
      
      {/* Profile Image Container */}
      <div className="relative">
        <img 
          src={profileImage} 
          alt="Profile Avatar" 
          className="w-24 h-24 rounded-full object-cover border border-gray-200 shadow-sm"
        />
        
        {/* Camera Upload Button wrapped in a Label */}
        <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1.5 border-2 border-white hover:bg-blue-700 transition cursor-pointer shadow-sm">
          {/* Hidden File Input */}
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleImageChange} 
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        </label>
      </div>

      {/* Name & Status */}
      <h2 className="mt-4 text-lg font-bold text-gray-800">Niel Daniels</h2>
      <p className="text-[#D4AF37] text-xs font-medium mt-1">Verification Pending</p>

      {/* Contact Details */}
      <div className="w-full mt-6 space-y-4">
        <div className="border-t border-gray-100 pt-4 flex items-center gap-3 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.076-6.975l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <span className="font-medium">+2347038440940</span>
        </div>
        
        <div className="border-t border-gray-100 pt-4 flex items-center gap-3 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <span className="font-medium">nieldaniels@gmail.com</span>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <button className="w-full border border-gray-200 rounded-lg py-2 flex justify-center items-center gap-2 text-gray-600 font-medium hover:bg-gray-50 transition">
            Edit 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;