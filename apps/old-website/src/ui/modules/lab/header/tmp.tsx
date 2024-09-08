import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import * as Button from '@repo/ui/button';
import { Container } from '@repo/ui/container';
import { Headings, Text } from '@ui/components/typography';

type HeaderProps = {
	title: string;
	description: string;
	withBackToLabButton?: boolean;
};
export const Tmp: React.FC<HeaderProps> = ({
	title,
	description,
	withBackToLabButton = false,
}) => {
	return (
		/*todo add lab author and date*/
		<section className={cn('relative mt-6 pb-24 pt-8', 'sm:mt-12')}>
			<Background />
			<Container size={'2xl'}>
				<div className="flex flex-col items-center gap-4">
					{withBackToLabButton && (
						<Button.Root variant={'ghost'} asChild>
							<Link href={'/lab'}>
								<Button.Icon i={'ChevronLeft'} />
								<Button.Label>Retour au Lab</Button.Label>
							</Link>
						</Button.Root>
					)}
					<hgroup className={'mx-auto w-[540px] max-w-full space-y-2 text-center'}>
						<Headings.H1 className={'text-contrasted-max'}>{title}</Headings.H1>
						<Text size={'lg'} contrast={2} className={'text-balance font-medium'}>
							{description}
						</Text>
					</hgroup>
				</div>
			</Container>
		</section>
	);
};

const columns = 12;
const getOpacity = (i: number, min = 0.16, max = 0.8) => {
	const range = max - min;
	const step = range / (columns / 2);
	return Math.round((min + step * i) * 100) / 100;
};
const opacity = Array.from({ length: columns / 2 }, (_, i) => getOpacity(i));

const Background = () => (
	<div
		className={cn([
			'pointer-events-none absolute inset-y-0 left-1/2 -z-10 -translate-x-1/2',
			'mx-auto grid w-max gap-5 opacity-25',
		])}
		style={{ gridTemplateColumns: `repeat(${columns},1fr)` } as React.CSSProperties}>
		{Array.from({ length: columns }).map((_, i) => (
			<div
				key={i}
				className={cn([
					'h-full w-16 bg-gradient-to-b from-transparent to-white',
					'translate-y-[var(--translate)] opacity-[var(--opacity)]',
				])}
				style={
					{
						gridColumn: `${i + 1}`,
						'--opacity': opacity[i < columns / 2 ? i : columns - i - 1],
						/*'--translate': `calc(${i % 2 === 0 ? '-' : ''}${Math.abs(i >= columns / 2 ? columns / 2 - i - 1 : columns / 2 - i)} * 8%)`,*/
						'--translate': `calc(-${Math.abs(i >= columns / 2 ? columns / 2 - i - 1 : columns / 2 - i)} * 8%)`,
					} as React.CSSProperties
				}
			/>
		))}
	</div>
);
