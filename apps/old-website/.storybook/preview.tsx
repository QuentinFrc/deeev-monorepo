import React from 'react';
import { Preview } from '@storybook/react';

import '@/styles/globals.css';
import '@/styles/storybook.css';

import { fontClassNames } from '@/config/font';
import { cn } from '@/lib/utils';
import { TailwindIndicator } from '@ui/components/tw-indicator';
import { Providers } from '@/app/_providers/providers';

import { spreadNextFont } from './spread-next-font';
import { useTheme } from './use-theme';

export const globalTypes = {
	theme: {
		name: 'Toggle theme',
		description: 'Global theme for components',
		defaultValue: 'dark',
		toolbar: {
			icon: 'circlehollow',
			items: ['light', 'dark'],
			showName: true,
			dynamicTitle: true,
		},
	},
};

let preview: Preview = {
	parameters: {
		layout: 'centered',
		actions: { argTypesRegex: '^on[A-Z].*' },
	},
	decorators: [
		useTheme,
		spreadNextFont,
		(Story) => (
			<Providers>
				<main className={cn('font-sans max-w-screen', fontClassNames)}>
					<Story />
					<TailwindIndicator />
				</main>
			</Providers>
		),
	],
};

export default preview;
