import { Metadata, MetadataRoute, Viewport } from 'next';

import { Config } from '@/config/config';

import { APP_URL } from './env';
import { Favicons, ManifestIcons } from './next-metadata-icons';

/**
 * This file export Nextjs specific metadata types, do not modify variable names
 * File is imported in Root Layout
 * */
export const viewport: Viewport = {
	themeColor: 'black',
	colorScheme: 'dark',
};

export const metadata: Metadata = {
	metadataBase: new URL(APP_URL),
	applicationName: Config.short_name,
	title: { default: Config.name, template: `%s | ${Config.short_name}` },
	description: Config.long_description,
	authors: Config.authors,
	creator: Config.creator,
	publisher: Config.publisher,
	generator: 'Next.js',
	icons: Favicons,
	keywords: Config.keywords,
	robots: { index: true, follow: true, 'max-snippet': -1 },
};

export const manifest: MetadataRoute.Manifest = {
	name: Config.name,
	short_name: Config.short_name,
	description: Config.long_description || '',
	lang: 'fr',
	start_url: '/',
	display: 'standalone',
	background_color: '#000',
	theme_color: '#fff',
	icons: ManifestIcons,
};
