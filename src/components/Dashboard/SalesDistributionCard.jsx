import React from "react";
import { ChevronDown } from "lucide-react";
import "./SalesDistributionCard.css";

const SalesDistributionCard = () => {
  return (
    <div className="sales-dist-card dashboard-card">
      <div className="sdc-header">
        <span className="sdc-title">Sales Distribution</span>
        <button className="sdc-dropdown">
          <span>Monthly</span>
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="sdc-metrics">
        <div className="sdc-metric">
          <div className="metric-label">
            <div
              className="metric-dot"
              style={{ backgroundColor: "var(--color-brand-indigo)" }}
            ></div>
            Website
          </div>
          <div className="metric-value">$ 374.82</div>
        </div>
        <div className="metric-divider"></div>
        <div className="sdc-metric">
          <div className="metric-label">
            <div
              className="metric-dot"
              style={{ backgroundColor: "var(--color-brand-teal)" }}
            ></div>
            Mobile App
          </div>
          <div className="metric-value">$ 241.60</div>
        </div>
        <div className="metric-divider"></div>
        <div className="sdc-metric">
          <div className="metric-label">
            <div
              className="metric-dot"
              style={{ backgroundColor: "#E2E8F0" }}
            ></div>
            Other
          </div>
          <div className="metric-value">$ 213.42</div>
        </div>
      </div>

      <div className="sdc-chart-wrap flex-center">
        {/* Mocking a donut chart using a conic gradient and an inner mask */}
        <div className="donut-chart">
          <div className="donut-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default SalesDistributionCard;
