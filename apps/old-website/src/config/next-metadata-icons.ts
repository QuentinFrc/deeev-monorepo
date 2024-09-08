import { Metadata, MetadataRoute } from 'next';

import ChromeIcon96 from '../../public/favicon/android-chrome-96x96.png';
import ChromeIcon144 from '../../public/favicon/android-chrome-144x144.png';
import AppleTouchIcon from '../../public/favicon/apple-touch-icon.png';
import Favicon16 from '../../public/favicon/favicon-16x16.png';
import Favicon32 from '../../public/favicon/favicon-32x32.png';
import Favicon from '../../public/favicon/favicon.ico';
import SafariPinnedTab from '../../public/favicon/safari-pinned-tab.svg';

export const Favicons: Metadata['icons'] = {
	icon: Favicon.src,
	apple: AppleTouchIcon.src,
	other: [
		{
			sizes: '16x16',
			type: 'image/png',
			url: Favicon16.src,
		},
		{
			sizes: '32x32',
			type: 'image/png',
			url: Favicon32.src,
		},
		{
			sizes: '114x114',
			rel: 'mask-icon',
			color: '#000',
			url: SafariPinnedTab.src,
		},
	],
} as const;

export const ManifestIcons: MetadataRoute.Manifest['icons'] = [
	{
		src: ChromeIcon96.src,
		sizes: '96x96',
		type: 'image/png',
	},
	{
		src: ChromeIcon144.src,
		sizes: '144x144',
		type: 'image/png',
	},
] as const;
