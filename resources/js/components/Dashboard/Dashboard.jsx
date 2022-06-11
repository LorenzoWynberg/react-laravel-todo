import React from "react";
import user from "../../Models/user";
import { Container, Grid, Typography } from "@mui/material";
import MainLayout from "../Layouts/MainLayout";

function Dashboard() {
	return (
		<MainLayout title={"Dashboard"}>
			<Grid container justifyContent={"center"}>
				<Grid item md={12}>
					<Typography variant={"h5"}>
						Hello {user.name}, you're logged in!
					</Typography>
				</Grid>
			</Grid>
		</MainLayout>
	)
}

export default Dashboard;