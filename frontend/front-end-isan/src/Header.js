// // import React from 'react';
// // import './CSS/Header.css';

// // const Header = () => {
// //   return (
// //     <header>
// //       {/* Top bar with links and social icons */}
// //       <div className="top-bar">
// //         <div className="top-bar-content">
// //           <div className="top-links">
// //             <a href="#">Contact Us</a> | 
// //             <a href="#">News</a> | 
// //             <a href="#">Events</a> | 
// //             <a href="#">Careers</a> | 
// //             <a href="#">Get Involved</a> | 
// //             <a href="#">COVID-19</a>
// //           </div>
// //           <div className="social-icons">
// //             <button className="login-button">
// //               Login
// //             </button>
// //             <a href="#"><i className="fab fa-facebook"></i></a>
// //             <a href="#"><i className="fab fa-twitter"></i></a>
// //             <a href="#"><i className="fab fa-linkedin"></i></a>
// //             <a href="#"><i className="fab fa-instagram"></i></a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main logo and color bar section (side by side) */}
// //       <div className="logo-colorbar-section">
// //         <img src="https://isans.ca/wp-content/uploads/2021/05/isans_275.png" alt="ISANS Logo" className="isans-logo" />
// //         <img src="https://isans.ca/wp-content/uploads/2021/10/Main-Menu-Detail.svg" alt="Color Bar" className="color-bar" />
// //       </div>

// //       {/* Navbar with links */}
// //       <nav className="navbar">
// //         <div className="navbar-links">
// //           <a href="#">Get Settled</a>
// //           <a href="#">Learn English</a>
// //           <a href="#">Find Employment</a>
// //           <a href="#">Do Business</a>
// //           <a href="#">Connect with Community</a>
// //           <a href="#">Diversify your Workforce</a>
// //           <button className="explore-programs-button">Explore our Programs</button>
// //         </div>
// //         <div className="navbar-menu">
// //           <select className="language-select">
// //             <option value="en">English</option>
// //             <option value="fr">French</option>
// //             {/* Add more languages */}
// //           </select>
// //           <button className="search-button">
// //             <i className="fa fa-search"></i>
// //           </button>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;


// import React, { useState } from 'react';
// import './CSS/Header.css';

// const Header = () => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <header>
//       {/* Top bar with links and social icons */}
//       <div className="top-bar">
//         <div className="top-bar-content">
//           <div className="top-links">
//             <a href="#">Contact Us</a> | 
//             <a href="#">News</a> | 
//             <a href="#">Events</a> | 
//             <a href="#">Careers</a> | 
//             <a href="#">Get Involved</a> | 
//             <a href="#">COVID-19</a>
//           </div>
//           <div className="social-icons">
//             <button className="login-button" onClick={openModal}>
//               Login
//             </button>
//             <a href="#"><i className="fab fa-facebook"></i></a>
//             <a href="#"><i className="fab fa-twitter"></i></a>
//             <a href="#"><i className="fab fa-linkedin"></i></a>
//             <a href="#"><i className="fab fa-instagram"></i></a>
//           </div>
//         </div>
//       </div>

//       {/* Main logo and color bar section (side by side) */}
//       <div className="logo-colorbar-section">
//         <img src="https://isans.ca/wp-content/uploads/2021/05/isans_275.png" alt="ISANS Logo" className="isans-logo" />
//         <img src="https://isans.ca/wp-content/uploads/2021/10/Main-Menu-Detail.svg" alt="Color Bar" className="color-bar" />
//       </div>

//       {/* Navbar with links */}
//       <nav className="navbar">
//         <div className="navbar-links">
//           <a href="#">Get Settled</a>
//           <a href="#">Learn English</a>
//           <a href="#">Find Employment</a>
//           <a href="#">Do Business</a>
//           <a href="#">Connect with Community</a>
//           <a href="#">Diversify your Workforce</a>
//           <button className="explore-programs-button">Explore our Programs</button>
//         </div>
//         <div className="navbar-menu">
//           <select className="language-select">
//             <option value="en">English</option>
//             <option value="fr">French</option>
//             {/* Add more languages */}
//           </select>
//           <button className="search-button">
//             <i className="fa fa-search"></i>
//           </button>
//         </div>
//       </nav>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//         <div className="modal-content">
//           <button className="modal-close-icon" onClick={onClose}>
//             &times;
//           </button>
//           <h3>Login as:</h3>
//           <div>
//             <button className="modal-option-button">Client</button>
//             <button className="modal-option-button">Employee</button>
//           </div>
//         </div>
//       </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import './CSS/Header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header>
      {/* Top bar with links and social icons */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-links">
            <a href="#">Contact Us</a> | 
            <a href="#">News</a> | 
            <a href="#">Events</a> | 
            <a href="#">Careers</a> | 
            <a href="#">Get Involved</a> | 
            <a href="#">COVID-19</a>
          </div>
          <div className="social-icons">
            <button className="login-button" onClick={openModal}>
              Login
            </button>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Main logo and color bar section (side by side) */}
      <div className="logo-colorbar-section">
        <img src="https://isans.ca/wp-content/uploads/2021/05/isans_275.png" alt="ISANS Logo" className="isans-logo" />
        <img src="https://isans.ca/wp-content/uploads/2021/10/Main-Menu-Detail.svg" alt="Color Bar" className="color-bar" />
      </div>

      {/* Navbar with links */}
      <nav className="navbar">
        <div className="navbar-links">
          <a href="#">Get Settled</a>
          <a href="#">Learn English</a>
          <a href="#">Find Employment</a>
          <a href="#">Do Business</a>
          <a href="#">Connect with Community</a>
          <a href="#">Diversify your Workforce</a>
          <button className="explore-programs-button">Explore our Programs</button>
        </div>
        <div className="navbar-menu">
          <select className="language-select">
            <option value="en">English</option>
            <option value="fr">French</option>
            {/* Add more languages */}
          </select>
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-icon" onClick={closeModal}>
              &times;
            </button>
            <h3>Login as:</h3>
            <div>
              <button className="modal-option-button">Client</button>
              <button className="modal-option-button">Employee</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
