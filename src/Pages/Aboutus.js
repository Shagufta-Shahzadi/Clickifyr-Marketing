import React from 'react';
import './Aboutus.css';
import Header from '../Components/Header2'; // Import your existing header
import Footer from '../Components/Footer'; // Import your existing footer

const Aboutus = () => {
  const teamMembers = [
    {
      name: "Hamza Shoukat",
      role: "CEO & Founder",
      image: "/api/placeholder/300/300",
      rating: 5.0
    },
    {
      name: "Sarah Ahmed",
      role: "Creative Director",
      image: "/api/placeholder/300/300",
      rating: 4.9
    },
    {
      name: "Mike Johnson",
      role: "Tech Lead",
      image: "/api/placeholder/300/300",
      rating: 4.8
    },
    {
      name: "Emma Wilson",
      role: "Digital Strategist",
      image: "/api/placeholder/300/300",
      rating: 4.9
    },
    {
      name: "David Chen",
      role: "UI/UX Designer",
      image: "/api/placeholder/300/300",
      rating: 4.7
    },
    {
      name: "Lisa Rodriguez",
      role: "Marketing Specialist",
      image: "/api/placeholder/300/300",
      rating: 4.8
    }
  ];

  const services = [
    {
      title: "Designing",
      description: "Creating visually stunning and user-centric designs that capture your brand essence and drive engagement.",
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Building robust, scalable, and high-performance digital solutions tailored to your business needs.",
      icon: "💻"
    },
    {
      title: "Research",
      description: "Conducting in-depth market research and analysis to inform strategic decisions and maximize ROI.",
      icon: "🔍"
    }
  ];

  return (
    <div className="aboutus-container">
      <Header />
      
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-content">
          <div className="aboutus-hero-text">
            <h1 className="aboutus-hero-title">
              Our Story: the Journey That's Shaped Our 
              <span className="aboutus-hero-highlight"> Success</span>
            </h1>
            <p className="aboutus-hero-description">
              At Clickifyr Marketing, our mission is to make technology simple, effective, and accessible 
              for every business. We are passionate about transforming your vision into measurable success 
              through innovative digital solutions.
            </p>
            <button className="aboutus-hero-btn">Get Started</button>
          </div>
          <div className="aboutus-hero-image">
            <img src="/api/placeholder/500/400" alt="Team collaboration" />
            <div className="aboutus-rating-card">
              <div className="aboutus-rating-score">4.9/5</div>
              <div className="aboutus-rating-text">Client Reviews</div>
              <div className="aboutus-rating-stars">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="aboutus-stats">
        <div className="aboutus-stats-container">
          <h2 className="aboutus-stats-title">Our agency knows work dominates our lives</h2>
          <div className="aboutus-stats-grid">
            <div className="aboutus-stat-card aboutus-stat-dark">
              <div className="aboutus-stat-number">10+</div>
              <div className="aboutus-stat-label">Years of Agency Experience</div>
            </div>
            <div className="aboutus-stat-card aboutus-stat-blue">
              <div className="aboutus-stat-number">30</div>
              <div className="aboutus-stat-label">Successfully Completed Projects</div>
            </div>
            <div className="aboutus-stat-card aboutus-stat-light">
              <div className="aboutus-stat-number">7+</div>
              <div className="aboutus-stat-label">Successfully ranked Company</div>
            </div>
            <div className="aboutus-stat-card aboutus-stat-blue">
              <div className="aboutus-stat-number">25</div>
              <div className="aboutus-stat-label">Google Certified Professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="aboutus-team">
        <div className="aboutus-team-container">
          <h2 className="aboutus-team-title">Engage with Our Creative Team</h2>
          <p className="aboutus-team-subtitle">
            We are a skilled team of creative professionals dedicated to delivering exceptional results.
          </p>
          <div className="aboutus-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="aboutus-team-card">
                <img src={member.image} alt={member.name} className="aboutus-team-image" />
                <h3 className="aboutus-team-name">{member.name}</h3>
                <p className="aboutus-team-role">{member.role}</p>
                <div className="aboutus-team-rating">
                  <span className="aboutus-team-stars">★★★★★</span>
                  <span className="aboutus-team-score">{member.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="aboutus-vision">
        <div className="aboutus-vision-container">
          <div className="aboutus-vision-content">
            <div className="aboutus-vision-text">
              <h2 className="aboutus-vision-title">Our Vision</h2>
              <p className="aboutus-vision-description">
                To lead the global digital transformation by offering innovative, intelligent, and impactful 
                marketing and technology solutions that empower brands to achieve digital excellence, 
                scalability, and success in a fast-changing digital economy.
              </p>
            </div>
            <div className="aboutus-vision-image">
              <img src="/api/placeholder/600/400" alt="Vision" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="aboutus-services">
        <div className="aboutus-services-container">
          <h2 className="aboutus-services-title">Seamless, Flexible, and Efficient Workflow</h2>
          <div className="aboutus-services-grid">
            {services.map((service, index) => (
              <div key={index} className="aboutus-service-card">
                <div className="aboutus-service-icon">{service.icon}</div>
                <h3 className="aboutus-service-title">{service.title}</h3>
                <p className="aboutus-service-description">{service.description}</p>
                <div className="aboutus-service-image">
                  <img src="/api/placeholder/400/250" alt={service.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="aboutus-ceo-message">
        <div className="aboutus-ceo-container">
          <div className="aboutus-ceo-content">
            <div className="aboutus-ceo-image">
              <img src="/api/placeholder/300/300" alt="Hamza Shoukat" />
            </div>
            <div className="aboutus-ceo-text">
              <div className="aboutus-ceo-quote">TESTIMONIAL</div>
              <p className="aboutus-ceo-message-text">
                "Working with our team has been a game-changer for our business. 
                Their expertise is highly professional, creative, and efficient. From the 
                moment we started, they understood our vision and delivered 
                beyond expectations."
              </p>
              <div className="aboutus-ceo-info">
                <strong>Hamza Shoukat</strong>
                <br />
                CEO, Clickifyr Marketing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="aboutus-cta">
        <div className="aboutus-cta-container">
          <h2 className="aboutus-cta-title">
            Transform Your Business Today - Get in Touch for a 
            <span className="aboutus-cta-highlight"> Free Consultation</span>
          </h2>
          <button className="aboutus-cta-button">Start Project</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;