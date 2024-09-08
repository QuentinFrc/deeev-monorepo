import React from 'react';
import Link from 'next/link';
import { Previews } from '@ui/modules/labs/_experiments';
import { Experiments } from 'static-content';

import { cn, createLabUrl } from '@/lib/utils';
import * as Button from '@repo/ui/button';
import * as Card from '@repo/ui/card';

type ExperimentCardProps = Pick<Experiments, 'slug' | 'title' | 'description'>;
export const PreviewCard: React.FC<ExperimentCardProps> = ({
	slug,
	title,
	description,
}) => {
	const Preview = Previews[slug];
	return (
		<Card.Root className={'mx-auto max-w-sm'}>
			<div
				className={cn(
					'flex h-32 items-center justify-center overflow-hidden',
					'rounded-t-inherit bg-neutral-900 px-4 py-8',
					'md:h-48 lg:h-64',
				)}>
				<Preview />
			</div>
			<Card.Content>
				<Card.Header>
					<Card.Title>{title}</Card.Title>
					<Card.Description>{description}</Card.Description>
				</Card.Header>
			</Card.Content>
			<Card.Footer className={'justify-end'}>
				<Button.Root variant={'ghost'} asChild>
					<Link href={createLabUrl(slug)}>
						<Button.Label>Voir</Button.Label>
						<Button.Icon i={'ArrowRight'} />
					</Link>
				</Button.Root>
			</Card.Footer>
		</Card.Root>
	);
};
