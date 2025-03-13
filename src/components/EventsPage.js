import React, { useState, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEvents from '../hooks/useEvents';

// Lazy load the EventCard component
const EventCard = lazy(() => import('./EventCard'));

// Loading placeholder for lazy-loaded components
const LoadingPlaceholder = () => (
  <div className="event-card-placeholder">
    <div className="placeholder-header"></div>
    <div className="placeholder-content"></div>
  </div>
);

const EventsPage = () => {
  const { 
    visibleEvents, 
    activeFilter, 
    handleFilterChange, 
    addEvent 
  } = useEvents();
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    datetime: '',
    location: '',
    category: 'religious',
    description: ''
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    addEvent(newEvent);
    
    // Reset form
    setNewEvent({
      title: '',
      datetime: '',
      location: '',
      category: 'religious',
      description: ''
    });
    
    setShowAddForm(false);
  }, [newEvent, addEvent]);

  const toggleAddForm = useCallback(() => {
    setShowAddForm(prev => !prev);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="events-page"
    >
      <div className="container">
        {/* Page Header */}
        <motion.div 
          className="page-header"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="page-title">Community <span className="yellow-accent">Events</span></h1>
          <p>Browse and join events that connect people across different faiths and backgrounds.</p>
        </motion.div>
        
        {/* Filters */}
        <motion.div 
          className="filter-container"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('all')}
          >
            All Events
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'religious' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('religious')}
          >
            Religious
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'social' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('social')}
          >
            Social
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'charity' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('charity')}
          >
            Charity
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'educational' ? 'active' : ''}`} 
            onClick={() => handleFilterChange('educational')}
          >
            Educational
          </button>
        </motion.div>
        
        {/* Events */}
        <div className="events-grid">
          {visibleEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(0.1 * index, 0.5) }}
              layout
              className="event-card-wrapper"
            >
              <Suspense fallback={<LoadingPlaceholder />}>
                <EventCard 
                  title={event.title}
                  datetime={event.datetime}
                  location={event.location}
                  category={event.category}
                  description={event.description}
                />
              </Suspense>
            </motion.div>
          ))}
        </div>
        
        {/* Add Event CTA */}
        <motion.div 
          className="add-event-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            className="big-cta-btn"
            onClick={toggleAddForm}
          >
            {showAddForm ? 'Cancel' : 'Add Your Event'}
          </button>
        </motion.div>
        
        {/* Add Event Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div 
              className="add-event-form-container"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="add-event-form">
                <h3 className="form-title">Add New Event</h3>
                
                <div className="form-group">
                  <label htmlFor="title">Event Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newEvent.title}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter event title"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="datetime">Date & Time</label>
                  <input
                    type="datetime-local"
                    id="datetime"
                    name="datetime"
                    value={newEvent.datetime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newEvent.location}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter event location"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={newEvent.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="religious">Religious</option>
                    <option value="social">Social</option>
                    <option value="charity">Charity</option>
                    <option value="educational">Educational</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={newEvent.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter event description"
                    rows="4"
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="accent-btn">
                    Add Event
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.main>
  );
};

export default EventsPage; 