'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn, VariantProps } from '#utils';
import { tv } from 'tailwind-variants';

import { TypographyVariantProps, typographyVariants } from '../typography';

const cardVariants = tv({
	slots: {
		root: ['ui-rounded-lg ui-border ui-bg-card ui-text-contrasted-max ui-shadow-sm'],
		header: ['ui-flex ui-flex-col ui-gap-y-1'],
		content: [''],
		footer: ['ui-flex ui-items-center ui-p-6 ui-pt-0'],
	},
	variants: {
		size: {
			base: { content: 'ui-p-4' },
			lg: { content: 'ui-p-6' },
		},
	},
	defaultVariants: {
		size: 'base',
	},
});

const { root, header, content, footer } = cardVariants();

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(root(), className)} {...props} />
));
Card.displayName = 'Card';

type CardHeaderProps = HTMLAttributes<HTMLDivElement>;
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(header(), className)} {...props} />
	),
);
CardHeader.displayName = 'CardHeader';

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean } & Pick<
		TypographyVariantProps,
		'size' | 'weight' | 'align' | 'color' | 'leading' | 'tracking'
	>;
const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
	(
		{
			className,
			size = 'lg',
			align,
			weight = 'semibold',
			leading = 'none',
			tracking = 'tight',
			color,
			asChild = false,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'h3';
		return (
			<Comp
				ref={ref}
				className={cn(
					typographyVariants({ size, align, weight, leading, tracking, color }),
					className,
				)}
				{...props}
			/>
		);
	},
);
CardTitle.displayName = 'CardTitle';

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement> &
	Pick<
		TypographyVariantProps,
		'size' | 'weight' | 'align' | 'color' | 'leading' | 'tracking'
	>;
const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
	(
		{
			className,
			size = 'sm',
			align,
			weight,
			leading,
			tracking,
			color = 'contrasted-mid',
			...props
		},
		ref,
	) => (
		<p
			ref={ref}
			className={cn(
				typographyVariants({ size, align, weight, leading, tracking, color }),
				className,
			)}
			{...props}
		/>
	),
);
CardDescription.displayName = 'CardDescription';

type CardContentProps = HTMLAttributes<HTMLDivElement> &
	Pick<VariantProps<typeof cardVariants>, 'size'>;

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
	({ className, size, ...props }, ref) => (
		<div ref={ref} className={cn(content({ size }), className)} {...props} />
	),
);
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(footer(), className)} {...props} />
	),
);
CardFooter.displayName = 'CardFooter';

const Root = Card;
const Header = CardHeader;
const Title = CardTitle;
const Description = CardDescription;
const Content = CardContent;
const Footer = CardFooter;

export {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	//
	Root,
	Header,
	Title,
	Description,
	Content,
	Footer,
};

export type {
	CardProps,
	CardTitleProps,
	CardDescriptionProps,
	CardContentProps,
	//
	CardProps as RootProps,
	CardContentProps as ContentProps,
	CardHeaderProps as HeaderProps,
};
