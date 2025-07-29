import React, { useState, useEffect, useRef } from 'react';
import './ServicesComponent.css';
import { servicesData } from '../Data/servicesData';

const ServicesComponent = ({ services = servicesData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardsRef = useRef([]);
  
  // Show first 6 services for home page
  const displayServices = services.slice(0, 6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className={`services-container ${isVisible ? 'visible' : ''}`}>
      <div className="services-header">
        <div className="header-top">
          <div className="services-icon-badge">
            <div className="badge-icon">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L2 7L12 12L22 7L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 17L12 22L22 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12L12 17L22 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="badge-text">Our Services</span>
          </div>
        </div>
                
        <h2 className="services-title">What We Offer</h2>
        <p className="services-description">
          Comprehensive digital solutions designed to elevate your business with modern technology and innovative strategies.
        </p>
      </div>

      <div className="services-scroll-container">
        <div className="services-scroll-wrapper">
          <div className="services-horizontal-grid">
            {displayServices.map((service, index) => {
              const IconComponent = service.icon;
              const isCardVisible = visibleCards.has(index);
              
              return (
                <div
                  key={index}
                  ref={(el) => cardsRef.current[index] = el}
                  data-index={index}
                  className={`services-card ${hoveredCard === index ? 'hovered' : ''} ${isCardVisible ? 'visible in-view' : ''}`}
                  style={{ backgroundColor: service.bgColor }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                  onClick={() => {
                    // Add click handler for navigation or modal
                    console.log(`Clicked on ${service.title}`);
                  }}
                >
                  <div className="services-icon">
                    <IconComponent size={22} />
                  </div>
                                                  
                  <div className="services-content">
                    <h3 className="services-service-title">
                      {service.title}
                    </h3>
                    <p className="services-card-description">
                      {service.description}
                    </p>
                    <button 
                      className="read-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add read more functionality
                        console.log(`Read more about ${service.title}`);
                      }}
                    >
                      Learn More
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