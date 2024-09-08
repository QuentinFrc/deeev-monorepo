import React from 'react';

import { Grid } from './grid';
import { Header } from './header';

const LabsPage = () => {
	return (
		<>
			<Header
				title={'Le Lab'}
				description={"Des techniques modernes pour améliorer l'expérience utilisateur"}
			/>
			<Grid />
		</>
	);
};

export { LabsPage };
