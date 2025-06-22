import React from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 85% accuracy using ensemble methods. Implemented feature engineering, cross-validation, and deployed the model using Flask API.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "Docker"],
      github: "https://github.com/yourusername/churn-prediction",
      demo: "https://demo-link.com",
      image: "📊",
      gradient: "from-blue-500 to-cyan-500",
      stats: { accuracy: "85%", requests: "1000+", time: "80%" }
    },
    {
      title: "Real-time Sentiment Analysis API",
      description: "Built a REST API for real-time sentiment analysis using BERT transformers. Processes 1000+ requests per minute with 92% accuracy. Includes comprehensive testing and CI/CD pipeline.",
      techStack: ["Python", "Transformers", "FastAPI", "Docker", "AWS"],
      github: "https://github.com/yourusername/sentiment-analysis",
      demo: "https://demo-link.com",
      image: "🤖",
      gradient: "from-purple-500 to-pink-500",
      stats: { accuracy: "92%", requests: "1000+", time: "Real-time" }
    },
    {
      title: "Data Pipeline Automation",
      description: "Designed and implemented an automated ETL pipeline processing 50GB+ daily data using Apache Airflow. Reduced manual processing time by 80% and improved data quality monitoring.",
      techStack: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "Kubernetes"],
      github: "https://github.com/yourusername/data-pipeline",
      demo: "https://demo-link.com",
      image: "⚡",
      gradient: "from-green-500 to-emerald-500",
      stats: { data: "50GB+", efficiency: "80%", monitoring: "Real-time" }
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 ${
            darkMode ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-black/5 backdrop-blur-md border border-black/10'
          }">
            <StarIcon className="h-4 w-4 mr-2 text-yellow-500" />
            <span className={`text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Featured Projects
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Projects
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Showcasing my data science and machine learning projects that demonstrate 
            technical expertise and problem-solving capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                darkMode 
                  ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10' 
                  : 'bg-white/50 backdrop-blur-md border border-gray-200/50 hover:bg-white/70 shadow-xl'
              }`}
            >
              {/* Project Header */}
              <div className={`h-48 flex items-center justify-center text-6xl bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">{project.image}</div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-medium">View Details</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-lg font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {value}
                      </div>
                      <div className={`text-xs ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className={`text-xs font-medium mb-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    TECH STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          darkMode
                            ? 'bg-white/10 text-gray-300 border border-white/20'
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      darkMode
                        ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <CodeBracketIcon className="h-4 w-4" />
                    Code
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg`}
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center p-12 rounded-2xl ${
          darkMode 
            ? 'bg-white/5 backdrop-blur-md border border-white/10' 
            : 'bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-xl'
        }`}>
          <h3 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Interested in collaborating?
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 