import React, { useEffect, useRef } from 'react';
import './InternshipOffer.css';
import internshipImage from '../Assests/Internshipoffer.png';
import { internshipPrograms } from '../Data/internshipPrograms';

const InternshipOffer = () => {
  const bannerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe banner
    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    // Observe cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleViewMore = () => {
    console.log('Navigate to all programs page');
  };

  const handleEnrollNow = (programId) => {
    console.log(`Enroll in program ${programId}`);
  };

  // Debug: Check if data is loading
  console.log('Internship Programs:', internshipPrograms);

  return (
    <>
      <div className="internship-main-container" ref={bannerRef}>
        <div className="internship-hero-content">
          <div className="internship-hero-left">
            <div className="internship-hero-badge">
              Powered by Digital Marketing Excellence
            </div>
            
            <h1 className="internship-hero-title">
              Internship programs for
              <br />
              <span className="internship-hero-highlight">digital marketing,</span> web
              <br />
              development & design
            </h1>
            
            <p className="internship-hero-subtitle">
              Join Clickifyr Marketing for hands-on experience in digital evolution - 
              gain practical skills, mentorship, and real-world project exposure.
            </p>
            
            <button className="internship-hero-cta">
              Apply Now
              <span className="internship-hero-arrow">→</span>
            </button>
          </div>
          
          <div className="internship-hero-right">
            <div className="internship-hero-image-container">
              <img
                src={internshipImage}
                alt="Internship Program"
                className="internship-hero-main-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="internship-programs-wrapper">
        <div className="internship-programs-header">
          <h2 className="internship-programs-main-title">
            Our <span className="internship-hero-highlight">Free</span> Internship Programs
          </h2>
          <p className="internship-programs-main-subtitle">
            Start your career journey with our comprehensive free internship programs
          </p>
        </div>

        <div className="internship-program-cards-grid">
          {internshipPrograms && internshipPrograms.length > 0 ? (
            internshipPrograms.map((program, index) => (
              <div 
                key={program.id} 
                className="internship-program-single-card"
                ref={(el) => (cardsRef.current[index] = el)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="internship-program-card-image">
                  <img src={program.image} alt={program.title} />
                  <div className="internship-program-card-badge">FREE</div>
                </div>
                
                <div className="internship-program-card-content">
                  <h3 className="internship-program-card-title">{program.title}</h3>
                  
                  <div className="internship-program-card-footer">
                    <div className="internship-program-card-duration">
                      📅 {program.duration}
                    </div>
                    <div className="internship-program-card-actions">
                      <button 
                        className="internship-program-enroll-button"
                        onClick={() => handleEnrollNow(program.id)}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{gridColumn: '1/-1', textAlign: 'center', padding: '40px'}}>
              <p>No programs available or data is loading...</p>
            </div>
          )}
        </div>

        <div className="internship-programs-view-more">
          <button className="internship-programs-view-more-button" onClick={handleViewMore}>
            View More Programs
            <span className="internship-hero-arrow">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default InternshipOffer;