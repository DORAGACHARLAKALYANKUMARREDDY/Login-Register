// HomePage.jsx

import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to My Website</h1>
        <p>Explore the wonders of our world</p>
      </header>

      <section className="content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          augue vitae augue dignissim, nec auctor ipsum laoreet. Curabitur
          venenatis tristique turpis, vel malesuada eros vestibulum ac. Nulla
          facilisi.
        </p>
        {/* Add more content sections as needed */}
      </section>

      <section className="content">
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>

      <section className="content">
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out to us at{' '}
          <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </section>

      {/* Add more sections or components as needed */}
    </div>
  );
};

export default HomePage;
