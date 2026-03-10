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
    <div className="live-data-section">
      <h2 className="dash-section-title">
        <span>MARKET PULSE</span>
        Global Web Impact
      </h2>

      <div className="infographic-grid">
        {stats.map((stat) => {
          const IconComponent = iconMap[stat.id];
          return (
            <div key={stat.id} className="impact-card-v2">
              <div className="card-top">
                <div className="impact-icon-frame">
                  <IconComponent size={24} />
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>

              <div className="impact-value-group">
                <div className="stat-value">{stat.value}</div>
                <div className="value-indicator">
                  <div
                    className="indicator-bar"
                    style={{
                      width: "70%",
                      background: "var(--color-brand-indigo)",
                    }}
                  ></div>
                </div>
              </div>

              <p className="stat-description">{stat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalImpact;
