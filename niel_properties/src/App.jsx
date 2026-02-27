import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import WelcomeScreen from "./Pages/WelcomeScreen";
import RoleSelection from "./Pages/RoleSelection";
import ForgotPassword from "./Pages/ForgotPassword";
import CheckEmail from "./Pages/CheckEmail";
import ResetPassword from "./Pages/ResetPassword";
import SuccessPage from "./Pages/SuccessPage";
import KYCVerification from "./Pages/KYCVerification";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Overview from "./Pages/dashboard/Overview";
import Referrals from "./Pages/dashboard/Referrals";
import NotificationModal from "./Pages/dashboard/Notifications";
import FeaturedProperties from "./components/FeaturedProperties";
import { KYCStatusContext } from "./context/KYCStatus";
import { SidebarProvider } from "./context/SidebarContext";
import { NotificationProvider, useNotification } from "./context/NotificationContext";
import { LogoutProvider, useLogout } from "./context/LogoutContext";
import Profile from "./components/Profile";
import SupportChat from "./components/SupportChat";
import PropertyBookings from "./components/PropertyBooings";
import Sidebar from "./components/Sidebar";
import DashHeader from "./components/DashHeader";
import LogoutModal from "./components/LogoutModal";
import CancelBooking from "./components/CancelBooking";
import BookAgain from "./components/BookAgain";
import BrowseProperties from "./components/Browseproperties";

import Hero from "./components/Testing";
import "./App.css";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen overflow-y-auto bg-[#F5FEFD] md:ml-[280px]">
        <DashHeader />
        <Outlet />
      </div>
    </div>
  );
};

// 👇 Extracted so it can consume context — renders on every page
const GlobalModals = () => {
  const { isNotificationOpen, closeNotifications } = useNotification();
  const { isLogoutOpen, closeLogout } = useLogout();

  return (
    <>
      <NotificationModal isOpen={isNotificationOpen} onClose={closeNotifications} />
      <LogoutModal isOpen={isLogoutOpen} onClose={closeLogout} />
    </>
  );
};

function App() {
  const [isKYCDone, setIsKYCDone] = useState(false);

  return (
    <KYCStatusContext.Provider value={{ isKYCDone, setIsKYCDone }}>
      <SidebarProvider>
        <NotificationProvider>
          <LogoutProvider>
            {/* 👇 Now available on every route, not just dashboard */}
            <GlobalModals />

            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<WelcomeScreen />} />
              <Route path="/role" element={<RoleSelection />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/check-email" element={<CheckEmail />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/featured-properties" element={<FeaturedProperties />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/support-chat" element={<SupportChat />} />
              <Route path="/property-bookings" element={<PropertyBookings />} />
              <Route path="/cancel-booking" element={<CancelBooking />} />
              <Route path="/book-again" element={<BookAgain />} />
              <Route path="/browse-properties" element={<BrowseProperties />} />

              {/* KYC route */}
              <Route
                path="/kyc"
                element={
                  <div className="min-h-screen bg-[#F5FEFD] flex items-center justify-center p-4 font-sans">
                    <KYCVerification />
                  </div>
                }
              />

              <Route path="/hero" element={<Hero />} />

              {/* Dashboard layout routes */}
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Overview />} />
                <Route path="/dashboard/referrals" element={<Referrals />} />
              </Route>
            </Routes>
          </LogoutProvider>
        </NotificationProvider>
      </SidebarProvider>
    </KYCStatusContext.Provider>
  );
}

export default App;