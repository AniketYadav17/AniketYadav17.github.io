import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      category: 'Agentic RAG',
      title: 'Sentinel: FCA Compliance Auditor',
      description: 'Agentic compliance auditor for UK fintech marketing. A LangGraph agent decomposes copy into discrete claims, retrieves the FCA Handbook rules each claim may breach, and returns cited verdicts, routing low-confidence cases to human review. Built eval-first: a 199-claim golden dataset verified against the live FCA Handbook API gates every retrieval, prompt, and model change in CI, and the handbook search is published as an MCP server with prompt-injection defences.',
      techStack: ['Python', 'LangGraph', 'Hybrid RAG', 'Gemini', 'MCP', 'Evaluation-Gated CI'],
      github: null,
      demo: null,
      note: 'Code private for now, walkthrough available on request',
      stats: { 'Verdict accuracy': '79%', 'False-flag rate': '4%', 'Recall@5 lift': '+25%' }
    },
    {
      category: 'ML + Geospatial',
      title: 'Neighbourhood Pulse: London Property Intelligence',
      description: 'Gentrification and valuation-gap predictor for London. Ingests 350,000+ planning applications and 500,000+ property sales across all 33 boroughs via a reverse-engineered Elasticsearch API, scores every neighbourhood\u2019s valuation gap with an XGBoost model validated by a three-year backtest (flagged-undervalued areas grew +7.3% vs −1.5% for overvalued), and serves grounded, schema-enforced LLM briefs on a live Streamlit map backed by a Dockerised FastAPI service.',
      techStack: ['Python', 'XGBoost', 'Gemini API', 'FastAPI', 'Streamlit', 'Docker'],
      github: 'https://github.com/AniketYadav17/Neighbourhood-Pulse',
      demo: 'https://neighbourhood-pulse.streamlit.app',
      stats: { 'Records': '850K+', 'R² held-out': '0.44', 'Backtest spread': '+7.3%' }
    },
    {
      category: 'Computer Vision',
      title: 'Multi-Task Vision Transformer for Diabetic Retinopathy',
      description: 'MSc dissertation (Distinction) at the University of Surrey. A PyTorch + SegFormer pipeline that jointly performs classification and segmentation on ultra-widefield retinal images, halving model parameters (122M → 61M) while surpassing human grader benchmarks on lesion detection. Custom training loops with Dice + BCE loss handle <0.01% class imbalance, with multi-GPU training and systematic hyperparameter tuning.',
      techStack: ['PyTorch', 'SegFormer', 'Vision Transformers', 'Multi-GPU Training'],
      github: null,
      demo: null,
      note: 'MSc dissertation, thesis available on request',
      stats: { 'ROC-AUC': '0.97', 'Accuracy': '96%', 'Lesion F1': '0.86' }
    }
  ];

  const accent = darkMode ? 'text-indigo-400' : 'text-indigo-600';
  const border = darkMode ? 'border-gray-800' : 'border-gray-200';
  const secondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const muted = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-14">
        <p className={`text-xs font-semibold tracking-widest uppercase ${accent}`}>Projects</p>
        <h1 className={`mt-2 text-3xl sm:text-4xl font-bold tracking-tight ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Production AI systems, end to end
        </h1>
        <p className={`mt-4 max-w-2xl text-lg ${secondary}`}>
          From problem framing and data acquisition through modelling, evaluation,
          and deployment, with evaluation-gated CI as standard practice.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`flex flex-col rounded-xl border p-6 transition-all duration-200 ${border} ${
              darkMode
                ? 'hover:border-indigo-400/60'
                : 'hover:border-indigo-600/60 hover:shadow-md'
            }`}
          >
            <p className={`text-xs font-semibold tracking-widest uppercase ${accent}`}>
              {project.category}
            </p>

            <h3 className={`mt-2 text-xl font-bold leading-snug ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>

            <p className={`mt-3 text-sm leading-relaxed flex-1 ${secondary}`}>
              {project.description}
            </p>

            <div className={`mt-6 pt-5 border-t grid grid-cols-3 gap-3 ${border}`}>
              {Object.entries(project.stats).map(([label, value]) => (
                <div key={label}>
                  <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {value}
                  </div>
                  <div className={`mt-0.5 text-[11px] leading-tight ${muted}`}>{label}</div>
                </div>
              ))}
            </div>

            <p className={`mt-5 text-xs ${muted}`}>{project.techStack.join(' · ')}</p>

            {(project.github || project.demo) ? (
              <div className="mt-4 flex gap-5 text-sm font-medium">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${accent} hover:underline`}
                  >
                    Code →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${accent} hover:underline`}
                  >
                    Live demo →
                  </a>
                )}
              </div>
            ) : (
              <p className={`mt-4 text-xs italic ${muted}`}>{project.note}</p>
            )}
          </article>
        ))}
      </div>

      <div className={`mt-16 pt-10 border-t text-center ${border}`}>
        <p className={`text-lg ${secondary}`}>
          Interested in working together?
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default Projects; 