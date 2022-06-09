import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import user from "../Models/user";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/app/login'} element={<Login />}/>
				<Route
          path="/app/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

const app = document.getElementById('app');
if (app) {
	ReactDOM.render(<App />, app);
}