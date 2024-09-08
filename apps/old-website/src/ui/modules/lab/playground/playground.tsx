import React from 'react';
import { Playgrounds } from '@ui/modules/labs/_experiments';
import { Experiments } from 'static-content';

import { Section } from '../section';

type ExperimentLabProps = {
	slug: Experiments['slug'];
};

export const Playground: React.FC<ExperimentLabProps> = ({ slug }) => {
	const Playground = Playgrounds[slug];
	return (
		<Section name={'Playground'}>
			<div className="rounded-lg border bg-card p-8 md:p-12 lg:p-24">
				<Playground />
			</div>
		</Section>
	);
};
