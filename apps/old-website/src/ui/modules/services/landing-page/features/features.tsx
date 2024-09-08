import React from 'react';

import { Container } from '@repo/ui/container';
import * as Section from '@ui/components/section';

import { FeaturesGrid } from './grid';

export const LandingPageFeatures = () => (
	<Section.Root>
		<Container size={'xl'}>
			<Section.Head alignement={'center'}>
				<Section.Heading>Notre approche</Section.Heading>
				<Section.SubHeading>
					Nous mettons tout en oeuvre pour vous offrir la meilleure expérience possible.
				</Section.SubHeading>
			</Section.Head>
			<FeaturesGrid />
		</Container>
	</Section.Root>
);
