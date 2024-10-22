import React from 'react';

import {
	PricingModeSwitcher,
	PricingModeSwitcherProps,
} from '@/components/marketing/pricing/pricing-mode-switcher';
import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
import { PACKAGE_PRICING } from '@/config/content';
import {
	escapeMissingTranslationsInArray,
	getTranslations,
} from '@/lib/get-translations';
import { BadgeLabel, BadgeRoot } from '@repo/ui/badge';
import { Icon } from '@repo/ui/icons';
import { Typography } from '@repo/ui/typography';

import { PricingCard, PricingCardProps } from './pricing-card';

type Translations = {
	title: string;
	description: string;
	precision_title: string;
	precision_description: string;
	cards: PricingCardProps[];
	modes: PricingModeSwitcherProps['translations'];
};

const getPricingTranslations = () => {
	const common = getTranslations('common');
	const t = getTranslations('homepage.packages');

	const cardIds = ['landing_page', 'full_website'] as const;

	const cards = cardIds.map((id) => {
		return {
			id: id,
			title: t(`cards.${id}.title`),
			description: t(`cards.${id}.description`),
			price: t(`cards.${id}.price`),
			maintenance: t(`cards.${id}.maintenance`),
			features: escapeMissingTranslationsInArray(
				new Array(6).fill(null).map((_, index) => t(`cards.${id}.features.${index}`)),
			),
			cta: t(`cards.${id}.call_to_action`),
			translations: {
				maintenance_start: common('then'),
			},
		};
	});

	/*const cards = Object.entries(messages.homepage.packages.cards).map(([key, value]) => ({
		id: key,
		title: value.title,
		description: value.description,
		price: value.price,
		maintenance: value.maintenance,
		features: new Array(6)
					.fill(null)
					.map((_, index) => t(`cards.landing_page.features.${index}`)),,
		cta: value.call_to_action,
		translations: {
			maintenance_start: common('then'),
		},
	}));*/
	return {
		title: t('title'),
		description: t('description'),
		precision_title: t('precision.title'),
		precision_description: t('precision.description'),
		cards: cards,
		modes: {
			default: t('payment_mode.default'),
			discounted: t('payment_mode.discounted'),
			discount_title: t('payment_mode.spot_left', {
				spot_count: PACKAGE_PRICING.spot_left,
			}),
		},
	} satisfies Translations;
};

/*const PRICE_CONFIG = {
	LANDING_PAGE: {
		price: 3000,
		maintenance_per_month: 100,
	},
};*/

export const Pricing = () => {
	const { title, description, cards, modes, precision_title, precision_description } =
		getPricingTranslations();

	return (
		<section className={'relative'}>
			<Background />
			<div className="container space-y-16">
				<SectionHeader align={'center'}>
					<SectionHeaderAnchor>Pricing</SectionHeaderAnchor>
					<SectionHeaderTitle>{title}</SectionHeaderTitle>
					<SectionHeaderDescription align={'center'} className={'md:max-w-lg'}>
						{description}
					</SectionHeaderDescription>
				</SectionHeader>
				<div className={'space-y-8'}>
					<PricingModeSwitcher translations={modes} />
					<div className={'mx-auto grid w-max gap-6 md:grid-cols-2'}>
						{cards.map((card, index) => (
							<PricingCard {...card} key={index} />
						))}
					</div>
					<div className={'grid place-items-center py-4'}>
						<div
							className={
								'flex w-max items-center gap-4 rounded-xl border bg-card px-3 py-1.5'
							}>
							<BadgeRoot variant={'gradient'} type={'outline'}>
								<Icon i={'Info'} />
								<BadgeLabel>{precision_title}</BadgeLabel>
							</BadgeRoot>
							<Typography.p
								className={'w-auto max-w-[56ch]'}
								color={'contrasted-mid'}
								size={'sm'}>
								{precision_description}
							</Typography.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const COUNT = 12;
const Background = () => (
	<div className={'absolute inset-0 -z-10 flex gap-4'}>
		{new Array(COUNT).fill(null).map((_, index) => (
			<div
				key={index}
				className={
					'size-full scale-y-[var(--offset)] bg-neutral-800/30 [mask-image:linear-gradient(transparent,white,transparent)]'
				}
				style={
					{
						'--offset': `${Math.abs(index + 1 - (COUNT + 1) / 2) * 0.07 + 1}`,
					} as React.CSSProperties
				}
			/>
		))}
	</div>
);
