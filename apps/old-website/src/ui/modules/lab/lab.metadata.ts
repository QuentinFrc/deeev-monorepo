import { Metadata } from 'next';

import { getExperiment, LabProps } from './utils';

export const LabMetadata = (slug: LabProps['slug']): Metadata => {
	const experiment = getExperiment(slug);
	return {
		title: experiment.title,
		description: experiment.description,
		keywords: experiment.keywords,
		authors: { name: experiment.author },
		openGraph: {
			images: `/lab/${experiment.slug}/og.png`,
		},
	};
};
