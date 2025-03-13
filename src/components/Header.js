import React from 'react';

const Header = ({ onNavigate }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">COMMUNION</div>
          <nav className="main-nav">
            <ul>
              <li>
                <button 
                  className="nav-button active" 
                  onClick={() => onNavigate('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="nav-button" 
                  onClick={() => onNavigate('events')}
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  className="nav-button"
                  onClick={() => onNavigate('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 