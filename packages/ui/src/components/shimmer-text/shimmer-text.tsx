import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn, tv, VariantProps } from '#utils';

const shimmerVariants = tv({
	base: 'text-shimmer',
	variants: {
		color: {
			white: '[--default-color:theme(colors.white)]',
			transparent: '[--default-color:theme(colors.transparent)]',
		},
	},
	defaultVariants: {
		color: 'white',
	},
});

type ShimmerTextProps = VariantProps<typeof shimmerVariants> &
	React.ComponentPropsWithoutRef<'span'> & {
		colorDirection?: number;
		asChild?: boolean;
	};

export const ShimmerText = ({
	color,
	children,
	className,
	asChild,
	colorDirection = 65,
}: ShimmerTextProps) => {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			className={cn(shimmerVariants({ color }), className)}
			style={
				{
					'--color-direction': `${colorDirection}deg`,
				} as React.CSSProperties
			}>
			{children}
		</Comp>
	);
};
