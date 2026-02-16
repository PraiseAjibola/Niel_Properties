import RecentBookings from '../../components/RecentBookings'
import ReminderCard from '../../components/ReminderCard'
import RecommendedProperties from '../../components/RecommendedProperties'

const Overview = () => {
    return (
        <div className="pt-5 px-6 min-h-[calc(100vh-64px)]">
            <h2 className='montserrat font-[600] text-[20px] text-[#3A3A3A]'>Hi Daniel, Welcome Back</h2>
            <p className='inter font-[400] text-[#3A3A3ABF] text-[14px]'>Here's a quick overview of your activities with Niel Properties.</p>
            <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className="bg-white rounded-lg pt-[20px] pb-[10px] px-[25px] h-[120px] flex flex-col justify-between ">
                    <div className='flex justify-between mb-[10px]'>
                        <div>
                            <p className='inter font-[500] text-[14px] text-[#3A3A3A]'>Active Bookings</p>
                            <p className='inter font-[400] text-[10px] text-[#3A3A3ABF]'>2 Ongoing</p>
                        </div>
                        <div className='w-[40px] h-[40px] bg-[#2692FD] rounded-full flex items-center justify-center'>
                            <img src="/dashhome.png" alt="dashboard home icon" className='w-[20px] object-contain' />
                        </div>
                    </div>
                    <div>
                        <p className='inter font-[400] text-[10px] text-[#3A3A3ABF]'>Value</p>
                        <p className='inter font-[500] text-[14px] text-[#3A3A3A]'>Shortlet</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg pt-[20px] pb-[10px] px-[25px] h-[120px] flex flex-col justify-between">
                    <div className='flex justify-between mb-[10px]'>
                        <div>
                            <p className='inter font-[500] text-[14px] text-[#3A3A3A]'>Pending Payments</p>
                            <p className='inter font-[400] text-[10px] text-[#3A3A3ABF]'>1 Pending</p>
                        </div>
                        <div className='w-[40px] h-[40px] bg-[#2692FD] rounded-full flex items-center justify-center'>
                            <img src="/dashhome.png" alt="dashboard home icon" className='w-[20px] object-contain' />
                        </div>
                    </div>
                    <div>
                        <p className='inter font-[400] text-[10px] text-[#3A3A3ABF]'>Value</p>
                        <p className='inter font-[500] text-[14px] text-[#3A3A3A]'>Apartment</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg pt-[20px] pb-[10px] px-[25px] h-[120px] flex flex-col justify-between">
                    <div className='flex justify-between mb-[10px]'>
                        <div>
                            <p className='inter font-[500] text-[14px] text-[#3A3A3A]'>Saved Properties</p>
                            <p className='inter font-[400] text-[10px] text-[#3A3A3ABF]'>3 Saved</p>
                        </div>
                        <div className='w-[40px] h-[40px] bg-[#2692FD] rounded-full flex items-center justify-center'>
                            <img src="/dashhome.png" alt="dashboard home icon" className='w-[20px] object-contain' />
                        </div>
                    </div>
                    <div>
                        <p className='inter font-[500] text-[14px] text-[#3A3A3A]'>Wishlist</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg pt-[20px] pb-[10px] px-[25px] h-[120px] flex flex-col justify-between">
                    <div className='flex justify-between mb-[10px]'>
                        <div>
                            <p className='inter font-[500] text-[14px] text-[#3A3A3A]'>Messages</p>
                            <p className='inter font-[400] text-[10px] text-[#3A3A3ABF]'>1 Unread</p>
                        </div>
                        <div className='w-[40px] h-[40px] bg-[#2692FD] rounded-full flex items-center justify-center'>
                            <img src="/dashhome.png" alt="dashboard home icon" className='w-[20px] object-contain' />
                        </div>
                    </div>
                    <div>
                        <p className='inter font-[500] text-[14px] text-[#3A3A3A]'>from support</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col min-[1151px]:flex-row gap-[38px]'>
                <RecentBookings />
                <ReminderCard />
            </div>
            <div className="bg-[#FFFFFF] rounded-2xl my-5">
            <RecommendedProperties />
            </div>
        </div>
    )
}

export default Overview 