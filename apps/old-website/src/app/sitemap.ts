import { MetadataRoute } from 'next';
import { experiments, legalFiles } from 'static-content';

import { APP_URL } from '@/config/env';
import { createLabUrl, createLegalsUrl, labUrl } from '@/lib/utils';

const labSitemap = [
	{
		url: labUrl,
		lastModified: new Date().toISOString(),
		changeFrequency: 'yearly',
	},
	...experiments.map(
		(exp) =>
			({
				url: createLabUrl(exp.slug),
				lastModified: exp.date,
				changeFrequency: 'yearly',
			}) as const,
	),
] as const;

const marketingSitemap = [
	{
		url: APP_URL,
		changeFrequency: 'yearly',
		lastModified: new Date().toISOString(),
		priority: 1,
	},
] as const;

const legalsSitemap = legalFiles.map(
	(file) =>
		({
			url: createLegalsUrl(file.slug),
			lastModified: new Date().toISOString(),
			changeFrequency: 'yearly',
		}) as const,
);

export default function sitemap(): MetadataRoute.Sitemap {
	return [...marketingSitemap, ...labSitemap, ...legalsSitemap];
}
