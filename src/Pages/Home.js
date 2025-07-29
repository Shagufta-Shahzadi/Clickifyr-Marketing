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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroSection = document.querySelector('.clickifyr-hero-section');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      setIsScrolled(scrollTop > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Check if current path is active
  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="clickifyr-home-page">
      {/* Custom Header for Hero Section */}
      <header className={`clickifyr-custom-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="clickifyr-header-container">
          <div className="clickifyr-logo">
            <img
              src={logo}
              alt="Clickifyr Logo"
              className="clickifyr-logo-img"
              onClick={() => handleNavigation('/')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <nav className="clickifyr-nav">
            <button 
              className={`clickifyr-nav-link ${isActivePage('/') ? 'active' : ''}`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
            <button 
              className={`clickifyr-nav-link ${isActivePage('/services') ? 'active' : ''}`}
              onClick={() => handleNavigation('/services')}
            >
              Services
            </button>
            <button 
              className={`clickifyr-nav-link ${isActivePage('/internships') ? 'active' : ''}`}
              onClick={() => handleNavigation('/internships')}
            >
              Internships
            </button>
            <button 
              className={`clickifyr-nav-link ${isActivePage('/courses') ? 'active' : ''}`}
              onClick={() => handleNavigation('/courses')}
            >
              Courses
            </button>
            <button 
              className={`clickifyr-nav-link ${isActivePage('/about') ? 'active' : ''}`}
              onClick={() => handleNavigation('/Aboutus')}
            >
              About Us
            </button>
          </nav>
          <button className="clickifyr-contact-btn">
            Contact Now
          </button>
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