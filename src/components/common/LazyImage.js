import React, { useState, useEffect } from 'react';
import './LazyImage.css';

function LazyImage({ src, alt, className = '', placeholder = null }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
      console.error(`Failed to load image: ${src}`);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  
  if (error) {
    return (
      <div className={`lazy-image-error ${className}`}>
        <span>Image not available</span>
      </div>
    );
  }
  
  return (
    <div className={`lazy-image-container ${className}`}>
      <img 
        src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='} 
        alt={alt} 
        className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
      />
      {!isLoaded && (
        <div className="lazy-image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}

export default React.memo(LazyImage); 