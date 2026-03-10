import React from "react";
import "./KeyFigures.css";

const KeyFigures = ({ pioneers }) => {
  return (
    <div className="key-figures-section">
      <h2 className="dash-section-title">The Web Pioneers</h2>
      <div className="pioneer-cards-grid">
        {pioneers.map((person) => (
          <div key={person.id} className="pioneer-card">
            <div className="pioneer-info-top">
              <div className="pioneer-avatar-placeholder">
                {person.name.charAt(0)}
              </div>
              <div className="pioneer-meta">
                <h4 className="pioneer-name">{person.name}</h4>
                <span className="pioneer-role">{person.role}</span>
              </div>
            </div>
            <p className="pioneer-impact">{person.impact}</p>
            <div className="pioneer-contribution-tag">
              <span>{person.contribution}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFigures;
