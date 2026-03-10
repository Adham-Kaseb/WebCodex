import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Construction, Zap, Info } from "lucide-react";
import "./ComingSoon.css";

const TechBranding = {
  css3: {
    name: "CSS3 Mastery",
    color: "var(--color-brand-lavender)",
    icon: "🎨",
  },
  js: {
    name: "JavaScript Engine",
    color: "var(--color-brand-blue)",
    icon: "⚡",
  },
  react: { name: "React Universe", color: "#61DAFB", icon: "⚛️" },
  tailwind: { name: "Tailwind Toolkit", color: "#06B6D4", icon: "🌊" },
};

const ComingSoon = ({ techId }) => {
  const navigate = useNavigate();
  const brand = TechBranding[techId] || {
    name: "Tech Documentation",
    color: "var(--color-brand-indigo)",
    icon: "🚀",
  };

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-backdrop">
        <div className="blob-bg"></div>
        <div className="blob-bg secondary"></div>
      </div>

      <div className="coming-soon-content">
        <button className="back-btn" onClick={() => navigate("/app")}>
          <ArrowLeft size={18} />
          <span>Back to Web Hub</span>
        </button>

        <div className="coming-soon-header">
          <div className="tech-badge" style={{ backgroundColor: brand.color }}>
            {brand.icon}
          </div>
          <h1>{brand.name}</h1>
        </div>

        <div className="status-banner">
          <Construction size={24} className="construction-icon" />
          <div className="status-text">
            <h3>Under Construction</h3>
            <p>
              Our team is carefully crafting the ultimate {brand.name}{" "}
              documentation for you.
            </p>
          </div>
        </div>

        <div className="feature-preview">
          <div className="preview-card">
            <Zap size={20} className="preview-icon" />
            <h4>Deep Dives</h4>
            <p>Comprehensive guides from basics to advanced patterns.</p>
          </div>
          <div className="preview-card">
            <Info size={20} className="preview-icon" />
            <h4>Interactive Examples</h4>
            <p>Live playground code snippets for every single concept.</p>
          </div>
        </div>

        <div className="expected-arrival">
          <span className="arrival-label">ESTIMATED ARRIVAL</span>
          <span className="arrival-date">Q2 2026</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
