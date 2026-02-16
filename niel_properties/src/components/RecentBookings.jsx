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
    <div className="flex-1 min-w-0 h-[330px] rounded-2xl bg-white py-4 px-5 font-sans overflow-x-auto">
      {/* Header */}
      <h2 className="montserrat text-[16px] font-semibold text-[#3A3A3A] mb-5">
        My Recent Bookings
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-[500px] w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF] whitespace-nowrap">Property Name</th>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF] whitespace-nowrap">Type</th>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF] whitespace-nowrap">Status</th>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF] whitespace-nowrap">Date</th>
              <th className="pb-3 inter text-[10px] font-[400] text-[#3A3A3ABF] whitespace-nowrap">View</th>
            </tr>
          </thead>

          <tbody>
            {bookingsData.map((booking) => (
              <tr key={booking.id}>
                <td className="inter text-[12px] py-2 text-[#3A3A3A] font-medium whitespace-nowrap">
                  {booking.propertyName}
                </td>
                <td className="inter text-[12px] py-2 text-[#3A3A3A] whitespace-nowrap">
                  {booking.type}
                </td>
                <td className="inter text-[12px] py-2 text-[#3A3A3A] whitespace-nowrap">
                  {booking.status}
                </td>
                <td className="inter text-[12px] py-2 text-[#3A3A3A] whitespace-nowrap">
                  {booking.date}
                </td>
                <td className="py-2 whitespace-nowrap">
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
