import React from 'react'

// Mock data
const bookingsData = [
  { id: '1', propertyName: '2 Bedroom Flat', type: 'Apartment', status: 'Ongoing', date: '20-06-25' },
  { id: '2', propertyName: '2 Bedroom Flat', type: 'Shortlet', status: 'Completed', date: '23-04-25' },
  { id: '3', propertyName: '2 Bedroom Flat', type: 'Shortlet', status: 'Completed', date: '10-02-25' },
  { id: '4', propertyName: '2 Bedroom Flat', type: 'Apartment', status: 'Cancelled', date: '11-01-25' },
  { id: '5', propertyName: '2 Bedroom Flat', type: 'Apartment', status: 'Cancelled', date: '20-12-24' },
]

const RecentBookings = () => {
  return (
    <div className="flex-1 h-[320px] rounded-2xl bg-white py-6 px-8 font-sans">
      {/* Header */}
      <h2 className="montserrat text-[16px] font-semibold text-[#3A3A3A] mb-6">
        My Recent Bookings
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF]">Property Name</th>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF]">Type</th>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF]">Status</th>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF]">Date</th>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF]">View</th>
            </tr>
          </thead>

          <tbody>
            {bookingsData.map((booking) => (
              <tr key={booking.id}>
                <td className="inter text-[12px] py-3 text-[#3A3A3A] font-medium">
                  {booking.propertyName}
                </td>
                <td className="inter text-[12px] py-3 text-[#3A3A3A]">
                  {booking.type}
                </td>
                <td className="inter text-[12px] py-3 text-[#3A3A3A]">
                  {booking.status}
                </td>
                <td className="inter text-[12px] py-3 text-[#3A3A3A]">
                  {booking.date}
                </td>
                <td className="py-3">
                  <button className="text-[#0152BB] font-medium text-[12px] hover:underline">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentBookings
