import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Your Name</h3>
              <p>Data Scientist & ML Engineer</p>
              <p className="footer-description">
                Transforming data into actionable insights and building intelligent 
                solutions that drive business value.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><button onClick={() => scrollToSection('about')} className="footer-link-btn">About</button></li>
                  <li><button onClick={() => scrollToSection('skills')} className="footer-link-btn">Skills</button></li>
                  <li><button onClick={() => scrollToSection('projects')} className="footer-link-btn">Projects</button></li>
                  <li><button onClick={() => scrollToSection('blog')} className="footer-link-btn">Blog</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="footer-link-btn">Contact</button></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">Medium</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
            <p>Built with ❤️ using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 