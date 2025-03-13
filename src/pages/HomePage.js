import React from 'react';
import Button from '../components/common/Button';
import EventCard from '../components/events/EventCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import useEvents from '../hooks/useEvents';
import './HomePage.css';

function HomePage() {
  const { featuredEvents, isLoading, error } = useEvents();
  
  // Current date display
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
  const year = today.getFullYear();
  
  return (
    <div className="home-container">
      {/* Date display */}
      <div className="date-display">
        <div className="date-inner">
          <span className="date-day">{day}</span>
          <div className="date-month-year">
            <span className="date-month">{month}</span>
            <span className="date-year">{year}</span>
          </div>
        </div>
      </div>
      
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">IT'S A FAITH</h1>
          <div className="community-section">
            <h2 className="community-title">FIND YOUR COMMUNITY EVERY DAY</h2>
            <Button to="/events" variant="primary">
              EXPLORE EVENTS
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured events section */}
      <section className="featured-events-section">
        <h2 className="section-title">Featured Events</h2>
        
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="events-grid">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
        
        <div className="view-all-container">
          <Button to="/events" variant="secondary">
            View All Events
          </Button>
        </div>
      </section>
    </div>
  );
}

export default HomePage; 