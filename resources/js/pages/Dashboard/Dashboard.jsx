import React from "react";
import user from "@models/User";
import MainLayout from "@layouts/MainLayout/MainLayout";
import { Grid, Container, Box, Typography } from "@mui/material";

function Dashboard() {
	return (
		<MainLayout title={"Dashboard"}>
			<Container>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						width: '100%',
						height: '100%',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Grid container justifyContent={"center"}>
						<Grid item md={12}>
							<Typography variant={"h5"}>
								Hello {user.name}, you're logged in!
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</MainLayout>
	)
}

export default Dashboard;