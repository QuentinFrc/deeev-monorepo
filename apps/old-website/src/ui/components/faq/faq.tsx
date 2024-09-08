import React from 'react';

import { cn } from '@/lib/utils';
import * as Accordion from '@repo/ui/accordion';
import {
	AccordionItemProps,
	AccordionSingleProps,
	AccordionTriggerProps,
} from '@repo/ui/accordion';
import { FocusRing } from '@repo/ui/focus-ring';

type FAQProps = Omit<AccordionSingleProps, 'type' | 'collapsible'>;
const FAQ: React.FC<FAQProps> = ({ className, ...props }) => {
	return (
		<Accordion.Root
			className={cn(
				'mx-auto w-full max-w-2xl space-y-2 [&:has([data-state=open])_[data-state=closed]]:opacity-70',
				className,
			)}
			type={'single'}
			collapsible={false}
			{...props}
		/>
	);
};

type FAQItemProps = AccordionItemProps;
const FAQItem: React.FC<FAQItemProps> = ({ className, ...props }) => (
	<FocusRing
		focusRingClass={'ring-2 ring-foreground ring-offset-2 ring-offset-background'}
		within>
		<div className={'rounded-lg'}>
			<Accordion.Item
				className={cn(
					'rounded-inherit border bg-card px-4 py-2 transition-opacity duration-300',
					className,
				)}
				{...props}
			/>
		</div>
	</FocusRing>
);

type FAQTriggerProps = AccordionTriggerProps;
const FAQTrigger: React.FC<FAQTriggerProps> = ({ className, ...props }) => (
	<Accordion.Trigger className={cn('text-start outline-none', className)} {...props} />
);

const FAQContent = Accordion.Content;

export {
	FAQ,
	FAQItem,
	FAQTrigger,
	FAQContent,
	//
	FAQ as Root,
	FAQItem as Item,
	FAQTrigger as Trigger,
	FAQContent as Content,
};
