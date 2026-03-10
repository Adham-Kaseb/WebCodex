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
    <div className="history-timeline-section">
      <h2 className="dash-section-title">The Evolution of the Web</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {milestones.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="timeline-item">
                <div className="milestone-year">{item.year}</div>
                <div className="milestone-dot">
                  <div className="dot-inner"></div>
                </div>
                <div className="milestone-card">
                  <div className="milestone-icon">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="milestone-title">{item.title}</h4>
                  <p className="milestone-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;
