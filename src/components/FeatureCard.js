import React from 'react';

const FeatureCard = ({ color, title, description }) => {
  return (
    <div className="card-container grid-item">
      <div className="card-header">
        <div className={`feature-dot ${color}`}></div>
        <h3 className="feature-title">{title}</h3>
      </div>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard; 