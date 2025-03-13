import { useState, useMemo, useCallback } from 'react';

// Initial event data
const initialEvents = [
  {
    id: 1,
    title: 'Interfaith Dialogue Workshop',
    datetime: '2025-04-15T18:00:00',
    location: 'Community Center, 123 Main St',
    category: 'educational',
    description: 'Join us for an evening of open dialogue and learning about different faith traditions.'
  },
  {
    id: 2,
    title: 'Meditation Retreat',
    datetime: '2025-04-20T09:00:00',
    location: 'Peaceful Gardens, 456 Zen Way',
    category: 'religious',
    description: 'A day-long retreat focusing on meditation practices from various spiritual traditions.'
  },
  {
    id: 3,
    title: 'Community Potluck Dinner',
    datetime: '2025-04-25T19:00:00',
    location: 'Friendship Hall, 789 Unity Blvd',
    category: 'social',
    description: 'Bring a dish that represents your cultural or religious background and share stories over dinner.'
  },
  {
    id: 4,
    title: 'Charity Fundraiser',
    datetime: '2025-05-01T17:30:00',
    location: 'Hope Center, 321 Giving Lane',
    category: 'charity',
    description: 'Help raise funds for local community initiatives that support interfaith cooperation.'
  }
];

export const useEvents = () => {
  const [events, setEvents] = useState(initialEvents);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Memoized filtered events
  const filteredEvents = useMemo(() => 
    activeFilter === 'all' 
      ? events 
      : events.filter(event => event.category === activeFilter),
    [events, activeFilter]
  );
  
  // Optimized for initial render - only show first batch
  const visibleEvents = useMemo(() => {
    return filteredEvents.slice(0, 20); // Limit to first 20 events for initial load
  }, [filteredEvents]);
  
  // Optimized filter handler
  const handleFilterChange = useCallback((category) => {
    setActiveFilter(category);
  }, []);
  
  // Optimized event addition
  const addEvent = useCallback((newEvent) => {
    const newId = events.length > 0 
      ? Math.max(...events.map(event => event.id)) + 1 
      : 1;
    
    setEvents(prevEvents => [
      ...prevEvents,
      {
        ...newEvent,
        id: newId
      }
    ]);
  }, [events]);
  
  return {
    events,
    filteredEvents,
    visibleEvents,
    activeFilter,
    handleFilterChange,
    addEvent
  };
};

export default useEvents; 