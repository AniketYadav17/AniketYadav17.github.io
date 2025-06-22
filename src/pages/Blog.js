import React from 'react';
import { ArrowTopRightOnSquareIcon, CalendarIcon, ClockIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Blog = ({ darkMode }) => {
  const blogPosts = [
    {
      title: "Building Production-Ready ML Pipelines: Best Practices",
      excerpt: "Learn the essential steps to deploy machine learning models in production, from data validation to model monitoring and A/B testing strategies.",
      category: "Machine Learning",
      date: "2024-01-15",
      readTime: "8 min read",
      hashnodeUrl: "https://yourusername.hashnode.dev/ml-pipelines-best-practices",
      tags: ["MLOps", "Production", "Best Practices"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🤖"
    },
    {
      title: "The Future of NLP: Transformers and Beyond",
      excerpt: "Exploring the evolution of natural language processing from traditional methods to transformer architectures and what's coming next.",
      category: "NLP",
      date: "2024-01-10",
      readTime: "12 min read",
      hashnodeUrl: "https://yourusername.hashnode.dev/nlp-transformers-future",
      tags: ["NLP", "Transformers", "AI"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🧠"
    },
    {
      title: "Data Science in Healthcare: Predicting Patient Outcomes",
      excerpt: "How machine learning is revolutionizing healthcare through predictive analytics, early disease detection, and personalized treatment plans.",
      category: "Healthcare AI",
      date: "2024-01-05",
      readTime: "10 min read",
      hashnodeUrl: "https://yourusername.hashnode.dev/healthcare-data-science",
      tags: ["Healthcare", "Predictive Analytics", "ML"],
      gradient: "from-green-500 to-emerald-500",
      icon: "🏥"
    },
    {
      title: "A/B Testing for Data Scientists: Statistical Rigor in Practice",
      excerpt: "A comprehensive guide to designing and analyzing A/B tests with proper statistical methods and common pitfalls to avoid.",
      category: "Statistics",
      date: "2023-12-28",
      readTime: "15 min read",
      hashnodeUrl: "https://yourusername.hashnode.dev/ab-testing-statistics",
      tags: ["A/B Testing", "Statistics", "Experimentation"],
      gradient: "from-orange-500 to-red-500",
      icon: "📊"
    },
    {
      title: "Feature Engineering: The Art and Science of Data Preparation",
      excerpt: "Deep dive into feature engineering techniques that can significantly improve your machine learning model performance.",
      category: "Feature Engineering",
      date: "2023-12-20",
      readTime: "14 min read",
      hashnodeUrl: "https://yourusername.hashnode.dev/feature-engineering-guide",
      tags: ["Feature Engineering", "Data Preparation", "ML"],
      gradient: "from-indigo-500 to-purple-500",
      icon: "⚙️"
    },
    {
      title: "Real-time Analytics: Building Streaming Data Pipelines",
      excerpt: "Architecture patterns and implementation strategies for building real-time analytics systems using modern data technologies.",
      category: "Data Engineering",
      date: "2023-12-15",
      readTime: "11 min read",
      hashnodeUrl: "https://yourusername.hashnode.dev/real-time-analytics",
      tags: ["Streaming", "Real-time", "Data Engineering"],
      gradient: "from-teal-500 to-blue-500",
      icon: "⚡"
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
            <BookOpenIcon className="h-4 w-4 mr-2 text-blue-500" />
            <span className={`text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Latest Insights
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Blog & Articles
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Sharing insights on data science, machine learning, and AI through 
            in-depth articles and tutorials
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Article
          </h2>
          <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
            darkMode 
              ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10' 
              : 'bg-white/50 backdrop-blur-md border border-gray-200/50 hover:bg-white/70 shadow-xl'
          }`}>
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className={`h-48 md:h-full bg-gradient-to-br ${blogPosts[0].gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">{blogPosts[0].icon}</div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                    darkMode 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                  }`}>
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                
                <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {blogPosts[0].title}
                </h3>
                
                <p className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {blogPosts[0].tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          darkMode
                            ? 'bg-white/10 text-gray-300 border border-white/20'
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={blogPosts[0].hashnodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r ${blogPosts[0].gradient} text-white hover:shadow-lg`}
                  >
                    Read Article
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                  darkMode 
                    ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10' 
                    : 'bg-white/50 backdrop-blur-md border border-gray-200/50 hover:bg-white/70 shadow-xl'
                }`}
              >
                <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-4xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">{post.icon}</div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-medium">Read More</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      darkMode 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <CalendarIcon className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-xs rounded-full font-medium ${
                            darkMode
                              ? 'bg-white/10 text-gray-300 border border-white/20'
                              : 'bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={post.hashnodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        darkMode
                          ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                      }`}
                    >
                      Read
                      <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center p-12 rounded-2xl mt-16 ${
          darkMode 
            ? 'bg-white/5 backdrop-blur-md border border-white/10' 
            : 'bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-xl'
        }`}>
          <h3 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Stay Updated
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Follow my blog for the latest insights on data science, machine learning, 
            and artificial intelligence.
          </p>
          <a
            href="https://yourusername.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Visit My Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog; 