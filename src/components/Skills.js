import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "Scala", level: 70 }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: 95 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Deep Learning", level: 85 },
        { name: "NLP", level: 80 },
        { name: "Computer Vision", level: 75 }
      ]
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "Apache Spark", level: 85 },
        { name: "Hadoop", level: 80 },
        { name: "Airflow", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "AWS/Azure", level: 85 }
      ]
    },
    {
      title: "Data Visualization & BI",
      skills: [
        { name: "Tableau", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 85 },
        { name: "Plotly", level: 80 },
        { name: "D3.js", level: 70 }
      ]
    },
    {
      title: "Statistics & Analytics",
      skills: [
        { name: "Statistical Analysis", level: 95 },
        { name: "A/B Testing", level: 90 },
        { name: "Time Series", level: 85 },
        { name: "Hypothesis Testing", level: 90 },
        { name: "Experimental Design", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Jupyter Notebooks", level: 95 },
        { name: "Git", level: 90 },
        { name: "MLflow", level: 85 },
        { name: "Databricks", level: 80 },
        { name: "Snowflake", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Technical competencies and tools I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-highlight">
          <div className="highlight-content">
            <h3>What Sets Me Apart</h3>
            <div className="highlight-grid">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <h4>End-to-End Solutions</h4>
                <p>From data collection to model deployment and monitoring</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📈</div>
                <h4>Business Impact</h4>
                <p>Focus on measurable outcomes and ROI-driven solutions</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔄</div>
                <h4>Continuous Learning</h4>
                <p>Stay updated with latest ML/AI advancements and best practices</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <h4>Cross-functional Collaboration</h4>
                <p>Work effectively with engineering, product, and business teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 