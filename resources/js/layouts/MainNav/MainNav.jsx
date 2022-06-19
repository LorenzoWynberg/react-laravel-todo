import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LogoutButton from "@components/auth/LogoutButton/LogoutButton";

export default function MainNav({ title }) {
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
				<LogoutButton />
			</Toolbar>
		</AppBar>
	)
}