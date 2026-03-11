import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { htmlTopics } from "../data/htmlTopics";
import { ArrowRight, ArrowLeft, TerminalSquare, Lightbulb, BookOpen, Code2 } from "lucide-react";
import Loader from "../components/Shared/Loader";
import "./LessonPage.css";

const LessonPage = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Example editor state
  const [code, setCode] = useState("");

  useEffect(() => {
    setIsLoading(true);
    // Find the lesson in htmlTopics data
    let foundTopic = null;
    for (const category of htmlTopics) {
      const topic = category.topics.find((t) => t.id === topicId);
      if (topic) {
        foundTopic = topic;
        break;
      }
    }

    if (foundTopic) {
      setLesson(foundTopic);
      if (foundTopic.content?.defaultCode) {
        setCode(foundTopic.content.defaultCode);
      } else {
        setCode("<!-- Write your HTML code here -->\n<h1>Hello World</h1>");
      }
    }

    // Simulate load time for a smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [topicId]);

  if (isLoading) {
    return <Loader message="Loading Lesson..." />;
  }

  if (!lesson) {
    return (
      <div className="page-content center-content">
        <h2>Lesson Not Found</h2>
        <button onClick={() => navigate("/app/html")} className="back-btn">
          Back to References
        </button>
      </div>
    );
  }

  const { content, nextLesson, prevLesson, title, description } = lesson;
  const hasContent = content !== undefined;

  return (
    <div className="page-content lesson-wrapper">
      <button onClick={() => navigate("/app/html")} className="lesson-back-btn">
        <ArrowLeft size={16} /> Back to Topics
      </button>

      <div className="lesson-header">
        <div className="lesson-icon">
          <BookOpen size={28} />
        </div>
        <div>
          <h1 className="lesson-title">{title}</h1>
          <p className="lesson-subtitle">{description}</p>
        </div>
      </div>

      <div className="lesson-body glassmorphism-panel">
        {/* Full Explanation */}
        <div className="lesson-section">
          <h2><Lightbulb size={20}/> Explanation</h2>
          {hasContent && content.explanation ? (
            <div 
              className="lesson-text" 
              dangerouslySetInnerHTML={{ __html: content.explanation }} 
            />
          ) : (
            <p className="lesson-placeholder">
              Detailed explanation is coming soon. Stay tuned!
            </p>
          )}
        </div>

        {/* Examples Section */}
        {hasContent && content.examples && content.examples.length > 0 && (
          <div className="lesson-section examples-section">
            <h2><Code2 size={20}/> Examples</h2>
            <div className="examples-grid">
              {content.examples.map((ex, idx) => (
                <div key={idx} className={`example-card ${ex.type}`}>
                  <div className="example-badge">
                    {ex.type === "technical" ? "Technical" : "Real World"}
                  </div>
                  <pre className="example-code">
                    <code>{ex.code}</code>
                  </pre>
                  {ex.annotation && <p className="example-note">{ex.annotation}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Editor Practice Area */}
        {hasContent && content.requiresEditor && (
          <div className="lesson-section editor-section">
            <h2><TerminalSquare size={20}/> Fast Practice</h2>
            <p className="editor-instructions">Write HTML below to see the instant live result.</p>
            <div className="editor-container">
              <textarea
                className="code-editor"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck="false"
              />
              <div className="code-preview">
                <iframe
                  title="Live Preview"
                  sandbox="allow-scripts"
                  srcDoc={code}
                  className="preview-iframe"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Next / Previous Navigation */}
      <div className="lesson-footer-nav">
        {prevLesson ? (
          <div className="lesson-nav-btn prev-btn" onClick={() => navigate(`/app/html/${prevLesson.id}`)}>
            <div className="nav-icon prev-icon">
              <ArrowLeft size={20} />
            </div>
            <div className="nav-meta align-right">
              <span className="nav-label">Previous Lesson</span>
              <span className="nav-title">{prevLesson.title}</span>
            </div>
          </div>
        ) : (
          <div className="lesson-nav-spacer"></div>
        )}

        {nextLesson ? (
          <div className="lesson-nav-btn next-btn" onClick={() => navigate(`/app/html/${nextLesson.id}`)}>
            <div className="nav-meta align-left">
              <span className="nav-label">Next Lesson</span>
              <span className="nav-title">{nextLesson.title}</span>
            </div>
            <div className="nav-icon next-icon">
              <ArrowRight size={20} />
            </div>
          </div>
        ) : (
          <div className="lesson-nav-spacer"></div>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
