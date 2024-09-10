import type { Config } from 'tailwindcss';

import baseConfig from '@repo/ui/tailwind';

const config = {
	presets: [baseConfig],
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
} satisfies Config;

export default config;
