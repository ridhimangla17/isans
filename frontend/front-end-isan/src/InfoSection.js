// import React, { useState } from 'react';
// import './CSS/InfoSection.css';

// const InfoSection = () => {
//   const [filters, setFilters] = useState({
//     programPathway: 'All Program Pathways',
//     age: 'All Ages',
//     literacy: 'All Literacy Requirements',
//     visa: 'All Visa Eligibilities',
//     deliveryMethod: 'All Delivery Methods',
//     gender: 'All Genders',
//   });

//   const [searchTerm, setSearchTerm] = useState(''); // New state for search term

//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value); // Update search term when the input changes
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//   };

//   const programs = [
//     {
//       name: "Youth Life Skills",
//       delivery: "In-Person",
//       gender: "All",
//       min_age: 15,
//       min_literacy: "CLB 1",
//       visa: "Government Assisted Refugees",
//       status: "Anyone"
//     },
//     {
//       name: "Youth Explore!",
//       delivery: "Online",
//       gender: "All",
//       min_age: 15,
//       min_literacy: "CLB 3",
//       visa: "PR Application in Progress",
//       status: "Anyone"
//     },
//     {
//       name: "Workplace Writing Skills",
//       delivery: "Blended",
//       gender: "Women",
//       min_age: 19,
//       min_literacy: "CLB 5",
//       visa: "Registered ISANS Permanent Residents",
//       status: "Anyone"
//     },
//     {
//       name: "Advanced English Skills",
//       delivery: "Online",
//       gender: "All",
//       min_age: 18,
//       min_literacy: "CLB 6",
//       visa: "International Students",
//       status: "Anyone"
//     },
//     {
//       name: "Business Networking Skills",
//       delivery: "In-Person",
//       gender: "All",
//       min_age: 20,
//       min_literacy: "CLB 4",
//       visa: "Temporary Foreign Worker",
//       status: "Anyone"
//     },
//     {
//       name: "Healthcare Training Program",
//       delivery: "Blended",
//       gender: "All",
//       min_age: 18,
//       min_literacy: "CLB 7",
//       visa: "Permanent Resident",
//       status: "Anyone"
//     },
//     {
//       name: "Technology Bootcamp",
//       delivery: "Online",
//       gender: "All",
//       min_age: 21,
//       min_literacy: "CLB 8",
//       visa: "Skilled Foreign Worker",
//       status: "Anyone"
//     },
//     {
//       name: "Community Engagement Workshop",
//       delivery: "In-Person",
//       gender: "All",
//       min_age: 16,
//       min_literacy: "CLB 2",
//       visa: "Refugee Claimants",
//       status: "Anyone"
//     },
//     {
//       name: "Leadership and Management Skills",
//       delivery: "Online",
//       gender: "All",
//       min_age: 25,
//       min_literacy: "CLB 7",
//       visa: "PR Application in Progress",
//       status: "Anyone"
//     }
//   ];

//   // Filter programs based on the search term
//   const filteredPrograms = programs.filter((program) =>
//     program.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter programs by name
//   );

//   return (
//     <section className="info-section">
//       <div className="info-left">
//         {/* Filter Section */}
//         <h3>How to use the program filter</h3>
//         <p>Using the filter drop-downs, you can select from a number of options to show the program that fits your unique background and settlement journey.</p>
//         <form onSubmit={handleSearch}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleSearchChange} // Capture search term input
//           />
//           <button type="submit">Submit</button>
//           <select name="programPathway" value={filters.programPathway} onChange={handleFilterChange}>
//             <option>All Program Pathways</option>
//             <option>Connect with Community (7)</option>
//             <option>Diversify your Workforce (7)</option>
//             <option>Do Business (5)</option>
//             <option>Find Employment (23)</option>
//             <option>Get Settled (19)</option>
//             <option>Learn English (24)</option>
//             <option>Volunteers (0)</option>
//           </select>
//           <select name="age" value={filters.age} onChange={handleFilterChange}>
//             <option>All Ages</option>
//             <option>15-19 (1)</option>
//             <option>15-25 (1)</option>
//             <option>15-30 (2)</option>
//             <option>15+ (1)</option>
//             <option>16-25 (2)</option>
//             <option>19+ (8)</option>
//             <option>55+ (1)</option>
//             <option>All (70)</option>
//           </select>
//           <select name="literacy" value={filters.literacy} onChange={handleFilterChange}>
//             <option>All Literacy Requirements</option>
//             <option>CLB 1 (13)</option>
//             <option>CLB 2 (16)</option>
//             <option>CLB 3 (17)</option>
//             <option>CLB 4 (23)</option>
//             <option>CLB 5 (33)</option>
//             <option>CLB 6 (36)</option>
//             <option>CLB 7 (38)</option>
//             <option>CLB 8 (36)</option>
//             <option>None (35)</option>
//           </select>
//           <select name="visa" value={filters.visa} onChange={handleFilterChange}>
//             <option>All Visa Eligibilities</option>
//             <option>Canadian Citizen (58)</option>
//             <option>Closed or Open Work Permit Holder (3)</option>
//             <option>Government Assisted Refugees (74)</option>
//             <option>International Students (26)</option>
//             <option>Nova Scotia Employer (4)</option>
//             <option>Permanent Resident (2)</option>
//             <option>PR Application in Progress (61)</option>
//             <option>PR Pre-Arrival (17)</option>
//             <option>Refugee Claimants (27)</option>
//             <option>Registered ISANS Permanent Residents (79)</option>
//             <option>Skilled Foreign Worker (2)</option>
//             <option>Temporary Foreign Worker (18)</option>
//             <option>Valid Job Offer from Designated Employer (1)</option>
//           </select>
//           <select name="deliveryMethod" value={filters.deliveryMethod} onChange={handleFilterChange}>
//             <option>All Delivery Methods</option>
//             <option>Blended (11)</option>
//             <option>In-Person (54)</option>
//             <option>Online (46)</option>
//           </select>
//           <select name="gender" value={filters.gender} onChange={handleFilterChange}>
//             <option>All Genders</option>
//             <option>All (84)</option>
//             <option>Women (3)</option>
//           </select>
//         </form>
//       </div>

//       <div className="info-right">
//         {/* Program Cards */}
//         {filteredPrograms.length > 0 ? (
//           filteredPrograms.map((program, index) => (
//             <div className="program-card" key={index}>
//               <h3>{program.name}</h3>
//               <p>{`This program is available for ages ${program.min_age}+ with a minimum literacy level of ${program.min_literacy}.`}</p>
//               <p>{`Delivery Method: ${program.delivery}`}</p>
//               <p>{`Visa Eligibility: ${program.visa}`}</p>
//             </div>
//           ))
//         ) : (
//           <p>No programs match your search.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default InfoSection;

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

  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

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

  const programs = [
    {
      name: "Youth Life Skills",
      delivery: "In-Person",
      gender: "All",
      min_age: 15,
      min_literacy: "CLB 1",
      visa: ["Anyone", "Permanent Resident"],
    },
    {
      name: "Youth Explore!",
      delivery: "Online",
      gender: "All",
      min_age: 15,
      min_literacy: "CLB 3",
      visa: ["Student", "Work Permit"],
    },
    {
      name: "Workplace Writing Skills",
      delivery: "Blended",
      gender: "Women",
      min_age: 19,
      min_literacy: "CLB 5",
      visa: ["Permanent Resident", "Citizen"],
    },
    {
      name: "Advanced English Skills",
      delivery: "Online",
      gender: "All",
      min_age: 18,
      min_literacy: "CLB 6",
      visa: ["Student", "Anyone"],
    },
    {
      name: "Business Networking Skills",
      delivery: "In-Person",
      gender: "All",
      min_age: 20,
      min_literacy: "CLB 4",
      visa: ["Work Permit", "Citizen"],
    },
    {
      name: "Healthcare Training Program",
      delivery: "Blended",
      gender: "All",
      min_age: 18,
      min_literacy: "CLB 7",
      visa: ["Permanent Resident", "Work Permit", "Citizen"],
    },
    {
      name: "Technology Bootcamp",
      delivery: "Online",
      gender: "All",
      min_age: 21,
      min_literacy: "CLB 8",
      visa: ["Work Permit", "Student"],
    },
    {
      name: "Community Engagement Workshop",
      delivery: "In-Person",
      gender: "All",
      min_age: 16,
      min_literacy: "CLB 2",
      visa: ["Anyone", "Permanent Resident"],
    },
    {
      name: "Leadership and Management Skills",
      delivery: "Online",
      gender: "All",
      min_age: 25,
      min_literacy: "CLB 7",
      visa: ["Citizen", "Work Permit"],
    }
  ];
  

  const filteredPrograms = programs.filter((program) => {
    const matchesSearchTerm = program.name.toLowerCase().includes(searchTerm.toLowerCase());
  
    const matchesPathway = filters.programPathway === 'All Program Pathways' || filters.programPathway === program.status;
  
    const matchesAge = filters.age === 'All Ages' || parseInt(filters.age.split('+')[0]) <= program.min_age;
  
    const matchesLiteracy = filters.literacy === 'All Literacy Requirements' || parseInt(filters.literacy.split(' ')[1]) <= parseInt(program.min_literacy.split(' ')[1]);
  
    // Modify this condition to check if the selected visa filter exists in the visa array
    const matchesVisa = filters.visa === 'All Visa Eligibilities' || program.visa.includes(filters.visa);
  
    const matchesDeliveryMethod = filters.deliveryMethod === 'All Delivery Methods' || filters.deliveryMethod === program.delivery;
  
    const matchesGender = filters.gender === 'All Genders' || filters.gender === program.gender;
  
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
            <option>All</option>
            <option>Women</option>
          </select>
        </form>
      </div>

      <div className="info-right">
        {/* Program Cards */}
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program, index) => (
            <div className="program-card" key={index}>
              <h3>{program.name}</h3>
              <p>{`This program is available for ages ${program.min_age}+ with a minimum literacy level of ${program.min_literacy}.`}</p>
              <p>{`Delivery Method: ${program.delivery}`}</p>
              <p>{`Visa Eligibility: ${program.visa}`}</p>
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
