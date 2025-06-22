import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Data Scientist with a Passion for Innovation</h3>
              <p>
                I'm a results-driven Data Scientist with over 5 years of experience in 
                transforming raw data into strategic insights. My expertise spans across 
                machine learning, statistical analysis, and data engineering, with a 
                proven track record of delivering high-impact solutions for Fortune 500 
                companies and startups alike.
              </p>
              <p>
                My journey in data science began with a fascination for patterns and 
                predictions. Today, I specialize in developing end-to-end ML pipelines, 
                building predictive models, and creating data-driven strategies that 
                drive business growth and operational efficiency.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>I excel at breaking down complex business problems into actionable data solutions</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">📊</div>
                <div className="highlight-content">
                  <h4>Data Storyteller</h4>
                  <p>I translate complex analytical findings into compelling narratives for stakeholders</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Innovation Driver</h4>
                  <p>I stay ahead of industry trends and implement cutting-edge ML techniques</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">ML Models Deployed</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">$2M+</div>
              <div className="stat-label">Revenue Impact</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
          </div>
        </div>
        
        <div className="about-timeline">
          <h3>Professional Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h4>Senior Data Scientist</h4>
                <p>Tech Company Inc.</p>
                <ul>
                  <li>Led development of recommendation engine improving user engagement by 40%</li>
                  <li>Managed team of 3 junior data scientists</li>
                  <li>Implemented automated ML pipeline reducing model deployment time by 60%</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2021 - 2023</div>
              <div className="timeline-content">
                <h4>Data Scientist</h4>
                <p>Analytics Solutions Ltd.</p>
                <ul>
                  <li>Built predictive models for customer churn with 85% accuracy</li>
                  <li>Developed real-time fraud detection system</li>
                  <li>Created interactive dashboards for executive reporting</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2019 - 2021</div>
              <div className="timeline-content">
                <h4>Data Analyst</h4>
                <p>StartupXYZ</p>
                <ul>
                  <li>Performed exploratory data analysis on large datasets</li>
                  <li>Created automated reporting systems</li>
                  <li>Collaborated with product teams on data-driven decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 