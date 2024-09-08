import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { legalFiles } from 'static-content';

import { Container } from '@repo/ui/container';
import { Mdx } from '@ui/components/mdx';
import { Text } from '@ui/components/typography';

type PageParams = {
	params: {
		slug: string;
	};
};
export const generateStaticParams = () => {
	return legalFiles.map((file) => ({
		slug: file.slug,
	}));
};

export const generateMetadata = ({ params }: PageParams): Metadata => {
	const document = legalFiles.find((file) => file.slug === params.slug);
	if (!document) notFound();
	return {
		title: document.title,
		description: document.description,
	};
};

export const dynamicParams = false;

export default function Page({ params }: PageParams) {
	const document = legalFiles.find((file) => file.slug === params.slug);
	if (!document) notFound();
	return (
		<Container className={'pb-32 pt-12 min-h-screen-80'} size={'lg'}>
			<Text contrast={2} className={'*:font-sans'}>
				<Mdx code={document.content} />
			</Text>
		</Container>
	);
}
