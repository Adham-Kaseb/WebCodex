import React, { useState, useRef, useEffect } from "react";
import TopicCard from "./TopicCard";
import { htmlTopics } from "../../data/htmlTopics";
import {
  CornerDownRight,
  FileCode2,
  Settings,
  LayoutList,
  Columns2,
  Columns3,
  Columns4,
  Map,
} from "lucide-react";
import "./HtmlTopicsGrid.css";

const HtmlTopicsGrid = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [gridLayout, setGridLayout] = useState(() => {
    return localStorage.getItem("htmlSettings_gridLayout") || "4";
  });
  const [showTooltips, setShowTooltips] = useState(() => {
    const saved = localStorage.getItem("htmlSettings_showTooltips");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [showToc, setShowToc] = useState(false);
  const settingsRef = useRef(null);
  const tocRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("htmlSettings_gridLayout", gridLayout);
  }, [gridLayout]);

  useEffect(() => {
    localStorage.setItem(
      "htmlSettings_showTooltips",
      JSON.stringify(showTooltips),
    );
  }, [showTooltips]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
      if (tocRef.current && !tocRef.current.contains(event.target)) {
        setShowToc(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCategoryId = (categoryName) => {
    return `category-${categoryName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
  };

  const scrollToCategory = (categoryName) => {
    const element = document.getElementById(getCategoryId(categoryName));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="html-topics-container">
      <div className="ht-header-modern">
        <div className="ht-header-content">
          <div className="ht-header-iconWrapper">
            <FileCode2 size={32} className="ht-header-mainIcon" />
          </div>
          <div className="ht-header-text">
            <div className="ht-title-wrapper">
              <h1 className="ht-modern-title">HTML Documentation</h1>
            </div>
            <p className="ht-modern-subtitle">
              The standard markup language for creating Web pages.
            </p>

            <div className="ht-category-nav">
              {htmlTopics.map((category, index) => (
                <button
                  key={index}
                  className="ht-nav-btn"
                  onClick={() => scrollToCategory(category.category)}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ht-content">
        {htmlTopics.map((category, index) => (
          <div
            key={index}
            id={getCategoryId(category.category)}
            className="ht-category-section"
          >
            <div className="ht-category-header">
              <div className="ht-category-indicator">
                <CornerDownRight size={20} />
              </div>
              <h2 className="ht-category-title">{category.category}</h2>
            </div>
            <div
              className={`ht-grid ${gridLayout !== "auto" ? `grid-layout-${gridLayout}` : ""}`}
            >
              {category.topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  showTooltip={showTooltips}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`ht-settings-container floating-settings ${showSettings ? "is-active" : ""}`}
        ref={settingsRef}
      >
        <button
          className={`ht-settings-btn ${showSettings ? "active" : ""}`}
          onClick={() => setShowSettings(!showSettings)}
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>

        <div
          className={`ht-settings-dropdown floating-dropdown ${showSettings ? "open" : ""}`}
        >
          <div className="ht-settings-header">Display Settings</div>

          <div className="ht-settings-group">
            <span className="ht-settings-label">Grid Layout</span>
            <div className="ht-layout-options">
              <button
                className={`ht-layout-btn ${gridLayout === "list" ? "active" : ""}`}
                onClick={() => setGridLayout("list")}
                title="List View"
              >
                <LayoutList size={18} />
              </button>
              <button
                className={`ht-layout-btn ${gridLayout === "2" ? "active" : ""}`}
                onClick={() => setGridLayout("2")}
                title="2 Columns"
              >
                <Columns2 size={18} />
              </button>
              <button
                className={`ht-layout-btn ${gridLayout === "3" ? "active" : ""}`}
                onClick={() => setGridLayout("3")}
                title="3 Columns"
              >
                <Columns3 size={18} />
              </button>
              <button
                className={`ht-layout-btn ${gridLayout === "4" ? "active" : ""}`}
                onClick={() => setGridLayout("4")}
                title="4 Columns"
              >
                <Columns4 size={18} />
              </button>
            </div>
          </div>

          <div className="ht-settings-group">
            <span className="ht-settings-label">Topic Information</span>
            <div className="ht-toggle-row">
              <span className="ht-toggle-text">Show Tooltips</span>
              <label className="ht-switch">
                <input
                  type="checkbox"
                  checked={showTooltips}
                  onChange={(e) => setShowTooltips(e.target.checked)}
                />
                <span className="ht-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`ht-settings-container floating-toc ${showToc ? "is-active" : ""}`}
        ref={tocRef}
      >
        <button
          className={`ht-settings-btn ${showToc ? "active" : ""}`}
          onClick={() => setShowToc(!showToc)}
          aria-label="Table of Contents"
        >
          <Map size={20} />
        </button>

        <div
          className={`ht-settings-dropdown floating-dropdown ${showToc ? "open" : ""}`}
        >
          <div className="ht-settings-header">Table of Contents</div>
          <div className="ht-toc-list">
            {htmlTopics.map((category, index) => (
              <div
                key={index}
                className="ht-toc-item"
                onClick={() => {
                  scrollToCategory(category.category);
                  setShowToc(false);
                }}
              >
                {category.category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlTopicsGrid;
