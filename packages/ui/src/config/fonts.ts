import { Unbounded } from 'next/font/google';
import localFont from 'next/font/local';

const fontHeading = Unbounded({
	variable: '--font-unbounded',
	subsets: ['latin-ext'],
});

const fontContent = localFont({
	src: '../fonts/mona-sans.woff2',
	variable: '--font-mona-sans',
});

export const fontClassNames = `${fontHeading.variable} ${fontContent.variable}`;

export { fontHeading, fontContent };
