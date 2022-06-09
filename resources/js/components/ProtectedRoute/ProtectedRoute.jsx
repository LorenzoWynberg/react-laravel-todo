import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute ({ user, children }) {
  if (!user.isLoggedIn()) {
    return <Navigate to="/app/login" replace />;
  }
  return children;
};

export default ProtectedRoute;