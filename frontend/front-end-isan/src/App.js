import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import Footer from './Footer';
import Dashboard from './ClientDashboard'; // Import the ClientDashboard component
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PendingRequests from './EmployeeView/PendingRequests';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<><HeroSection /><InfoSection /><Footer /></>} />
          <Route path="/client-dashboard" element={<Dashboard />} />
          {/* You can add more routes for different pages */}
          <Route path="/pending-requests" element={<PendingRequests />} />
        </Routes>
        <HeroSection />
        <InfoSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
