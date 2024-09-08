import baseConfig from '#tailwind/config';
import type { Config } from 'tailwindcss';

const config = {
	presets: [baseConfig],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: 'ui-',
} satisfies Config;

export default config;
