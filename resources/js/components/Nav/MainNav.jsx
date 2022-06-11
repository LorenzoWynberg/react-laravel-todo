import React from "react";
import user from "../../Models/user";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Button,
	AppBar,
	Toolbar,
	Typography
} from "@mui/material";

export default function MainNav({ title }) {
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
		<AppBar position={"static"}>
			<Toolbar>
				<Typography
					variant={"h6"}
					component={"div"}
					sx={{ flexGrow: 1 }}
				>
					{title}
				</Typography>
				<Box component={"form"} onSubmit={logout}>
					<Button color={'inherit'} type={"submit"}>
						Logout
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
}