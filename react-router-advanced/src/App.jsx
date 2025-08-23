import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div>
        <h1>Advanced Routing Demo</h1>
        <nav>
          <Link to="/profile" style={{ marginRight: "10px" }}>
            Profile
          </Link>
          <Link to="/blog/123">Blog Example</Link>
        </nav>

        <Routes>
          {/* Nested Profile routes */}
          <Route path="/profile/*" element={<Profile />} />

          {/* Dynamic route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
