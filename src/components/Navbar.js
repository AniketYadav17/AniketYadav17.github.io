import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const linkClass = (href) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive(href)
      ? darkMode ? 'text-indigo-400' : 'text-indigo-600'
      : darkMode
      ? 'text-gray-300 hover:text-white'
      : 'text-gray-600 hover:text-gray-900'
  }`;

  const iconButtonClass = `p-2 rounded-md transition-colors ${
    darkMode
      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  }`;

  return (
    <nav className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
      scrolled
        ? darkMode
          ? 'bg-gray-950/95 border-b border-gray-800'
          : 'bg-white/95 border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex flex-col leading-tight">
            <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Aniket Yadav
            </span>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              AI Engineer
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className={linkClass(item.href)}>
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`ml-3 ${iconButtonClass}`}
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={iconButtonClass}
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={iconButtonClass}
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={`md:hidden border-t pb-3 ${
            darkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
