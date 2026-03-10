import React from "react";
import {
  CreditCard,
  Users,
  MessageSquare,
  Package,
  FileText,
  BarChart2,
  Zap,
  Settings,
  Shield,
  HelpCircle,
  Code,
  Globe,
  Palette,
  Layout,
  Smartphone,
  Info,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";

const SidebarItem = ({ icon: Icon, label, to, badge }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
    >
      <div className="sidebar-item-left">
        <Icon size={20} className="sidebar-icon" />
        <span className="sidebar-label">{label}</span>
      </div>
      {badge && (
        <span className={`sidebar-badge ${badge === "BETA" ? "beta" : ""}`}>
          {badge}
        </span>
      )}
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-logo">
        <div className="logo-icon flex-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 6L6 14L8.5 16.5L16.5 8.5L14 6Z"
              fill="var(--color-brand-indigo)"
            />
            <path
              d="M10 18L18 10L15.5 7.5L7.5 15.5L10 18Z"
              fill="var(--color-brand-lavender)"
            />
          </svg>
        </div>
        <span className="logo-text">WebCodex</span>
      </Link>

      <div className="sidebar-content">
        <SidebarItem icon={Info} label="web.info" to="/app" />

        <div className="sidebar-section">
          <div className="section-title">WEB TECHNOLOGIES</div>
          <SidebarItem icon={Globe} label="HTML5" to="/app/html" />
          <SidebarItem icon={Palette} label="CSS3" to="/app/css3" />
          <SidebarItem icon={Code} label="JavaScript" to="/app/js" />
          <SidebarItem icon={Layout} label="React.js" to="/app/react" />
          <SidebarItem
            icon={Smartphone}
            label="Tailwind CSS"
            to="/app/tailwind"
            badge="NEW"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
