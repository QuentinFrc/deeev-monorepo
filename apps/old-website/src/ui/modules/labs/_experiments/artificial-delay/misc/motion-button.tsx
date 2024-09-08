'use client';

import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { ButtonIconProps, ButtonLabelProps } from '@repo/ui/button';
import * as Button from '@repo/ui/button';

const buttonVariants = {
	default: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
} as const;

const variableLabelWrapper = tv({
	base: 'absolute inset-0 z-10 flex items-center justify-center data-[variant=loading]:animate-fade-loading',
});

const variants = {
	to: {
		y: '-100%',
	},
	active: {
		y: '0%',
	},
	from: {
		y: '100%',
	},
};

type ButtonLabelDef = {
	label: string;
	labelProps?: Partial<ButtonLabelProps>;
	icon: ButtonIconProps['i'];
	iconProps?: Partial<ButtonIconProps>;
};
const labels: ButtonLabelDef[] = [
	{
		label: 'Envoie en cours',
		icon: 'Loading',
		iconProps: {
			className: 'animate-spin',
		},
	},
	{
		label: 'Message envoyé',
		icon: 'Check',
	},
	{
		label: 'Reprendre ma navigation',
		icon: 'ArrowRight',
	},
];

enum ButtonState {
	Default,
	Loading,
	Success,
}

const transition = { bounce: 0.17, duration: 0.22, delay: 0.1 };

type MotionButtonProps = {
	isSubmitting: boolean;
	isSubmitSuccessful: boolean;
	onPress?: () => void;
	initialLabel: string;
	initialIcon: ButtonIconProps['i'];
};

export const MotionButton: React.FC<MotionButtonProps> = ({
	isSubmitting,
	isSubmitSuccessful,
	onPress = () => {},
	initialLabel,
	initialIcon,
}) => {
	const isMobile = useMediaQuery({ breakpoint: 'sm', type: 'max' });

	const currentVariant = React.useMemo(() => {
		if (isSubmitting) return ButtonState.Loading;
		if (isSubmitSuccessful) return ButtonState.Success;
		return ButtonState.Default;
	}, [isSubmitSuccessful, isSubmitting]);
	return (
		<MotionConfig transition={transition}>
			<Button.Root
				className={cn('relative mx-auto w-full overflow-hidden', { 'h-10': isMobile })}
				variant={'secondary'}
				size={isMobile ? 'sm' : 'lg'}
				type={'submit'}
				disabled={isSubmitting || isSubmitSuccessful}
				data-variant={currentVariant}
				onPress={onPress}
				asChild>
				<motion.button variants={buttonVariants} initial={'default'} exit={'exit'}>
					<MotionLabel
						initial={'active'}
						animate={currentVariant === 0 ? 'active' : 'to'}
						transition={undefined}>
						<Button.Label>{initialLabel}</Button.Label>
						<Button.Icon i={initialIcon} />
					</MotionLabel>
					{labels.map(({ label, labelProps, icon, iconProps }, index) => {
						return (
							<MotionLabel
								key={label}
								initial={'from'}
								animate={
									index + 1 === currentVariant
										? 'active'
										: index + 1 > currentVariant
											? 'from'
											: 'to'
								}
								transition={
									index + 1 === ButtonState.Success
										? {
												duration: (transition.duration * 2) / 3,
												delay: (transition.delay * 2) / 3,
											}
										: undefined
								}>
								<Button.Label {...labelProps}>{label}</Button.Label>
								<Button.Icon i={icon} {...iconProps} />
							</MotionLabel>
						);
					})}
				</motion.button>
			</Button.Root>
		</MotionConfig>
	);
};

type MotionLabelProps = React.ComponentPropsWithoutRef<typeof motion.span>;
const MotionLabel: React.FC<MotionLabelProps> = ({ children, className, ...props }) => {
	return (
		<motion.span
			variants={variants}
			className={cn(variableLabelWrapper(), className)}
			{...props}>
			{children}
		</motion.span>
	);
};
