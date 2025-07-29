import React, { useEffect } from 'react';
import Header from '../Components/Header2';
import Footer from '../Components/Footer';
import { internshipPrograms } from '../Data/internshipPrograms';
import './Internships.css';

const heroBg =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80";

const Internships = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      const cards = document.querySelectorAll('.internship-scroll-animate');
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
    <div className="internships-page">
      <Header />

      {/* Hero Section */}
      <section
        className="internships-hero-section"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="internships-hero-overlay"></div>
        <div className="internships-hero-content">
          <h1 className="internships-hero-title">Transform Your Internship Journey</h1>
          <p className="internships-hero-desc">
            Discover our curated internship programs designed to help you gain real-world experience, build your portfolio, and launch your career with confidence.
          </p>
          <button className="internships-hero-btn">Talk With an Expert</button>
        </div>
      </section>

      {/* Section Heading */}
      <h2 className="internships-section-heading">Our Internship Programs</h2>

      {/* Cards */}
      <div className="internships-cards-container">
        {internshipPrograms.map((item, idx) => (
          <div
            className="internship-card internship-scroll-animate"
            key={item.id}
            style={{ animationDelay: `${0.1 * idx}s` }}
          >
            {/* Show program image */}
            {item.image && (
              <div className="internship-card-img-wrap">
                <img src={item.image} alt={item.title} className="internship-card-img" />
              </div>
            )}
            <div className="internship-card-body">
              <h3 className="internship-card-title">{item.title}</h3>
              <p className="internship-card-desc">{item.description}</p>
              <button className="internship-card-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Internships;