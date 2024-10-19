import React, { useState, useEffect } from 'react';
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

  const [searchTerm, setSearchTerm] = useState(''); // New state for search term
  const [programs, setPrograms] = useState([]); // State to hold the programs array

  // Array of colors for random assignment
  const colors = [
    '#e57373', // Red
    '#ffb74d', // Orange
    '#fff176', // Yellow
    '#aed581', // Green
    '#64b5f6', // Blue
    '#ba68c8', // Purple
    '#f48fb1', // Pink
    '#80cbc4', // Teal
    '#a1887f', // Brown
  ];

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/programList');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON data from the response
        console.log('Programs fetched from API:', data); // Log the fetched data
        setPrograms(data); // Store the fetched data in state
      } catch (error) {
        console.error('Error fetching programs:', error); // Log any errors that occur during the fetch
      }
    };

    fetchPrograms();
  }, []); // Empty dependency array ensures this runs only on component mount

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term when the input changes
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const filteredPrograms = programs.filter((program) => {
    const matchesSearchTerm = program.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPathway = filters.programPathway === 'All Program Pathways' || filters.programPathway === program.status;
    const matchesAge = filters.age === 'All Ages' || parseInt(filters.age.split('+')[0]) <= program.min_age;
    const matchesLiteracy = filters.literacy === 'All Literacy Requirements' || parseInt(filters.literacy.split(' ')[1]) <= parseInt(program.min_literacy.split(' ')[1]);
    const matchesVisa = filters.visa === 'All Visa Eligibilities' || program.status.includes(filters.visa); // Updated to use `status`
    const matchesDeliveryMethod = filters.deliveryMethod === 'All Delivery Methods' || filters.deliveryMethod === program.delivery;
    const matchesGender = filters.gender === 'All Genders' || filters.gender === program.gender || program.gender === "B"; // Handles 'B' as all genders

    return (
      matchesSearchTerm &&
      matchesPathway &&
      matchesAge &&
      matchesLiteracy &&
      matchesVisa &&
      matchesDeliveryMethod &&
      matchesGender
    );
  });

  return (
    <section className="info-section">
      <div className="info-left">
        {/* Filter Section */}
        <h3>How to use the program filter</h3>
        <p>Using the filter drop-downs, you can select from a number of options to show the program that fits your unique background and settlement journey.</p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange} // Capture search term input
          />
          <button type="submit">Submit</button>
          <select name="programPathway" value={filters.programPathway} onChange={handleFilterChange}>
            <option>All Program Pathways</option>
            <option>Connect with Community</option>
            <option>Diversify your Workforce</option>
            <option>Do Business</option>
            <option>Find Employment</option>
            <option>Get Settled</option>
            <option>Learn English</option>
            <option>Volunteers</option>
          </select>
          <select name="age" value={filters.age} onChange={handleFilterChange}>
            <option>All Ages</option>
            <option>15+</option>
            <option>25+</option>
            <option>30+</option>
            <option>40+</option>
          </select>
          <select name="literacy" value={filters.literacy} onChange={handleFilterChange}>
            <option>All Literacy Requirements</option>
            <option>CLB 1</option>
            <option>CLB 2</option>
            <option>CLB 3</option>
            <option>CLB 4</option>
            <option>None</option>
          </select>
          <select name="visa" value={filters.visa} onChange={handleFilterChange}>
            <option>All Visa Eligibilities</option>
            <option>Anyone</option>
            <option>Student</option>
            <option>Work Permit</option>
            <option>Permanent Resident</option>
            <option>Citizen</option>
          </select>
          <select name="deliveryMethod" value={filters.deliveryMethod} onChange={handleFilterChange}>
            <option>All Delivery Methods</option>
            <option>Blended</option>
            <option>In-Person</option>
            <option>Online</option>
          </select>
          <select name="gender" value={filters.gender} onChange={handleFilterChange}>
            <option>All Genders</option>
            <option>B</option>
            <option>W</option>
          </select>
        </form>
      </div>

      <div className="info-right">
        {/* Program Cards */}
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program, index) => (
            <div className="program-card" key={index} style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
              <h3>{program.name}</h3>
              <p>{`Description: ${program.description}`}</p> {/* Display the description */}
              <p>{`This program is available for ages ${program.min_age}+ with a minimum literacy level of ${program.min_literacy}.`}</p>
              <p>{`Delivery Method: ${program.delivery}`}</p>
              <p>{`Visa Eligibility: ${program.status.join(', ')}`}</p> {/* Changed from visa to status */}
            </div>
          ))
        ) : (
          <p>No programs match your search and filter criteria.</p>
        )}
      </div>
    </section>
  );
};

export default InfoSection;
