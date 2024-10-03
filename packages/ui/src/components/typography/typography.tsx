import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn, tv, VariantProps } from '#utils';

const variants = tv({
	base: [''],
	variants: {
		color: {
			'contrasted-max': ['ui-text-contrasted-max'],
			'contrasted-high': ['ui-text-contrasted-high'],
			'contrasted-mid': ['ui-text-contrasted-mid'],
			'contrasted-low': ['ui-text-contrasted-low'],
		},
		leading: {
			none: ['ui-leading-none'],
			tight: ['ui-leading-tight'],
			snug: ['ui-leading-snug'],
			normal: ['ui-leading-normal'],
			relaxed: ['ui-leading-relaxed'],
			loose: ['ui-leading-loose'],
		},
		tracking: {
			tighter: ['ui-tracking-tighter'],
			tight: ['ui-tracking-tight'],
			normal: ['ui-tracking-normal'],
			wide: ['ui-tracking-wide'],
			wider: ['ui-tracking-wider'],
			widest: ['ui-tracking-widest'],
		},
		size: {
			xs: ['ui-text-xs'],
			sm: ['ui-text-sm'],
			base: ['ui-text-base'],
			lg: ['ui-text-lg'],
			xl: ['ui-text-xl'],
			'2xl': ['ui-text-2xl'],
			'3xl': ['ui-text-3xl'],
			'4xl': ['ui-text-4xl'],
			'5xl': ['ui-text-5xl'],
			'6xl': ['ui-text-6xl'],
			'7xl': ['ui-text-7xl'],
		},
		weight: {
			thin: ['ui-font-thin'],
			extralight: ['ui-font-extralight'],
			light: ['ui-font-light'],
			normal: ['ui-font-normal'],
			medium: ['ui-font-medium'],
			semibold: ['ui-font-semibold'],
			bold: ['ui-font-bold'],
			extrabold: ['ui-font-extrabold'],
			black: ['ui-font-black'],
		},
		align: {
			center: ['ui-text-center'],
			left: ['ui-text-left'],
			right: ['ui-text-right'],
		},
	},
});
type TypographyVariantProps = VariantProps<typeof variants>;

type TypographyProps = {
	asChild?: boolean;
} & React.ComponentPropsWithoutRef<'div'> &
	TypographyVariantProps;

export const TypographyDefault = ({
	color,
	size,
	weight,
	align,
	asChild,
	children,
	className,
	...props
}: TypographyProps) => {
	const Comp = asChild ? Slot : 'div';
	return (
		<Comp className={cn(variants({ color, size, weight, align }), className)} {...props}>
			{children}
		</Comp>
	);
};

type ParagraphProps = Omit<TypographyProps, 'asChild'>;
const TypographyParagraph = ({ children, ...props }: ParagraphProps) => {
	return (
		<TypographyDefault asChild {...props}>
			<p>{children}</p>
		</TypographyDefault>
	);
};
type UnorderedListProps = Omit<TypographyProps, 'asChild'>;
const TypographyUnorderedList = ({ children, ...props }: UnorderedListProps) => {
	return (
		<TypographyDefault asChild {...props}>
			<ul>{children}</ul>
		</TypographyDefault>
	);
};
type ListElementProps = Omit<TypographyProps, 'asChild'>;
const TypographyListElement = ({ children, ...props }: ListElementProps) => {
	return (
		<TypographyDefault asChild {...props}>
			<li>{children}</li>
		</TypographyDefault>
	);
};

type TypographyLeadProps = Omit<TypographyProps, 'asChild' | 'size' | 'weight' | 'color'>;
export const TypographyLead = ({ children, ...props }: TypographyLeadProps) => {
	return (
		<TypographyDefault size={'lg'} weight={'medium'} color={'contrasted-high'} {...props}>
			{children}
		</TypographyDefault>
	);
};
type TypographySpanProps = Omit<TypographyProps, 'asChild'>;
export const TypographySpan = ({ children, ...props }: TypographySpanProps) => {
	return (
		<TypographyDefault asChild {...props}>
			<span>{children}</span>
		</TypographyDefault>
	);
};

export { variants as typographyVariants };

export type { TypographyVariantProps };

export const Typography = {
	Default: TypographyDefault,
	Lead: TypographyLead,
	p: TypographyParagraph,
	ul: TypographyUnorderedList,
	li: TypographyListElement,
	span: TypographySpan,
};
