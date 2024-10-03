import React from 'react';
import { cn } from '#utils';

import {
	AccordionItemProps,
	AccordionSingleProps,
	AccordionTriggerProps,
} from '../accordion';
import * as Accordion from '../accordion';
import { FocusRing } from '../focus-ring';

type FAQProps = Omit<AccordionSingleProps, 'type' | 'collapsible'>;
const FAQ: React.FC<FAQProps> = ({ className, ...props }) => {
	return (
		<Accordion.Root
			className={cn(
				'ui-mx-auto ui-w-full ui-max-w-2xl ui-space-y-2 [&:has([data-faq-item][data-state=open])_[data-faq-item][data-state="closed"]]:ui-opacity-70',
				className,
			)}
			type={'single'}
			collapsible={true}
			{...props}
		/>
	);
};

type FAQItemProps = AccordionItemProps;
const FAQItem: React.FC<FAQItemProps> = ({ className, ...props }) => (
	<FocusRing
		focusRingClass={
			'ui-ring-2 ui-ring-foreground ui-ring-offset-2 ui-ring-offset-background'
		}
		within>
		<div className={'ui-rounded-lg'}>
			<Accordion.Item
				data-faq-item
				className={cn(
					'ui-rounded-inherit ui-border ui-bg-card ui-px-4 ui-py-2 ui-transition-opacity ui-duration-300',
					className,
				)}
				{...props}
			/>
		</div>
	</FocusRing>
);

type FAQTriggerProps = AccordionTriggerProps;
const FAQTrigger: React.FC<FAQTriggerProps> = ({ className, ...props }) => (
	<Accordion.Trigger
		className={cn('ui-text-start ui-outline-none', className)}
		{...props}
	/>
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
