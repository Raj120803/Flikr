import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <img src="" alt="Logo" className="footer-logo" />
        <div className="footer-links">
          <h1>Home</h1>
          <h1>Blogs</h1>
          <h1>About Us</h1>
          <h1>Contact Us</h1>
          <h1>Privacy and Policy</h1>
        </div>
      </div>

      <div className="footer-center">
        <h1>Subscribe to our newsletter for the latest updates and news</h1>
        <div className="subscribe-container">
          <input type="text" placeholder="Enter your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="contact-info">
          <h1>Finsweet 118 2561 Fintown</h1>
          <h1>Hello@finsweet.com</h1>
        </div>
        <div className="social-icons">
          <img src="" alt="Social Icon 1" />
          <img src="" alt="Social Icon 2" />
          <img src="" alt="Social Icon 3" />
          <img src="" alt="Social Icon 4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
