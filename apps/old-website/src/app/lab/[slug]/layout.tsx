import React from 'react';
import { notFound } from 'next/navigation';
import { doesExperimentExists, LabLayout, LabLayoutProps } from '@ui/modules/lab';

export const dynamicParams = false;
export default function Layout({ children, params }: LabLayoutProps) {
	const { slug } = params;
	if (!doesExperimentExists(slug)) return notFound();

	return <LabLayout slug={slug}>{children}</LabLayout>;
}
