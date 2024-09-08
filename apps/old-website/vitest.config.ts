import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@ui': path.resolve(__dirname, './src/ui'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['/src/tests/__mocks__/index.ts'],
		coverage: {
			reporter: ['text', 'json', 'html'],
			exclude: [
				'out/',
				'.next/',
				'**/**.stories.*',
				'**/.{lintstaged,lighthouse}rc.js',
				'**/{tailwind,postcss,velite,next}.config.*',
				'**/next-env.d.ts',
				'.storybook',
			],
			enabled: true,
		},
	},
});
