import React from 'react';
// 1. Import ONLY Routes and Route (Do not import Router or BrowserRouter)
import { Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import WelcomeScreen from './Pages/WelcomeScreen';
import RoleSelection from './Pages/RoleSelection';
import ForgotPassword from './Pages/ForgotPassword';
import CheckEmail from './Pages/CheckEmail';
import ResetPassword from './Pages/ResetPassword';
import SuccessPage from './Pages/SuccessPage';
import KYCVerification from './Pages/KYCVerification';
import Overview from './Pages/dashboard/Overview';

function App() {
  return (
    // 2. DELETE <Router> here. Just start with <Routes>
    <Routes>
      {/* Route for the Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Route for the Sign Up Page */}
      <Route path="/signup" element={<SignUp />} />

      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<WelcomeScreen />} />
      <Route path="/role" element={<RoleSelection />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/check-email" element={<CheckEmail />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/kyc" element={<KYCVerification />} />
      <Route path="/dashboard" element={<Overview />} />
       {/* <Route path="/referrals" element={<Referrals />} /> */}
    </Routes>
    // 3. DELETE </Router> here
  );
}

export default App;