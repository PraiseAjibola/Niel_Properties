import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProperBookingHeader from "./PropertyBookingHeader";

/* ─── Custom Calendar Component ─── */
const CalendarPicker = ({ value, onChange, label }) => {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => {
    return value ? new Date(value) : new Date();
  });
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const dayNames = ["Su","Mo","Tu","We","Th","Fr","Sa"];

  // First day of month & total days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  // Build calendar grid (6 rows × 7 cols)
  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push({ day: daysInPrev - firstDay + 1 + i, current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, current: false });
  }

  const selectedDate = value ? new Date(value) : null;
  const isSelected = (day, current) => {
    if (!selectedDate || !current) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };
  const isToday = (day, current) => {
    if (!current) return false;
    const t = new Date();
    return t.getDate() === day && t.getMonth() === month && t.getFullYear() === year;
  };

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const handleSelect = (day, current) => {
    if (!current) return;
    const d = new Date(year, month, day);
    const formatted = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    onChange(formatted);
    setOpen(false);
  };

  const handleApply = () => setOpen(false);
  const handleCancel = () => setOpen(false);

  const displayValue = value
    ? new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";

  return (
    <div className="flex-1 relative" ref={ref}>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-400 bg-white text-left flex items-center justify-between"
      >
        <span className={displayValue ? "text-gray-700" : "text-gray-300"}>
          {displayValue || "Select date"}
        </span>
        {/* Calendar icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[300px]"
          style={{ left: 0 }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-gray-800 text-sm">
              {monthNames[month]} {year}
            </span>
            <div className="flex gap-1">
              <button
                onClick={prevMonth}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={nextMonth}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Day names */}
          <div className="grid grid-cols-7 mb-2">
            {dayNames.map((d) => (
              <div key={d} className="text-center text-xs text-gray-400 font-medium py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-y-1">
            {cells.map((cell, i) => {
              const selected = isSelected(cell.day, cell.current);
              const today = isToday(cell.day, cell.current);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelect(cell.day, cell.current)}
                  disabled={!cell.current}
                  className={`
                    w-full aspect-square flex items-center justify-center rounded-full text-sm transition-all
                    ${!cell.current ? "text-gray-300 cursor-default" : "cursor-pointer hover:bg-blue-50"}
                    ${selected ? "bg-[#0052CC] text-white hover:bg-[#0052CC]" : ""}
                    ${today && !selected ? "text-[#0052CC] font-bold" : ""}
                    ${cell.current && !selected ? "text-gray-700" : ""}
                  `}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex gap-2 mt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="flex-1 py-2 rounded-lg bg-[#0052CC] text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Main Component ─── */
const PropertyBookingForm = () => {
  const navigate = useNavigate();

  const [bookingDuration, setBookingDuration] = useState("Daily");
  const [paymentType, setPaymentType] = useState("Pay in Full");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [showPromoInput, setShowPromoInput] = useState(false);

  const property = {
    name: "Bedroom Flat Apartment",
    location: "Lekki Phase 1 (end of freedom way)",
    type: "Shortlet",
    bookingOptions: "Daily",
    price: "₦150,000/night",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400",
    ],
  };

  const summary = {
    duration: "2 Months",
    totalPrice: "₦360,000",
    discount: "-₦15,000 (if promo/referral applied)",
    finalTotal: "₦345,000",
  };

  return (
    <div className="flex min-h-screen bg-[#F8FDFF]">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 lg:ml-[280px]">
        {/* Header */}
        <ProperBookingHeader />

        <main className="p-4 md:p-8 max-w-7xl w-full mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Property Booking</h1>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* LEFT: Property Info */}
            <div className="w-full lg:max-w-sm">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-2 mb-5 rounded-2xl overflow-hidden">
                <div className="col-span-1 row-span-2">
                  <img
                    src={property.images[0]}
                    alt="Main"
                    className="w-full h-full object-cover"
                    style={{ minHeight: "180px" }}
                  />
                </div>
                <div className="h-[88px] overflow-hidden">
                  <img src={property.images[1]} alt="Room 1" className="w-full h-full object-cover" />
                </div>
                <div className="h-[88px] overflow-hidden">
                  <img src={property.images[2]} alt="Room 2" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Property Name</span>
                  <span className="text-gray-800 font-medium text-right">{property.name}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Location</span>
                  <span className="text-gray-800 font-medium text-right max-w-[55%]">{property.location}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-gray-800 font-medium">{property.type}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Booking Options:</span>
                  <span className="text-gray-800 font-medium">{property.bookingOptions}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Price:</span>
                  <span className="text-gray-800 font-semibold">{property.price}</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Booking Form */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-base font-bold text-gray-800 mb-5">Booking Form</h2>

                {/* Booking Duration */}
                <div className="mb-5">
                  <p className="text-sm text-gray-500 mb-2">Booking Duration</p>
                  <div className="flex gap-2">
                    {["Daily", "Monthly", "Yearly"].map((d) => (
                      <button
                        key={d}
                        onClick={() => setBookingDuration(d)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all ${
                          bookingDuration === d
                            ? "border-blue-600 text-blue-600"
                            : "border-gray-200 text-gray-500 hover:border-gray-300"
                        }`}
                      >
                        <span
                          className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                            bookingDuration === d
                              ? "border-blue-600 bg-blue-600"
                              : "border-gray-300"
                          }`}
                        />
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Start & End Date with Custom Calendar ── */}
                <div className="flex gap-4 mb-5">
                  <CalendarPicker
                    label="Start Date"
                    value={startDate}
                    onChange={setStartDate}
                  />
                  <CalendarPicker
                    label="End Date"
                    value={endDate}
                    onChange={setEndDate}
                  />
                </div>

                {/* Payment Type */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Payment Type</p>
                  <div className="flex gap-2">
                    {["Pay in Full", "Pay in Installments"].map((p) => (
                      <button
                        key={p}
                        onClick={() => setPaymentType(p)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all ${
                          paymentType === p
                            ? "border-blue-600 text-blue-600"
                            : "border-gray-200 text-gray-500 hover:border-gray-300"
                        }`}
                      >
                        <span
                          className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                            paymentType === p
                              ? "border-blue-600 bg-blue-600"
                              : "border-gray-300"
                          }`}
                        />
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Info Confirmation */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Personal Info Confirmation</p>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-300 focus:outline-none focus:border-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-300 focus:outline-none focus:border-blue-400"
                    />
                    <input
                      type="tel"
                      placeholder="Phone No"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-300 focus:outline-none focus:border-blue-400"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-300 focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="mb-5">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Payment Summary</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Booking Duration</span>
                      <span className="text-gray-700 font-medium">{summary.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Price:</span>
                      <span className="text-gray-700 font-medium">{summary.totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Discount:</span>
                      <span className="text-green-600 font-medium">{summary.discount}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-100 pt-2">
                      <span className="text-gray-400">Final Total:</span>
                      <span className="text-gray-800 font-bold">{summary.finalTotal}</span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                {showPromoInput ? (
                  <div className="flex gap-2 mb-5">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                    />
                    <button className="bg-[#0052CC] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                      Apply
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowPromoInput(true)}
                    className="text-[#0052CC] text-sm font-medium hover:underline mb-5 block"
                  >
                    Apply Promo Code
                  </button>
                )}

                {/* Proceed to Payment */}
                <button
                  onClick={() => navigate("/kyc")}
                  className="w-full bg-[#0052CC] hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default PropertyBookingForm;