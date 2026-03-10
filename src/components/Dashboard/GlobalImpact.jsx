import React from "react";
import { TrendingUp, Users, Globe, Briefcase } from "lucide-react";
import "./GlobalImpact.css";

const iconMap = {
  market: TrendingUp,
  users: Users,
  sites: Globe,
  growth: Briefcase,
};

const GlobalImpact = ({ stats }) => {
  return (
    <div className="global-impact-section">
      <h2 className="dash-section-title">Global Web Impact</h2>
      <div className="stats-grid">
        {stats.map((stat) => {
          const IconComponent = iconMap[stat.id];
          return (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon-bg">
                <IconComponent size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-label">{stat.label}</span>
                <div className="stat-value">{stat.value}</div>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalImpact;
