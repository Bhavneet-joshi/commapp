import React from 'react';

const TestimonialCard = ({ text, authorName, authorTitle, avatarColor }) => {
  return (
    <div className="card-container grid-item">
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <div className={`author-avatar ${avatarColor}`}>
          <span>{authorName.charAt(0)}</span>
        </div>
        <div className="author-info">
          <h3 className="author-name">{authorName}</h3>
          <p className="author-title">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 