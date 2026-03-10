import React, { useState, useEffect } from "react";
import Loader from "../components/Shared/Loader";
import HtmlTopicsGrid from "../components/Reference/HtmlTopicsGrid";

const HtmlReference = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network fetch/processing time as requested
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 1.2s loading screen

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader message="Loading HTML Guidelines..." />;
  }

  return (
    <div className="page-content">
      <HtmlTopicsGrid />
    </div>
  );
};

export default HtmlReference;
