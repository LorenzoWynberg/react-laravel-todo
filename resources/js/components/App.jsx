import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import user from "../Models/user";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/app/login'} element={<Login />}/>
				<Route element={<ProtectedRoutes user={user}/>}>
					<Route path={'/app/dashboard'} element={<Dashboard />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

const app = document.getElementById('app');
if (app) {
	ReactDOM.render(<App />, app);
}