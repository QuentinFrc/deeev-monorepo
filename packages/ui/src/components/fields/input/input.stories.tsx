import { Meta, StoryObj } from '@storybook/react';

import { Label, LabelProps } from '../label';
import { Input, InputProps } from './input';

const meta: Meta<typeof Input> = {
	title: 'Fields/Input',
	component: Input,
};

type Story = StoryObj<{
	labelProps: LabelProps;
	inputProps: InputProps;
}>;

const Template: Story = {
	render: ({ inputProps, labelProps }) => (
		<div className={'space-y-2'}>
			<Label {...labelProps} />
			<Input {...inputProps} />
		</div>
	),
};

export const Default: Story = {
	...Template,
	args: {
		inputProps: {
			id: 'input-el',
			placeholder: 'sebastien.cuvellier@deeev.fr',
			className: 'w-64',
		},
		labelProps: { htmlFor: 'input-el', children: 'Email', icon: 'Mail' },
	},
};

export const Email: Story = Default;

export const Disabled: Story = {
	...Template,
	args: {
		inputProps: {
			id: 'input-el',
			placeholder: 'Disabled input',
			disabled: true,
			className: 'w-64',
		},
		labelProps: { htmlFor: 'input-el', children: 'Email', icon: 'Mail' },
	},
};

export const Number: Story = {
	...Template,
	args: {
		inputProps: {
			id: 'input-el',
			placeholder: 'Input type Number',
			type: 'number',
			className: 'w-64',
		},
		labelProps: { htmlFor: 'input-el', children: 'Number', icon: 'Placeholder' },
	},
};

export const File: Story = {
	...Template,
	args: {
		inputProps: {
			id: 'input-el',
			placeholder: 'Input type File',
			type: 'file',
			className: 'w-96',
		},
		labelProps: { htmlFor: 'input-el', children: 'File', icon: 'FileLock' },
	},
};

export const WithValue: Story = {
	...Template,
	args: {
		inputProps: {
			placeholder: 'Email',
			value: 'sebastien@cuvellier.fr',
			className: 'w-64',
		},
		labelProps: { htmlFor: 'input-el', children: 'Email', icon: 'Mail' },
	},
};

export const WithValueDisabled: Story = {
	...Template,
	args: {
		inputProps: {
			placeholder: 'Email',
			value: 'sebastien@cuvellier.fr',
			className: 'w-64',
			disabled: true,
		},
		labelProps: {
			htmlFor: 'input-el',
			children: 'Email',
			icon: 'Mail',
			disabled: true,
		},
	},
};

export const WithLabelDisabled: Story = {
	...Template,
	args: {
		inputProps: {
			placeholder: 'Email',
			value: 'sebastien@cuvellier.fr',
			className: 'w-64',
			disabled: true,
		},
		labelProps: {
			htmlFor: 'input-el',
			children: 'Email',
			icon: 'Mail',
			disabled: true,
		},
	},
};

export default meta;
