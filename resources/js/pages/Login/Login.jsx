import React from "react";
import { Box, Container } from "@mui/material";
import MainLayout from "@layouts/MainLayout/MainLayout";
import LoginForm from "@components/auth/LoginForm/LoginForm"

function Login() {
	return (
		<MainLayout title={"Log In"}>
			<Container maxWidth={"xs"}>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<LoginForm />
				</Box>
			</Container>
		</MainLayout>
	)
}

export default Login;