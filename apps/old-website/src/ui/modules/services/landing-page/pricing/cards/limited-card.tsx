import React from 'react';

import { cn } from '@/lib/utils';
import { DialogTrigger as ContactDialogTrigger } from '@ui/components/contact';
import { SimpleButton } from '@ui/components/simple-button';
import { Headings, textStyles } from '@ui/components/typography';
import { WithMouseMove } from '@ui/components/with-mouse-move';

import * as Card from './base';
import { Offer } from './price';
import * as Price from './price';

const offer: Offer = {
	oneTime: {
		amount: 6000,
		currency: '€',
		discountPercent: 1,
	},
	subscription: {
		amount: 60,
		currency: '€',
	},
};

type LimitedCardProps = React.ComponentPropsWithoutRef<'div'>;
export const LimitedCard: React.FC<LimitedCardProps> = ({ className, ...props }) => {
	const reductionMessage =
		'Nous offrons la création de la landing page à 100% pour notre premier client.';
	return (
		<div
			className={cn([
				'relative h-max w-[448px] min-w-max max-w-full rounded-lg',
				'bg-gradient-to-br from-green-500 via-cyan-500 to-fuchsia-500 p-px',
				'after:absolute after:inset-0 after:z-[-1] after:rounded-lg after:bg-gradient-to-br after:from-green-500 after:via-cyan-500 after:to-fuchsia-500 after:blur-[20px]',
				' after:animate-pulse after:[--from-opacity:.15] after:[--to-opacity:.5]',
				className,
			])}
			{...props}>
			<WithMouseMove>
				<Card.Root
					className={cn([
						'relative h-max rounded-inherit md:max-w-md',
						'after:absolute after:inset-0 after:opacity-[var(--opacity,0)]',
						'after:bg-[radial-gradient(circle_at_var(--mouseX)_var(--mouseY),theme(colors.white/8%),transparent_150px)]',
					])}>
					<Price.Reduction message={reductionMessage} {...offer.oneTime} />
					<Card.Content className={'space-y-8'}>
						<Price.Wrapper>
							<Price.OneTime {...offer.oneTime} isFixed />
							<Price.Subscription {...offer.subscription} />
						</Price.Wrapper>
						<div className="space-y-4">
							<Card.Header>
								<Card.Title asChild>
									<Headings.H3 className={cn(textStyles({ size: 'xl' }))}>
										Landing Page
									</Headings.H3>
								</Card.Title>
								<Card.Description>
									Conçu, développé et hébergé par nos soins.
								</Card.Description>
								{/*<Text size={'sm'} contrast={'mid'} className={'mt-2'}>
									Cette offre est unique et limitée à notre premier client.
								</Text>*/}
							</Card.Header>
							<ContactDialogTrigger>
								<SimpleButton variant={'secondary'} label={'Obtenir ma landing page'} />
							</ContactDialogTrigger>
						</div>
					</Card.Content>
				</Card.Root>
			</WithMouseMove>
		</div>
	);
};
