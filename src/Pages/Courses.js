import React, { useEffect, useRef } from 'react';
import Header from '../Components/Header2';
import Footer from '../Components/Footer';
import { coursesPrograms } from '../Data/CoursesProgram';
import heroImg from '../Assests/hero-girl.png.png';
import './Courses.css';

const aboutImg = "https://media.istockphoto.com/id/1626852668/photo/two-happy-beautiful-blonde-businesswomen-working-in-the-office-using-their-computer.jpg?s=612x612&w=0&k=20&c=gChcSio0Swc-YfGyg9O4mGoGIAi4G_EWA_iEUa2mS4E=";

const aboutPoints = [
  { icon: <span style={{fontWeight:700}}>▶</span>, text: "Quality Instructor", color: "#00d4e7" },
  { icon: <span style={{fontWeight:700}}>▶</span>, text: "Get Certificate", color: "#ff4081" },
  { icon: <span style={{fontWeight:700}}>▶</span>, text: "Online Class", color: "#00d4e7" },
  { icon: <span style={{fontWeight:700}}>▶</span>, text: "Video Tutorial", color: "#ff4081" },
  { icon: <span style={{fontWeight:700}}>▶</span>, text: "Always Support", color: "#00d4e7" },
  { icon: <span style={{fontWeight:700}}>▶</span>, text: "Skill Development", color: "#ff4081" }
];

const Courses = () => {
  const coursesRef = useRef(null);
  const statsRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesListRef = useRef(null);

  useEffect(() => {
    // Initial hero section animation
    const left = document.querySelector('.courses-hero-v3-left');
    const right = document.querySelector('.courses-hero-v3-img');
    
    setTimeout(() => {
      if (left) left.classList.add('slide-in-left');
      if (right) right.classList.add('slide-in-right');
    }, 200);

    // Enhanced scroll animation handler
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Stats animation
      if (statsRef.current) {
        const statsRect = statsRef.current.getBoundingClientRect();
        if (statsRect.top < windowHeight - 100) {
          statsRef.current.classList.add('animate-stats');
        }
      }

      // About section animation
      if (aboutRef.current) {
        const aboutRect = aboutRef.current.getBoundingClientRect();
        if (aboutRect.top < windowHeight - 150) {
          aboutRef.current.classList.add('animate-about');
          
          // Trigger individual animations for about section elements
          setTimeout(() => {
            const aboutLeft = document.querySelector('.courses-about-left');
            const aboutRight = document.querySelector('.courses-about-right');
            if (aboutLeft) aboutLeft.classList.add('slide-in-left');
            if (aboutRight) aboutRight.classList.add('slide-in-right');
          }, 200);
        }
      }

      // Courses list section animation
      if (coursesListRef.current) {
        const coursesListRect = coursesListRef.current.getBoundingClientRect();
        if (coursesListRect.top < windowHeight - 100) {
          coursesListRef.current.classList.add('animate-courses');
        }
      }

      // Courses cards animation
      if (coursesRef.current) {
        const coursesRect = coursesRef.current.getBoundingClientRect();
        if (coursesRect.top < windowHeight - 100) {
          coursesRef.current.classList.add('show-courses-cards');
        }
      }

      // Parallax effect for hero section (optional)
      if (window.innerWidth > 768) {
        const heroSection = document.querySelector('.courses-hero-v3');
        if (heroSection) {
          const scrolled = scrollTop;
          const rate = scrolled * -0.5;
          heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add event listeners
    window.addEventListener('scroll', throttledScrollHandler);
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    handleScroll();

    // Intersection Observer for better performance (alternative approach)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          
          if (target.classList.contains('courses-hero-v3-stats-row')) {
            target.classList.add('animate-stats');
          }
          
          if (target.classList.contains('courses-about-section')) {
            target.classList.add('animate-about');
            setTimeout(() => {
              const aboutLeft = target.querySelector('.courses-about-left');
              const aboutRight = target.querySelector('.courses-about-right');
              if (aboutLeft) aboutLeft.classList.add('slide-in-left');
              if (aboutRight) aboutRight.classList.add('slide-in-right');
            }, 200);
          }
          
          if (target.classList.contains('courses-list-section')) {
            target.classList.add('animate-courses');
          }
          
          if (target.classList.contains('courses-cards-container')) {
            target.classList.add('show-courses-cards');
          }
        }
      });
    }, observerOptions);

    // Observe elements
    if (statsRef.current) observer.observe(statsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (coursesListRef.current) observer.observe(coursesListRef.current);
    if (coursesRef.current) observer.observe(coursesRef.current);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="courses-page">
      <Header />

      {/* Hero Section */}
      <section className="courses-hero-v3 custom-hero-big">
        <div className="courses-hero-v3-container">
          <div className="courses-hero-v3-left">
            <h1>
              Explore<br />
              Your Skill And<br />
              Experience With Us
            </h1>
            <p>
              Our mission is to help people to find the best online courses and learn with anywhere, anytime. Let's start with us.
            </p>
          </div>
          <div className="courses-hero-v3-right">
            <img src={heroImg} alt="Learning" className="courses-hero-v3-img" />
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <div className="courses-hero-v3-stats-row" ref={statsRef}>
        <div className="courses-hero-v3-stat">
          <span className="courses-hero-v3-stat-icon">🎓</span>
          <div>
            <div className="courses-hero-v3-stat-number">45K+</div>
            <div className="courses-hero-v3-stat-label">Online Learners</div>
          </div>
        </div>
        <div className="courses-hero-v3-stat">
          <span className="courses-hero-v3-stat-icon">📜</span>
          <div>
            <div className="courses-hero-v3-stat-number">25K+</div>
            <div className="courses-hero-v3-stat-label">Earned Certificate</div>
          </div>
        </div>
        <div className="courses-hero-v3-stat">
          <span className="courses-hero-v3-stat-icon">👨‍🏫</span>
          <div>
            <div className="courses-hero-v3-stat-number">160+</div>
            <div className="courses-hero-v3-stat-label">Skilled Instructor</div>
          </div>
        </div>
        <div className="courses-hero-v3-stat">
          <span className="courses-hero-v3-stat-icon">⭐</span>
          <div>
            <div className="courses-hero-v3-stat-number">20K+</div>
            <div className="courses-hero-v3-stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="courses-about-section" ref={aboutRef}>
        <div className="courses-about-left">
          <div className="courses-about-img-wrap">
            <img src={aboutImg} alt="About Learning" className="courses-about-img" />
          </div>
        </div>
        <div className="courses-about-right">
          <h4>ABOUT US</h4>
          <h2>Welcome To The Online Learning Center Eduonin</h2>
          <p>
            Sed diam volutpat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <div className="courses-about-features">
            {aboutPoints.map((item, idx) => (
              <div className="courses-about-feature" key={idx}>
                <span className="about-feature-icon" style={{background: idx % 2 === 0 ? "#00d4e7" : "#ff4081"}}>
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
          <button className="courses-about-btn">Explore More</button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-list-section" ref={coursesListRef}>
        <h4 className="courses-list-subheading">COURSES</h4>
        <h1 className="courses-list-heading">Explore Our Popular Courses</h1>
        <div className="courses-cards-container" ref={coursesRef}>
          {coursesPrograms.map((course, idx) => (
            <div className="course-card" key={course.id}>
              <div className="course-card-img-wrap">
                <img src={course.image} alt={course.title} className="course-card-img" />
              </div>
              <div className="course-card-body">
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-desc">{course.description}</p>
                <button className="course-card-btn">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;