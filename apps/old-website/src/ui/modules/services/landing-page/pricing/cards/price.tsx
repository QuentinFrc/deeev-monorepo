import React from 'react';

import { cn } from '@/lib/utils';
import { SimpleTooltip } from '@ui/components/tooltip';
import { Span, Text } from '@ui/components/typography';

import { PricingBadge } from './badge';

export type Price = {
	amount: number;
	currency: string;
};

export type Discount = {
	discountPercent: number;
	discountEndDate: Date;
};

export type Offer = {
	oneTime: Price & Partial<Discount>;
	subscription: Price;
};

export type PriceProps = Offer &
	React.ComponentPropsWithoutRef<'div'> & {
		isFixed?: boolean;
	};

type PriceWrapperProps = React.ComponentPropsWithoutRef<'div'>;
const PriceWrapper: React.FC<PriceWrapperProps> = ({ className, ...props }) => (
	<div className={cn('flex flex-col items-start', className)} {...props} />
);

type TOneTimePrice = Price & Partial<Discount>;
type OnTimePriceProps = TOneTimePrice &
	Omit<React.ComponentPropsWithoutRef<typeof Text>, 'size'> & {
		isFixed?: boolean;
	};
const OneTimePrice: React.FC<OnTimePriceProps> = ({
	isFixed = false,
	amount,
	currency,
	discountPercent,
	discountEndDate,
	className,
	...props
}) => {
	const isDiscountActive =
		(discountPercent && !discountEndDate) ||
		(discountPercent && discountEndDate && discountEndDate > new Date());

	const discountedPrice = isDiscountActive ? amount * (1 - discountPercent) : amount;

	const finalPrice = discountedPrice === 0 ? 'Gratuit' : discountedPrice;

	return (
		<div className={cn('tabular-nums leading-none', className)} {...props}>
			{!isFixed && (
				<Span size={'sm'} contrast={'mid'} className={'block'}>
					A partir de
				</Span>
			)}
			<div className="flex items-baseline gap-2">
				<Text className={'leading-none'} size={'5xl'}>
					{finalPrice}
					{discountedPrice > 0 && <Span size={'xs'}>{currency}</Span>}
				</Text>
				<Text className={'opacity-80'} size={'sm'}>
					<Span className={'line-through'}>{amount}</Span>
					<Span size={'xs'}>{currency}</Span>
				</Text>
			</div>
		</div>
	);
};

const SubscriptionPrice: React.FC<Price> = ({ amount, currency }) => {
	return (
		<Text size={'sm'} contrast={'mid'}>
			<Span size={'xs'} contrast={'mid'}>
				{currency}
			</Span>
			<span className={'tabular-nums'}>{amount}</span> par mois
		</Text>
	);
};

type OneTimeReductionProps = Offer['oneTime'] & {
	message?: string;
};
const OneTimeReduction: React.FC<OneTimeReductionProps> = ({
	discountPercent,
	discountEndDate,
	message = '',
}) => {
	if (!discountPercent || (discountEndDate && discountEndDate < new Date())) return null;

	return (
		<div className={'absolute right-4 top-4 tabular-nums'}>
			{!!message ? (
				<SimpleTooltip content={message} focusShape={'badge'}>
					<PricingBadge variant={'neutral'} type={'outline'} icon={'Info'}>
						-{discountPercent * 100}%
					</PricingBadge>
				</SimpleTooltip>
			) : (
				<PricingBadge variant={'neutral'} type={'outline'}>
					-{discountPercent * 100}%
				</PricingBadge>
			)}
		</div>
	);
};

export {
	PriceWrapper,
	OneTimePrice,
	SubscriptionPrice,
	OneTimeReduction,
	//
	PriceWrapper as Wrapper,
	OneTimePrice as OneTime,
	SubscriptionPrice as Subscription,
	OneTimeReduction as Reduction,
};
