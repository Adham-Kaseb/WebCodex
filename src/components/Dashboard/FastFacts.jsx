import React from "react";
import { HelpCircle } from "lucide-react";
import "./FastFacts.css";

const FastFacts = ({ facts }) => {
  return (
    <div className="fast-facts-codex">
      <h2 className="dash-section-title">
        <span>THE KNOWLEDGE</span>
        Technical Fast Facts
      </h2>

      <div className="facts-grid-v2">
        {facts.map((fact, index) => (
          <div key={index} className="fact-card-v2">
            <div className="fact-accent"></div>
            <div className="fact-header">
              <div className="fact-icon-wrapper">
                <HelpCircle size={18} />
              </div>
              <h4>{fact.title}</h4>
            </div>
            <p>{fact.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastFacts;
