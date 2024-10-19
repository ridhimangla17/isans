import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation and useNavigate
import './CSS/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();  // Use useNavigate hook
  const location = useLocation();  // Use useLocation to check the current path

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleEmployeeClick = () => {
      closeModal();
      navigate('/pending-requests');
    };

  const handleClientLogin = () => {
    setIsLoggedIn(true); // Set the login status to true when client logs in
    closeModal();
    navigate('/client-dashboard');  // Redirect to the Client Dashboard page
  };

  const handleEmployeeLogin = () => {
    setIsLoggedIn(true); // Set the login status to true when employee logs in
    closeModal();
    navigate('/employee-dashboard');  // Redirect to Employee Dashboard page (create the route as needed)
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login status to false on logout
    navigate('/'); // Redirect back to the home page
  };

  // Only show the login button on the home page (root "/") and if not logged in
  const showLoginButton = location.pathname === '/' && !isLoggedIn;

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
            {showLoginButton && (
              <button className="login-button" onClick={openModal}>
                Login
              </button>
            )}
            {!showLoginButton && isLoggedIn && (
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            )}
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
              <button className="modal-option-button" onClick={handleClientLogin}>Client</button>
              <button className="modal-option-button" onClick={handleEmployeeLogin}>Employee</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

