import React from "react";
import { BookOpen, Info } from "lucide-react";
import { Link } from "react-router-dom";
import "./TopicCard.css";

const TopicCard = ({ topic, showTooltip = true }) => {
  // Use the topic id to navigate to the dynamic lesson page route
  return (
    <Link to={`/app/html/${topic.id}`} className="topic-card">
      <div className="tc-icon-wrap">
        <BookOpen size={20} className="tc-icon" />
      </div>
      <div className="tc-content">
        <h3 className="tc-title">{topic.title}</h3>
      </div>
      {showTooltip && (
        <div className="tc-info-wrapper" onClick={(e) => e.preventDefault()}>
          <Info size={16} className="tc-info-icon" />
          <div className="tc-tooltip">
            {topic.description ||
              `شرح مبسط لأهمية واستخدامات ${topic.title} في بناء واجهات الويب.`}
          </div>
        </div>
      )}
    </Link>
  );
};

export default TopicCard;
