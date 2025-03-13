import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Make sure you have this CSS file

function Navbar() {
  // State to track if mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container') && !event.target.closest('.hamburger-button')) {
        setMobileMenuOpen(false);
      }
    }
    
    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu, current state:", mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to navigate to a page - using direct href approach
  const navigateTo = (path) => {
    console.log("Navigating to:", path);
    window.location.href = path;
    setMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="navbar">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="logo">COMMUNION</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <div className="mobile-header">
          <div className="logo">COMMUNION</div>
          
          {/* Hamburger Button with explicit onClick handler */}
          <button 
            className="hamburger-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Mobile Menu that shows/hides based on state */}
        {mobileMenuOpen && (
          <div className="mobile-menu-container">
            <ul className="mobile-menu">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/events" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/events');
                  }}
                >
                  Events
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 