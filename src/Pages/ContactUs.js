import React, { useState, useEffect } from 'react';
import { Phone, Mail, User, MessageSquare, Send } from 'lucide-react';
import Header from '../Components/Header2';
import Footer from '../Components/Footer';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // If it's a container with children, animate children too
          const children = entry.target.querySelectorAll('.contact-item, .form-group, .submit-btn');
          children.forEach(child => {
            child.classList.add('animate');
          });
        }
      });
    }, observerOptions);

    // Observe elements for scroll animation
    const animateElements = document.querySelectorAll('.contact-info, .contact-form-wrapper');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="contact-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            Ready to take your business to the next level? Get in touch with our expert team today.
          </p>
        </div>
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Left Side - Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <h2 className="info-title">Get Your Instant Free Quote Now</h2>
                
                <div className="contact-details">
                  <div className="contact-item phone-item">
                    <div className="contact-icon">
                      <Phone size={20} />
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">Phone</span>
                      <a href="tel:03335458233" className="contact-value">03335458233</a>
                    </div>
                  </div>

                  <div className="contact-item email-item">
                    <div className="contact-icon">
                      <Mail size={20} />
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">Email</span>
                      <a href="mailto:clickifyrmarketing@gmail.com" className="contact-value">
                        clickifyrmarketing@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item linkedin-item">
                    <div className="contact-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">LinkedIn</span>
                      <a 
                        href="https://www.linkedin.com/in/clickifyr-marketing-3199902a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-value"
                      >
                        Connect with us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-card">
                <div className="contact-form">
                  <div className="form-group">
                    <div className="input-wrapper">
                      <User className="input-icon" size={18} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-wrapper">
                      <Phone className="input-icon" size={18} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-wrapper">
                      <Mail className="input-icon" size={18} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-wrapper">
                      <MessageSquare className="input-icon" size={18} />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="textarea-wrapper">
                      <Send className="input-icon textarea-icon" size={18} />
                      <textarea
                        name="message"
                        placeholder="How can we help you? Feel free to get in touch!"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="button" onClick={handleSubmit} className="submit-btn">
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactUs;