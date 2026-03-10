import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import HistoryTimeline from "../components/Dashboard/HistoryTimeline";
import KeyFigures from "../components/Dashboard/KeyFigures";
import GlobalImpact from "../components/Dashboard/GlobalImpact";
import FastFacts from "../components/Dashboard/FastFacts";
import {
  webMilestones,
  webPioneers,
  webStats,
  webFacts,
} from "../data/webHistory";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />

      <div className="dashboard-edu-content">
        <GlobalImpact stats={webStats} />
        <HistoryTimeline milestones={webMilestones} />
        <KeyFigures pioneers={webPioneers} />
        <FastFacts facts={webFacts} />
      </div>
    </div>
  );
};

export default Dashboard;
