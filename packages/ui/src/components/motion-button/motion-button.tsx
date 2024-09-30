'use client';

import React from 'react';
import { tv } from '#utils';
import { motion, MotionConfig } from 'framer-motion';

import { ButtonLabel, ButtonRoot, ButtonRootProps } from '../button';

const variants = {
	exit: (isDefaultLabel: boolean) => ({
		y: isDefaultLabel ? '-100%' : '0%',
		opacity: isDefaultLabel ? 0 : 1,
	}),
	initial: (isDefaultLabel: boolean) => ({
		y: isDefaultLabel ? '0%' : '100%',
		opacity: isDefaultLabel ? 1 : 0,
	}),
};
const transition = { bounce: 0.17, duration: 0.22, delay: 0.1 };

type MotionButtonProps = ButtonRootProps;

export const MotionButtonRoot = ({ children, ...props }: MotionButtonProps) => {
	return (
		<MotionConfig transition={transition}>
			<ButtonRoot {...props} asChild>
				<motion.button
					initial={'initial'}
					className={'ui-grid ui-overflow-hidden'}
					whileHover={'exit'}>
					{children}
				</motion.button>
			</ButtonRoot>
		</MotionConfig>
	);
};

const labelStyle = tv({
	base: 'ui-flex ui-w-full ui-items-center ui-gap-1.5 ui-text-center [grid-area:1/1]',
});
type MotionLabelProps = React.ComponentPropsWithoutRef<typeof motion.span>;

export const MotionButtonDefaultLabel = ({ children, ...props }: MotionLabelProps) => {
	return (
		<ButtonLabel className={labelStyle()} asChild>
			<motion.span custom={true} variants={variants} {...props}>
				{children}
			</motion.span>
		</ButtonLabel>
	);
};

export const MotionButtonHoverLabel = ({ children, ...props }: MotionLabelProps) => {
	return (
		<ButtonLabel className={labelStyle()} asChild>
			<motion.span custom={false} variants={variants} {...props}>
				{children}
			</motion.span>
		</ButtonLabel>
	);
};
