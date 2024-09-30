import { PricingModeSwitcher } from '@/components/marketing/pricing/pricing-mode-switcher';
import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
import { escapeMissingTranslation, useTranslations } from '@/hooks/use-translations';

import { PricingCard, PricingCardProps } from './pricing-card';

const getTranslations = () => {
	const common = useTranslations('common');
	const t = useTranslations('homepage.packages');

	const cardIds = ['landing_page', 'full_website'] as const; /* 'web_app'*/

	const cards = cardIds.map((id) => {
		return {
			id: id,
			title: t(`cards.${id}.title`),
			description: t(`cards.${id}.description`),
			price: t(`cards.${id}.price`),
			maintenance: t(`cards.${id}.maintenance`),
			features: escapeMissingTranslation(
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
		cards: cards,
		modes: {
			one_time: t('payment_mode.one_time'),
			subscription: t('payment_mode.subscription'),
		},
	} satisfies { title: string; description: string; cards: PricingCardProps[] };
};

/*const PRICE_CONFIG = {
	LANDING_PAGE: {
		price: 3000,
		maintenance_per_month: 100,
	},
};*/

type PricingProps = {};

export const Pricing = (props: PricingProps) => {
	const { title, description, cards, modes } = getTranslations();

	return (
		<section className={'container'}>
			<SectionHeader>
				<SectionHeaderAnchor>Anchor</SectionHeaderAnchor>
				<SectionHeaderTitle>{title}</SectionHeaderTitle>
				<SectionHeaderDescription>{description}</SectionHeaderDescription>
			</SectionHeader>
			<div>
				<PricingModeSwitcher translations={modes} />
				<div className={'grid grid-cols-3 gap-6'}>
					{/*todo: ajouter 1 mockup de landing, plusieurs pour site complet (plusieurs pages) et plusieurs avec dashboard pour webapp*/}
					{cards.map((card, index) => (
						<PricingCard {...card} key={index} />
					))}
				</div>
			</div>
		</section>
	);
};
