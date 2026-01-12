import { useState } from 'react'
import { FileUpload } from './KYCComponents'
import { ChevronDown } from 'lucide-react'

const IDUploadForm = ({ formik }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-1">
        <div className="relative">
          <select
            name="idType"
            className={`w-full px-4 py-3 border rounded-lg appearance-none bg-white text-gray-700 focus:outline-none ${
              formik.touched.idType && formik.errors.idType
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-blue-500'
            }`}
            value={formik.values.idType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option>National ID</option>
            <option>Passport</option>
            <option>Driver's License</option>
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
        </div>

        {formik.touched.idType && formik.errors.idType && (
          <p className="text-red-500 text-sm">{formik.errors.idType}</p>
        )}
      </div>

      <div className="space-y-1">
        <FileUpload
          label="Upload Your Files Here"
          accept="image/*,.pdf"
          onFileSelect={(file) => formik.setFieldValue('idFile', file)}
        />

        {formik.touched.idFile && formik.errors.idFile && (
          <p className="text-red-500 text-sm">{formik.errors.idFile}</p>
        )}
      </div>
    </div>
  )
}

export default IDUploadForm
