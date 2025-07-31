import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header2.css';
import logo from '../Assests/Company Logo.png';

const Header2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header2-main-container');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Debug: Check current pathname
  console.log('Current pathname:', location.pathname);

  // Don't render header on home page - check exact path
  if (location.pathname === '/' || location.pathname === '/home') {
    console.log('Header2 should not render on home page');
    return null;
  }

  const handleLinkClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleContactClick = () => {
    navigate('/ContactUs');
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            onClick={() => handleLinkClick('/')}
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="header2-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`header2-hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Navigation Menu */}
        <nav className={`header2-menu-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="header2-menu-list">
            <li className="header2-menu-item">
              <button
                className={`header2-menu-link ${location.pathname === '/' ? 'header2-menu-link-current' : ''}`}
                onClick={() => handleLinkClick('/')}
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