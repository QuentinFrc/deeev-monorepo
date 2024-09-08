import React from 'react';

import { cn } from '@/lib/utils';
import { DialogTrigger as ContactDialogTrigger } from '@ui/components/contact';
import { SimpleButton } from '@ui/components/simple-button';
import { Headings, Text, textStyles } from '@ui/components/typography';

import * as Card from './base';
import * as Price from './price';
import { Offer } from './price';

const offer: Offer = {
	oneTime: {
		amount: 6000,
		currency: '€',
		discountPercent: 0.5,
		/*discountEndDate: new Date('2024-07-31'),*/
	},
	subscription: {
		amount: 60,
		currency: '€',
	},
};

/*const bullets = [
	'Une maquette sur mesure',
	'Développement avec les dernières technologies',
	<div key={'deploy'}>
		Déploiement et mise en ligne{' '}
		<InlineTooltip
			withIcon
			size={'xl'}
			content={
				"Nous avons la capacité de mettre votre landing page en ligne très rapidement grâce à nos outils d'automatisations."
			}>
			rapide
		</InlineTooltip>
	</div>,
	'Peut évoluer vers un site web complet à tout moment',
];*/

export const DefaultCard = () => {
	const reductionMessage = offer.oneTime.discountPercent
		? `Nous proposons une offre limitée à ${offer.oneTime.discountPercent * 100}% sur un prix de base à ${offer.oneTime.amount}${offer.oneTime.currency}.`
		: '';
	return (
		<Card.Root>
			<Price.Reduction message={reductionMessage} {...offer.oneTime} />
			<Card.Content>
				<Price.Wrapper>
					<Price.OneTime {...offer.oneTime} />
					<Price.Subscription {...offer.subscription} />
				</Price.Wrapper>
				<Card.Header>
					<Card.Title asChild>
						<Headings.H3 className={cn(textStyles({ size: 'xl' }))}>
							Landing Page
						</Headings.H3>
					</Card.Title>
					<Card.Description>Conçu, développé et hébergé par nos soins.</Card.Description>
				</Card.Header>
				<Text size={'sm'} contrast={'mid'}>
					Cette offre est unique et limitée à notre premier client.
				</Text>
				<ContactDialogTrigger>
					<SimpleButton variant={'outline'} label={'Obtenir une landing page'} />
				</ContactDialogTrigger>
			</Card.Content>
		</Card.Root>
	);
};
