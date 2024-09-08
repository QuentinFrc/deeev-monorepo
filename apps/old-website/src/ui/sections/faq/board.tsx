'use client';

import React from 'react';
import { FAQ } from '@/config';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@repo/ui/accordion';

export const Board = () => {
	return (
		<Accordion
			className={
				'mx-auto w-full max-w-2xl space-y-2 [&:has([data-state=open])>[data-state=closed]]:opacity-65'
			}
			type="single"
			collapsible
			defaultValue={'item-0'}>
			{FAQ.map(({ question, answer }, index) => {
				return (
					<AccordionItem
						className={
							'rounded-lg border bg-card px-4 py-2 transition-opacity duration-300'
						}
						key={question}
						value={`item-${index}`}>
						<AccordionTrigger className={'text-start'}>{question}</AccordionTrigger>
						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};
