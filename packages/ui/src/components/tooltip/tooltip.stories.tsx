import { Meta, StoryObj } from '@storybook/react';

import * as Tooltip from './tooltip';

type StoryProps = Tooltip.StyleProps;

const meta: Meta<typeof Tooltip.Root> = {
	title: 'Tooltip',
	component: Tooltip.Root,
};

type Story = StoryObj<StoryProps>;

const Template: Story = {
	render: ({ ...props }) => (
		<Tooltip.Provider>
			<Tooltip.Root {...props}>
				<Tooltip.Trigger className={'ui-text-foreground'}>Hover</Tooltip.Trigger>
				<Tooltip.Content title={'Pro tip'} {...props}>
					Et ceci est une description assez courte décrivant l’élément ciblé.
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	),
};

const MultipleTemplate: (props: StoryProps[], globals?: StoryProps) => Story = (
	props,
	globals,
) => ({
	render: (args) => (
		<Tooltip.Provider>
			<div className={'ui-flex ui-flex-col ui-gap-32'}>
				{props.map((props, i) => (
					<Tooltip.Root key={i} {...args} {...globals} {...props}>
						<Tooltip.Trigger className={'ui-text-foreground'}>Hover</Tooltip.Trigger>
						<Tooltip.Content title={'Pro tip'} {...args} {...globals} {...props}>
							Et ceci est une description assez courte décrivant l’élément ciblé.
						</Tooltip.Content>
					</Tooltip.Root>
				))}
			</div>
		</Tooltip.Provider>
	),
});

export const Default: Story = {
	...Template,
};

export const Left: Story = MultipleTemplate(
	[
		{
			align: 'end',
		},
		{
			align: 'center',
		},
		{
			align: 'start',
		},
	],
	{
		side: 'left',
		open: true,
	},
);

export const Right: Story = MultipleTemplate(
	[
		{
			align: 'end',
		},
		{
			align: 'center',
		},
		{
			align: 'start',
		},
	],
	{
		side: 'right',
		open: true,
	},
);

export const Top: Story = MultipleTemplate(
	[
		{
			align: 'end',
		},
		{
			align: 'center',
		},
		{
			align: 'start',
		},
	],
	{
		side: 'top',
		open: true,
	},
);

export const Bottom: Story = MultipleTemplate(
	[
		{
			align: 'end',
		},
		{
			align: 'center',
		},
		{
			align: 'start',
		},
	],
	{
		side: 'bottom',
		open: true,
	},
);

export default meta;
