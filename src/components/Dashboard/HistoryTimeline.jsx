import React from "react";
import { Globe, Image, Zap, Palette, Users, Layout } from "lucide-react";
import "./HistoryTimeline.css";

const iconMap = {
  Globe: Globe,
  Image: Image,
  Zap: Zap,
  Palette: Palette,
  Users: Users,
  Layout: Layout,
};

const HistoryTimeline = ({ milestones }) => {
  return (
    <div className="evolution-journey-section">
      <h2 className="dash-section-title">
        <span>THE ARCHIVE</span>
        Evolution of the Web
      </h2>

      <div className="journey-track">
        <div className="time-thread"></div>

        {milestones.map((milestone, index) => {
          const IconComponent = iconMap[milestone.icon];
          return (
            <div
              key={index}
              className={`milestone-step ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="bg-year-parallax">{milestone.year}</div>

              <div className="milestone-dot">
                <div className="dot-glow"></div>
              </div>

              <div className="milestone-content-card">
                <div className="milestone-meta">
                  <span className="milestone-year">{milestone.year}</span>
                  <div className="milestone-icon-box">
                    <IconComponent size={20} />
                  </div>
                </div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryTimeline;
