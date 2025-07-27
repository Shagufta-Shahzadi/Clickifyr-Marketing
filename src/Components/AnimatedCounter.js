import React, { useState, useEffect, useRef } from 'react';
import './AnimatedCounter.css';

const AnimatedCounter = () => {
  const [counters, setCounters] = useState({
    satisfaction: 0,
    projects: 0,
    members: 0,
    clients: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  // Final values for counters
  const finalValues = {
    satisfaction: 99,
    projects: 3500,
    members: 35,
    clients: 1500
  };

  // Animate counter function
  const animateCounter = (key, finalValue, duration = 2000) => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (finalValue - startValue) * easeOutQuart);
      
      setCounters(prev => ({
        ...prev,
        [key]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Start all counter animations with slight delays
            setTimeout(() => animateCounter('satisfaction', finalValues.satisfaction), 100);
            setTimeout(() => animateCounter('projects', finalValues.projects), 300);
            setTimeout(() => animateCounter('members', finalValues.members), 500);
            setTimeout(() => animateCounter('clients', finalValues.clients), 700);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated, finalValues.satisfaction, finalValues.projects, finalValues.members, finalValues.clients]);

  const testimonials = [
    {
      name: "David L.",
      text: "Its made our scheduling process much more efficient. The excellent customer support team were quick for our team. A must-have for any cleaning company!",
      rating: 5
    },
    {
      name: "Daniel L.",
      text: "Its made our scheduling process much more efficient. The excellent customer support team were quick for our team. A must-have for any cleaning company!",
      rating: 5
    },
    {
      name: "David L.",
      text: "Its made our scheduling process much more efficient. The excellent customer support team were quick for our team. A must-have for any cleaning company!",
      rating: 5
    },
    
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="star">⭐</span>
    ));
  };

  return (
    <div className="animated-counter-container">
      {/* Stats Section with Parallax Background */}
      <section ref={sectionRef} className="stats-section">
        <div className="parallax-bg">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop" 
            alt="Modern office background"
            className="background-image"
          />
        </div>
        <div className="stats-overlay">
          <div className="stats-content">
            <h2 className="stats-title">
              Built on years of experience and<br />
              proven approaches.
            </h2>
            
            <div className="stats-container">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">
                    {counters.satisfaction}%
                  </div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">
                    {counters.projects >= 1000 ? `${(counters.projects / 1000).toFixed(1)}k` : counters.projects}
                  </div>
                  <div className="stat-label">Project Completed</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">
                    {counters.members}+
                  </div>
                  <div className="stat-label">Amazing Team members</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">
                    {counters.clients >= 1000 ? `${(counters.clients / 1000).toFixed(1)}k+` : `${counters.clients}+`}
                  </div>
                  <div className="stat-label">Our Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title">
            Trusted by Clients,<br />
            Recommended by Clients
          </h2>
          
          <div className="testimonials-slider">
            <div className="testimonials-track">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-footer">
                      <div className="testimonial-avatar">
                        <img 
                          src={`https://images.unsplash.com/photo-${1500648767791 + index}-c3a69043-f4db-4562-a2c9-dfd31ac4ed43?w=40&h=40&fit=crop&crop=face`}
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="testimonial-info">
                        <div className="testimonial-name">{testimonial.name}</div>
                        <div className="testimonial-rating">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedCounter;