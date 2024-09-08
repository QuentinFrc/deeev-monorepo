import type { StorybookConfig } from '@storybook/nextjs';

const storyDirs = [
	{
		// 👇 Sets the directory containing your stories
		directory: '../src/ui/components-core',
		// 👇 Storybook will load all files that match this glob
		files: '**/*.stories.*',
		// 👇 Used when generating automatic titles for your stories
		titlePrefix: 'Design System/Core Components/',
	},
	{
		// 👇 Sets the directory containing your stories
		directory: '../src/ui/components',
		// 👇 Storybook will load all files that match this glob
		files: '**/*.stories.*',
		// 👇 Used when generating automatic titles for your stories
		titlePrefix: 'Design System/Components/',
	},
	{
		// 👇 Sets the directory containing your stories
		directory: '../src/ui/pages',
		// 👇 Storybook will load all files that match this glob
		files: '**/*.stories.*',
		// 👇 Used when generating automatic titles for your stories
		titlePrefix: 'Design System/Pages',
	},
	{
		// 👇 Sets the directory containing your stories
		directory: '../src/ui/sections',
		// 👇 Storybook will load all files that match this glob
		files: '**/*.stories.*',
		// 👇 Used when generating automatic titles for your stories
		titlePrefix: 'Design System/Sections',
	},
	{
		directory: '../src/ui/assets',
		files: '**/*.stories.*',
		titlePrefix: 'Design System/Assets',
	},
	{
		directory: '../src/ui/modules',
		files: '**/*.stories.*',
		titlePrefix: 'Design System/Modules',
	},
];

const config: StorybookConfig = {
	stories: storyDirs,
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-storysource',
		'@storybook/addon-designs',
	],
	framework: '@storybook/nextjs',
	staticDirs: ['../public', { from: '../public/fonts', to: '/public/fonts' }],
	webpack(baseConfig) {
		baseConfig.resolve = {
			...(baseConfig.resolve ?? {}),
			alias: {
				...(baseConfig.resolve?.alias ?? {}),
				'@opentelemetry/api': 'next/dist/compiled/@opentelemetry/api',
			},
		};
		return baseConfig;
	},
	typescript: {
		reactDocgen: false,
	},
};
export default config;
