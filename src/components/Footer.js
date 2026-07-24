import React from 'react';

const Footer = ({ darkMode }) => {
  const linkClass = `transition-colors ${
    darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'
  }`;

  return (
    <footer className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <span>© {new Date().getFullYear()} Aniket Yadav</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AniketYadav17"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aniket-ydv/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a href="mailto:aniket.ydv99@gmail.com" className={linkClass}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
