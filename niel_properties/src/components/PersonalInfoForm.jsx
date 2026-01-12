const PersonalInfoForm = ({ formik }) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
      <div className="space-y-1">
        <input
          type="text"
          placeholder="First Name"
          className={`w-full px-4 py-3 border rounded-full focus:outline-none text-gray-700 ${
            formik.touched.firstName && formik.errors.firstName
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-blue-500'
          }`}
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
        )}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          placeholder="Last Name"
          className={`w-full px-4 py-3 border rounded-full focus:outline-none text-gray-700 ${
            formik.touched.lastName && formik.errors.lastName
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-blue-500'
          }`}
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
        )}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
      <div className="space-y-1">
        <input
          type="text"
          placeholder="dd-mm-yyyy"
          className={`w-full px-4 py-3 border rounded-full focus:outline-none text-gray-700 ${
            formik.touched.dob && formik.errors.dob
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-blue-500'
          }`}
          name="dob"
          value={formik.values.dob}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.dob && formik.errors.dob && (
          <p className="text-red-500 text-sm">{formik.errors.dob}</p>
        )}
      </div>

      <div className="space-y-1">
        <input
          type="text"
          placeholder="Address"
          className={`w-full px-4 py-3 border rounded-full focus:outline-none text-gray-700 ${
            formik.touched.address && formik.errors.address
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-blue-500'
          }`}
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address && (
          <p className="text-red-500 text-sm">{formik.errors.address}</p>
        )}
      </div>
    </div>
  </div>
)

export default PersonalInfoForm
