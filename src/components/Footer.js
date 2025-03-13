import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>COMMUNION</h2>
            <p>Connecting across faiths</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Navigation</h3>
              <ul>
                <li><button className="footer-link" onClick={() => onNavigate && onNavigate('home')}>Home</button></li>
                <li><button className="footer-link" onClick={() => onNavigate && onNavigate('events')}>Events</button></li>
                <li><button className="footer-link" onClick={() => onNavigate && onNavigate('about')}>About Us</button></li>
                <li><button className="footer-link" onClick={() => onNavigate && onNavigate('contact')}>Contact</button></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><button className="footer-link" onClick={() => onNavigate && onNavigate('terms')}>Terms</button></li>
                <li><button className="footer-link" onClick={() => onNavigate && onNavigate('privacy')}>Privacy</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Communion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 