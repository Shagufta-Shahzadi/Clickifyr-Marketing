import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Header2';
import Footer from '../Components/Footer';
import { servicesDetailsData, contactInfo } from '../Data/servicesDetailsData';
import { servicesData } from '../Data/servicesData';
import { CheckCircle, Phone, Mail, Globe, Star, } from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [serviceDetail, setServiceDetail] = useState(null);
  const [, setServiceIcon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const decodedServiceName = decodeURIComponent(serviceName);
    const detail = servicesDetailsData[decodedServiceName];
    const serviceInfo = servicesData.find(service => service.title === decodedServiceName);
    
    if (detail && serviceInfo) {
      setServiceDetail(detail);
      setServiceIcon(serviceInfo.icon);
    }
    setLoading(false);

    const revealOnScroll = () => {
      const elements = document.querySelectorAll('.servicesdetail-fadein, .scroll-animate');
      const triggerBottom = window.innerHeight * 0.85;
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
          element.classList.add('servicesdetail-visible');
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, [serviceName]);

  if (loading) {
    return (
      <div className="servicesdetail-page">
        <Header />
        <div className="servicesdetail-loading">
          <div className="servicesdetail-spinner"></div>
          <p>Loading service details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!serviceDetail) {
    return (
      <div className="servicesdetail-page">
        <Header />
        <div className="servicesdetail-notfound">
          <h2>Service Not Found</h2>
          <p>The requested service could not be found.</p>
          <button onClick={() => navigate('/services')} className="servicesdetail-backbtn">
            Back to Services
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="servicesdetail-page">
      <Header />
      
      {/* Hero Section with Animations */}
      <section className="servicesdetail-hero">
        <div className="servicesdetail-hero-overlay"></div>
        <div className="servicesdetail-hero-content">
          <div className="servicesdetail-hero-backbtn web-only" onClick={() => navigate(-1)}>
            &larr; Back
          </div>
          <div className="servicesdetail-heroinfo">
            <div className="servicesdetail-heroicon hero-animate-icon"></div>
            <h1 className="servicesdetail-herotitle hero-animate-title">{serviceDetail.title}</h1>
            <p className="servicesdetail-herodesc hero-animate-desc">{serviceDetail.description}</p>
            
            <div className="servicesdetail-pricecontainer hero-animate-price">
              <div className="servicesdetail-pricebadge">
                <span className="servicesdetail-price">{serviceDetail.price}</span>
                <span className="servicesdetail-duration">{serviceDetail.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="servicesdetail-features">
        <div className="servicesdetail-container">
          <div className="servicesdetail-featuresgrid">
            <div className="servicesdetail-featurescol servicesdetail-fadein">
              <h2 className="servicesdetail-sectiontitle">
                <CheckCircle size={28} color="#4CAF50" />
                What's Included
              </h2>
              <div className="servicesdetail-featureslist">
                {serviceDetail.features.map((feature, index) => (
                  <div key={index} className="servicesdetail-featureitem">
                    <CheckCircle size={18} color="#4CAF50" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="servicesdetail-benefitscol servicesdetail-fadein">
              <h2 className="servicesdetail-sectiontitle">
                <Star size={28} color="#FF9800" />
                Key Benefits
              </h2>
              <div className="servicesdetail-benefitslist">
                {serviceDetail.benefits.map((benefit, index) => (
                  <div key={index} className="servicesdetail-benefititem">
                    <Star size={18} color="#FF9800" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="servicesdetail-contact">
        <div className="servicesdetail-container">
          <div className="servicesdetail-contactinfo">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your project and get a personalized quote for our {serviceDetail.title.toLowerCase()} service.</p>
            
            <div className="servicesdetail-contactmethods">
              <a href={`tel:${contactInfo.phone}`} className="servicesdetail-contactmethod">
                <Phone size={20} />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="servicesdetail-contactmethod">
                <Mail size={20} />
                <span>{contactInfo.email}</span>
              </a>
              <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="servicesdetail-contactmethod">
                <Globe size={20} />
                <span>{contactInfo.website}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;