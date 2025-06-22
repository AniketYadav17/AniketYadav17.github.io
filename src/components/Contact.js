import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "San Francisco, CA",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      link: "https://linkedin.com/in/yourusername"
    }
  ];

  const availability = [
    {
      day: "Monday - Friday",
      time: "9:00 AM - 6:00 PM PST"
    },
    {
      day: "Saturday",
      time: "10:00 AM - 2:00 PM PST"
    },
    {
      day: "Sunday",
      time: "Available for urgent matters"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's discuss how I can help with your data science needs</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3>Contact Information</h3>
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="availability-section">
              <h3>Availability</h3>
              <div className="availability-list">
                {availability.map((item, index) => (
                  <div key={index} className="availability-item">
                    <span className="day">{item.day}</span>
                    <span className="time">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>Twitter</span>
                </a>
                <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>Medium</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-container">
              <h3>Send Me a Message</h3>
              <p>I'm always interested in new opportunities, collaborations, and interesting data science challenges.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, opportunity, or question..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to Start a Project?</h3>
            <p>Whether you need a data scientist for your team, want to collaborate on research, or have a challenging problem to solve, I'd love to hear from you.</p>
            <div className="cta-buttons">
              <a href="mailto:your.email@example.com" className="btn btn-primary">
                Schedule a Call
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 