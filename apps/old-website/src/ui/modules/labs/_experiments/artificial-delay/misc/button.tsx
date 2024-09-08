'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { IconName } from '@repo/ui/icons';
import { Text } from '@ui/components/typography';

import { MotionButton } from './motion-button';

export type DelayedButtonProps = {
	fakePromiseDelay: number;
	resetSignal: number;
	withArtificialDelay?: boolean;
	label: string;
	icon: IconName;
};
export const DelayedButton: React.FC<DelayedButtonProps> = ({
	fakePromiseDelay,
	resetSignal,
	withArtificialDelay = true,
	label,
	icon,
}) => {
	const [startDate, setStartDate] = React.useState<null | number>(null);
	const [endDate, setEndDate] = React.useState<null | number>(null);
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [isSubmitSuccessful, setIsSubmitSuccessful] = React.useState(false);
	const [hasBeenDelayed, setHasBeenDelayed] = React.useState(false);

	React.useEffect(() => {
		setStartDate(null);
		setEndDate(null);
		setIsSubmitting(false);
		setIsSubmitSuccessful(false);
		setHasBeenDelayed(false);
	}, [resetSignal]);

	const onClick = async () => {
		setIsSubmitting(true);
		setStartDate(Date.now());

		const fakeSubmitPromise = (delay: number) => {
			return new Promise((resolve) =>
				setTimeout(() => {
					console.log('fakePromise resolved with delay: ' + delay);
					resolve('success');
				}, delay),
			);
		};

		const { delayed } = withArtificialDelay
			? await artificialDelay(fakeSubmitPromise(fakePromiseDelay))
			: await fakeSubmitPromise(fakePromiseDelay).then(() => ({ delayed: false }));

		setEndDate(Date.now());
		setHasBeenDelayed(delayed);
		setIsSubmitSuccessful(true);
		setIsSubmitting(false);
	};

	return (
		<div className={'flex min-w-64 max-w-full flex-col items-start gap-2'}>
			<Text size={'sm'} contrast={3}>
				{withArtificialDelay ? 'Avec délai' : 'Sans délai'}
			</Text>
			<MotionButton
				isSubmitSuccessful={isSubmitSuccessful}
				isSubmitting={isSubmitting}
				onPress={onClick}
				initialLabel={label}
				initialIcon={icon}
			/>
			<Insight
				fakePromiseDelay={fakePromiseDelay}
				hasBeenDelayed={hasBeenDelayed}
				endDate={endDate}
				startDate={startDate}
				withArtificialDelay={withArtificialDelay}
				hasBeenSubmitted={isSubmitSuccessful}
			/>
		</div>
	);
};

type InsightProps = {
	startDate: number | null;
	endDate: number | null;
	hasBeenDelayed: boolean;
	fakePromiseDelay: number;
	withArtificialDelay: boolean;
	hasBeenSubmitted: boolean;
};
const Insight: React.FC<InsightProps> = ({
	fakePromiseDelay,
	hasBeenDelayed,
	endDate,
	startDate,
	withArtificialDelay,
	hasBeenSubmitted,
}) => (
	<div className={'space-y-2 text-sm text-contrasted'}>
		<p>
			Durée réelle:{' '}
			<span className="font-semibold text-contrasted-max">
				{startDate && endDate ? `${endDate - startDate}ms` : '...'}
			</span>
		</p>
		<p>
			{withArtificialDelay && hasBeenSubmitted ? (
				<span
					className={cn('font-semibold text-contrasted-max', {
						'text-green-500': hasBeenDelayed,
					})}>
					{hasBeenDelayed ? 'A été retardé' : "N'a pas été retardé"}
				</span>
			) : (
				<span
					className={cn(
						{
							'font-bold text-contrasted-max': hasBeenSubmitted,
						},
						hasBeenSubmitted &&
							(fakePromiseDelay < DEFAULT_DELAY ? 'text-red-500' : 'text-green-500'),
					)}>
					{hasBeenSubmitted
						? fakePromiseDelay < DEFAULT_DELAY
							? 'Jugé trop rapide'
							: "N'aurait été impacté"
						: '...'}
				</span>
			)}
		</p>
	</div>
);

export const DEFAULT_DELAY = 800;

/**
 * If promise take longer than `ms` to resolve, return `isDelayed: true` else `isDelayed: false`
 * */
async function artificialDelay<T>(promise: Promise<T>, ms: number = DEFAULT_DELAY) {
	let hasBeenDelayed = false;

	const delayPromise = new Promise((resolve) => {
		setTimeout(() => {
			hasBeenDelayed = true;
			resolve(null);
		}, ms);
	});

	const result = await Promise.race([promise, delayPromise]);

	if (hasBeenDelayed) {
		return { delayed: false, result: await promise };
	} else {
		await delayPromise;
		return { delayed: true, result };
	}
}
