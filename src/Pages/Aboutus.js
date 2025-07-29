import React from 'react';
import './Aboutus.css';
import Header from '../Components/Header2'; // Bas yahan import
import Footer from '../Components/Footer';
import VisionMission from '../Components/VisionMission';

const ceoMessage = `Dear Team, Partners, and Clients,

At Clickifyr Marketing, our mission is to make technology simple, effective, and accessible for every business. Our vision is to be the leading IT consultants—empowering companies with innovative solutions, expert advice, and reliable support so they can achieve digital growth and success.

We believe in guiding you every step of the way, from digital strategy to seamless execution. Together, we will unlock new opportunities and shape a smarter future for all.

Thank you for trusting Clickifyr as your IT Consultant partner.

[CEO HamzaShoukat]  
CEO, Clickifyr Marketing`;

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <Header />

      {/* Hero Section */}
      <section className="aboutus-hero-fixed">
        <div className="aboutus-hero-bg" />
        <div className="aboutus-hero-overlay" />
        <div className="aboutus-hero-title-center">
          <h1>Clickifyr Marketing</h1>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="aboutus-ceo-main">
        <div className="aboutus-ceo-flex">
          <div className="aboutus-ceo-left">
            <div className="aboutus-ceo-quote">“</div>
            <div className="aboutus-ceo-heading">Meet Our CEO</div>
            <p className="aboutus-ceo-message">{ceoMessage}</p>
          </div>
          <div className="aboutus-ceo-right">
            <div className="aboutus-ceo-img-wrap">
              <img
                src="/api/placeholder/300/300"
                alt="CEO Hamza Shoukat"
                className="aboutus-ceo-img"
              />
              <div className="aboutus-ceo-badge">CEO</div>
            </div>
            <div className="aboutus-ceo-name">Hamza Shoukat</div>
            <div className="aboutus-ceo-title">Founder, CEO</div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <VisionMission />

      {/* Gallery Section */}
      <section className="aboutus-gallery-section">
        <h2 className="aboutus-gallery-heading">Gallery</h2>
        <div className="aboutus-gallery-images">
          <img src="/api/placeholder/400/250" alt="Gallery 1" />
          <img src="/api/placeholder/400/250" alt="Gallery 2" />
          <img src="/api/placeholder/400/250" alt="Gallery 3" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;