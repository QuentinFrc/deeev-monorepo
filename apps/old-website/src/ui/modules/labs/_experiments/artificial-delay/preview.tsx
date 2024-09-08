'use client';

import React from 'react';

import { MotionButton } from './misc/motion-button';

export const ArtificialDelayPreview = () => {
	/*Create a sequence faking submitting the button*/
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [isSubmitSuccessful, setIsSubmitSuccessful] = React.useState(false);

	React.useEffect(() => {
		const loopDuration = 6000;
		const sequence = async () => {
			await new Promise((resolve) => setTimeout(resolve, loopDuration / 3)).then(() => {
				setIsSubmitting(true);
			});
			await new Promise((resolve) => setTimeout(resolve, loopDuration / 3)).then(() => {
				setIsSubmitting(false);
				setIsSubmitSuccessful(true);
			});
			await new Promise((resolve) => setTimeout(resolve, loopDuration / 3)).then(() => {
				setIsSubmitSuccessful(false);
			});
		};

		sequence();

		const interval = setInterval(async () => {
			await sequence();
		}, loopDuration);

		return () => clearInterval(interval);
	}, []);

	return (
		<MotionButton
			initialIcon={'Rocket'}
			initialLabel={'Démo'}
			onPress={() => {}}
			isSubmitting={isSubmitting}
			isSubmitSuccessful={isSubmitSuccessful}
		/>
	);
};
