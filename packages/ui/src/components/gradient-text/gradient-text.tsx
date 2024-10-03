import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { extractTextFromChildren } from '@repo/utils';

import { cn, tv, VariantProps } from '../../utils';

const gradientVariants = tv({
	base: 'bg-gradient-text ui-from-white ui-from-[7%]',
	variants: {
		gradient: {
			'green-cyan': 'ui-via-cyan-300 ui-to-green-300',
			'cyan-fuchsia': 'ui-via-fuchsia-300 ui-to-cyan-300',
		},
	},
	defaultVariants: {
		gradient: 'green-cyan',
	},
});

type GradientTextProps = React.ComponentPropsWithoutRef<'span'> & {
	asChild?: boolean;
} & VariantProps<typeof gradientVariants>;
export const GradientText = ({
	children,
	gradient,
	className,
	asChild,
	...props
}: GradientTextProps) => {
	const Comp = asChild ? Slot : 'span';
	return (
		<Comp
			className={cn(gradientVariants({ gradient }), className)}
			data-text={extractTextFromChildren(children)}
			{...props}>
			{children}
		</Comp>
	);
};
