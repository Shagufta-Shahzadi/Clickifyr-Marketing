import React, { useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header2';
import { servicesData } from '../Data/servicesData';
import './Services.css';

const heroBg =
  "https://img.freepik.com/free-photo/discussing-plans_1098-14250.jpg?semt=ais_hybrid&w=740";

const Services = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      const cards = document.querySelectorAll('.scroll-animate');
      const triggerBottom = window.innerHeight * 0.92;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="services-page">
      <Header />
      {/* Hero Section */}
      <section
        className="services-hero-section"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-desc">
            Discover our wide range of digital solutions designed to help your business grow and succeed.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <div className="services-cards-container">
        {servicesData.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              className="service-card scroll-animate"
              key={service.title}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="service-icon">
                <Icon size={36} color="#1976d2" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <button className="service-view-btn">View Details</button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Services;