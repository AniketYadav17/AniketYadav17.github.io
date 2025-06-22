import React from 'react';
import { ArrowDownTrayIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Home = ({ darkMode }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`}></div>
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-12 ${
            darkMode ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-black/5 backdrop-blur-md border border-black/10'
          }">
            <SparklesIcon className="h-4 w-4 mr-2 text-blue-500" />
            <span className={`text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Available for opportunities
            </span>
          </div>

          {/* Profile Photo with Enhanced Design */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-1 ${
                darkMode ? 'shadow-2xl shadow-blue-500/25' : 'shadow-2xl'
              }`}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-full p-1">
                  <div className="w-40 h-40 rounded-full overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Aniket Nair"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Hide the image if it doesn't exist
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 ${
                darkMode ? 'shadow-lg shadow-green-500/50' : 'shadow-lg'
              }`}></div>
              <div className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 ${
                darkMode ? 'shadow-lg shadow-pink-500/50' : 'shadow-lg'
              }`}></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Aniket Nair
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className={`text-2xl md:text-4xl font-medium mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Data Scientist & AI Enthusiast
          </h2>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className={`text-xl md:text-2xl leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm currently pursuing an MSc in Artificial Intelligence at the University of Sutu, 
              with 2.5 years of experience as a software engineer at Accenture.
            </p>
            
            <p className={`text-lg md:text-xl leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate about leveraging data science and machine learning to solve complex problems 
              and drive innovation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
            
            <a
              href="/projects"
              className={`group relative inline-flex items-center px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'border-white/20 text-white hover:bg-white/10 backdrop-blur-md'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View Projects
              <div className="ml-2 w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 