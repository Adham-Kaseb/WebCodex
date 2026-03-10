import React from "react";
import {
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react";
import "./SalesOverviewCard.css";

const LegendItem = ({ color, label }) => (
  <div className="legend-item">
    <div className="legend-blob" style={{ backgroundColor: color }}></div>
    <span>{label}</span>
  </div>
);

const SalesOverviewCard = () => {
  return (
    <div className="sales-overview-card dashboard-card span-2">
      <div className="soc-header">
        <div className="soc-header-left">
          <div className="soc-title-wrap">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="soc-title-icon"
            >
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <span className="soc-title">Sales Overview</span>
          </div>
        </div>
        <div className="soc-header-right">
          <button className="soc-btn">
            <Filter size={14} />
            <span>Filter</span>
          </button>
          <button className="soc-btn">
            <ArrowUpDown size={14} />
            <span>Sort</span>
          </button>
          <button className="soc-btn icon-only">
            <MoreHorizontal size={14} />
          </button>
        </div>
      </div>

      <div className="soc-value-area">
        <div className="soc-main-value">$ 9,257.51</div>
        <div className="soc-subtitle">
          <span className="soc-trend">
            <ArrowUpRight size={14} /> 15.8%
          </span>
          <span className="soc-subtitle-text">+ $143.50 increased</span>
        </div>
      </div>

      <div
        className="soc-chart-area"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "300px",
          backgroundColor: "var(--color-bg-page)",
          borderRadius: "var(--radius-card)",
          border: "1px dashed var(--color-border-subtle)",
          color: "var(--color-text-secondary)",
          marginBottom: "0",
        }}
      >
        <p>This section is currently under development.</p>
      </div>
    </div>
  );
};

export default SalesOverviewCard;
