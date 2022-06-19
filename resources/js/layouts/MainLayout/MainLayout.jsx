import React from "react";
import MainNav from "../MainNav/MainNav";
import { CssBaseline } from "@mui/material";

export default function MainLayout({ children, title }) {
	return (
		<>
			<CssBaseline />
			<MainNav title={title} />
			{children}
		</>
	)
}
