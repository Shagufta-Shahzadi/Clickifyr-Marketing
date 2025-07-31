import React, { useEffect, useRef } from 'react';
import './VisionMission.css';

const VisionMission = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animate section elements
          const title = entry.target.querySelector('.VisionMission-section-title');
          const description = entry.target.querySelector('.VisionMission-section-description');
          const image = entry.target.querySelector('.VisionMission-image');
          const features = entry.target.querySelectorAll('.VisionMission-feature-item');
          
          if (title) {
            setTimeout(() => title.classList.add('animate-in'), 200);
          }
          
          if (description) {
            setTimeout(() => description.classList.add('animate-in'), 400);
          }
          
          if (image) {
            setTimeout(() => image.classList.add('animate-in'), 300);
          }
          
          features.forEach((feature, index) => {
            setTimeout(() => {
              feature.classList.add('animate-in');
            }, 600 + (index * 150));
          });
        }
      });
    }, observerOptions);

    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="VisionMission-container">
      
      {/* Our Vision Section */}
      <section className="VisionMission-section" ref={visionRef}>
        <div className="VisionMission-content-wrapper">
          <div className="VisionMission-image-content">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Digital marketing team collaboration"
              className="VisionMission-image"
            />
          </div>
          
          <div className="VisionMission-text-content">
            <h2 className="VisionMission-section-title">Our Vision</h2>
            <p className="VisionMission-section-description">
              To lead digital transformation with innovative marketing and technology solutions that empower brands to achieve excellence and success in the digital economy.
            </p>
            
            <div className="VisionMission-features-list">
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Digital Innovation Leadership</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Scalable Marketing Solutions</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Technology-Powered Growth</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Future-Ready Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="VisionMission-section" ref={missionRef}>
        <div className="VisionMission-content-wrapper VisionMission-reverse">
          <div className="VisionMission-text-content">
            <h2 className="VisionMission-section-title">Our Mission</h2>
            <p className="VisionMission-section-description">
              At Clickifyr Marketing, we provide businesses with complete digital solutions tailored for growth, visibility, and performance through innovative strategies and cutting-edge technology.
            </p>
            
            <div className="VisionMission-features-list">
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>Global Digital Solutions</span>
              </div>
              <div className="VisionMission-feature-item">
                <span className="VisionMission-checkmark">✓</span>
                <span>High-Impact Strategies</span>
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
          
          <div className="VisionMission-image-content">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Digital analytics and strategy"
              className="VisionMission-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;