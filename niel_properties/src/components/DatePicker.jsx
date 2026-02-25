import React, { useState } from 'react';

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const DatePicker = ({ onClose, onApply, initialDate }) => {
  const [viewDate, setViewDate] = useState(initialDate || new Date());
  const [tempDate, setTempDate] = useState(initialDate);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];
  
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({ date: new Date(year, month - 1, daysInPrevMonth - i), isCurrentMonth: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ date: new Date(year, month, i), isCurrentMonth: true });
  }
  const remainingSlots = (7 - (calendarDays.length % 7)) % 7;
  if (remainingSlots > 0 && remainingSlots < 7) {
    for (let i = 1; i <= remainingSlots; i++) {
      calendarDays.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }
  }

  const handlePrevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const isSelected = (date) => {
    if (!tempDate) return false;
    return date.toDateString() === tempDate.toDateString();
  };

  return (
    <div className="absolute top-full left-0 mt-2 z-50 w-[320px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-blue-700 font-bold text-lg">{MONTHS[month]} {year}</h3>
        <div className="flex gap-2">
          <button type="button" onClick={handlePrevMonth} className="p-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button type="button" onClick={handleNextMonth} className="p-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center mb-4">
        {DAYS_OF_WEEK.map((day, i) => (
          <div key={i} className="text-gray-400 font-medium text-sm">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center mb-6">
        {calendarDays.map((dayObj, i) => (
          <div key={i} className="flex justify-center items-center h-10 w-10 mx-auto">
            <button 
              type="button"
              onClick={() => setTempDate(dayObj.date)}
              className={`w-8 h-8 rounded-md flex items-center justify-center text-sm transition ${!dayObj.isCurrentMonth ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'} ${isSelected(dayObj.date) ? 'bg-blue-700 text-white hover:bg-blue-800 shadow-sm' : ''}`}
            >
              {dayObj.date.getDate()}
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-2">
        <button type="button" onClick={onClose} className="flex-1 py-2.5 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition">
          Cancel
        </button>
        <button type="button" onClick={() => { if (tempDate) onApply(tempDate); onClose(); }} className="flex-1 py-2.5 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition">
          Apply
        </button>
      </div>
    </div>
  );
};

export default DatePicker;