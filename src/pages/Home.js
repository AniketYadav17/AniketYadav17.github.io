import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Home = ({ darkMode }) => {
  const accent = darkMode ? 'text-indigo-400' : 'text-indigo-600';
  const secondary = darkMode ? 'text-gray-300' : 'text-gray-700';
  const muted = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-[calc(100vh-5rem)] flex items-center py-16">
        <div className="w-full flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <div className={`inline-flex items-center gap-2 text-sm font-medium ${muted}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Available for opportunities
            </div>

            <h1 className={`mt-4 text-4xl sm:text-5xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Aniket Yadav
            </h1>

            <h2 className={`mt-3 text-lg sm:text-xl font-medium ${accent}`}>
              AI Engineer · Agentic AI · RAG · LLM Evaluation
            </h2>

            <p className={`mt-6 text-lg leading-relaxed ${secondary}`}>
              AI Engineer with 2+ years shipping production AI systems in Python.
              MSc in Artificial Intelligence (Distinction) from the University of Surrey,
              previously Machine Learning Engineer at Accenture.
            </p>

            <p className={`mt-4 leading-relaxed ${muted}`}>
              I build agentic LLM workflows with LangGraph, retrieval-augmented pipelines
              over enterprise data, and the evaluation harnesses that prove these systems
              can be trusted in production.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download resume
              </a>
              <Link to="/projects" className={`font-medium ${accent} hover:underline`}>
                View projects →
              </Link>
            </div>
          </div>

          <img
            src="/profile.png"
            alt="Aniket Yadav"
            loading="eager"
            className={`w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-1 ${
              darkMode ? 'ring-gray-800' : 'ring-gray-200'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Home; 