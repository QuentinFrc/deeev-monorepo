'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

import { cn } from '#utils';

const cardVariants = tv({
	slots: {
		root: ['rounded-lg border bg-card text-contrasted-max shadow-sm'],
		header: ['flex flex-col gap-y-1'],
		title: ['text-lg font-semibold leading-none tracking-tight'],
		description: ['text-sm text-contrasted-mid'],
		content: ['p-6'],
		footer: ['flex items-center p-6 pt-0'],
	},
});

const { root, header, title, description, content, footer } = cardVariants();

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

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean };
const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'h3';
		return <Comp ref={ref} className={cn(title(), className)} {...props} />;
	},
);
CardTitle.displayName = 'CardTitle';

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;
const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={cn(description(), className)} {...props} />
	),
);
CardDescription.displayName = 'CardDescription';

type CardContentProps = HTMLAttributes<HTMLDivElement>;

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(content(), className)} {...props} />
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
