import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
	doesExperimentExists,
	generateAllParams,
	LabMetadata,
	LabPage,
	LabPageProps,
} from '@ui/modules/lab';

export const dynamicParams = false;

export const generateStaticParams = generateAllParams;

export const generateMetadata = ({ params }: LabPageProps): Metadata => {
	const { slug } = params;
	const experiment = doesExperimentExists(slug);
	if (!experiment) notFound();
	return LabMetadata(slug);
};
export default async function Page({ params }: LabPageProps) {
	const { slug } = params;
	const experiment = doesExperimentExists(slug);
	if (!experiment) notFound();
	return <LabPage slug={slug} />;
}
