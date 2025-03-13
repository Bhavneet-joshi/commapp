import React from 'react';
import HeroSection from './HeroSection';
import FeatureCard from './FeatureCard';
import TestimonialCard from './TestimonialCard';

const HomePage = () => {
  const features = [
    {
      color: 'yellow',
      title: 'Diverse Community',
      description: 'Connect with people from various faiths, cultures, and backgrounds in a safe and inclusive environment.'
    },
    {
      color: 'purple',
      title: 'Meaningful Events',
      description: 'Discover events that promote understanding, dialogue, and cooperation between different communities.'
    },
    {
      color: 'white',
      title: 'Personal Growth',
      description: 'Expand your horizons, challenge assumptions, and grow through interfaith and intercultural dialogue.'
    }
  ];

  const testimonials = [
    {
      text: '"Communion has helped me connect with people outside my usual circle. I\'ve learned so much about other faiths while sharing my own practices."',
      authorName: 'Sarah M.',
      authorTitle: 'Buddhist Practitioner',
      avatarColor: 'yellow'
    },
    {
      text: '"Our church has hosted several events through Communion, bringing together people of all faiths. The conversations and relationships formed are truly inspiring."',
      authorName: 'James K.',
      authorTitle: 'Christian Minister',
      avatarColor: 'purple'
    }
  ];

  return (
    <main>
      <div className="container">
        
        <div className="date-display-wrapper">
          
          <div className="section-container grid-item bg-black">
            <div className="date-content">
              <div className="date-display" id="current-day"></div>
              <div className="date-month" id="current-month-year" style={{ 
                display: 'inline-block',  // Makes the div only as wide as its content
                padding: '10px 15px',     // Padding around the content
                margin: '0 auto',         // Centers the div if it's in a block container
                 // Optional: matches your dark background
                borderRadius: '4px'       // Optional: slightly rounded corners
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ 
                    fontSize: '60px', 
                    fontWeight: 'bold', 
                    lineHeight: '0.9', 
                    marginRight: '12px',
                    color: '#FFD700'
                  }}>
                    {new Date().getDate()}
                  </span>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: '#FFD700'
                  }}>
                    <span style={{ marginBottom: '2px' }}>{new Date().toLocaleString('default', { month: 'long' }).toLowerCase()}</span>
                    <span>{new Date().getFullYear()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add this code where you want the date to appear (likely right after your navbar) */}
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <div className="features-section section-container grid-item">
          <div className="features-content">
            <div className="features-intro">
              <h2 className="big-heading">
                ENTER THE<br />
                REALM OF<br /> 
                <span className="yellow-accent">COMMUNION</span>
              </h2>
              <p className="features-description">
                Our platform makes it easy to find events that align with your beliefs and interests, helping you build meaningful connections within your community.
              </p>
              
              <div className="cta-wrapper">
                <a href="/join" className="accent-btn">
                  Join Today
                </a>
              </div>
            </div>
            
            <div className="features-cards">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  color={feature.color}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="stats-section section-container grid-item bg-black">
          <div className="stats-header">
            <div className="stats-label">Created by</div>
            <div className="stats-domain">COMMUNION.IO</div>
          </div>
          
          <div className="stats-content">
            <div className="stats-text">
              <h3 className="stats-title">The most active platform</h3>
              <p className="stats-description">for interfaith dialogue with thousands of active participants every month.</p>
            </div>
            
            <div className="stats-cta">
              <a 
                href="/events" 
                className="explore-button" 
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#FFD700',
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  fontSize: '16px',
                  marginTop: '20px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              >
                EXPLORE EVENTS
              </a>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="testimonials-section">
          <div className="testimonials-main section-container grid-item">
            <h2 className="testimonials-heading">
              What Our<br />
              <span className="yellow-accent">Community</span> Says
            </h2>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  text={testimonial.text}
                  authorName={testimonial.authorName}
                  authorTitle={testimonial.authorTitle}
                  avatarColor={testimonial.avatarColor}
                />
              ))}
            </div>
          </div>
          
          <div className="join-section section-container grid-item bg-black">
            <div className="join-label">Join Now</div>
            
            <h2 className="join-heading">
              ENTER<br />
              THE REALM<br />
              OF <span className="yellow-accent">FAITH</span>
            </h2>
            <p className="join-description">
              Discover events, meet new people, and be part of a movement that bridges divides and builds understanding.
            </p>
            
            <div className="cta-wrapper">
              <a href="/signup" className="accent-btn">
                Sign Up Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage; 