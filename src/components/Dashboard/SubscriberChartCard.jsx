import React from "react";
import { Users, ChevronDown, ArrowUpRight } from "lucide-react";
import "./SubscriberChartCard.css";

const SubscriberChartCard = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const data = [30, 45, 100, 20, 40, 35, 60]; // percentages

  return (
    <div className="subscriber-chart-card dashboard-card">
      <div className="scc-header">
        <div className="scc-title-wrap">
          <Users size={16} className="scc-icon" />
          <span className="scc-title">Total Subscriber</span>
        </div>
        <button className="scc-btn">
          <span>Weekly</span>
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="scc-value-area">
        <div className="scc-main-value">24,473</div>
        <div className="scc-subtitle">
          <span className="scc-trend">
            <ArrowUpRight size={14} /> 8.3%
          </span>
          <span className="scc-subtitle-text">+ 749 increased</span>
        </div>
      </div>

      <div className="scc-chart-container">
        <div className="scc-bars-wrapper">
          {data.map((height, i) => {
            const isTuesday = i === 2; // Highlighting Tuesday
            return (
              <div
                key={i}
                className={`scc-bar-col ${isTuesday ? "active" : ""}`}
              >
                {isTuesday && <div className="scc-bar-tooltip">3,874</div>}
                <div className="scc-bar-track">
                  <div
                    className="scc-bar-fill"
                    style={{
                      height: `${height}%`,
                      background: isTuesday
                        ? "linear-gradient(to top, var(--color-brand-indigo), var(--color-brand-lavender))"
                        : "#F1F5F9",
                    }}
                  ></div>
                </div>
                <div className="scc-bar-label">{days[i]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubscriberChartCard;
