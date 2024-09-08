import { Metadata } from 'next';

export const metadata = {
	title: {
		default: 'Deeev Lab',
		template: '%s | Deeev Lab',
	},
	description: 'Deeev Lab, où les expériences se déroulent.',
	keywords: ['lab', 'experiments', 'code snippet', 'deeev', 'ux tips', 'ui tips'],
} satisfies Metadata;
