import type { Preview } from '@storybook/react';

import '../src/styles/globals.css';
import '../src/styles/storybook.css';

import { fontClassNames } from '../src/config/fonts';
import { cn } from '../src/utils';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<main className={cn('ui-font-sans ui-max-w-screen', fontClassNames)}>
				<Story />
			</main>
		),
	],
};

export default preview;
