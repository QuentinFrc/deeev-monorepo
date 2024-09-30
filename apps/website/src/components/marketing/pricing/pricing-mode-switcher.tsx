'use client';

import { PackagePaiementMode, usePackagesStore } from '@/stores/packages.store';
import { Tabs, TabsList, TabsTrigger } from '@repo/ui/tabs';

type PricingModeSwitcherProps = {
	translations: {
		one_time: string;
		subscription: string;
	};
};

export const PricingModeSwitcher = ({ translations }: PricingModeSwitcherProps) => {
	const mode = usePackagesStore((state) => state.mode);
	const setMode = usePackagesStore((state) => state.setMode);
	return (
		<div className={'py-4 mx-auto w-max'}>
			<Tabs onValueChange={(v) => setMode(v as PackagePaiementMode)} value={mode}>
				<TabsList>
					<TabsTrigger value={'one-time'}>{translations.one_time}</TabsTrigger>
					<TabsTrigger value={'subscription'}>{translations.subscription}</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
};
