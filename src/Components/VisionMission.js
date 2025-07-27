import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <div className="VisionMission-container">
      
      {/* Our Vision Section */}
      <section className="VisionMission-section">
        <div className="VisionMission-content-wrapper">
          <div className="VisionMission-text-content">
            <h2 className="VisionMission-section-title">Our Vision</h2>
            <p className="VisionMission-section-description">
              To lead the global digital transformation by offering innovative, intelligent, and impactful marketing and technology solutions that empower brands to achieve digital excellence, scalability, and success in a fast-changing digital economy.
            </p>
            
            <div className="VisionMission-features-list">
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Inspiring Digital Innovation</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Promoting Scalable Marketing Solutions</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Empowering Brands Through Technology</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Leading the Future of Digital Excellence</span>
              </div>
            </div>
          </div>
          
          <div className="VisionMission-image-content">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Digital marketing team collaboration"
              className="VisionMission-image"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="VisionMission-section">
        <div className="VisionMission-content-wrapper VisionMission-reverse">
          <div className="VisionMission-image-content">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Digital analytics and strategy"
              className="VisionMission-image"
            />
          </div>
          
          <div className="VisionMission-text-content">
            <h2 className="VisionMission-section-title">Our Mission</h2>
            <p className="VisionMission-section-description">
              At Clickifyr Marketing, our mission is to provide businesses across the globe with a complete suite of high-impact digital solutions that are tailored for growth, visibility, and performance. We are passionate about redefining the digital experience by offering innovative marketing strategies and cutting-edge technology solutions.
            </p>
            
            <div className="VisionMission-features-list">
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Global Digital Solutions</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>High-Impact Marketing Strategies</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Performance-Driven Results</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Tailored Growth Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default VisionMission;