import React from 'react';
import useForm from '../hooks/useForm';
import Button from '../components/common/Button';

function ContactPage() {
  const { values, handleChange, handleSubmit, isSubmitting } = useForm({
    name: '',
    email: '',
    message: ''
  });

  const submitForm = async (formData) => {
    // Simulate API call
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage; 