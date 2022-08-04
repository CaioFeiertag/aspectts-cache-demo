import { Box, Card, Grid, List, ListItemText, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useState, useEffect } from "react";
import { CarModelApi } from "./api";

const carModelApi = new CarModelApi();

export const CarModels = () => {
	const [carModels, setCarModels] = useState<Record<string, string[]>>({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadCarModels();
	}, []);

	const loadCarModels = async () => {
		setLoading(true);
		const carModels = await carModelApi.getModels();
		setCarModels(carModels);
		setLoading(false);
	};

	const CarModels = () => {
		if (loading) {
			return <></>;
		}
		return (
			<Grid
				container
				spacing={2}
				gap={2}
				padding={5}
				justifyContent="center"
			>
				{Object.keys(carModels).map((make) => (
					<Card key={make}>
						<Typography
							variant="h4"
							sx={{ textTransform: "capitalize" }}
						>
							{make}
						</Typography>
						<List
							dense={true}
							sx={{ padding: "4px", width: "200px" }}
						>
							{carModels[make].map((model) => (
								<ListItemText key={model}>{model}</ListItemText>
							))}
						</List>
					</Card>
				))}
			</Grid>
		);
	};

	return (
		<Box sx={{ padding: "10px" }}>
			<LoadingButton
				variant="contained"
				onClick={() => loadCarModels()}
				loading={loading}
			>
				recarregar!
			</LoadingButton>
			<CarModels />
		</Box>
	);
};
