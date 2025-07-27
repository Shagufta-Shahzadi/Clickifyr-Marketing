import React from 'react';
import './InternshipOffer.css';
import internshipImage from '../Assests/Internshipoffer.png';
import { internshipPrograms } from '../Data/internshipPrograms';

const InternshipOffer = () => {
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
      <div className="internshipoffer-container">
        <div className="internshipoffer-content">
          <div className="internshipoffer-left">
            <div className="internshipoffer-badge">
              Powered by Digital Marketing Excellence
            </div>
            
            <h1 className="internshipoffer-title">
              Internship programs for
              <br />
              <span className="internshipoffer-highlight">digital marketing,</span> web
              <br />
              development & design
            </h1>
            
            <p className="internshipoffer-subtitle">
              Join Clickifyr Marketing for hands-on experience in digital evolution - 
              gain practical skills, mentorship, and real-world project exposure.
            </p>
            
            <button className="internshipoffer-cta">
              Apply Now
              <span className="internshipoffer-arrow">→</span>
            </button>
          </div>
          
          <div className="internshipoffer-right">
            <div className="internshipoffer-image-container">
              <img
                src={internshipImage}
                alt="Internship Program"
                className="internshipoffer-main-image"
              />
              
              <div className="internshipoffer-overlay-elements">
                <div className="internshipoffer-circle-decoration internshipoffer-circle-top">
                  <div className="internshipoffer-circle-inner"></div>
                </div>
                
                <div className="internshipoffer-collaboration-badge">
                  <span className="internshipoffer-collaboration-text">Best Collaboration</span>
                  <div className="internshipoffer-collaboration-icon">💼</div>
                </div>
                
                <div className="internshipoffer-stats-card">
                  <div className="internshipoffer-stats-number">69,528+</div>
                  <div className="internshipoffer-stats-text">People are learning</div>
                  <div className="internshipoffer-stats-icons">
                    <span className="internshipoffer-user-icon">👥</span>
                    <span className="internshipoffer-growth-icon">📈</span>
                  </div>
                </div>
                
                <div className="internshipoffer-orange-shape"></div>
                <div className="internshipoffer-yellow-curve"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="internshipoffer-programs-section">
        <div className="internshipoffer-programs-header">
          <h2 className="internshipoffer-programs-title">
            Our <span className="internshipoffer-highlight">Free</span> Internship Programs
          </h2>
          <p className="internshipoffer-programs-subtitle">
            Start your career journey with our comprehensive free internship programs
          </p>
        </div>

        <div className="internshipoffer-programs-grid">
          {internshipPrograms && internshipPrograms.length > 0 ? (
            internshipPrograms.map((program) => (
              <div key={program.id} className="internshipoffer-program-card">
                <div className="internshipoffer-program-image">
                  <img src={program.image} alt={program.title} />
                  <div className="internshipoffer-program-badge">FREE</div>
                </div>
                
                <div className="internshipoffer-program-content">
                  <h3 className="internshipoffer-program-title">{program.title}</h3>
                  
                  <div className="internshipoffer-program-footer">
                    <div className="internshipoffer-program-duration">
                      📅 {program.duration}
                    </div>
                    <div className="internshipoffer-program-actions">
                     
                   
                      <button 
                        className="internshipoffer-enroll-btn"
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

        <div className="internshipoffer-view-more">
          <button className="internshipoffer-view-more-btn" onClick={handleViewMore}>
            View More Programs
            <span className="internshipoffer-arrow">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default InternshipOffer;