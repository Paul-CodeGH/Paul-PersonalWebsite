import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
// Import your location image - adjust the path as needed
import locationImage from '../assets/maps.png'; // or use an actual map image
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <div className="navigation-buttons">
            <Link to="/" className="nav-button">
              ← Back Home
            </Link>
            <Link to="/about" className="nav-button">
              About
            </Link>
            <Link to="/projects" className="nav-button">
              Projects
            </Link>
          </div>
          <h1>Get In Touch</h1>
        </div>

        <div className="contact-grid">
          <div className="contact-info-section">
            <div className="contact-info-content">
              <h2>Let's Connect</h2>
              <p className="contact-description">
                I'm always open to discussing new opportunities, 
                creative projects, or just having a friendly chat. 
                Don't hesitate to reach out!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>paul_adrian.moldovan@yahoo.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+43 677 6163 1875</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <p>Erpersdorf an der Donau, 3435, Lower Austria, Austria</p>
                  </div>
                </div>

                
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                <a href="https://github.com/Paul-CodeGH/PortfolioProjects" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/paul-adrian-moldovan-802b90294/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                    LinkedIn
                </a>
                <a href="https://www.facebook.com/moldovan.paul.27/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon" />
                    Facebook
                </a>
                <a href="https://www.instagram.com/paul_moldo27/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                    Instagram
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className="location-section">
            <div className="location-image-container">
              <div className="location-image">
                <img 
                  src={locationImage} 
                  alt="Erpersdorf Location" 
                  className="location-photo"
                />
                <div className="location-overlay">
                  <div className="location-pin">
                    <div className="pin-icon">📍</div>
                    <div className="pin-text">Based in Erpersdorf</div>
                  </div>
                </div>
              </div>
              <div className="image-background-shape"></div>
            </div>

            <div className="contact-form">
              <h3>Send a Message</h3>
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4" className="form-textarea"></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                  <span className="arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background floating shapes */}
      <div className="floating-shapes">
        <div className="floating-shape shape7"></div>
        <div className="floating-shape shape8"></div>
        <div className="floating-shape shape9"></div>
      </div>
    </div>
  );
};

export default Contact;