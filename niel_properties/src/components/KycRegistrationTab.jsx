import React, { useState, useRef } from 'react';

const KycRegistrationTab = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const uploadIntervalRef = useRef(null);
  const [isKycSubmitted, setIsKycSubmitted] = useState(false);
  const [submitDate, setSubmitDate] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    setUploadProgress(0);

    if (uploadIntervalRef.current) clearInterval(uploadIntervalRef.current);

    let progress = 0;
    uploadIntervalRef.current = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5; 
      if (progress > 100) progress = 100;
      setUploadProgress(progress);

      if (progress === 100) {
        clearInterval(uploadIntervalRef.current);
      }
    }, 400); 
  };

  const handleCancelUpload = (e) => {
    e.preventDefault(); 
    e.stopPropagation();

    if (uploadIntervalRef.current) clearInterval(uploadIntervalRef.current);
    setSelectedFile(null);
    setUploadProgress(0);
    const fileInput = document.getElementById('kyc-file-input');
    if (fileInput) fileInput.value = '';
  };

  const handleSubmitKyc = () => {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const dayName = days[now.getDay()];
    const d = String(now.getDate()).padStart(2, '0');
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const y = now.getFullYear();
    
    setSubmitDate(`${dayName}, ${d}-${m}-${y}`);
    setIsKycSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-300 max-w-2xl">
      {!isKycSubmitted ? (
        <>
          <p className="text-gray-600 font-medium mb-6">
            You haven't submitted your ID verification
          </p>

          <div className="relative mb-6">
            <select className="w-full border border-gray-300 rounded-md p-3.5 appearance-none outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 bg-white cursor-pointer">
              <option value="">Select ID Type</option>
              <option value="passport">International Passport</option>
              <option value="nin">National ID (NIN)</option>
              <option value="drivers_license">Driver's License</option>
              <option value="voters_card">Voter's Card</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

          <label className={`block border border-dashed border-blue-300 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50/50 transition mb-6 ${uploadProgress > 0 && uploadProgress < 100 ? 'pointer-events-none opacity-60' : ''}`}>
            <input type="file" id="kyc-file-input" className="hidden" onChange={handleFileSelect} />
            <div className="text-blue-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.228-8.427 6 6 0 0 0-9.728-8.073.75.75 0 0 0-.25-.002Zm-.72 7.22a.75.75 0 0 0 1.06 0L12 9.81l1.16 1.16a.75.75 0 0 0 1.06-1.06l-2.47-2.47a.75.75 0 0 0-1.06 0l-2.47 2.47a.75.75 0 0 0 0 1.06Zm1.47-1.41V15.5a.75.75 0 0 0 1.5 0v-5.94l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72Z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium">Upload Your Files Here</span>
          </label>

          {selectedFile && uploadProgress < 100 && (
            <div className="border border-gray-200 rounded-xl p-4 flex items-center gap-4 mb-6 bg-white shadow-sm">
              <div className="w-10 h-10 bg-blue-50 text-blue-400 rounded flex flex-shrink-0 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span className="truncate pr-4">{selectedFile.name}</span>
                  <span className="text-gray-500">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-300 ease-out" style={{ width: `${uploadProgress}%` }}></div>
                </div>
              </div>
              <button onClick={handleCancelUpload} className="text-gray-400 hover:text-gray-600 p-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div>
          )}

          {selectedFile && uploadProgress === 100 && (
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 bg-blue-50 text-blue-400 rounded shadow-sm border border-blue-100 flex flex-shrink-0 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">{selectedFile.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{Math.round(selectedFile.size / 1024)}kb</p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}

          <div className="mt-8">
            <button 
              disabled={uploadProgress < 100}
              onClick={handleSubmitKyc}
              className={`font-medium py-3 px-6 rounded-md transition ${
                uploadProgress === 100 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-200 text-white cursor-not-allowed'
              }`}
            >
              Submit for Verification
            </button>
          </div>
        </>
      ) : (
        <div className="animate-in fade-in duration-300">
          <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fdf2d1] text-[#d4af37] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Your KYC is currently under review</span>
            </div>
            <div className="sm:text-right">
              <p className="text-gray-800 font-medium text-sm">Submitted</p>
              <p className="text-gray-500 text-sm mt-0.5">{submitDate}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setIsKycSubmitted(false)}
              className="bg-gray-100 text-gray-700 font-medium py-2.5 px-8 rounded-md hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button 
              onClick={() => {
                setIsKycSubmitted(false);
                setSelectedFile(null);
                setUploadProgress(0);
              }}
              className="bg-blue-700 text-white font-medium py-2.5 px-8 rounded-md hover:bg-blue-800 transition"
            >
              re-submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KycRegistrationTab;