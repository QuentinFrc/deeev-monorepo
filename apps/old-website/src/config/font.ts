import { Fira_Code } from 'next/font/google';
import localFont from 'next/font/local';

const fontHeading = localFont({
	src: [
		{
			path: '../../public/fonts/unbounded-regular.woff2',
			weight: '400',
		},
		{
			path: '../../public/fonts/unbounded-bold.woff2',
			weight: '700',
		},
	],
	variable: '--font-unbounded',
});

/*const fontMainHeading = Syne({
	variable: '--font-syne',
	subsets: ['latin-ext'],
});*/

const fontContent = localFont({
	src: '../../public/fonts/mona-sans.woff2',
	variable: '--font-mona-sans',
});

const fontMono = Fira_Code({
	variable: '--font-mono',
	subsets: ['latin-ext'],
});

export const fontClassNames = `${fontHeading.variable} ${fontContent.variable} ${fontMono.variable}`;

export { fontHeading, fontContent, fontMono };
