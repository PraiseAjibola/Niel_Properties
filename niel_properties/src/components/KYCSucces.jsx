const KYCSucces = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 text-center animate-in zoom-in duration-500">
            <h2 className="text-2xl md:text-[40px] montserrat font-[700] text-center text-[#3A3A3A] mb-6">All Done!</h2>
            <div className="mb-4 relative">
                <img src="/kycImage.png" alt="KYC Success" className='object-contain h-[296px]' />
            </div>
            <p className="inter text-gray-500 text-center text-[19px] mb-8">
                Your KYC registration has been successfully completed. 
                <span className='block'>Verification may take up to 24 hours.</span>
            </p>
            <button
                onClick={() => window.location.reload()}
                className="w-1/2 inter bg-[#0152BB] hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition-colors font-[600] text-[24px]"
            >
                Continue
            </button>
        </div>
    )
}

export default KYCSucces