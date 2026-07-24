import React from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Sentinel — FCA Compliance Auditor",
      description: "Agentic compliance auditor for UK fintech marketing. A LangGraph agent decomposes copy into discrete claims, retrieves the FCA Handbook rules each claim may breach, and returns cited verdicts, routing low-confidence cases to human review. Built eval-first: a 199-claim golden dataset verified against the live FCA Handbook API gates every retrieval, prompt, and model change in CI, and the handbook search is published as an MCP server with prompt-injection defences.",
      techStack: ["Python", "LangGraph", "Hybrid RAG", "Gemini", "MCP", "Evaluation-Gated CI"],
      github: null,
      demo: null,
      note: "Code private for now — walkthrough available on request",
      image: "🛡️",
      gradient: "from-blue-500 to-cyan-500",
      stats: { "Verdict accuracy": "79%", "False-flag rate": "4%", "Recall@5 lift": "+25%" }
    },
    {
      title: "Neighbourhood Pulse — London Property Intelligence",
      description: "Gentrification and valuation-gap predictor for London. Ingests 350,000+ planning applications and 500,000+ property sales across all 33 boroughs via a reverse-engineered Elasticsearch API, scores every neighbourhood's valuation gap with an XGBoost model validated by a three-year backtest (flagged-undervalued areas grew +7.3% vs −1.5% for overvalued), and serves grounded, schema-enforced LLM briefs on a live Streamlit map backed by a Dockerised FastAPI service.",
      techStack: ["Python", "XGBoost", "Gemini API", "FastAPI", "Streamlit", "Docker"],
      github: "https://github.com/AniketYadav17/Neighbourhood-Pulse",
      demo: "https://neighbourhood-pulse.streamlit.app",
      image: "🏙️",
      gradient: "from-green-500 to-emerald-500",
      stats: { "Records": "850K+", "R² held-out": "0.44", "Backtest spread": "+7.3%" }
    },
    {
      title: "Multi-Task Vision Transformer for Diabetic Retinopathy",
      description: "MSc dissertation (Distinction) at the University of Surrey. A PyTorch + SegFormer pipeline that jointly performs classification and segmentation on ultra-widefield retinal images, halving model parameters (122M → 61M) while surpassing human grader benchmarks on lesion detection. Custom training loops with Dice + BCE loss handle <0.01% class imbalance, with multi-GPU training and systematic hyperparameter tuning.",
      techStack: ["PyTorch", "SegFormer", "Vision Transformers", "Multi-GPU Training"],
      github: null,
      demo: null,
      note: "MSc dissertation — thesis available on request",
      image: "👁️",
      gradient: "from-purple-500 to-pink-500",
      stats: { "ROC-AUC": "0.97", "Accuracy": "96%", "Lesion F1": "0.86" }
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
            Production AI systems built end-to-end — from problem framing and data
            acquisition through modelling, evaluation, and deployment, with
            evaluation-gated CI as standard practice
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
                {(project.github || project.demo) ? (
                  <div className="flex gap-3">
                    {project.github && (
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
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg`}
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                ) : (
                  project.note && (
                    <div className={`text-center text-xs italic px-4 py-3 rounded-xl border ${
                      darkMode
                        ? 'text-gray-400 border-white/10 bg-white/5'
                        : 'text-gray-500 border-gray-200 bg-gray-50'
                    }`}>
                      {project.note}
                    </div>
                  )
                )}
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