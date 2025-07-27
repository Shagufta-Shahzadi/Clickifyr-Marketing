import React, { useState } from 'react';
import './Header2.css';
import logo from '../Assests/Company Logo.png'; // Import the logo

const Header2 = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName, sectionId) => {
    setActiveLink(linkName);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleContactClick = () => {
    // Scroll to contact section or open contact modal
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If no contact section, you can add modal logic here
      alert('Contact functionality - you can add modal or redirect logic here');
    }
  };

  return (
    <header className="header2-main-container">
      <div className="header2-content-wrapper">
        {/* Logo Section */}
        <div className="header2-brand-section">
          <img src={logo} alt="Clickifyr Marketing" className="header2-brand-logo" />
        </div>

        {/* Navigation Menu */}
        <nav className="header2-menu-container">
          <ul className="header2-menu-list">
            <li className="header2-menu-item">
              <a
                href="#home"
                className={`header2-menu-link ${activeLink === 'Home' ? 'header2-menu-link-current' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('Home', 'home');
                }}
              >
                Home
              </a>
            </li>
            <li className="header2-menu-item">
              <a
                href="#about"
                className={`header2-menu-link ${activeLink === 'About Us' ? 'header2-menu-link-current' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('About Us', 'about');
                }}
              >
                About Us
              </a>
            </li>
            <li className="header2-menu-item">
              <a
                href="#services"
                className={`header2-menu-link ${activeLink === 'Services' ? 'header2-menu-link-current' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('Services', 'services');
                }}
              >
                Services
              </a>
            </li>
            <li className="header2-menu-item">
              <a
                href="#privacy"
                className={`header2-menu-link ${activeLink === 'Privacy Policy' ? 'header2-menu-link-current' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('Privacy Policy', 'privacy');
                }}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="header2-action-section">
          <button 
            className="header2-contact-btn"
            onClick={handleContactClick}
          >
            Contact Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header2;