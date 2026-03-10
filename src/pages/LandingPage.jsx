import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Code,
  Palette,
  Layout,
  Zap,
  Search,
  Layers,
  Heart,
  Star,
} from "lucide-react";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add a class to body for landing page specific styles if needed
    document.body.classList.add("is-landing");
    return () => document.body.classList.remove("is-landing");
  }, []);

  const handleStart = () => {
    navigate("/app");
  };

  const goToDocs = () => {
    navigate("/app/html");
  };

  return (
    <div className="landing-wrapper">
      {/* Background Shapes */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <nav className="landing-nav">
        <div className="logo-container">
          <div className="logo-icon-simple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 6L6 14L8.5 16.5L16.5 8.5L14 6Z" fill="#4F46E5" />
              <path d="M10 18L18 10L15.5 7.5L7.5 15.5L10 18Z" fill="#A78BFA" />
            </svg>
          </div>
          <span className="logo-text-bold">WebCodex</span>
        </div>
        <div className="nav-links">
          <span className="free-badge">100% Free for Everyone</span>
          <button className="nav-btn" onClick={handleStart}>
            Go to App
          </button>
        </div>
      </nav>

      <main className="landing-main">
        <section className="hero">
          <div className="badge-highlight">
            <Star size={14} fill="#4F46E5" color="#4F46E5" />
            <span>The ultimate front-end learning companion</span>
          </div>
          <h1 className="hero-title">
            Master the Web with <span className="gradient-text">Precision</span>
          </h1>
          <p className="hero-subtitle">
            WebCodex provides a professional playground and comprehensive
            documentation for developers. Simplified, interactive, and
            beautifully designed.
          </p>

          <div className="cta-group">
            <button className="primary-cta" onClick={handleStart}>
              Getting Started <ArrowRight size={18} />
            </button>
            <button className="secondary-cta" onClick={goToDocs}>
              Explore Documentation
            </button>
          </div>

          <div className="landing-pricing-note">
            <Heart size={16} color="#4F46E5" fill="#4F46E5" />
            <span>The App is Free & Open Source</span>
          </div>
        </section>

        <section className="features-grid">
          <div className="feature-card bento-1">
            <div className="feat-icon-box">
              <Globe size={24} />
            </div>
            <h3>Deep Documentation</h3>
            <p>
              Dive into HTML5, CSS3, and JavaScript with structured guides and
              real examples.
            </p>
          </div>
          <div className="feature-card bento-2">
            <div className="feat-icon-box">
              <Code size={24} />
            </div>
            <h3>Code Playground</h3>
            <p>
              Write code and see results instantly in our specialized preview
              environments.
            </p>
          </div>
          <div className="feature-card bento-3">
            <div className="feat-icon-box">
              <Zap size={24} />
            </div>
            <h3>Lightning Fast</h3>
            <p>
              Designed for speed and efficiency with keyboard shortcuts and
              instant search.
            </p>
          </div>
          <div className="feature-card bento-4 highlight-feat">
            <Layers size={32} />
            <h3>Premium Interface</h3>
            <p>
              A sleek, modern design that makes learning front-end a joy every
              single day.
            </p>
          </div>
        </section>

        <section className="cta-banner">
          <div className="banner-content">
            <h2>Ready to level up your skills?</h2>
            <p>
              Join other developers and start your journey today. It's free,
              forever.
            </p>
            <button className="banner-btn" onClick={handleStart}>
              Open WebCodex Dashboard
            </button>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <p>© 2026 WebCodex. Built for the modern web developer.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
