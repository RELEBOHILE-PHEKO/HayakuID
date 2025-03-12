import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import LoginPage from './Components/Login Page';
import RegistrationPage from './Components/Registration Page';
import Dashboard from './Components/Dashboard';
import ApplicationForm from './Components/Application Form';
import ApplicationStatus from './Components/Application Status';
import Profile from './Components/Profile';
import PaymentPage from './Components/Payment Page';
import HeroSection from './Components/HeroSection'; // New component
import Features from './Components/Features'; // New component
import './App.css'; // Import the global app styles

function App() {
  return (
    <Router>
      {/* Common header for navigation */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/application-status" element={<ApplicationStatus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/hero" element={<HeroSection />} /> {/* New route for HeroSection */}
        <Route path="/features" element={<Features />} /> {/* New route for Features */}
      </Routes>
    </Router>
  );
}

export default App;