import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import userLogo from "../../assets/images/NewLogoSM.png";
import "./Header.css";

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const notifRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotification(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle ctrl+shift+f shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        e.key.toLowerCase() === "f"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () =>
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/app/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      searchInputRef.current?.blur();
    }
  };

  return (
    <header className="dashboard-header">
      <form className="header-search" onSubmit={handleSearchSubmit}>
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search topics..."
          className="search-input"
          ref={searchInputRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div
          className="search-shortcut"
          onClick={() => searchInputRef.current?.focus()}
          style={{ cursor: "pointer" }}
        >
          ctrl + shift + f
        </div>
      </form>
      <div className="header-actions">
        <div className="notification-wrapper" ref={notifRef}>
          <button
            className={`icon-btn ${showNotification ? "active" : ""}`}
            onClick={() => setShowNotification(!showNotification)}
          >
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>

          {showNotification && (
            <div className="notification-popup">
              <div className="notif-header">
                <h3>الإشعارات</h3>
                <span className="notif-badge">جديد</span>
              </div>
              <div className="notif-body">
                <div className="notif-icon-wrap">
                  <Info size={16} />
                </div>
                <div className="notif-text">
                  <p className="notif-title">مرحباً بك في WebCodex!</p>
                  <p className="notif-desc">
                    مطور الموقع سيترك ملاحظات وإشعارات هامة جداً للمستخدمين هنا.
                  </p>
                  <span className="notif-time">الآن</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="user-profile">
          <img src={userLogo} alt="Adham Kaseb" className="avatar" />
          <div className="user-info">
            <span className="user-name">Adham Kaseb</span>
            <span className="user-role">front end developer & freelancer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
