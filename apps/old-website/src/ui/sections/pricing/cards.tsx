import React from 'react';

import * as Badge from '@repo/ui/badge';
import * as Card from '@repo/ui/card';
import { Icon } from '@repo/ui/icons';
import { DialogTrigger as ContactDialogTrigger } from '@ui/components/contact';
import { SimpleButton } from '@ui/components/simple-button';

const CardWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
	<div className={'relative mx-auto max-w-[450px] md:max-w-full'}>{children}</div>
);

const VitrineCard = () => (
	<CardWrapper>
		<Card.Root>
			<Card.Content className={'flex flex-col items-start gap-8'}>
				<Card.Header>
					<Card.Title className={'font-heading text-2xl text-contrasted-max'}>
						Express
					</Card.Title>
					<div className="-order-1 inline-flex justify-between gap-1 text-contrasted-min">
						<span>
							A partir de <span className="font-bold">3000€</span>
						</span>
					</div>
					<Card.Description className={'text-contrasted-mid'}>
						Vous souhaitez un site pour présenter votre activité ? C’est ici !
					</Card.Description>
				</Card.Header>
				<ul className="flex flex-col gap-4">
					<li className={'flex items-start gap-1.5'}>
						<Icon i={'CheckCircle'} className={'mt-1 shrink-0 text-green-300'} />
						Créé sur mesure avec une identité visuelle unique
					</li>
					<li className={'flex items-start gap-1.5'}>
						<Icon i={'CheckCircle'} className={'mt-1 shrink-0 text-cyan-300'} />
						Performant et optimisé pour le référencement
					</li>
					<li className={'flex items-start gap-1.5'}>
						<Icon i={'CheckCircle'} className={'mt-1 shrink-0 text-fuchsia-300'} />
						Rapidement déployé
					</li>
				</ul>
				<ContactDialogTrigger>
					<SimpleButton
						variant={'outline'}
						label={'Demander un devis'}
						className={'sm:w-max'}
						layout={'full'}
					/>
				</ContactDialogTrigger>
			</Card.Content>
		</Card.Root>
	</CardWrapper>
);

const InspirationCard = () => (
	<CardWrapper>
		<div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
			<Badge.Root variant={'neutral'} type={'fill'}>
				<Badge.Label>Offre limitée au premier client</Badge.Label>
				<Icon i={'Clock'} />
			</Badge.Root>
		</div>
		{/*<div className="absolute -inset-1 overflow-hidden rounded-lg-plus-[2px]">
			<ConicGradient className={'opacity-40 blur-xl'} />
		</div>
		<div className={'relative overflow-hidden rounded-lg p-px'}>
			<ConicGradient />*/}
		<Card.Root className={'relative z-10'}>
			<Card.Content className={'relative z-10 flex flex-col items-stretch gap-8'}>
				<Card.Header>
					<Card.Title className={'font-heading text-2xl text-contrasted-max'}>
						Studio
					</Card.Title>
					<div className="-order-1 inline-flex justify-between gap-1 text-contrasted-min">
						<span>
							A partir de <span className="font-bold">6000€</span>
						</span>
						{/*todo: add tooltip*/}
						{/*<Icon i={'InfoCircle'} />*/}
					</div>
					<Card.Description className={'text-contrasted-mid'}>
						{/*Vous souhaitez un site comme le nôtre ? C&apos;est possible !*/}
						Un site complet pour présenter votre activité et vos services.
					</Card.Description>
				</Card.Header>
				<div className={'space-y-1.5'}>
					<div className="flex flex-wrap items-center gap-1.5">
						<Badge.Root variant={'neutral'} type={'fill'}>
							<Badge.Label>Animé</Badge.Label>
							<Icon i={'Film'} />
						</Badge.Root>
						<Badge.Root variant={'neutral'} type={'outline'}>
							<Badge.Label>Modulable</Badge.Label>
							<Icon i={'Edit'} />
						</Badge.Root>
					</div>
				</div>
				<ul className="flex flex-col gap-4">
					<li className={'flex items-start gap-1.5'}>
						<Icon i={'CheckCircle'} className={'mt-1 shrink-0 text-green-300'} />
						Une expérience unique, dynamique et interactive
					</li>
					<li className={'flex items-start gap-1.5'}>
						<Icon i={'CheckCircle'} className={'mt-1 shrink-0 text-cyan-300'} />
						Des modules de gestion de contenu pour une autonomie totale
					</li>
					<li className={'flex items-start gap-1.5'}>
						<Icon i={'CheckCircle'} className={'mt-1 shrink-0 text-fuchsia-300'} />
						Constamment à jour et amélioré
					</li>
				</ul>
				<ContactDialogTrigger>
					<SimpleButton label={'Demander un devis'} size={'lg'} layout={'full'} />
				</ContactDialogTrigger>
			</Card.Content>
		</Card.Root>
		{/*</div>*/}
	</CardWrapper>
);

const OtherCard = () => (
	<CardWrapper>
		<Card.Root>
			<Card.Content className={'flex flex-col items-start gap-8'}>
				<Card.Header>
					<Card.Title className={'font-heading text-2xl text-contrasted-max'}>
						Autre demande
					</Card.Title>
					<Card.Description className={'text-contrasted-mid'}>
						Vous avez un autre type de projet et vous souhaitez nous en faire part ?
					</Card.Description>
				</Card.Header>
				<ContactDialogTrigger>
					<SimpleButton
						variant={'outline'}
						label={'Nous contacter'}
						layout={'full'}
						className={'sm:w-max'}
					/>
				</ContactDialogTrigger>
			</Card.Content>
		</Card.Root>
	</CardWrapper>
);

const MaintenanceCard = () => (
	<div className={'border-t pt-8'}>
		<div className="mb-2 inline-flex items-center gap-2">
			<h3 className={'font-heading text-2xl text-contrasted-max'}>Maintenance</h3>
			<Badge.Root type={'outline'} variant={'neutral'}>
				<Badge.Label>Abonnement</Badge.Label>
				<Icon i={'ArrowCircleUp'} />
			</Badge.Root>
		</div>
		<div className="text-contrasted">
			<p>
				Nous vous proposons une expérience agréable tout au long de la création de votre
				site, mais également après grâce à notre système de maintenance.
			</p>
		</div>
	</div>
);

export { VitrineCard, InspirationCard, OtherCard, MaintenanceCard };
