import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn, tv, VariantProps } from '#utils';

import { TypographyVariantProps, typographyVariants } from './typography';

const variants = tv({
	base: ['ui-font-heading ui-leading-tight ui-tracking-[-.035em]'],
	variants: {
		level: {
			h1: ['ui-text-fluid ui-text-max-7xl ui-text-min-5xl'],
			h2: ['ui-text-fluid ui-text-max-6xl ui-text-min-4xl'],
			h3: ['ui-text-fluid ui-text-max-5xl ui-text-min-3xl'],
			h4: ['ui-text-fluid ui-text-max-4xl ui-text-min-2xl'],
			h5: ['ui-text-fluid ui-text-max-3xl ui-text-min-xl'],
			normal: ['ui-text-fluid ui-font-normal ui-text-max-2xl ui-text-min-lg'],
		},
		theme: {
			default: ['ui-text-contrasted-max'],
			reverted: ['ui-text-contrasted-max-reverted'],
		},
		unbalanced: {
			false: ['ui-text-balance'],
		},
	},
	defaultVariants: {
		unbalanced: true,
	},
});

type HeadingStyleProps = Pick<VariantProps<typeof variants>, 'theme' | 'unbalanced'>;
export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
	asChild?: boolean;
} & HeadingStyleProps &
	Pick<TypographyVariantProps, 'color' | 'weight'>;

const H1: React.FC<HeadingProps> = ({
	className,
	unbalanced,
	asChild,
	theme,
	color,
	weight,
	...props
}) => {
	const Comp = asChild ? Slot : 'h1';
	return (
		<Comp
			className={cn(
				typographyVariants({ color, weight }),
				variants({ level: 'h1', theme, unbalanced }),
				className,
			)}
			{...props}
		/>
	);
};

const H2: React.FC<HeadingProps> = ({
	className,
	unbalanced,
	asChild,
	theme,
	color,
	weight,
	...props
}) => {
	const Comp = asChild ? Slot : 'h2';
	return (
		<Comp
			className={cn(
				typographyVariants({ color, weight }),
				variants({ level: 'h2', theme, unbalanced }),
				className,
			)}
			{...props}
		/>
	);
};

const H3: React.FC<HeadingProps> = ({
	className,
	unbalanced,
	asChild,
	theme,
	color,
	weight,
	...props
}) => {
	const Comp = asChild ? Slot : 'h3';
	return (
		<Comp
			className={cn(
				typographyVariants({ color, weight }),
				variants({ level: 'h3', theme, unbalanced }),
				className,
			)}
			{...props}
		/>
	);
};

const H4: React.FC<HeadingProps> = ({
	className,
	unbalanced,
	asChild,
	theme,
	color,
	weight,
	...props
}) => {
	const Comp = asChild ? Slot : 'h4';
	return (
		<Comp
			className={cn(
				typographyVariants({ color, weight }),
				variants({ level: 'h4', theme, unbalanced }),
				className,
			)}
			{...props}
		/>
	);
};
const H5: React.FC<HeadingProps> = ({
	className,
	unbalanced,
	asChild,
	theme,
	color,
	weight,
	...props
}) => {
	const Comp = asChild ? Slot : 'h5';
	return (
		<Comp
			className={cn(
				typographyVariants({ color, weight }),
				variants({ level: 'h4', theme, unbalanced }),
				className,
			)}
			{...props}
		/>
	);
};

export const Headings = {
	H1,
	H2,
	H3,
	H4,
	H5,
};

export { variants as headingStyles };
