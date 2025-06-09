import React from "react";
import { Router, Routes, Route } from "react-router";
import { createBrowserHistory } from "history";
import Dashboard from "./assets/pages/Dashboard"; // adjust path if needed

const history = createBrowserHistory();

const App = () => {
  return (
    <Router
      location={history.location}
      navigator={history}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Add more <Route /> as needed */}
      </Routes>
    </Router>
  );
};

export default App;
