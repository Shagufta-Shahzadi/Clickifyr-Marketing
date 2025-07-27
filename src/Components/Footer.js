import React from 'react';
import { Facebook, Instagram, Youtube, Music, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleNavigation = (page) => {
    // Add your navigation logic here
    console.log(`Navigating to ${page}`);
  };

  return (
    <footer className="clickifyr-footer">
      <div className="clickifyr-footer-container">
        {/* Left Section - Company Info */}
        <div className="clickifyr-footer-left">
          <div className="clickifyr-footer-logo">
            <h3>Clickifyr Marketing</h3>
          </div>
          <div className="clickifyr-footer-description">
            <p>Your trusted partner for digital transformation. We create innovative solutions that drive growth and success for businesses worldwide.</p>
          </div>
          <div className="clickifyr-footer-social-section">
            <h4>Follow Us</h4>
            <div className="clickifyr-footer-social-icons">
              <button 
                className="clickifyr-footer-social-icon"
                onClick={() => window.open('https://facebook.com/clickifyrmarketing', '_blank')}
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </button>
              <button 
                className="clickifyr-footer-social-icon"
                onClick={() => window.open('https://instagram.com/clickifyrmarketing', '_blank')}
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </button>
              <button 
                className="clickifyr-footer-social-icon"
                onClick={() => window.open('https://youtube.com/@clickifyrmarketing', '_blank')}
                aria-label="Follow us on YouTube"
              >
                <Youtube size={18} />
              </button>
              <button 
                className="clickifyr-footer-social-icon"
                onClick={() => window.open('https://open.spotify.com/user/clickifyrmarketing', '_blank')}
                aria-label="Follow us on Spotify"
              >
                <Music size={18} />
              </button>
              <button 
                className="clickifyr-footer-social-icon"
                onClick={() => window.open('https://linkedin.com/company/clickifyr-marketing', '_blank')}
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="clickifyr-footer-middle">
          <div className="clickifyr-footer-services">
            <h4>Services</h4>
            <ul className="clickifyr-footer-links">
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('web-development')}>Web Development</button></li>
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('ui-ux-design')}>UI/UX Design</button></li>
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('mobile-app')}>Mobile App Development</button></li>
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('ai')}>Artificial Intelligence</button></li>
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('social-media')}>Social Media Marketing</button></li>
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('blogging')}>Blogging</button></li>
            </ul>
          </div>
          <div className="clickifyr-footer-company">
            <h4>Company</h4>
            <ul className="clickifyr-footer-links">
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('about')}>About Us</button></li>
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('contact')}>Contact</button></li>
              <li><button className="clickifyr-footer-link-btn" onClick={() => handleNavigation('privacy')}>Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact & Social */}
        <div className="clickifyr-footer-right">
          <h4>Get in Touch</h4>
          <div className="clickifyr-footer-contact">
            <p>Ready to transform your business?</p>
            <button 
              className="clickifyr-footer-contact-btn"
              onClick={() => handleNavigation('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="clickifyr-footer-bottom">
        <div className="clickifyr-footer-bottom-container">
          <p>&copy; 2025 Clickifyr Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;