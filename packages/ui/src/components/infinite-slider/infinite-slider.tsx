'use client';

import React from 'react';
import { cn } from '#utils';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
	children: React.ReactNode;
	gap?: number;
	duration?: number;
	durationOnHover?: number;
	direction?: 'horizontal' | 'vertical';
	reverse?: boolean;
	className?: string;
};

export function InfiniteSlider({
	children,
	gap = 16,
	duration = 25,
	durationOnHover,
	direction = 'horizontal',
	reverse = false,
	className,
}: InfiniteSliderProps) {
	const [currentDuration, setCurrentDuration] = React.useState(duration);
	const [ref, { width, height }] = useMeasure();
	const translation = useMotionValue(0);
	const [isTransitioning, setIsTransitioning] = React.useState(false);
	const [key, setKey] = React.useState(0);

	React.useEffect(() => {
		let controls;
		const size = direction === 'horizontal' ? width : height;
		const contentSize = size + gap;
		const from = reverse ? -contentSize / 2 : 0;
		const to = reverse ? 0 : -contentSize / 2;

		if (isTransitioning) {
			controls = animate(translation, [translation.get(), to], {
				ease: 'linear',
				duration: currentDuration * Math.abs((translation.get() - to) / contentSize),
				onComplete: () => {
					setIsTransitioning(false);
					setKey((prevKey) => prevKey + 1);
				},
			});
		} else {
			controls = animate(translation, [from, to], {
				ease: 'linear',
				duration: currentDuration,
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 0,
				onRepeat: () => {
					translation.set(from);
				},
			});
		}

		return controls?.stop;
	}, [
		key,
		translation,
		currentDuration,
		width,
		height,
		gap,
		isTransitioning,
		direction,
		reverse,
	]);

	const hoverProps = durationOnHover
		? {
				onHoverStart: () => {
					setIsTransitioning(true);
					setCurrentDuration(durationOnHover);
				},
				onHoverEnd: () => {
					setIsTransitioning(true);
					setCurrentDuration(duration);
				},
			}
		: {};

	return (
		<div className={cn('ui-overflow-hidden', className)}>
			<motion.div
				className="ui-flex ui-w-max"
				style={{
					...(direction === 'horizontal' ? { x: translation } : { y: translation }),
					gap: `${gap}px`,
					flexDirection: direction === 'horizontal' ? 'row' : 'column',
				}}
				ref={ref}
				{...hoverProps}>
				{children}
				{children}
			</motion.div>
		</div>
	);
}
