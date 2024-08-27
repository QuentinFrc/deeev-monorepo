import { Meta, StoryObj } from '@storybook/react';

import { Label } from './label';

const meta: Meta<typeof Label> = {
	title: 'Fields/Label',
	component: Label,
};

type Story = StoryObj<typeof Label>;

const Template: Story = {
	render: (args) => <Label {...args} />,
	args: {
		children: 'Label',
	},
};

export const Default: Story = {
	...Template,
	args: {
		...Template.args,
	},
};

export const WithIcon: Story = {
	...Template,
	args: {
		...Template.args,
		icon: 'Lightning',
	},
};

export const Disabled: Story = {
	...Template,
	args: {
		...Template.args,
		disabled: true,
	},
};

export const DisabledWithIcon: Story = {
	...Template,
	args: {
		...Template.args,
		icon: 'Lightning',
		disabled: true,
	},
};

export default meta;
