import { Config } from 'tailwindcss';
import baseConfig from '#tailwind/config';

const config = {
	presets: [baseConfig],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: 'ui-',
} satisfies Config;

export default config;
