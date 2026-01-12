import React, { useState } from 'react'
import { Upload, X, FileText, Check, Image as ImageIcon } from 'lucide-react'
import { FaCloudUploadAlt } from 'react-icons/fa'

export const FileUpload = ({ label, subLabel, accept, onFileSelect }) => {
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      onFileSelect(selectedFile)

      // Simulate upload progress
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 10
        })
      }, 100)
    }
  }

  const removeFile = () => {
    setFile(null)
    setProgress(0)
  }

  return (
    <div className="w-full">
      {!file ? (
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-blue-100 border-dashed rounded-lg cursor-pointer bg-blue-50/30 hover:bg-blue-50 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="rounded-full p-2 mb-3">
              <FaCloudUploadAlt className="w-[72px] h-[72px] text-[#0152BB]" />
            </div>
            <p className="mb-1 text-sm text-gray-700 font-medium">{label}</p>
            {subLabel && <p className="text-xs text-gray-500">{subLabel}</p>}
          </div>
          <input type="file" className="hidden" accept={accept} onChange={handleFileChange} />
        </label>
      ) : (
        <div className="h-40 border-2 border-blue-100 border-dashed rounded-lg bg-blue-50/10 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Tap to change file</p>
          <input type="file" className="hidden" accept={accept} onChange={handleFileChange} />
        </div>
      )}

      {file && (
        <div className="mt-4 space-y-3">
          <div className="relative">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded">
                  {file.type.includes('pdf') ? (
                    <FileText size={20} className="text-blue-600" />
                  ) : (
                    <ImageIcon size={20} className="text-blue-600" />
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700 max-w-[200px] truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {(file.size / 1024).toFixed(0)}kb
                  </span>
                </div>
              </div>

              {progress === 100 ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <button onClick={removeFile}>
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>

            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  progress === 100 ? 'bg-green-500' : 'bg-blue-600'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
