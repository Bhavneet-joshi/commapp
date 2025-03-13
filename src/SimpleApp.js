import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import ContactPage from './components/ContactPage';

function SimpleApp() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Listen for URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/events') {
        setCurrentPage('events');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };
    
    // Initial check
    handleLocationChange();
    
    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleLocationChange);
    
    // Listen for custom navigation events from HomePage
    const handleNavChange = (event) => {
      const path = event.detail.path;
      if (path === '/events') {
        setCurrentPage('events');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };
    
    window.addEventListener('navchange', handleNavChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('navchange', handleNavChange);
    };
  }, []);
  
  // Function to navigate between pages
  const navigateTo = (page) => {
    setCurrentPage(page);
    
    // Update URL without page reload
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', path);
  };
  
  // Render the appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="App">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default SimpleApp; 