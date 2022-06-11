import React from "react";
import MainNav from "../Nav/MainNav";
import Content from "./Content"
import { CssBaseline } from "@mui/material";

export default function MainLayout({ children, title }) {
	return (
		<React.Fragment>
			<CssBaseline />
			<MainNav title={title} />
			<Content children={children} />
		</React.Fragment>
	)
}
