import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn, tv, VariantProps } from '@/lib/utils';

const variants = tv({
	base: ['text-balance font-heading leading-tight tracking-[-.035em]'],
	variants: {
		level: {
			h1: ['text-fluid font-normal text-max-7xl text-min-5xl'],
			h2: ['text-fluid font-normal text-max-6xl text-min-4xl'],
			h3: ['text-fluid font-normal text-max-5xl text-min-3xl'],
			h4: ['text-fluid font-normal text-max-4xl text-min-2xl'],
			h5: ['text-fluid font-normal text-max-3xl text-min-xl'],
			normal: ['text-fluid font-normal text-max-2xl text-min-lg'],
		},
		theme: {
			default: ['text-contrast-max'],
			reverted: ['text-contrast-max-reverted'],
		},
	},
});
type HeadingStyleProps = Pick<VariantProps<typeof variants>, 'theme'>;
export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
	asChild?: boolean;
} & HeadingStyleProps;

const H1: React.FC<HeadingProps> = ({ className, asChild, theme, ...props }) => {
	const Comp = asChild ? Slot : 'h1';
	return <Comp className={cn(variants({ level: 'h1', theme }), className)} {...props} />;
};

const H2: React.FC<HeadingProps> = ({ className, asChild, theme, ...props }) => {
	const Comp = asChild ? Slot : 'h2';
	return <Comp className={cn(variants({ level: 'h2', theme }), className)} {...props} />;
};

const H3: React.FC<HeadingProps> = ({ className, asChild, theme, ...props }) => {
	const Comp = asChild ? Slot : 'h3';
	return <Comp className={cn(variants({ level: 'h3', theme }), className)} {...props} />;
};

const H4: React.FC<HeadingProps> = ({ className, asChild, theme, ...props }) => {
	const Comp = asChild ? Slot : 'h4';
	return <Comp className={cn(variants({ level: 'h4', theme }), className)} {...props} />;
};
const H5: React.FC<HeadingProps> = ({ className, asChild, theme, ...props }) => {
	const Comp = asChild ? Slot : 'h5';
	return <Comp className={cn(variants({ level: 'h4', theme }), className)} {...props} />;
};

export const Headings = {
	H1,
	H2,
	H3,
	H4,
	H5,
};

export { variants as headingStyles };
