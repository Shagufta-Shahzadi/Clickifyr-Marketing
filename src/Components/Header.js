import React, { useState } from 'react';
import './Header.css';
import logo from '../Assests/Company Logo.png'; // Import the logo

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <header className="clickifyr-header">
      <div className="clickifyr-header-container">
        {/* Logo Section */}
        <div className="clickifyr-logo-section">
          <img src={logo} alt="Clickifyr Marketing" className="clickifyr-logo-image" />
        </div>

        {/* Navigation Menu */}
        <nav className="clickifyr-navigation">
          <ul className="clickifyr-nav-list">
            <li className="clickifyr-nav-item">
              <a 
                href="#home" 
                className={`clickifyr-nav-link ${activeLink === 'Home' ? 'clickifyr-nav-link-active' : ''}`}
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </a>
            </li>
            <li className="clickifyr-nav-item">
              <a 
                href="#about" 
                className={`clickifyr-nav-link ${activeLink === 'About Us' ? 'clickifyr-nav-link-active' : ''}`}
                onClick={() => handleLinkClick('About Us')}
              >
                About Us
              </a>
            </li>
            <li className="clickifyr-nav-item">
              <a 
                href="#services" 
                className={`clickifyr-nav-link ${activeLink === 'Services' ? 'clickifyr-nav-link-active' : ''}`}
                onClick={() => handleLinkClick('Services')}
              >
                Services
              </a>
            </li>
            <li className="clickifyr-nav-item">
              <a 
                href="#privacy" 
                className={`clickifyr-nav-link ${activeLink === 'Privacy Policy' ? 'clickifyr-nav-link-active' : ''}`}
                onClick={() => handleLinkClick('Privacy Policy')}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="clickifyr-button-section">
          <button className="clickifyr-contact-button">
            Contact Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;