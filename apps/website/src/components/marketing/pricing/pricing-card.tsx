'use client';

import MotionNumber from 'motion-number';
import { useLocale } from 'next-intl';

import { usePackagesStore } from '@/stores/packages.store';
import { ButtonLabel, ButtonRoot } from '@repo/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@repo/ui/card';
import { Icon } from '@repo/ui/icons';
import { Headings, Typography } from '@repo/ui/typography';

export const PACKAGE_PRICING = {
	landing_page: {
		'one-time': {
			price: 3000,
			maintenance: 99,
		},
		subscription: {
			price: 999,
			maintenance: 149,
		},
	},
	full_website: {
		'one-time': {
			price: 4990,
			maintenance: 149,
		},
		subscription: {
			price: 1990,
			maintenance: 229,
		},
	},
	web_app: {
		'one-time': {
			price: 'Custom',
			maintenance: 300,
		},
		subscription: {
			price: 'Custom',
			maintenance: 300,
		},
	},
} as const;

type Translations = {
	maintenance_start: string;
};

export type PricingCardProps = {
	id: keyof typeof PACKAGE_PRICING;
	title: string;
	description: string;
	price: string;
	maintenance: string;
	features: string[];
	cta: string;
	translations: Translations;
};

export const PricingCard = ({
	id,
	title,
	description,
	price,
	maintenance,
	features,
	cta,
	translations,
}: PricingCardProps) => {
	const mode = usePackagesStore((state) => state.mode);
	const priceConfig = PACKAGE_PRICING[id][mode];
	const locale = useLocale();
	return (
		<Card
			className={
				'flex flex-col items-stretch justify-between ring-4 ring-neutral-800/40 ring-offset-4 ring-offset-background'
			}>
			{/*<div>{JSON.stringify(priceConfig)}</div>*/}
			<CardContent className={'space-y-6 mb-16'}>
				<CardTitle>{title}</CardTitle>
				<div className="space-y-1">
					<Headings.H4 weight={'bold'}>
						{/*<span className={'inline-block text-end min-w-[5ch]'}>
						{typeof priceConfig.price === 'number' ? (
							<MotionNumber
								value={priceConfig.price}
								locales={locale}
								format={{
									style: 'currency',
									currency: 'EUR',
									maximumFractionDigits: 0,
									minimumSignificantDigits: 3,
									useGrouping: 'always',
								}}
							/>
						) : (
							priceConfig.price
						)}
					</span>*/}{' '}
						<span className={'block'}>
							{typeof priceConfig.price === 'number' ? (
								<MotionNumber
									value={priceConfig.price}
									locales={locale}
									format={{
										style: 'currency',
										currency: 'EUR',
										maximumFractionDigits: 0,
										minimumSignificantDigits: 3,
										useGrouping: 'always',
									}}
								/>
							) : (
								priceConfig.price
							)}
						</span>
					</Headings.H4>
					<p>
						<span className={'text-neutral-500'}>{translations.maintenance_start} </span>
						<span className="inline-block text-end min-w-[5ch]">
							{typeof priceConfig.maintenance === 'number' ? (
								<MotionNumber
									value={priceConfig.maintenance}
									locales={locale}
									format={{
										style: 'currency',
										currency: 'EUR',
										maximumFractionDigits: 0,
										useGrouping: 'always',
									}}
								/>
							) : (
								priceConfig.maintenance
							)}
						</span>
						<span className={'text-neutral-500'}> / mois</span>
					</p>
				</div>
				<div className={'space-y-3'}>
					<Typography.p weight={'medium'} color={'contrasted-max'}>
						{description}
					</Typography.p>
					<Typography.ul color={'contrasted-mid'} className={'space-y-2'}>
						{features.map((feature, index) => (
							<Typography.li
								key={index}
								weight={'medium'}
								className={'flex items-center gap-3'}>
								<Icon i={'Check'} size={'sm'} />
								<span>{feature}</span>
								<Icon i={'Info'} size={'sm'} color={'contrasted-low'} />
							</Typography.li>
						))}
					</Typography.ul>
				</div>
			</CardContent>
			<CardFooter className={'w-full'}>
				<ButtonRoot variant={'secondary'} className={'flex-1'}>
					<ButtonLabel>{cta}</ButtonLabel>
				</ButtonRoot>
			</CardFooter>
		</Card>
	);
};
