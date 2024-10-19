import React from 'react';
import './CSS/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Explore our Programs</h1>
        <p>
          Last year, ISANS worked with over 15,000 clients to build a future in Nova Scotia. 
          At ISANS, we help you find your pathway to possibility.
        </p>
        <button className="cta-button">Start My Journey at ISANS</button>
      </div>
    </section>
  );
};

export default HeroSection;
