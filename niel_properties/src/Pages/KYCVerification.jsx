import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import PersonalInfoForm from '../components/PersonalInfoForm'
import IDUploadForm from '../components/IDUploadForm'
import SelfieUpload from '../components/SelfieUpload'
import KYCSucces from '../components/KYCSucces'
import { Stepper } from '../components/Stepper'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  dob: Yup.string().required('Date of birth is required'),
  address: Yup.string().required('Address is required'),
  idType: Yup.string().required('ID type is required'),
  idFile: Yup.mixed().nullable().required('ID document is required'),
  selfieFile: Yup.mixed().nullable().required('Selfie is required'),
})

export default function KYCVerification() {
  const [step, setStep] = useState(1)

  const formik = useFormik({
    initialValues: {
      firstName: 'Flourish',
      lastName: 'Okewale',
      dob: '10-12-1990',
      address: 'Lekki phase 1, Lagos',
      idType: 'National ID',
      idFile: null,
      selfieFile: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values)
      setStep(4)
    },
  })

  const handleNext = async () => {
    const stepFields = {
      1: ['firstName', 'lastName', 'dob', 'address'],
      2: ['idType', 'idFile'],
      3: ['selfieFile'],
    }

    const fieldsToValidate = stepFields[step] || []

    try {
      // Validate each field in the current step
      await Promise.all(fieldsToValidate.map((field) => formik.validateField(field)))

      const errors = await formik.validateForm()
      const stepErrors = fieldsToValidate.filter((field) => errors[field])

      if (stepErrors.length === 0) {
        if (step === 3) {
          formik.handleSubmit()
        } else {
          setStep((prev) => Math.min(prev + 1, 4))
        }
      }
    } catch (error) {
      console.error('Validation error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5FEFD] flex items-center justify-center p-4 font-sans">
      <div className="bg-white  rounded-3xl shadow-xl py-8 px-8 md:px-[101px] w-full max-w-[850px] min-h-[500px] flex flex-col">
        {step < 4 ? (
          <>
            <h1 className="text-2xl md:text-[40px] montserrat font-[700] text-center text-[#3A3A3A] mb-6">
              Complete Your KYC Verification
            </h1>

            <Stepper currentStep={step} totalSteps={3} />

            <div className="flex-grow">
              {step === 1 && <PersonalInfoForm formik={formik} />}
              {step === 2 && <IDUploadForm formik={formik} />}
              {step === 3 && <SelfieUpload formik={formik} />}
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={handleNext}
                className="w-full bg-[#0152BB] hover:bg-blue-800 text-white font-semibold py-3 rounded-full transition-colors shadow-blue-200 shadow-lg"
              >
                {step === 3 ? 'Submit for Verification' : 'Next'}
              </button>

              <button className="w-full text-gray-400 text-sm py-2 hover:text-gray-600">
                Skip for later
              </button>
            </div>
          </>
        ) : (
          <KYCSucces />
        )}
      </div>
    </div>
  )
}
