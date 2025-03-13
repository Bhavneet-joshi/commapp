import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && !event.target.closest('.mobile-nav')) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="logo">COMMUNION</div>
      
      <nav className="desktop-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      
      <div className="mobile-nav-container">
        <button 
          className="hamburger-btn"
          onClick={() => {
            console.log("Button clicked, current state:", isMenuOpen);
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span>☰</span>
        </button>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar; 