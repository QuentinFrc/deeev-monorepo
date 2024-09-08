import { experiments, Experiments } from 'static-content';

import { LayoutProps, PageProps } from '@/lib/utils/page';

export type LabProps = Pick<Experiments, 'slug'>;
export type LabPageProps = PageProps<LabProps>;
export type LabLayoutProps = LayoutProps<LabProps>;

export const getExperiment = (slug: Experiments['slug']) => {
	const experiment = experiments.find((experiment) => experiment.slug === slug);
	if (!experiment) {
		throw new Error(`Experiment with slug ${slug} not found`);
	}
	return experiment;
};

export const doesExperimentExists = (slug: string) => {
	return experiments.some((experiment) => experiment.slug === slug);
};

export const generateAllParams = () =>
	experiments.map((experiment) => ({
		slug: experiment.slug,
	}));

export const getBackground = async () => {
	const response = await fetch('./public/bg-images/16x8.png').then((res) =>
		res.arrayBuffer(),
	);
	console.log(response);
	return response;
};
