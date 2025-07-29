import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header2.css';
import logo from '../Assests/Company Logo.png';

const Header2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const handleContactClick = () => {
    // You can scroll to contact section or open a modal here
    // For now, redirect to contact page if exists, else show alert
    navigate('/contact');
    // If you don't have a contact page, use alert:
    // alert('Contact functionality - you can add modal or redirect logic here');
  };

  return (
    <header className="header2-main-container">
      <div className="header2-content-wrapper">
        {/* Logo Section */}
        <div className="header2-brand-section">
          <img
            src={logo}
            alt="Clickifyr Marketing"
            className="header2-brand-logo"
            style={{ cursor: 'pointer' }}
            onClick={() => handleLinkClick('/home')}
          />
        </div>

        {/* Navigation Menu */}
        <nav className="header2-menu-container">
          <ul className="header2-menu-list">
            <li className="header2-menu-item">
              <button
                className={`header2-menu-link ${location.pathname === '/home' ? 'header2-menu-link-current' : ''}`}
                onClick={() => handleLinkClick('/home')}
              >
                Home
              </button>
            </li>
            <li className="header2-menu-item">
              <button
                className={`header2-menu-link ${location.pathname === '/services' ? 'header2-menu-link-current' : ''}`}
                onClick={() => handleLinkClick('/services')}
              >
                Services
              </button>
            </li>
            <li className="header2-menu-item">
              <button
                className={`header2-menu-link ${location.pathname === '/internships' ? 'header2-menu-link-current' : ''}`}
                onClick={() => handleLinkClick('/internships')}
              >
                Internships
              </button>
            </li>
            <li className="header2-menu-item">
              <button
                className={`header2-menu-link ${location.pathname === '/courses' ? 'header2-menu-link-current' : ''}`}
                onClick={() => handleLinkClick('/courses')}
              >
                Courses
              </button>
            </li>
            <li className="header2-menu-item">
              <button
                className={`header2-menu-link ${location.pathname === '/Aboutus' ? 'header2-menu-link-current' : ''}`}
                onClick={() => handleLinkClick('/Aboutus')}
              >
                About Us
              </button>
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