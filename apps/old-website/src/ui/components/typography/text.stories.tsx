import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps, textStyles } from './text';

const meta: Meta<typeof Text> = {
	title: 'Text',
	component: Text,
};

type Story = StoryObj<typeof Text>;

const TextSizes = Object.keys(textStyles.variants.size);
const TextContrasts = Object.keys(textStyles.variants.contrast);

const Template: Story = {
	render: (args) => (
		<Text {...args}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque
		</Text>
	),
	argTypes: {
		size: {
			options: TextSizes,
			defaultValue: 'base',
			control: { type: 'select' },
		},
		contrast: {
			options: TextContrasts,
			defaultValue: '1',
			control: { type: 'select' },
		},
	},
};

const MultipleTemplates = (allProps: TextProps[]): Story => ({
	render: (globals) => (
		<>
			{allProps.map((props, i) => (
				<Text key={i} {...globals} {...props} />
			))}
		</>
	),
});

export const Default: Story = {
	...Template,
};

export const Sizes = MultipleTemplates([
	{ size: 'xs', children: 'Extra small: XS' },
	{ size: 'sm', children: 'Small: SM' },
	{ size: 'base', children: 'Base: Base' },
	{ size: 'lg', children: 'Large: LG' },
]);

export const Contrast1: Story = {
	...Template,
	args: { contrast: 1 },
};

export const Contrast2: Story = {
	...Template,
	args: { contrast: 2 },
};

export const Contrast3: Story = {
	...Template,
	args: { contrast: 3 },
};

export const Contrast4: Story = {
	...Template,
	args: { contrast: 4 },
};

export const Contrasts = MultipleTemplates([
	{ contrast: 1, children: 'Contrast - 1: Top level content' },
	{ contrast: 2, children: 'Contrast - 2: High level content' },
	{ contrast: 3, children: 'Contrast - 3: Mid level content' },
	{ contrast: 4, children: 'Contrast - 4: Low level content' },
]);

export default meta;
