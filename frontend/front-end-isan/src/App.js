// import React, { useState } from 'react';
// import './App.css';
// import PendingRequests from './EmployeeView/PendingRequests';
// import ViewEditPrograms from './EmployeeView/ViewEditPrograms';
// import AdminDashboard from './EmployeeView/AdminDashboard';

// function App() {
//   const [activeTab, setActiveTab] = useState('pending');

//   const renderActiveTab = () => {
//     switch (activeTab) {
//       case 'pending':
//         return <PendingRequests />;
//       case 'viewEdit':
//         return <ViewEditPrograms />;
//       case 'admin':
//         return <AdminDashboard />;
//       default:
//         return <PendingRequests />;
//     }
//   };

//   return (
//       <div className="app">
//         <header>
//           <div className="nav">
//             <span className="logo">ISANS</span>
//             <div className="tabs">
//               <button
//                   className={`tab ${activeTab === 'pending' ? 'active' : ''}`}
//                   onClick={() => setActiveTab('pending')}
//               >
//                 Pending Requests
//               </button>
//               <button
//                   className={`tab ${activeTab === 'viewEdit' ? 'active' : ''}`}
//                   onClick={() => setActiveTab('viewEdit')}
//               >
//                 View/Edit Programs
//               </button>
//               <button
//                   className={`tab ${activeTab === 'admin' ? 'active' : ''}`}
//                   onClick={() => setActiveTab('admin')}
//               >
//                 Admin Dashboard
//               </button>
//             </div>
//           </div>
//           <div className="header-right">
//             <span className="user">B. Ghevariya</span>
//           </div>
//         </header>

//         <div className="content">{renderActiveTab()}</div>
//       </div>
//   );
// }

// export default App;


// import React from 'react';
// import Header from './Header';
// import HeroSection from './HeroSection';
// import InfoSection from './InfoSection';
// import Footer from './Footer';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <HeroSection />
//       <InfoSection />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import Footer from './Footer';
import Dashboard from './ClientDashboard'; // Import the ClientDashboard component
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
