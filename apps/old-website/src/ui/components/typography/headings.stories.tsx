import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { HeadingProps as BaseHeadingProps, Headings } from './headings';

type HeadingProps = BaseHeadingProps & {
	level: keyof typeof Headings;
};

const Heading: React.FC<HeadingProps> = ({ level, ...props }) => {
	const Component = Headings[level];
	return <Component {...props} />;
};

const meta: Meta<typeof Heading> = {
	title: 'Heading',
	component: Heading,
	argTypes: {
		level: {
			options: Object.keys(Headings),
			control: { type: 'select' },
		},
	},
};

type Story = StoryObj<typeof Heading>;

const Template: Story = {
	render: (args) => <Heading {...args} />,
};

export const H1: Story = {
	...Template,
	args: {
		level: 'H1',
		children: 'Heading 1',
	},
};

export const H2: Story = {
	...Template,
	args: {
		level: 'H2',
		children: 'Heading 2',
	},
};

export const H3: Story = {
	...Template,
	args: {
		level: 'H3',
		children: 'Heading 3',
	},
};

export const H4: Story = {
	...Template,
	args: {
		level: 'H4',
		children: 'Heading 4',
	},
};

export const All: Story = {
	render: () => (
		<div className={'space-y-4'}>
			{(['H1', 'H2', 'H3', 'H4'] as const).map((level) => (
				<Heading key={level} level={level}>{`Heading ${level.slice(1)}`}</Heading>
			))}
		</div>
	),
};

export default meta;
