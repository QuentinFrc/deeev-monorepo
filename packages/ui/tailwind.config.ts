import type { Config } from 'tailwindcss';
import * as twAnimate from 'tailwindcss-animate';

import theme from './src/styles/theme';

const config = {
	corePlugins: {
		preflight: false,
	},
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: 'ui-',
	theme: theme,
	plugins: [twAnimate],
} satisfies Config;

export default config;
