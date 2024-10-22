'use client';

import React from 'react';

import { PackagePaiementMode, usePackagesStore } from '@/stores/packages.store';
import { BadgeLabel, BadgeRoot } from '@repo/ui/badge';
import { Icon } from '@repo/ui/icons';
import { Tabs, TabsList, TabsTrigger } from '@repo/ui/tabs';

export type PricingModeSwitcherProps = {
	translations: {
		default: string;
		discounted: string;
		discount_title: string;
	};
};

export const PricingModeSwitcher = ({ translations }: PricingModeSwitcherProps) => {
	const mode = usePackagesStore((state) => state.mode);
	const setMode = usePackagesStore((state) => state.setMode);

	React.useLayoutEffect(() => {
		usePackagesStore.persist.rehydrate();
	}, []);

	return (
		<div className={'relative mx-auto w-max py-4'}>
			<BadgeRoot
				variant={'neutral'}
				size={'sm'}
				className={'absolute -top-1 left-0 -translate-y-1/2 '}>
				<Icon i={'Clock'} size={'sm'} />
				<BadgeLabel>{translations.discount_title}</BadgeLabel>
			</BadgeRoot>
			<Tabs onValueChange={(v) => setMode(v as PackagePaiementMode)} value={mode}>
				<TabsList className={'overflow-visible'}>
					<TabsTrigger value={'discounted'}>{translations.discounted}</TabsTrigger>
					<TabsTrigger value={'default'}>{translations.default}</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
};
