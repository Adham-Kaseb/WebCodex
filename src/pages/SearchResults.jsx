import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { htmlTopics } from "../data/htmlTopics";
import { Search, FileText } from "lucide-react";
import "./SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const foundResults = [];

    htmlTopics.forEach((categoryObj) => {
      categoryObj.topics.forEach((topic) => {
        if (topic.title.toLowerCase().includes(lowerQuery)) {
          foundResults.push({
            ...topic,
            category: categoryObj.category,
          });
        }
      });
    });

    setResults(foundResults);
  }, [query]);

  return (
    <div className="search-results-page">
      <div className="search-header">
        <h1 className="search-title">Search Results</h1>
        <p className="search-subtitle">
          Showing results for <span className="highlight-query">"{query}"</span>
        </p>
      </div>

      <div className="search-content">
        {results.length === 0 ? (
          <div className="no-results">
            <Search size={48} className="no-results-icon" />
            <h3>No matching topics found</h3>
            <p>Try adjusting your search terms or checking for typos.</p>
          </div>
        ) : (
          <div className="results-grid">
            {results.map((result) => (
              <Link to={result.path} key={result.id} className="result-card">
                <div className="result-icon-wrap">
                  <FileText size={20} />
                </div>
                <div className="result-details">
                  <span className="result-category">{result.category}</span>
                  <h3 className="result-topic-title">{result.title}</h3>
                </div>
                <div className="result-arrow">→</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
