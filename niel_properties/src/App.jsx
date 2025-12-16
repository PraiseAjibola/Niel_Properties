import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './Pages/Home';
import SignUp from './Pages/SignUp'; // Ensure you have this file created
import Login from './Pages/Login';
import WelcomeScreen from './Pages/WelcomeScreen';
import RoleSelection from './Pages/RoleSelection';
import ForgotPassword from './Pages/ForgotPassword';
import CheckEmail from './Pages/CheckEmail';
import ResetPassword from './Pages/ResetPassword';
import SuccessPage from './Pages/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* You can add a Login route later */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/role" element={<RoleSelection />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;