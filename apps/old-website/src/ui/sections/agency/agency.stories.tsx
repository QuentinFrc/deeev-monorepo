import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Agency } from './agency';

const meta: Meta<typeof Agency> = {
	title: 'Agency',
	decorators: [
		(Story: StoryFn) => (
			<div className={'w-screen'}>
				<Story />
			</div>
		),
	],
};

type Story = StoryObj<typeof Agency>;

const Template: Story = {
	render: () => <Agency />,
};

export const Default: Story = {
	...Template,
};

export default meta;
