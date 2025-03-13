import React from 'react';
import useEvents from '../hooks/useEvents';
import EventCard from '../components/events/EventCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

function EventsPage() {
  const { events, isLoading, error } = useEvents();

  return (
    <div className="events-page">
      <div className="container">
        <h1>Events</h1>
        
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="events-grid">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EventsPage; 