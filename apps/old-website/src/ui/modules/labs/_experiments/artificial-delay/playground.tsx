'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { SimpleButton } from '@ui/components/simple-button';
import { Text } from '@ui/components/typography';

import { DEFAULT_DELAY, DelayedButton, DelayedButtonProps } from './misc/button';

export const ArtificialDelayPlayground = () => {
	const [resetSignal, setResetSignal] = React.useState(0);

	const delays: Pick<DelayedButtonProps, 'fakePromiseDelay' | 'label' | 'icon'>[] = [
		{ fakePromiseDelay: 100, label: 'Super fast', icon: 'ZapFast' },
		{ fakePromiseDelay: 400, label: 'Normal', icon: 'Send' },
		{ fakePromiseDelay: 3000, label: 'Lent', icon: 'Clock' },
	];

	const handleReset = () => {
		setResetSignal((prevSignal) => prevSignal + 1);
	};
	return (
		<>
			<div className={'mb-8 flex items-center justify-evenly gap-12'}>
				<div className={'max-w-full space-y-8'}>
					<div className={'grid items-center justify-center gap-20'}>
						{delays.map(({ fakePromiseDelay, label, icon }) => (
							<Versus
								key={fakePromiseDelay}
								fakePromiseDelay={fakePromiseDelay}
								label={label}
								icon={icon}
								resetSignal={resetSignal}
							/>
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'absolute bottom-2 left-1/2 flex w-full -translate-x-1/2 items-center justify-center gap-4 px-2 md:justify-end',
				)}>
				<p className={'text-contrasted-min'}>Délai artificiel: {DEFAULT_DELAY}ms</p>
				<SimpleButton
					variant={'ghost'}
					label={'Réinitialiser le Lab'}
					onPress={handleReset}
				/>
			</div>
		</>
	);
};

type VersusProps = Omit<DelayedButtonProps, 'withArtificialDelay'>;

const Versus: React.FC<VersusProps> = ({ fakePromiseDelay, ...props }) => (
	<div className={'min-w-0 border-b pb-4'}>
		<Text contrast={2}>
			Durée de l&apos;action :{' '}
			<span className="font-semibold text-contrasted-max">{fakePromiseDelay}ms</span>
		</Text>
		<div className={'mt-2 flex flex-wrap items-center justify-center gap-4'}>
			<DelayedButton
				{...props}
				fakePromiseDelay={fakePromiseDelay}
				withArtificialDelay={true}
			/>
			<DelayedButton
				{...props}
				fakePromiseDelay={fakePromiseDelay}
				withArtificialDelay={false}
			/>
		</div>
	</div>
);
