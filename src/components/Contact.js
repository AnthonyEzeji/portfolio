import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p>Ready to bring your ideas to life? Let's discuss your next project.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:aezeji00@gmail.com">aezeji00@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/anthonyezeji/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/anthonyezeji
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/AnthonyEzeji" target="_blank" rel="noopener noreferrer">
                  github.com/AnthonyEzeji
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-cta">
            <p>I'm always open to discussing new opportunities and exciting projects.</p>
            <a href="mailto:aezeji00@gmail.com" className="cta-button">
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;