import { FileUpload } from './KYCComponents'

const SelfieUpload = ({ formik }) => {
  return (
    <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <p className="text-sm text-gray-600 mb-4">
        Upload a clear selfie holding your ID
      </p>

      <div className="space-y-1">
        <FileUpload
          label="Upload Your Files Here"
          subLabel="Make sure your face is clearly visible"
          accept="image/*"
          onFileSelect={(file) => formik.setFieldValue('selfieFile', file)}
        />

        {formik.touched.selfieFile && formik.errors.selfieFile && (
          <p className="text-red-500 text-sm">{formik.errors.selfieFile}</p>
        )}
      </div>
    </div>
  )
}

export default SelfieUpload
