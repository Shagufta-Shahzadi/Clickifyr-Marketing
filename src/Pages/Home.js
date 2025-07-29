import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';
import Footer from '../Components/Footer';
import ServicesComponent from '../Components/ServicesComponent';
import logo from '../Assests/Company Logo.png';
import InternshipOffer from '../Components/InternshipOffer';
import AnimatedCounter from '../Components/AnimatedCounter';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Add home-page class to body
    document.body.classList.add('home-page');
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroSection = document.querySelector('.clickifyr-hero-section');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      setIsScrolled(scrollTop > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('home-page');
    };
  }, []);

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Check if current path is active
  const isActivePage = (path) => {
    return location.pathname === path;
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="clickifyr-home-page">
      {/* Custom Header for Hero Section with Unique Classes */}
      <header className={`clickifyr-home-custom-header ${isScrolled ? 'clickifyr-home-header-scrolled' : ''}`}>
        <div className="clickifyr-home-header-container">
          <div className="clickifyr-home-logo-section">
            <img
              src={logo}
              alt="Clickifyr Logo"
              className="clickifyr-home-logo-image"
              onClick={() => handleNavigation('/')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="clickifyr-home-desktop-nav">
            <button 
              className={`clickifyr-home-nav-button ${isActivePage('/') ? 'clickifyr-home-nav-active' : ''}`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
            <button 
              className={`clickifyr-home-nav-button ${isActivePage('/services') ? 'clickifyr-home-nav-active' : ''}`}
              onClick={() => handleNavigation('/services')}
            >
              Services
            </button>
            <button 
              className={`clickifyr-home-nav-button ${isActivePage('/internships') ? 'clickifyr-home-nav-active' : ''}`}
              onClick={() => handleNavigation('/internships')}
            >
              Internships
            </button>
            <button 
              className={`clickifyr-home-nav-button ${isActivePage('/courses') ? 'clickifyr-home-nav-active' : ''}`}
              onClick={() => handleNavigation('/courses')}
            >
              Courses
            </button>
            <button 
              className={`clickifyr-home-nav-button ${isActivePage('/about') ? 'clickifyr-home-nav-active' : ''}`}
              onClick={() => handleNavigation('/Aboutus')}
            >
              About Us
            </button>
          </nav>

          {/* Desktop Contact Button */}
          <button 
            className="clickifyr-home-contact-button clickifyr-home-desktop-contact"
            onClick={() => handleNavigation('/ContactUs')}
          >
            Contact Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="clickifyr-home-mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className={`clickifyr-home-hamburger-line ${isMobileMenuOpen ? 'clickifyr-home-line-active' : ''}`}></span>
            <span className={`clickifyr-home-hamburger-line ${isMobileMenuOpen ? 'clickifyr-home-line-active' : ''}`}></span>
            <span className={`clickifyr-home-hamburger-line ${isMobileMenuOpen ? 'clickifyr-home-line-active' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`clickifyr-home-mobile-nav ${isMobileMenuOpen ? 'clickifyr-home-mobile-nav-open' : ''}`}>
          <div className="clickifyr-home-mobile-nav-content">
            <button 
              className={`clickifyr-home-mobile-nav-button ${isActivePage('/') ? 'clickifyr-home-mobile-nav-active' : ''}`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
            <button 
              className={`clickifyr-home-mobile-nav-button ${isActivePage('/services') ? 'clickifyr-home-mobile-nav-active' : ''}`}
              onClick={() => handleNavigation('/services')}
            >
              Services
            </button>
            <button 
              className={`clickifyr-home-mobile-nav-button ${isActivePage('/internships') ? 'clickifyr-home-mobile-nav-active' : ''}`}
              onClick={() => handleNavigation('/internships')}
            >
              Internships
            </button>
            <button 
              className={`clickifyr-home-mobile-nav-button ${isActivePage('/courses') ? 'clickifyr-home-mobile-nav-active' : ''}`}
              onClick={() => handleNavigation('/courses')}
            >
              Courses
            </button>
            <button 
              className={`clickifyr-home-mobile-nav-button ${isActivePage('/about') ? 'clickifyr-home-mobile-nav-active' : ''}`}
              onClick={() => handleNavigation('/Aboutus')}
            >
              About Us
            </button>
            <button 
              className="clickifyr-home-contact-button clickifyr-home-mobile-contact"
              onClick={() => handleNavigation('/ContactUs')}
            >
              Contact Now
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {/* Hero Section */}
      <section className="clickifyr-hero-section">
        <div className="clickifyr-hero-overlay"></div>
        <div className="clickifyr-hero-container">
          <div className="clickifyr-hero-content">
            <h1 className="clickifyr-hero-title">
              Innovative IT<br />
              <span className="highlight">Solutions</span>
            </h1>
            <p className="clickifyr-hero-description">
              At Clickifyr, we specialize in delivering customized IT solutions that drive success and innovation. Our team of experts leverages the latest technologies to provide scalable and secure.
            </p>
            <button 
              className="clickifyr-hero-button"
              onClick={() => handleNavigation('/services')}
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Component - Added after Hero Section */}
      <ServicesComponent />

      <InternshipOffer/>
      <AnimatedCounter/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;