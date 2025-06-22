import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Customer Churn Prediction System",
      category: "ml",
      description: "Developed a machine learning model to predict customer churn with 85% accuracy, helping reduce customer attrition by 30% and saving $2M annually.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "SQL", "Tableau"],
      image: "churn-prediction",
      github: "https://github.com/yourusername/churn-prediction",
      demo: "https://demo-link.com",
      metrics: {
        accuracy: "85%",
        impact: "$2M saved",
        deployment: "Production"
      }
    },
    {
      id: 2,
      title: "Real-time Fraud Detection",
      category: "ml",
      description: "Built an ensemble model for real-time credit card fraud detection processing 10M+ transactions daily with 99.2% precision and 98.5% recall.",
      technologies: ["Python", "TensorFlow", "Apache Spark", "Kafka", "Docker"],
      image: "fraud-detection",
      github: "https://github.com/yourusername/fraud-detection",
      demo: "https://demo-link.com",
      metrics: {
        precision: "99.2%",
        recall: "98.5%",
        throughput: "10M+ daily"
      }
    },
    {
      id: 3,
      title: "Recommendation Engine",
      category: "ml",
      description: "Implemented a collaborative filtering recommendation system that increased user engagement by 40% and average session duration by 25%.",
      technologies: ["Python", "Surprise", "Redis", "FastAPI", "React"],
      image: "recommendation-engine",
      github: "https://github.com/yourusername/recommendation-engine",
      demo: "https://demo-link.com",
      metrics: {
        engagement: "+40%",
        session: "+25%",
        users: "1M+"
      }
    },
    {
      id: 4,
      title: "Sales Forecasting Dashboard",
      category: "analytics",
      description: "Created an interactive dashboard for sales forecasting using time series analysis, providing 95% forecast accuracy and enabling data-driven decisions.",
      technologies: ["Python", "Prophet", "Streamlit", "Plotly", "PostgreSQL"],
      image: "sales-forecast",
      github: "https://github.com/yourusername/sales-forecast",
      demo: "https://demo-link.com",
      metrics: {
        accuracy: "95%",
        timeframe: "12 months",
        users: "500+"
      }
    },
    {
      id: 5,
      title: "Sentiment Analysis API",
      category: "nlp",
      description: "Developed a REST API for sentiment analysis using BERT transformers, processing 100K+ text samples daily with 92% accuracy.",
      technologies: ["Python", "Transformers", "FastAPI", "Docker", "AWS"],
      image: "sentiment-analysis",
      github: "https://github.com/yourusername/sentiment-analysis",
      demo: "https://demo-link.com",
      metrics: {
        accuracy: "92%",
        throughput: "100K+ daily",
        latency: "<100ms"
      }
    },
    {
      id: 6,
      title: "Data Pipeline Automation",
      category: "engineering",
      description: "Designed and implemented an automated ETL pipeline processing 50GB+ daily data using Apache Airflow, reducing manual work by 80%.",
      technologies: ["Python", "Apache Airflow", "Snowflake", "dbt", "Kubernetes"],
      image: "data-pipeline",
      github: "https://github.com/yourusername/data-pipeline",
      demo: "https://demo-link.com",
      metrics: {
        efficiency: "+80%",
        data: "50GB+ daily",
        reliability: "99.9%"
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'nlp', label: 'NLP' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'engineering', label: 'Data Engineering' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Showcasing my best work in data science and machine learning</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className={`project-placeholder ${project.image}`}>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>GitHub</span>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 