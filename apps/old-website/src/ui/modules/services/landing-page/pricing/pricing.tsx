import { Container } from '@repo/ui/container';
import { Icon } from '@repo/ui/icons';
import * as Section from '@ui/components/section';
import { P, Text } from '@ui/components/typography';

import { LimitedCard } from './cards';

/*const pricingInfo: PricingCardProps = {
	price: {
		amount: 6000,
		currency: '€',
		discountPercent: 0.5,
		discountEndDate: new Date('2024-06-30'),
	},
	bullets: [
		'Une maquette sur mesure',
		'Développement avec les dernières technologies',
		<div key={'deploy'}>
			Déploiement et mise en ligne{' '}
			<SimpleTooltip
				withIcon
				size={'xl'}
				content={
					"Nous avons la capacité de mettre votre landing page en ligne très rapidement grâce à nos outils d'automatisations."
				}>
				rapide
			</SimpleTooltip>
		</div>,
		'Peut évoluer vers un site web complet à tout moment',
	],
};*/

export const LandingPagePricing = () => {
	return (
		<Section.Root>
			<Container size={'xl'}>
				<Section.Head alignement={'center'}>
					<Section.Heading>Notre Tarif</Section.Heading>
					<Section.SubHeading>
						Pas de surprise, un tarif pour une landing page de qualité.
					</Section.SubHeading>
				</Section.Head>
				<div className="mx-auto flex flex-col items-center gap-y-12">
					<LimitedCard className={'max-md:mx-auto'} />
					<Text contrast={'mid'} className={'flex gap-2'}>
						<Icon i={'MessageChatSquare'} className={'mt-1'} />
						<div className={'max-w-2xl'}>
							<P>
								Pour une bonne landing page de qualité avec une dizaine de sections, le
								tarif que nous facturons débute à 6000€.
							</P>
							{/*	<P>
								Actuellement, nous proposons une offre limitée pour notre premier client.
							</P>*/}
						</div>
					</Text>
				</div>
			</Container>
		</Section.Root>
	);
};
