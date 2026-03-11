import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import HtmlReference from "./pages/HtmlReference";
import SearchResults from "./pages/SearchResults";
import LandingPage from "./pages/LandingPage";
import ComingSoon from "./pages/ComingSoon";
import LessonPage from "./pages/LessonPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected/Main Dashboard App */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="html" element={<HtmlReference />} />
          <Route path="html/:topicId" element={<LessonPage />} />
          <Route path="css3" element={<ComingSoon techId="css3" />} />
          <Route path="js" element={<ComingSoon techId="js" />} />
          <Route path="react" element={<ComingSoon techId="react" />} />
          <Route path="tailwind" element={<ComingSoon techId="tailwind" />} />
          <Route path="search" element={<SearchResults />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
