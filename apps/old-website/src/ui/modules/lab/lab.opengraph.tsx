import { promises as fs } from 'fs';
import React from 'react';
import { ImageResponse } from 'next/og';

import { cn } from '@/lib/utils';

import { getExperiment, LabProps } from './utils';

export type LabGraphImageProps = {
	title: string;
	description: string;
	keywords: string[];
	bgBase64: string;
};

const LabGraphImage: React.FC<LabGraphImageProps> = ({
	title,
	description,
	keywords,
	bgBase64,
}) => {
	return (
		<div
			style={{
				position: 'relative',
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'black',
			}}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				width={'100%'}
				height={'100%'}
				src={`data:image/png;base64,${bgBase64}`}
				alt={'Background image'}
				style={{ position: 'absolute', inset: 0, opacity: 0.5 }}
			/>
			<div tw="flex flex-col items-start justify-center p-4 text-white font-sans">
				<h1 tw={cn('mb-0 text-6xl font-semibold leading-normal')}>{title}</h1>
				<p tw={'text-gray-300 text-xl mt-0'}>{description}</p>
				<div tw={'flex items-center'}>
					{keywords.map((w) => (
						<span
							key={w}
							tw={
								'ml-3 first:ml-0 text-gray-400 text-base border border-gray-500 rounded px-2 py-0.75'
							}>
							{w}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

const size = {
	width: 1200,
	height: 630,
} as const;

const loadLocalImage = async () => {
	const imageData = await fs.readFile('public/bg-images/16x8.png');
	return imageData.toString('base64');
};

export const GraphImage = async ({ slug }: LabProps) => {
	const experiment = getExperiment(slug);
	const bgBase64 = await loadLocalImage();
	return new ImageResponse(<LabGraphImage {...experiment} bgBase64={bgBase64} />, {
		...size,
	});
};
