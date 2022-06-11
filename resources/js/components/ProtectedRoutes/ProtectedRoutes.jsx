import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user }) => {
	return user.isLoggedIn() ? <Outlet /> : <Navigate to="/app/login" replace />;
};

export default ProtectedRoutes;