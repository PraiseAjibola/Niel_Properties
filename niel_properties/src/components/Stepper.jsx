import React from "react"

export const Stepper = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center w-full mb-[60px]">
      {[...Array(totalSteps)].map((_, index) => {
        const stepNum = index + 1
        const isActive = stepNum === currentStep
        const isCompleted = stepNum < currentStep

        return (
          <React.Fragment key={stepNum}>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors duration-300
              ${
                isActive || isCompleted
                  ? 'bg-[#0152BB] text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {stepNum}
            </div>

            {stepNum !== totalSteps && (
              <div
                className={`w-16 lg:w-[169px] h-1 mx-2 rounded ${
                  isCompleted ? 'bg-[#0152BB]' : 'bg-gray-100'
                }`}
              ></div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
