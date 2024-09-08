import React from 'react';
import { Experiments } from 'static-content';

import { Mdx } from '@ui/components/mdx';
import { Text } from '@ui/components/typography';

import { Section } from '../section';

const labComponents = {};

type ExperimentContentProps = {
	content: Experiments['content'];
};

export const Documentation: React.FC<ExperimentContentProps> = ({ content }) => {
	return (
		<Section name={'Documentation'}>
			<Text size={'base'} contrast={3}>
				<Mdx components={labComponents} code={content} />
			</Text>
		</Section>
	);
};
