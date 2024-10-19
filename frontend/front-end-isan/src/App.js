import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import Footer from './Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PendingRequests from './EmployeeView/PendingRequests';
import RegistrationForm from './EmployeeView/registrationform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
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
