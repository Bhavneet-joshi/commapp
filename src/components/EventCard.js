import React, { memo } from 'react';

const EventCard = memo(({ title, datetime, location, category, description }) => {
  const eventDate = new Date(datetime);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const categoryClass = `category-${category}`;

  return (
    <div className={`event-card grid-item ${categoryClass}`}>
      <div className="event-header">
        <span className="event-category">{category}</span>
        <h3 className="event-title">{title}</h3>
      </div>
      <div className="event-details">
        <p className="event-datetime">
          <svg xmlns="http://www.w3.org/2000/svg" className="event-icon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formattedDate} at {formattedTime}
        </p>
        <p className="event-location">
          <svg xmlns="http://www.w3.org/2000/svg" className="event-icon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
        <p className="event-description">{description}</p>
      </div>
      <div className="event-actions">
        <button className="event-btn">Register</button>
      </div>
    </div>
  );
});

EventCard.displayName = 'EventCard';

export default EventCard; 