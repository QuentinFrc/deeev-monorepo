'use client';

import NumberFlow from '@number-flow/react';
import { useLocale } from 'next-intl';

import { PACKAGE_PRICING } from '@/config/content';
import { usePackagesStore } from '@/stores/packages.store';
import { BadgeLabel, BadgeRoot } from '@repo/ui/badge';
import { ButtonLabel, ButtonRoot } from '@repo/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@repo/ui/card';
import { Icon } from '@repo/ui/icons';
import { Headings, Typography } from '@repo/ui/typography';

type Translations = {
	maintenance_start: string;
};

export type PricingCardProps = {
	id: 'landing_page' | 'full_website';
	title: string;
	description: string;
	features: string[];
	cta: string;
	translations: Translations;
};

export const PricingCard = ({
	id,
	title,
	description,
	features,
	cta,
	translations,
}: PricingCardProps) => {
	const mode = usePackagesStore((state) => state.mode);
	const priceConfig = PACKAGE_PRICING[id];
	const locale = useLocale();
	return (
		<Card
			className={
				'flex flex-col items-stretch justify-between ring-4 ring-neutral-800/40 ring-offset-4 ring-offset-background max-w-sm'
			}>
			{/*<div>{JSON.stringify(priceConfig)}</div>*/}
			<CardContent className={'space-y-6 mb-16'}>
				<CardTitle className={'w-max'}>{title}</CardTitle>
				<div className="space-y-1">
					<div className="inline-flex items-center gap-4">
						<Headings.H4 weight={'bold'}>
							<NumberFlow
								value={priceConfig[mode].price}
								locales={locale}
								format={{
									style: 'currency',
									currency: 'EUR',
									maximumFractionDigits: 0,
								}}
							/>
						</Headings.H4>
						{mode === 'discounted' && (
							<BadgeRoot variant="neutral">
								<BadgeLabel>
									{Math.ceil(
										((priceConfig.default.price - priceConfig.discounted.price) /
											priceConfig.default.price) *
											100,
									) * -1}
									%
								</BadgeLabel>
							</BadgeRoot>
						)}
					</div>
					<p className={'flex items-start text-end'}>
						<Typography.span color={'contrasted-low'}>
							{translations.maintenance_start}{' '}
						</Typography.span>
						<span className="inline-block align-top text-end min-w-[5ch] leading-[normal] mx-1">
							{
								<NumberFlow
									value={priceConfig[mode].maintenance}
									locales={locale}
									format={{
										style: 'currency',
										currency: 'EUR',
										maximumFractionDigits: 0,
									}}
								/>
							}
						</span>
						<Typography.span color={'contrasted-low'}> / mois</Typography.span>
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
