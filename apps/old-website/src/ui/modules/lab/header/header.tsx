import React from 'react';
import Link from 'next/link';
import { Experiments } from 'static-content';

import * as Button from '@repo/ui/button';
import { Headings, Text } from '@ui/components/typography';

type ExperimentHeaderProps = {
	title: Experiments['title'];
	description: Experiments['description'];
};

export const Header: React.FC<ExperimentHeaderProps> = ({ title, description }) => {
	return (
		<div className="space-y-4">
			<Button.Root variant={'ghost'} asChild>
				<Link href={'/lab'}>
					<Button.Icon i={'ChevronLeft'} />
					<Button.Label>Retour au Lab</Button.Label>
				</Link>
			</Button.Root>
			<hgroup className={'mb-2'}>
				<Headings.H2 className={'text-contrasted-max'}>{title}</Headings.H2>
				<Text size={'lg'} contrast={2} className={'font-medium'}>
					{description}
				</Text>
			</hgroup>
		</div>
	);
};
