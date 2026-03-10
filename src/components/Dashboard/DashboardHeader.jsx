import React from "react";
import { Calendar, ChevronDown, Download } from "lucide-react";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  return (
    <div className="dashboard-page-header">
      <h1 className="dashboard-title">Web Hub</h1>

      <div className="dashboard-toolbar">
        <button className="toolbar-btn icon-text-btn export-btn">
          <Download size={16} className="btn-icon" />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
