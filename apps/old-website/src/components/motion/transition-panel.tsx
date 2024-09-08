'use client';

import React from 'react';
import { AnimatePresence, motion, MotionProps, Transition, Variant } from 'framer-motion';

import { cn } from '@/lib/utils';

type TransitionPanelProps = {
	children: React.ReactNode[];
	className?: string;
	transition?: Transition;
	activeIndex: number;
	variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

export const TransitionPanel = React.forwardRef<HTMLDivElement, TransitionPanelProps>(
	(
		{
			children,
			className,
			transition,
			variants,
			activeIndex,
			...motionProps
		}: TransitionPanelProps,
		ref,
	) => (
		<div ref={ref} className={cn('relative [transform-style:preserve-3d]', className)}>
			<AnimatePresence initial={false} mode="popLayout" custom={motionProps.custom}>
				<motion.div
					key={activeIndex}
					variants={variants}
					transition={transition}
					initial="enter"
					animate="center"
					exit="exit"
					{...motionProps}>
					{children[activeIndex]}
				</motion.div>
			</AnimatePresence>
		</div>
	),
);

TransitionPanel.displayName = 'TransitionPanel';
