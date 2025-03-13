import React, { useState } from 'react';

function AddEventForm() {
  const [formData, setFormData] = useState({
    category: ''
  });
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const categories = [
    { value: 'music', label: 'Music' },
    { value: 'sports', label: 'Sports' },
    { value: 'arts', label: 'Arts' },
    { value: 'technology', label: 'Technology' },
    { value: 'food', label: 'Food & Drink' },
    { value: 'education', label: 'Education' },
    { value: 'other', label: 'Other' }
  ];
  
  const handleCategorySelect = (value) => {
    setFormData({
      ...formData,
      category: value
    });
    setDropdownOpen(false);
  };
  
  const handleChange = (e) => {
    // Implementation of handleChange
  };

  const handleSubmit = (e) => {
    // Implementation of handleSubmit
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Category</label>
        <div 
          className="custom-dropdown"
          style={{
            position: 'relative',
            width: '100%'
          }}
        >
          <div 
            className="selected-option"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              backgroundColor: '#333',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #555',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>
              {formData.category 
                ? categories.find(cat => cat.value === formData.category)?.label 
                : 'Select a category'}
            </span>
            <span>{dropdownOpen ? '▲' : '▼'}</span>
          </div>
          
          {dropdownOpen && (
            <div 
              className="options-list"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#333',
                border: '1px solid #555',
                borderTop: 'none',
                borderRadius: '0 0 4px 4px',
                zIndex: 10,
                maxHeight: '200px',
                overflowY: 'auto'
              }}
            >
              {categories.map(category => (
                <div 
                  key={category.value}
                  className="option"
                  onClick={() => handleCategorySelect(category.value)}
                  style={{
                    padding: '10px',
                    cursor: 'pointer',
                    color: 'white',
                    borderBottom: '1px solid #444',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#444'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
                >
                  {category.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <button type="submit">Add Event</button>
    </form>
  );
}

export default AddEventForm; 