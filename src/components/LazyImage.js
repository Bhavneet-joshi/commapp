import React, { useState, useEffect } from 'react';

function LazyImage({ src, alt, placeholder = 'Loading...', ...props }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setError('Failed to load image');
      setIsLoading(false);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  
  if (isLoading) {
    return <div className="image-placeholder">{placeholder}</div>;
  }
  
  if (error) {
    return <div className="image-error">{error}</div>;
  }
  
  return <img src={imageSrc} alt={alt} {...props} />;
}

export default React.memo(LazyImage); 