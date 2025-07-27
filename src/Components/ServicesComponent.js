import React from 'react';
import './ServicesComponent.css';
import { servicesData } from '../Data/servicesData'; // Updated import path

const ServicesComponent = ({ services = servicesData }) => {
  // Show first 6 services for home page
  const displayServices = services.slice(0, 6);

  return (
    <div className="services-container">
      <div className="services-header">
        <div className="header-top">
          <div className="services-icon-badge">
            <div className="badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="badge-text">Services</span>
          </div>
        </div>
        
        <h2 className="services-title">Discover Our Services</h2>
        <p className="services-description">
          We provide comprehensive digital solutions to help your business grow and succeed in today's competitive market with cutting-edge technology and creative expertise.
        </p>
      </div>

      <div className="services-scroll-container">        
        <div className="services-scroll-wrapper">
          <div className="services-horizontal-grid">
            {displayServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="services-card"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <div className="services-icon">
                    <IconComponent size={32} />
                  </div>
                               
                  <div className="services-content">
                    <h3 className="services-service-title">
                      {service.title}
                    </h3>
                    <p className="services-card-description">
                      {service.description}
                    </p>
                    <button className="read-more-btn">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;