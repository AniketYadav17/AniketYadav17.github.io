import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Production-Ready ML Pipelines: Best Practices",
      excerpt: "Learn the essential steps to deploy machine learning models in production, from data validation to model monitoring and A/B testing strategies.",
      category: "Machine Learning",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "ml-pipeline",
      tags: ["MLOps", "Production", "Best Practices"],
      featured: true
    },
    {
      id: 2,
      title: "The Future of NLP: Transformers and Beyond",
      excerpt: "Exploring the evolution of natural language processing from traditional methods to transformer architectures and what's coming next.",
      category: "NLP",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "nlp-future",
      tags: ["NLP", "Transformers", "AI"],
      featured: true
    },
    {
      id: 3,
      title: "Data Science in Healthcare: Predicting Patient Outcomes",
      excerpt: "How machine learning is revolutionizing healthcare through predictive analytics, early disease detection, and personalized treatment plans.",
      category: "Healthcare AI",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "healthcare-ai",
      tags: ["Healthcare", "Predictive Analytics", "ML"],
      featured: false
    },
    {
      id: 4,
      title: "A/B Testing for Data Scientists: Statistical Rigor in Practice",
      excerpt: "A comprehensive guide to designing and analyzing A/B tests with proper statistical methods and common pitfalls to avoid.",
      category: "Statistics",
      date: "2023-12-28",
      readTime: "15 min read",
      image: "ab-testing",
      tags: ["A/B Testing", "Statistics", "Experimentation"],
      featured: false
    },
    {
      id: 5,
      title: "Feature Engineering: The Art and Science of Data Preparation",
      excerpt: "Deep dive into feature engineering techniques that can significantly improve your machine learning model performance.",
      category: "Feature Engineering",
      date: "2023-12-20",
      readTime: "14 min read",
      image: "feature-engineering",
      tags: ["Feature Engineering", "Data Preparation", "ML"],
      featured: false
    },
    {
      id: 6,
      title: "Real-time Analytics: Building Streaming Data Pipelines",
      excerpt: "Architecture patterns and implementation strategies for building real-time analytics systems using modern data technologies.",
      category: "Data Engineering",
      date: "2023-12-15",
      readTime: "11 min read",
      image: "streaming-analytics",
      tags: ["Streaming", "Real-time", "Data Engineering"],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2>Blog & Insights</h2>
          <p>Sharing knowledge and insights from the world of data science</p>
        </div>

        <div className="blog-content">
          <div className="featured-posts">
            <h3>Featured Articles</h3>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-post">
                  <div className="post-image">
                    <div className={`post-placeholder ${post.image}`}>
                      <div className="post-overlay">
                        <span className="read-more">Read Article</span>
                      </div>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h4 className="post-title">{post.title}</h4>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="recent-posts">
            <h3>Recent Articles</h3>
            <div className="posts-list">
              {recentPosts.map(post => (
                <article key={post.id} className="post-item">
                  <div className="post-image">
                    <div className={`post-placeholder small ${post.image}`}></div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h4 className="post-title">{post.title}</h4>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="blog-cta">
          <div className="cta-content">
            <h3>Stay Updated with Data Science Insights</h3>
            <p>Get the latest articles on machine learning, data engineering, and analytics delivered to your inbox.</p>
            <div className="newsletter-signup">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="email-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
            <p className="newsletter-note">No spam, unsubscribe at any time.</p>
          </div>
        </div>

        <div className="blog-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Articles Published</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Monthly Readers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Reader Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 