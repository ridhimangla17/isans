import React, { useState } from 'react';
import './CSS/InfoSection.css';

const InfoSection = () => {
  const [filters, setFilters] = useState({
    programPathway: 'All Program Pathways',
    age: 'All Ages',
    literacy: 'All Literacy Requirements',
    visa: 'All Visa Eligibilities',
    deliveryMethod: 'All Delivery Methods',
    gender: 'All Genders',
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search or filter functionality as needed
  };

  return (
    <section className="info-section">
      <div className="info-left">
        {/* Filter Section */}
        <h3>How to use the program filter</h3>
        <p>Using the filter drop-downs, you can select from a number of options to show the program that fits your unique background and settlement journey.</p>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search..." />
          <button type="submit">Submit</button>
          <select name="programPathway" value={filters.programPathway} onChange={handleFilterChange}>
            <option>All Program Pathways</option>
            <option>Connect with Community (7)</option>
            <option>Diversify your Workforce (7)</option>
            <option>Do Business (5)</option>
            <option>Find Employment (23)</option>
            <option>Get Settled (19)</option>
            <option>Learn English (24)</option>
            <option>Volunteers (0)</option>
          </select>
          <select name="age" value={filters.age} onChange={handleFilterChange}>
            <option>All Ages</option>
            <option>15-19 (1)</option>
            <option>15-25 (1)</option>
            <option>15-30 (2)</option>
            <option>15+ (1)</option>
            <option>16-25 (2)</option>
            <option>19+ (8)</option>
            <option>55+ (1)</option>
            <option>All (70)</option>
          </select>
          <select name="literacy" value={filters.literacy} onChange={handleFilterChange}>
            <option>All Literacy Requirements</option>
            <option>CLB 1 (13)</option>
            <option>CLB 2 (16)</option>
            <option>CLB 3 (17)</option>
            <option>CLB 4 (23)</option>
            <option>CLB 5 (33)</option>
            <option>CLB 6 (36)</option>
            <option>CLB 7 (38)</option>
            <option>CLB 8 (36)</option>
            <option>None (35)</option>
          </select>
          <select name="visa" value={filters.visa} onChange={handleFilterChange}>
            <option>All Visa Eligibilities</option>
            <option>Canadian Citizen (58)</option>
            <option>Closed or Open Work Permit Holder (3)</option>
            <option>Government Assisted Refugees (74)</option>
            <option>International Students (26)</option>
            <option>Nova Scotia Employer (4)</option>
            <option>Permanent Resident (2)</option>
            <option>PR Application in Progress (61)</option>
            <option>PR Pre-Arrival (17)</option>
            <option>Refugee Claimants (27)</option>
            <option>Registered ISANS Permanent Residents (79)</option>
            <option>Skilled Foreign Worker (2)</option>
            <option>Temporary Foreign Worker (18)</option>
            <option>Valid Job Offer from Designated Employer (1)</option>
          </select>
          <select name="deliveryMethod" value={filters.deliveryMethod} onChange={handleFilterChange}>
            <option>All Delivery Methods</option>
            <option>Blended (11)</option>
            <option>In-Person (54)</option>
            <option>Online (46)</option>
          </select>
          <select name="gender" value={filters.gender} onChange={handleFilterChange}>
            <option>All Genders</option>
            <option>All (84)</option>
            <option>Women (3)</option>
          </select>
        </form>
      </div>
      <div className="info-right">
        {/* Program Cards */}
        <div className="program-card">
          <h3>Youth Life Skills</h3>
          <p>If you are a government-assisted refugee youth (age 15-25) who has arrived in Nova Scotia...</p>
        </div>
        <div className="program-card">
          <h3>Youth Explore!</h3>
          <p>ISANS’ Youth Explore! program helps youth like you meet others, learn about Canadian culture...</p>
        </div>
        <div className="program-card">
          <h3>Workplace Writing Skills</h3>
          <p>We offer four writing courses that help newcomers improve their workplace writing skills from CLB...</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
