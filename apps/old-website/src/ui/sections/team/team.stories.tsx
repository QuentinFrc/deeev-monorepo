import { Meta, StoryObj } from '@storybook/react';

import { Team } from './team';

const meta: Meta<typeof Team> = {
	title: 'Team',
	component: Team,
};

type Story = StoryObj<typeof Team>;

const Template: Story = {
	render: () => <Team />,
};

export const Default: Story = {
	...Template,
};

export default meta;
