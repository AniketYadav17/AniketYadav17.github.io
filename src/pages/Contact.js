import React from 'react';
import { EnvelopeIcon, LinkIcon, ChatBubbleLeftRightIcon, UserIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Contact = ({ darkMode }) => {
  const contactInfo = [
    {
      name: 'Email',
      value: 'aniket.ydv99@gmail.com',
      href: 'mailto:aniket.ydv99@gmail.com',
      icon: '📧',
      description: 'Send me an email for collaborations, opportunities, or just to say hello!',
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/aniket-ydv/',
      href: 'https://linkedin.com/in/aniket-ydv/',
      icon: '💼',
      description: 'Connect with me on LinkedIn for professional networking and updates.',
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple'
    },
    {
      name: 'GitHub',
      value: 'github.com/AniketYadav17',
      href: 'https://github.com/AniketYadav17',
      icon: '🐙',
      description: 'Check out my open-source projects and contributions on GitHub.',
      gradient: 'from-green-500 to-emerald-500',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 ${
            darkMode ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-black/5 backdrop-blur-md border border-black/10'
          }">
            <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2 text-blue-500" />
            <span className={`text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Let's Connect
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always interested in new opportunities, collaborations, and interesting 
            conversations about data science and artificial intelligence.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                darkMode 
                  ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10' 
                  : 'bg-white/50 backdrop-blur-md border border-gray-200/50 hover:bg-white/70 shadow-xl'
              }`}
            >
              <div className="p-8 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                  {contact.icon}
                </div>
                
                {/* Contact Info */}
                <h3 className={`text-2xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {contact.name}
                </h3>
                
                <p className={`text-sm mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {contact.description}
                </p>
                
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r ${contact.gradient} text-white hover:shadow-lg`}
                >
                  {contact.name === 'Email' ? (
                    <>
                      <EnvelopeIcon className="h-4 w-4" />
                      Send Email
                    </>
                  ) : (
                    <>
                      <LinkIcon className="h-4 w-4" />
                      Visit {contact.name}
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className={`rounded-2xl p-12 mb-16 ${
          darkMode 
            ? 'bg-white/5 backdrop-blur-md border border-white/10' 
            : 'bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-xl'
        }`}>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Work Together
            </h2>
            
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm currently pursuing my MSc in Artificial Intelligence and actively seeking 
              data science opportunities. Whether you have a project in mind, want to discuss 
              potential collaborations, or just want to connect, I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/30 border border-gray-200/50'
            }`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <UserIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Current Status
                </h3>
              </div>
              <div className={`space-y-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p className="font-medium">MSc in Artificial Intelligence</p>
                <p>University of Sutu</p>
                <p className="text-blue-500 font-semibold">Available for opportunities</p>
              </div>
            </div>
            
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/30 border border-gray-200/50'
            }`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Experience
                </h3>
              </div>
              <div className={`space-y-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p className="font-medium">2.5 years as Software Engineer</p>
                <p>Accenture</p>
                <p className="text-purple-500 font-semibold">Data Science & ML focus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Response */}
        <div className={`text-center p-12 rounded-2xl ${
          darkMode 
            ? 'bg-white/5 backdrop-blur-md border border-white/10' 
            : 'bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-xl'
        }`}>
          <h3 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Start a Conversation?
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I typically respond within 24 hours and I'm always excited to discuss 
            new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <Link
              to="/projects"
              className={`group relative inline-flex items-center px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'border-white/20 text-white hover:bg-white/10 backdrop-blur-md'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View Projects
              <div className="ml-2 w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></div>
            </Link>
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <PaperAirplaneIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 