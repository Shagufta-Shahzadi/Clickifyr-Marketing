import React, { useEffect, useRef } from 'react';
import './Aboutus.css';
import Header from '../Components/Header2';
import Footer from '../Components/Footer';
import VisionMission from '../Components/VisionMission';

const ceoMessage = `At Clickifyr Marketing, we make technology simple and accessible for every business. Our vision is to be the leading IT consultants, empowering companies with innovative solutions and expert advice.

We guide you every step of the way, from digital strategy to seamless execution. Together, we unlock new opportunities and shape a smarter future.

Thank you for trusting Clickifyr as your IT partner.`;

const Aboutus = () => {
  const ceoRef = useRef(null);
  const galleryRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animate-in class to the main element
          entry.target.classList.add('animate-in');
          
          // For hero section, animate title and subtitle
          if (entry.target.classList.contains('aboutus-hero-fixed')) {
            const title = entry.target.querySelector('.aboutus-hero-title-center h1');
            const subtitle = entry.target.querySelector('.aboutus-hero-subtitle');
            
            if (title) {
              title.classList.add('animate-in');
            }
            if (subtitle) {
              subtitle.classList.add('animate-in');
            }
          }
          
          // For CEO section, animate the flex container
          if (entry.target.classList.contains('aboutus-ceo-main')) {
            const ceoFlex = entry.target.querySelector('.aboutus-ceo-flex');
            if (ceoFlex) {
              ceoFlex.classList.add('animate-in');
            }
          }
          
          // For gallery section, animate heading and images separately
          if (entry.target.classList.contains('aboutus-gallery-section')) {
            const heading = entry.target.querySelector('.aboutus-gallery-heading');
            const images = entry.target.querySelectorAll('.aboutus-gallery-images img');
            
            if (heading) {
              heading.classList.add('animate-in');
            }
            
            images.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add('animate-in');
              }, index * 200);
            });
          }
        }
      });
    }, observerOptions);

    // Observe elements
    if (heroRef.current) observer.observe(heroRef.current);
    if (ceoRef.current) observer.observe(ceoRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aboutus-container">
      <Header />
      
      {/* Hero Section */}
      <section className="aboutus-hero-fixed" ref={heroRef}>
        <div className="aboutus-hero-bg" />
        <div className="aboutus-hero-overlay" />
        <div className="aboutus-hero-title-center">
          <h1>About Us</h1>
          <p className="aboutus-hero-subtitle">Empowering businesses through innovative technology solutions</p>
        </div>
      </section>
      
      {/* CEO Message Section */}
      <section className="aboutus-ceo-main" ref={ceoRef}>
        <div className="aboutus-ceo-flex">
          <div className="aboutus-ceo-left">
            <div className="aboutus-ceo-quote">"</div>
            <div className="aboutus-ceo-heading">Meet Our CEO</div>
            <p className="aboutus-ceo-message">{ceoMessage}</p>
          </div>
          <div className="aboutus-ceo-right">
            <div className="aboutus-ceo-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="CEO Hamza Shoukat"
                className="aboutus-ceo-img"
              />
              <div className="aboutus-ceo-badge">CEO</div>
            </div>
            <div className="aboutus-ceo-name">Hamza Shoukat</div>
            <div className="aboutus-ceo-title">Founder & CEO</div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <VisionMission />
      
      {/* Gallery Section */}
      <section className="aboutus-gallery-section" ref={galleryRef}>
        <h2 className="aboutus-gallery-heading">Gallery</h2>
        <div className="aboutus-gallery-images">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Office Space" />
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team Meeting" />
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Technology" />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Aboutus;