import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="contact-page"
    >
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="page-title">Get in <span className="yellow-accent">Touch</span></h1>
          <p>Have questions or want to connect? Reach out to the creator of this website.</p>
        </motion.div>

        <motion.div 
          className="contact-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="contact-header">
            <h2 className="contact-name">Bhavneet Joshi</h2>
            <p className="contact-title">Full Stack Developer | UI/UX Designer | Tech Enthusiast</p>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:bhavneetjoshi909@gmail.com" className="contact-link">bhavneetjoshi909@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="https://www.linkedin.com/in/bhavneet-joshi-862557203/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/bhavneet-joshi-862557203</a>
            </div>
            
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <a href="https://github.com/Bhavneet-joshi" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/Bhavneet-joshi</a>
            </div>
            
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a href="https://portfolio-brown-one-24.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-link">portfolio-brown-one-24.vercel.app</a>
            </div>
          </div>
          
          <div className="contact-bio">
            <p>Creating user-friendly websites and driving company growth through innovative solutions. Feel free to reach out for collaborations, questions, or just to say hello!</p>
          </div>
          
          <div className="contact-actions">
            <a href="https://portfolio-brown-one-24.vercel.app/" target="_blank" rel="noopener noreferrer" className="accent-btn">
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default ContactPage; 