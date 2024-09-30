import { Meta, StoryObj } from '@storybook/react';
import { cn } from '#utils';

import { Progress, ProgressProps } from './progress';

const meta: Meta<typeof Progress> = {
	title: 'Progress',
	component: Progress,
};

type Story = StoryObj<typeof Progress>;

const ProgressTemplate: Story = {
	render: (args) => (
		<div
			className={cn(
				'ui-flex ui-size-64 ui-items-center ui-justify-center',
				'[--percentage:66%]',
			)}>
			<Progress {...args} />
		</div>
	),
};

const MultipleProgressTemplate: (
	props: ProgressProps[],
	global: ProgressProps,
) => Story = (props, global) => ({
	render: () => (
		<div
			className={cn(
				'ui-flex ui-gap-4',
				global.orientation == 'vertical' ? 'ui-h-96' : 'ui-w-96 ui-flex-col',
			)}>
			{props.map((p, i) => (
				<Progress
					className={cn({ 'inline-block': p.orientation === 'vertical' })}
					key={i}
					{...p}
					{...global}
				/>
			))}
		</div>
	),
});

const HorizontalTemplate: Story = {
	...ProgressTemplate,
	args: {
		...ProgressTemplate.args,
		orientation: 'horizontal',
	},
};

const VerticalTemplate: Story = {
	...ProgressTemplate,
	args: {
		...ProgressTemplate.args,
		orientation: 'vertical',
	},
};

export const Horizontal: Story = {
	...HorizontalTemplate,
	args: {
		...HorizontalTemplate.args,
	},
};

export const HorizontalCustomMax: Story = {
	...HorizontalTemplate,
	args: {
		...HorizontalTemplate.args,
		max: 200,
	},
};

export const HorizontalCustomValue: Story = {
	...HorizontalTemplate,
	args: {
		...HorizontalTemplate.args,
		value: 60,
	},
};

export const HorizontalCustomMaxAndValue: Story = {
	...HorizontalTemplate,
	args: {
		...HorizontalTemplate.args,
		max: 200,
		value: 60,
	},
};

export const HorizontalUncontrolled: Story = {
	...HorizontalTemplate,
	args: {
		...HorizontalTemplate.args,
		uncontrolled: true,
	},
};

export const Vertical: Story = {
	...VerticalTemplate,
	args: {
		...VerticalTemplate.args,
	},
};

export const VerticalCustomMax: Story = {
	...VerticalTemplate,
	args: {
		...VerticalTemplate.args,
		max: 200,
	},
};

export const VerticalCustomValue: Story = {
	...VerticalTemplate,
	args: {
		...VerticalTemplate.args,
		value: 60,
	},
};

export const VerticalCustomMaxAndValue: Story = {
	...VerticalTemplate,
	args: {
		...VerticalTemplate.args,
		max: 200,
		value: 60,
	},
};

export const VerticalUncontrolled: Story = {
	...VerticalTemplate,
	args: {
		...VerticalTemplate.args,
		uncontrolled: true,
	},
};

const Values = [
	{ value: 0 },
	{ value: 10 },
	{ value: 20 },
	{ value: 30 },
	{ value: 40 },
	{ value: 50 },
	{ value: 60 },
	{ value: 70 },
	{ value: 80 },
	{ value: 90 },
	{ value: 100 },
];

export const HorizontalSteps: Story = MultipleProgressTemplate(Values, {
	orientation: 'horizontal',
});

export const VerticalSteps: Story = MultipleProgressTemplate(Values, {
	orientation: 'vertical',
});

export const WithLabelHorizontal: Story = MultipleProgressTemplate(Values, {
	orientation: 'horizontal',
	labelStart: '0%',
	labelEnd: '100%',
});

export const WithLabelVertical: Story = MultipleProgressTemplate(Values, {
	orientation: 'vertical',
	labelStart: '0%',
	labelEnd: '100%',
});

export default meta;
