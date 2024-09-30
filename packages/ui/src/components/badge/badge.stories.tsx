import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '#components/icons';

import * as BadgePrimitives from './badge';
import { BadgeRootProps } from './badge';

type BadgeProps = {
	label: string;
	icon?: 'left' | 'right' | false;
} & BadgeRootProps;

const Badge: React.FC<BadgeProps> = ({ label, icon, ...props }) => (
	<BadgePrimitives.Root {...props}>
		{icon && icon === 'left' && <Icon i={'ArrowLeft'} size={'md'} />}
		<BadgePrimitives.Label>{label}</BadgePrimitives.Label>
		{icon && icon === 'right' && <Icon i={'ArrowRight'} size={'md'} />}
	</BadgePrimitives.Root>
);

const meta: Meta<typeof Badge> = {
	title: 'Badge',
	component: Badge,
};

type BadgeStory = StoryObj<typeof Badge>;

const RootProps: BadgeProps = {
	label: 'Badge',
	variant: 'neutral',
};
const BadgeTemplate: (args: Partial<BadgeProps>[], common?: BadgeProps) => BadgeStory = (
	args,
	common,
) => ({
	render: () => (
		<div className={'ui-flex ui-flex-wrap ui-gap-4 ui-p-4'}>
			{args.map((arg, index) => (
				<Badge key={index} {...RootProps} {...common} {...arg} />
			))}
		</div>
	),
});

const variants = ['green', 'cyan', 'fuchsia', 'neutral', 'gradient'] as const;
type Variant = (typeof variants)[number];
const sizes = ['sm', 'md'] as const;
type Size = (typeof sizes)[number];

const defaultProps = (variant: Variant, size: Size) =>
	({
		label: `${variant} ${size}`,
		variant: variant,
		size: size,
	}) as const;

const variations = [
	{
		icon: 'left',
	},
	{
		icon: 'right',
	},
	{
		type: 'outline',
	},
	{
		type: 'outline',
		icon: 'left',
	},
	{
		type: 'outline',
		icon: 'right',
	},
] as const;

const variantSpecs = (variant: Variant) => {
	const variantDefaultProps = sizes.map((size) => defaultProps(variant, size));

	return variantDefaultProps.flatMap((props) =>
		variations.map((variation) => ({ ...props, ...variation })),
	);
};

const sizeSpecs = (size: Size) => {
	const sizeDefaultProps = variants.map((variant) => defaultProps(variant, size));

	return sizeDefaultProps.flatMap((props) =>
		variations.map((variation) => ({ ...props, ...variation })),
	);
};

export const Green: BadgeStory = BadgeTemplate(variantSpecs('green'));

export const Cyan: BadgeStory = BadgeTemplate(variantSpecs('cyan'));
export const Fuchsia: BadgeStory = BadgeTemplate(variantSpecs('fuchsia'));
export const Neutral: BadgeStory = BadgeTemplate(variantSpecs('neutral'));
export const Gradient: BadgeStory = BadgeTemplate(variantSpecs('gradient'));

export const AllVariants: BadgeStory = BadgeTemplate([...variants.flatMap(variantSpecs)]);

export const SM: BadgeStory = BadgeTemplate(sizeSpecs('sm'));

export const MD: BadgeStory = BadgeTemplate(sizeSpecs('md'));

export const AllSizes: BadgeStory = BadgeTemplate([...sizes.flatMap(sizeSpecs)]);
export default meta;
