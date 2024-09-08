import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Hero } from './hero';

const meta: Meta<typeof Hero> = {
	title: 'Hero',
	decorators: [
		(Story: StoryFn) => (
			<div className={'w-screen'}>
				<Story />
			</div>
		),
	],
};

type Story = StoryObj<typeof Hero>;

const Template: Story = {
	render: (args) => <Hero {...args} />,
};

export const Default: Story = {
	...Template,
};

export const Centered: Story = {
	...Template,
	args: {
		alignment: 'center',
	},
};

export default meta;
