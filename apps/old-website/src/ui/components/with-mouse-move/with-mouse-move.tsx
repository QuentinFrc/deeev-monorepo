'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

type WithMouseMoveProps = Omit<
	React.ComponentPropsWithoutRef<typeof motion.div>,
	'onMouseMove' | 'style'
>;
export const WithMouseMove: React.FC<WithMouseMoveProps> = ({ children, ...props }) => {
	const [ref, bounds] = useMeasure();

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const opacity = useMotionValue(0);

	const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
		if ('ontouchstart' in window) return;
		const { top, left } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	};

	const handleMouseLeave = () => {
		if ('ontouchstart' in window) return;
		opacity.set(0);
	};

	const handleMouseEnter = () => {
		if ('ontouchstart' in window) return;
		opacity.set(1);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
			style={
				{
					'--mouse-offset-x': useMotionTemplate`${bounds.left}px`,
					'--mouse-offset-y': useMotionTemplate`${bounds.top}px`,
					'--mouseX': useMotionTemplate`${mouseX}px`,
					'--mouseY': useMotionTemplate`${mouseY}px`,
					'--opacity': opacity,
				} as React.CSSProperties
			}
			{...props}>
			{children}
		</motion.div>
	);
};
