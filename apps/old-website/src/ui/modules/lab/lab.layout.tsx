import React from 'react';
import { Config } from '@/config';
import { BlogPosting, BreadcrumbList } from 'schema-dts';

import { createLabUrl, labUrl } from '@/lib/utils';
import { JsonLd } from '@ui/components/seo/json-ld';

import { getExperiment, LabProps } from './utils';

export const LabLayout: React.FC<React.PropsWithChildren<LabProps>> = ({
	children,
	slug,
}) => {
	const experiment = getExperiment(slug);

	const BlogSchema: BlogPosting = {
		'@type': 'BlogPosting',
		url: createLabUrl(experiment.slug),
		thumbnailUrl: createLabUrl(`${experiment.slug}/opengraph-image`),
		datePublished: experiment.date,
		author: experiment.author,
		description: experiment.description,
		isAccessibleForFree: true,
		publisher: Config.publisher,
	};

	const BreadCrumbSchema: BreadcrumbList = {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				item: {
					'@id': labUrl,
					name: 'Lab',
				},
			},
			{
				'@type': 'ListItem',
				position: 2,
				item: {
					'@id': createLabUrl(experiment.slug),
					name: experiment.title,
				},
			},
		],
	};

	return (
		<>
			{children}
			<JsonLd data={[BlogSchema, BreadCrumbSchema]} />
		</>
	);
};
