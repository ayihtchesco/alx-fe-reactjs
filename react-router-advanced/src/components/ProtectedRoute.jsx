import { Navigate } from "react-router-dom";

// simulate login
const isAuthenticated = false; // toggle this to true/false for testing

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
