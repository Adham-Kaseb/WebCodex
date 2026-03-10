import React from "react";
import "./KeyFigures.css";

const KeyFigures = ({ pioneers }) => {
  return (
    <div className="pioneer-gallery-section">
      <h2 className="dash-section-title">
        <span>THE ARCHITECTS</span>
        Web Pioneers
      </h2>

      <div className="pioneer-grid">
        {pioneers.map((person) => (
          <div key={person.id} className="pioneer-card-v2">
            <div className="pioneer-visual">
              <div className="avatar-frame">
                <div className="avatar-placeholder">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className="pioneer-meta-info">
                <h3>{person.name}</h3>
                <span className="pioneer-role">{person.role}</span>
              </div>
            </div>

            <p className="pioneer-impact">{person.impact}</p>

            <div className="contribution-dna">
              {person.contribution.split(",").map((tag, i) => (
                <span key={i} className="dna-tag">
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFigures;
