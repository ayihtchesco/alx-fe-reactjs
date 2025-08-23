import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

import React from "react";

function App() {
  return (
    <Router>
      <div>
        <h1>Advanced Routing Demo</h1>
        <nav>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
