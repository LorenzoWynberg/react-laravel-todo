import {
	Box,
	Button,
	TextField,
	Typography
} from "@mui/material";
import React from "react";
import user from "@models/User";
import { useNavigate } from "react-router-dom";

function Login() {

	const navigate = useNavigate()

	const handleSubmit = (event) => {

		event.preventDefault()
		const formData = new FormData(event.currentTarget);

		const loginCredentials = {
			email: formData.get('email'),
			password: formData.get('password')
		}

		window.axios.post('/api/login', loginCredentials).then((response) => {
			user.store(response.data)
			if (user.isLoggedIn()) {
				navigate('/app/dashboard')
			}
		})
	}

	return (
		<Box component={"form"} onSubmit={handleSubmit}>
			<Typography component={"h1"} variant={"h5"}>
				Login
			</Typography>
			<TextField
				margin="normal"
				required
				fullWidth
				id="email"
				label="E-mail"
				name="email"
				autoComplete="email"
				autoFocus
			/>
			<TextField
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
			/>
			<Button
				fullWidth
				variant={"outlined"}
				type={"submit"}
				sx={{ mt: 3, mb: 2 }}
			>
				Login
			</Button>
		</Box>
	)
}

export default Login;