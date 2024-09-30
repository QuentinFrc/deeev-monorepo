import { Meta, StoryObj } from '@storybook/react';

import { Switch, SwitchProps } from './switch';

const meta: Meta<typeof Switch> = {
	title: 'Fields/Switch',
};
type Story = StoryObj<typeof Switch>;

const TemplateMultiple: (props: SwitchProps[]) => Story = (props) => ({
	render: (args) => (
		<div className="ui-flex ui-space-x-4">
			{props.map((prop, i) => (
				<Switch key={i} {...args} {...prop} />
			))}
		</div>
	),
});

export const All: Story = {
	...TemplateMultiple([
		{ disabled: false, size: 'sm' },
		{ disabled: true, size: 'sm' },
		{ size: 'md', disabled: false },
		{
			size: 'md',
			disabled: true,
		},
	]),
};

export const Unchecked: Story = {
	...TemplateMultiple([{ disabled: false }, { disabled: true }]),
	args: {
		checked: false,
	},
};

export const Checked: Story = {
	...TemplateMultiple([{ disabled: false }, { disabled: true }]),
	args: {
		checked: true,
	},
};

export default meta;
