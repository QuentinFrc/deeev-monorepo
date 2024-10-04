import React from 'react';

import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
import { getTranslations } from '@/lib/get-translations';
import { Card, CardContent, CardDescription, CardTitle } from '@repo/ui/card';

import {
	ConversionAsset,
	CostAsset,
	LongTermSolutionAsset,
	VisibilitySvg,
} from './assets';

const getCustomersChallengesTranslations = () => {
	const t = getTranslations('homepage.customers_challenges');
	return {
		onTitle: t('onTitle'),
		title: t('title'),
		description: t('description'),
		cards: [
			{
				type: 'visibility',
				title: t('cards.visibility.title'),
				description: t('cards.visibility.description'),
			},
			{
				type: 'conversion',
				title: t('cards.conversion.title'),
				description: t('cards.conversion.description'),
			},
			{
				type: 'maintenance',
				title: t('cards.maintenance.title'),
				description: t('cards.maintenance.description'),
			},
			{
				type: 'scalability',
				title: t('cards.scalability.title'),
				description: t('cards.scalability.description'),
			},
			{
				type: 'project_management',
				title: t('cards.project_management.title'),
				description: t('cards.project_management.description'),
			},
			{
				type: 'cost',
				title: t('cards.cost.title'),
				description: t('cards.cost.description'),
			},
			{
				type: 'long_term_solution',
				title: t('cards.long_term_solution.title'),
				description: t('cards.long_term_solution.description'),
			},
		],
	};
};

const GRID_PLACEMENT = [6, 6, 4, 4, 4, 6, 6];

const getCardIllustration = (type: string) => {
	switch (type) {
		case 'visibility':
			return VisibilitySvg;
		case 'conversion':
			return ConversionAsset;
		case 'cost':
			return CostAsset;
		case 'long_term_solution':
			return LongTermSolutionAsset;
	}
	throw new Error(`No illustration found for card type: ${type}`);
};

const getCardsWithIllustration = (cards: { type: string }[]) => {
	return cards.map((card) => ({ ...card, asset: getCardIllustration(card.type) }));
};

export const CustomersChallenges = () => {
	const {
		onTitle,
		title,
		description,
		cards: cardsTranslations,
	} = getCustomersChallengesTranslations();

	const cards = getCardsWithIllustration(cardsTranslations);

	return (
		<section className={'container py-36'}>
			<SectionHeader>
				<SectionHeaderAnchor>{onTitle}</SectionHeaderAnchor>
				<SectionHeaderTitle>{title}</SectionHeaderTitle>
				<SectionHeaderDescription>{description}</SectionHeaderDescription>
			</SectionHeader>
			<div className={'grid grid-cols-12 gap-4'}>
				{cards.map(({ asset: Asset, ...card }, index) => (
					<BentoCard key={index} colSpan={GRID_PLACEMENT[index]}>
						<Card className={'flex flex-col justify-between'}>
							<Asset />
							<CardContent>
								<CardTitle>{card.title}</CardTitle>
								<CardDescription>{card.description}</CardDescription>
							</CardContent>
						</Card>
					</BentoCard>
				))}
			</div>
		</section>
	);
};

type BentoCardProps = React.PropsWithChildren<{
	colSpan?: number;
}>;

const BentoCard = ({ colSpan = 1, children }: BentoCardProps) => {
	return (
		<div className="min-h-0 *:h-full" style={{ gridColumn: `span ${colSpan}` }}>
			{children}
		</div>
	);
};
