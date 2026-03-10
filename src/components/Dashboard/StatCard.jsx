import React from "react";
import {
  Eye,
  DollarSign,
  Activity,
  Info,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import "./StatCard.css";

const TrendBadge = ({ trend, value }) => {
  const isUp = trend === "up";

  return (
    <div className={`trend-badge ${isUp ? "trend-up" : "trend-down"}`}>
      <span>{value}</span>
      {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
    </div>
  );
};

const iconMap = {
  views: <Eye size={18} />,
  revenue: <DollarSign size={18} />,
  bounce: <Activity size={18} />,
};

const StatCard = ({ id, title, mainValue, trendType, trendValue }) => {
  return (
    <div className="stat-card dashboard-card">
      <div className="stat-card-header">
        <div className="stat-title-group">
          <div className="stat-icon-wrap">{iconMap[id]}</div>
          <span className="stat-title">{title}</span>
        </div>
        <button className="info-btn">
          <Info size={16} />
        </button>
      </div>

      <div className="stat-card-body">
        <div className="stat-main-value">{mainValue}</div>
        <TrendBadge trend={trendType} value={trendValue} />
      </div>
    </div>
  );
};

export default StatCard;
