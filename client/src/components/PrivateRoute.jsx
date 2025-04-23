// src/components/PrivateRoute.jsx

import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../services/authService";

const PrivateRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
