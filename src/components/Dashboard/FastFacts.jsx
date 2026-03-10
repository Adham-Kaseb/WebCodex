import React from "react";
import { HelpCircle } from "lucide-react";
import "./FastFacts.css";

const FastFacts = ({ facts }) => {
  return (
    <div className="fast-facts-section">
      <h2 className="dash-section-title">Technical Fast Facts</h2>
      <div className="facts-grid">
        {facts.map((fact, index) => (
          <div key={index} className="fact-item">
            <div className="fact-header">
              <HelpCircle size={18} className="fact-icon" />
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
