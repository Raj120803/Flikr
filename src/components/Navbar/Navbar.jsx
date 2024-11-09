import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing a CSS file for styling

function Navbar() {
  return (
    <header>
    <div className="logo">Finsweet</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
    <button className="subscribe-button">Subscribe</button>
  </header>
  );
}

export default Navbar;
