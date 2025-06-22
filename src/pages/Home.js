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
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-8 ${
            darkMode ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-black/5 backdrop-blur-md border border-black/10'
          }">
            <SparklesIcon className="h-4 w-4 mr-2 text-blue-500" />
            <span className={`text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Available for opportunities
            </span>
          </div>

          {/* Profile Photo and Name Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Profile Photo */}
            <div className="relative">
              <div className={`w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 shadow-2xl ${
                darkMode ? 'border-white/20' : 'border-gray-200'
              }`}>
                <img
                  src="/profile.jpg"
                  alt="Aniket Nair"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-full blur-xl opacity-30 ${
                darkMode ? 'bg-blue-500' : 'bg-blue-400'
              }`}></div>
            </div>

            {/* Name and Title */}
            <div className="text-center md:text-left">
              <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Aniket Nair
                </span>
              </h1>
              
              <h2 className={`text-xl md:text-3xl font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Data Scientist & AI Enthusiast
              </h2>
            </div>
          </div>

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