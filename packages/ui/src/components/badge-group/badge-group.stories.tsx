import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '#components/icons';

import * as BadgePrimitives from '../badge';
import * as BadgeGroupPrimitives from './badge-group';
import { BadgeGroupRootProps } from './badge-group';

type BadgeGroupProps = BadgeGroupRootProps & {
	label: string;
	iconLabel?: 'left' | 'right' | false;
	content: string;
	iconContent?: boolean;
};
const BadgeGroup: React.FC<BadgeGroupProps> = ({
	label,
	iconLabel,
	content,
	iconContent,
	...props
}) => (
	<BadgeGroupPrimitives.Root {...props}>
		<BadgePrimitives.Root {...props}>
			{iconLabel && iconLabel === 'left' && <Icon i={'AlertCircle'} />}
			<BadgePrimitives.Label>{label}</BadgePrimitives.Label>
			{iconLabel && iconLabel === 'right' && <Icon i={'Placeholder'} />}
		</BadgePrimitives.Root>
		<BadgeGroupPrimitives.Content>
			{content}
			{iconContent && <Icon i={'ArrowRight'} />}
		</BadgeGroupPrimitives.Content>
	</BadgeGroupPrimitives.Root>
);

const meta: Meta<typeof BadgeGroup> = {
	title: 'Badge Group',
	component: BadgeGroup,
};

export default meta;

type BadgeGroupStory = StoryObj<typeof BadgeGroup>;

const Template: BadgeGroupStory = {
	render: (args) => <BadgeGroup {...args} />,
};

const defaultBadgeGroupProps: BadgeGroupProps = {
	label: 'Badge',
	content: 'Content',
};

const MultipleTemplate = (
	props: Partial<BadgeGroupProps>[],
	communProps = defaultBadgeGroupProps,
): BadgeGroupStory => ({
	render: () => (
		<div className={'flex flex-wrap gap-4 p-4'}>
			{props.map((prop, index) => (
				<BadgeGroup key={index} {...communProps} {...prop} />
			))}
		</div>
	),
});

export const Default: BadgeGroupStory = {
	...Template,
	args: {
		label: 'Badge',
		content: 'Content',
	},
};

type BadgeVariant = NonNullable<BadgeGroupProps['variant']>;

const variantSpec = (variant: BadgeVariant): Partial<BadgeGroupProps>[] =>
	[
		{ variant: variant },
		{
			iconLabel: 'left',
			variant: variant,
		},
		{
			iconLabel: 'right',
			variant: variant,
		},
		{
			iconContent: true,
			variant: variant,
		},
		{
			iconLabel: 'left',
			iconContent: true,
			variant: variant,
		},
		{
			iconLabel: 'right',
			iconContent: true,
			variant: variant,
		},
	] as const;

export const Green: BadgeGroupStory = {
	...MultipleTemplate(variantSpec('green'), {
		label: 'Heads up!',
		content: 'Follow us on instagram: @deeev.fr',
	}),
};

export const Cyan: BadgeGroupStory = {
	...MultipleTemplate(variantSpec('cyan'), {
		label: 'Heads up!',
		content: 'Follow us on instagram: @deeev.fr',
	}),
};

export const Fuchsia: BadgeGroupStory = {
	...MultipleTemplate(variantSpec('fuchsia'), {
		label: 'Heads up!',
		content: 'Follow us on instagram: @deeev.fr',
	}),
};

export const Gradient: BadgeGroupStory = {
	...MultipleTemplate(variantSpec('gradient'), {
		label: 'Heads up!',
		content: 'Follow us on instagram: @deeev.fr',
	}),
};

export const Neutral: BadgeGroupStory = {
	...MultipleTemplate(variantSpec('neutral'), {
		label: 'Heads up!',
		content: 'Follow us on instagram: @deeev.fr',
	}),
};

const variants = ['green', 'cyan', 'fuchsia', 'gradient', 'neutral'] as const;
export const AllVariants: BadgeGroupStory = {
	...MultipleTemplate(variants.flatMap(variantSpec), {
		label: 'Heads up!',
		content: 'Follow us on instagram: @deeev.fr',
	}),
};
