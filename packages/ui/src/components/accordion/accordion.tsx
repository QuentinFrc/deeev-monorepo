'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionSingleProps } from '@radix-ui/react-accordion';

import { cn } from '#utils';
import { Icon } from '#components/icons';

const Accordion = AccordionPrimitive.Root;

type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	AccordionItemProps
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item ref={ref} className={cn('ui-border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Trigger
>;
const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex flex-1 items-center justify-between gap-2 py-4 font-sans text-lg font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
				className,
			)}
			{...props}>
			{children}
			<Icon
				i={'ChevronDown'}
				className="size-4 shrink-0 transition-transform duration-200"
			/>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

type AccordionContentProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Content
>;
const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	AccordionContentProps
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-sm text-contrasted transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}>
		<div className={cn('pb-4 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
	//
	Accordion as Root,
	AccordionItem as Item,
	AccordionTrigger as Trigger,
	AccordionContent as Content,
};

export type {
	AccordionSingleProps,
	AccordionItemProps,
	AccordionTriggerProps,
	AccordionContentProps,
};
