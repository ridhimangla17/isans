import React from 'react';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left">
          <img
            src="https://isans.ca/wp-content/uploads/2021/05/isans_275.png"
            alt="ISANS Logo"
            className="footer-logo"
          />
          <p>
            ISANS helps immigrants build a future in Nova Scotia. Our vision is
            to build a community where all can belong and grow.
          </p>
          {/* <div className="footer-social">
            <i className="fa fa-accessible-icon" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div> */}
          <div className="social-icons-2">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Our Programs</h4>
            <a href="#">Program Database</a>
            <a href="#">Get Settled</a>
            <a href="#">Learn English</a>
            <a href="#">Find Employment</a>
            <a href="#">Do Business</a>
            <a href="#">Connect with Community</a>
            <a href="#">Diversify your Workforce</a>
            <a href="#">Pre-Arrival Services</a>
          </div>
          <div className="footer-column">
            <h4>Organization</h4>
            <a href="#">Equity, Diversity, and Inclusion</a>
            <a href="#">Get Involved</a>
            <a href="#">About Us</a>
            <a href="#">Donate</a>
            <a href="#">Careers</a>
            <a href="#">Resources</a>
            <a href="#">FAQ</a>
            <a href="#">Complaint Process</a>
            <a href="#">Client and Staff Rights and Responsibilities</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-column">
            <h4>News and Events</h4>
            <a href="#">Latest News</a>
            <a href="#">Our Events</a>
            <h4>Media and Partners</h4>
            <a href="#">Request an Interview</a>
            <a href="#">Media Kit</a>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <a href="#">Translation</a>
            <a href="#">Skills Match</a>
            <h4>Subscribe to our Newsletter</h4>
            <p>
              Get the latest updates on ISANS programs and services via our
              email updates.
            </p>
            <button className="signup-button">Sign-Up Now</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          We acknowledge we are on unceded, traditional Mi'kmaq territory, and
          we are grateful for the Peace and Friendship treaties.
        </p>
        <p>© 2024 ISANS. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Report an Error</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
