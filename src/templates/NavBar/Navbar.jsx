// Navbar.jsx

import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="https://www.instagram.com/doragacharlakalyankumarreddy/">Services</a>
      <a href="/contact">Contact</a>
      <input type="text" placeholder="Search" maxlength="30" size="30" />
      <button type="button">Search</button>
      <a href="/">Sign In</a>

    </div>
  );
}

export default Navbar;
