import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import LazyImage from '../common/LazyImage';
import './EventCard.css';

function EventCard({ event }) {
  const { id, title, description, date, image } = event;
  
  return (
    <Card className="event-card">
      {image && (
        <LazyImage 
          src={image} 
          alt={title} 
          className="event-image"
        />
      )}
      <h3 className="event-title">{title}</h3>
      <p className="event-date">{date}</p>
      <p className="event-description">{description}</p>
      <Link to={`/events/${id}`} className="event-link">
        View Details
      </Link>
    </Card>
  );
}

export default React.memo(EventCard); 