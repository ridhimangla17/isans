import React from 'react';
import './CSS/HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    const handleStartJourney = () => {
        window.open('/register', '_blank'); // Opens the registration form in a new tab
      };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Explore our Programs</h1>
        <p>
          Last year, ISANS worked with over 15,000 clients to build a future in Nova Scotia.
          At ISANS, we help you find your pathway to possibility.
        </p>
        <button className="cta-button" onClick={handleStartJourney}>Start My Journey at ISANS</button>
      </div>
    </section>
  );
};

export default HeroSection;