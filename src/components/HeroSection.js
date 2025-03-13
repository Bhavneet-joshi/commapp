import React from 'react';

const HeroSection = ({ onNavigate }) => {
  return (
    <div className="hero-section">
      <div className="hero-main section-container grid-item">
        <div className="hero-content">
          <h1 className="big-heading">
            IT'S A<br />
            <span className="purple-accent">FAITH</span><br />
            GENERATION
          </h1>
          <p className="hero-description">
            We bring together people from different faiths and backgrounds to create meaningful connections and understanding.
          </p>
          <div className="cta-wrapper">
            <button 
              className="accent-btn"
              onClick={() => onNavigate && onNavigate('events')}
            >
              Explore Events
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="decorative-circle yellow-blur"></div>
        <div className="decorative-circle purple-blur"></div>
      </div>
      
      <div className="hero-side section-container grid-item">
        <div className="color-dots">
          <div className="color-dot yellow"></div>
          <div className="color-dot purple"></div>
          <div className="color-dot white"></div>
        </div>
        
        <h2 className="side-heading">
          FIND YOUR<br />
          <span className="purple-accent">COMMUNITY</span><br />
          EVERY DAY
        </h2>
        <p className="side-description">
          We connect you with events and people that match your interests, beliefs, and values.
        </p>
        
        <div className="side-image-container">
          <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg" className="community-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 