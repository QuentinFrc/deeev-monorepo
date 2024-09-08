import { Meta, StoryObj } from '@storybook/react';

import { SimpleButton } from './simple-button';

const meta: Meta<typeof SimpleButton> = {
	component: SimpleButton,
	title: 'Simple Button',
};

type Story = StoryObj<typeof SimpleButton>;

const ButtonTemplate: Story = {
	render: (args) => <SimpleButton {...args} />,
	args: {
		label: 'Button',
	},
};

export const Gradient: Story = {
	...ButtonTemplate,
	args: {
		...ButtonTemplate.args,
		variant: 'gradient',
	},
};
export const Secondary: Story = {
	...ButtonTemplate,
	args: {
		...ButtonTemplate.args,
		variant: 'secondary',
	},
};

export const Outline: Story = {
	...ButtonTemplate,
	args: {
		...ButtonTemplate.args,
		variant: 'outline',
	},
};

export const Ghost: Story = {
	...ButtonTemplate,
	args: {
		...ButtonTemplate.args,
		variant: 'ghost',
	},
};

export const GhostIcon: Story = {
	...ButtonTemplate,
	args: {
		...ButtonTemplate.args,
		variant: 'ghost',
		icon: 'Mail',
	},
};

export default meta;
