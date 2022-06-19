import React from "react";
import user from "@models/User";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LogoutButton({ title }) {
	const navigate = useNavigate()

	const logout = (e) => {
		e.preventDefault()
		window.axios.post('/api/logout')
			.then(() => {/* wait for back end to log out */ })
			.catch((error) => console.log(error))
			.then(() => {
				user.logout()
				navigate('/app/login')
			});
	}

	return (
		<Box component={"form"} onSubmit={logout}>
			<Button color={'inherit'} type={"submit"}>
				Logout
			</Button>
		</Box>
	)
}