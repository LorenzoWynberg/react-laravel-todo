import React from "react";
import {
	Paper,
	Container,
	Box,
} from "@mui/material";

export default function Content({ children }) {
	return (
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
				<Paper sx={{
					width: '100%',
					padding: 2
				}}>
					{children}
				</Paper>
			</Box>
		</Container>
	)
}