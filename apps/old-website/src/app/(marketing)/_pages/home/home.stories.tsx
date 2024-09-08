import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HomePage } from './home';

const meta: Meta<typeof HomePage> = {
	title: 'Home',
	decorators: [
		(Story: StoryFn) => (
			<div className={'w-screen'}>
				<Story />
			</div>
		),
	],
};

type Story = StoryObj<typeof HomePage>;

const Template: Story = {
	render: () => <HomePage />,
};

export const Default: Story = {
	...Template,
};

export default meta;
