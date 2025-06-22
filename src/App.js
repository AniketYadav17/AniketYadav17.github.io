import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage immediately to prevent flash
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Apply dark mode class to document immediately
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-all duration-500 ${
        darkMode 
          ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900'
      }`}>
        {/* Background Pattern */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute inset-0 opacity-5 ${
            darkMode ? 'bg-[radial-gradient(circle_at_50%_50%,_#ffffff_1px,_transparent_1px)]' : 'bg-[radial-gradient(circle_at_50%_50%,_#000000_1px,_transparent_1px)]'
          }`} style={{ backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative z-10">
          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                : 'bg-black/10 hover:bg-black/20 border border-black/20'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>

          <Navbar darkMode={darkMode} />
          
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/projects" element={<Projects darkMode={darkMode} />} />
              <Route path="/blog" element={<Blog darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
