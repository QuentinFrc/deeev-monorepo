import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { FormState } from 'react-hook-form';
import { tv } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import * as Button from '@repo/ui/button';
import { ButtonIconProps, ButtonLabelProps } from '@repo/ui/button';

export type SubmitButtonProps = {
	formState: FormState<any>;
	afterSubmitAction?: () => void;
};

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
		label: 'Être recontacté',
		icon: 'Send',
	},
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
	Submitted,
	Success,
}
const transition = { bounce: 0.17, duration: 0.22, delay: 0.1 };
export const SubmitButton: React.FC<SubmitButtonProps> = ({
	formState,
	afterSubmitAction,
	...props
}) => {
	const { isSubmitSuccessful, isSubmitting } = formState;
	const [afterSubmit, setAfterSubmit] = React.useState(false);

	const currentVariant = React.useMemo(() => {
		if (isSubmitting) return ButtonState.Loading;
		if (isSubmitSuccessful)
			return afterSubmit ? ButtonState.Success : ButtonState.Submitted;
		return ButtonState.Default;
	}, [afterSubmit, isSubmitSuccessful, isSubmitting]);

	return (
		<MotionConfig transition={transition}>
			<Button.Root
				className={cn('relative overflow-hidden')}
				variant={'secondary'}
				layout={'full'}
				type={'submit'}
				/*disabled={isSubmitSuccessful}*/
				onPress={() => {
					if (currentVariant === ButtonState.Success) afterSubmitAction?.();
				}}
				data-variant={currentVariant}
				{...props}
				asChild>
				<motion.button
					variants={buttonVariants}
					initial={'default'}
					exit={'exit'}
					onHoverStart={() => setAfterSubmit(true)}
					onHoverEnd={() => setAfterSubmit(false)}>
					{labels.map(({ label, labelProps, icon, iconProps }, index) => {
						return (
							<MotionLabel
								key={label}
								initial={index === 0 ? 'active' : 'from'}
								animate={
									index === currentVariant
										? 'active'
										: index > currentVariant
											? 'from'
											: 'to'
								}
								transition={
									index === ButtonState.Submitted || index === ButtonState.Success
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
