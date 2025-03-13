import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ children, to, onClick, variant = 'primary', type = 'button', disabled = false }) {
  // If "to" prop is provided, render as Link
  if (to) {
    return (
      <Link 
        to={to} 
        className={`button button-${variant}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button 
      type={type} 
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default React.memo(Button); 