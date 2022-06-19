import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import user from "@models/User";
import Login from "@pages/Login/Login";
import Dashboard from "@pages/Dashboard/Dashboard";
import ProtectedRoutes from "@routes/ProtectedRoutes/ProtectedRoutes";

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/app/login'} element={<Login />} />
				<Route element={<ProtectedRoutes user={user} />}>
					<Route path={'/app/dashboard'} element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Main;