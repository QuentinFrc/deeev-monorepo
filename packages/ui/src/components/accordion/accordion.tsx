'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionSingleProps } from '@radix-ui/react-accordion';
import { Icon } from '#components/icons';
import { cn } from '#utils';

const Accordion = AccordionPrimitive.Root;

type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	AccordionItemProps
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('ui-border-b', className)}
		{...props}
	/>
));
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Trigger
>;
const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="ui-flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'ui-flex ui-flex-1 ui-items-center ui-justify-between ui-gap-2 ui-py-4 ui-font-sans ui-text-lg ui-font-medium ui-transition-all hover:ui-underline [&[data-state=open]>svg]:ui-rotate-180',
				className,
			)}
			{...props}>
			{children}
			<Icon
				i={'ChevronDown'}
				className="ui-size-4 ui-shrink-0 ui-transition-transform ui-duration-200"
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
		className="ui-overflow-hidden ui-text-sm ui-text-contrasted ui-transition-all data-[state=closed]:ui-animate-accordion-up data-[state=open]:ui-animate-accordion-down"
		{...props}>
		<div className={cn('ui-pb-4 ui-pt-0', className)}>{children}</div>
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
