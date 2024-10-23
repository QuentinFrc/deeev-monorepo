import { Meta, StoryObj } from '@storybook/react';

import { SparklesCore, type ParticlesProps } from './sparkles';

const meta: Meta<typeof SparklesCore> = {
	title: 'Sparkles',
	component: SparklesCore,
};

type Story = StoryObj<typeof SparklesCore>;

const Template: Story = {
	render: (args: ParticlesProps) => <SparklesCore {...args} />,
};

export const Default: Story = Template;

const directions = ['top', 'bottom', 'left', 'right'];
export const WithDirection: Story = {
	...Template,
	args: {
		direction: 'top',
	},
	argTypes: {
		direction: {
			options: directions,
			control: {
				type: 'select',
			},
		},
		straight: {
			control: {
				type: 'boolean',
			},
			defaultValue: false,
		},
	},
};

export default meta;
