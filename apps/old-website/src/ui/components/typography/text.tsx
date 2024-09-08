import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';

const variants = tv(
	{
		base: ['font-sans leading-normal tracking-normal'],
		variants: {
			size: {
				xs: ['text-xs'],
				sm: ['text-sm'],
				base: ['text-base'],
				lg: ['text-lg'],
				xl: ['text-xl'],
				'2xl': ['text-2xl'],
				'3xl': ['text-3xl'],
				'4xl': ['text-4xl'],
				'5xl': ['text-5xl'],
				'6xl': ['text-6xl'],
				'7xl': ['text-7xl'],
			},
			contrast: {
				/* -- todo: remove these old utilities*/
				foreground: ['text-foreground'],
				'foreground-reverted': ['text-foreground-reverted'],
				1: ['text-contrast-1'],
				2: ['text-contrast-2'],
				3: ['text-contrast-3'],
				4: ['text-contrast-4'],
				/* -- */
				max: 'text-contrast-max',
				'max-reverted': 'text-contrast-max-reverted',
				high: 'text-contrast-high',
				'high-reverted': 'text-contrast-high-reverted',
				mid: 'text-contrast-mid',
				'mid-reverted': 'text-contrast-mid-reverted',
				low: 'text-contrast-low',
				'low-reverted': 'text-contrast-low-reverted',
			},
		},
	},
	{ responsiveVariants: true },
);

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
	Pick<VariantProps<typeof variants>, 'size' | 'contrast'> & {
		asChild?: boolean;
	};

export const Text: React.FC<TextProps> = ({
	className,
	size,
	contrast,
	asChild,
	...props
}) => {
	const Comp = asChild ? Slot : 'div';
	return <Comp className={cn(variants({ size, contrast }), className)} {...props} />;
};

type WithoutAsChild<T> = Omit<T, 'asChild'>;

type SpanProps = WithoutAsChild<TextProps>;

export const Span: React.FC<SpanProps> = ({ children, ...props }) => (
	<Text {...props} asChild>
		<span>{children}</span>
	</Text>
);

type PProps = WithoutAsChild<TextProps>;
export const P: React.FC<PProps> = ({ children, ...props }) => (
	<Text {...props} asChild>
		<p>{children}</p>
	</Text>
);

export { variants as textStyles };
