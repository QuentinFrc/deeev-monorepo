'use client';

import React, { ComponentPropsWithoutRef, ElementRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { AnimatePresence, motion } from 'framer-motion';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '#utils';

import { FieldContainer } from '../base';

const hoverIndicatorClass = {
	focus: '[--hover-indicator-opacity:0.4]',
	hover: 'hover:[--hover-indicator-opacity:0.4]',
	disabled: 'disabled:[--hover-indicator-opacity:0]',
	checked: 'data-[state=checked]:[--hover-indicator-opacity:0]',
};

const _checkbox = tv({
	slots: {
		root: [
			'relative inline-flex shrink-0 items-center justify-center text-foreground focus:outline-none',
			hoverIndicatorClass.hover,
			hoverIndicatorClass.checked,
			hoverIndicatorClass.disabled,
		],
		indicator: [
			'flex items-center justify-center stroke-current p-0.5 text-contrasted-max',
		],
		hoverIndicator: [
			'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-foreground', //Base
			'motion-safe:transition-opacity motion-safe:delay-75 motion-safe:duration-150 motion-safe:ease-in-out', //Transition
			'opacity-[var(--hover-indicator-opacity,0)]', //Apply css variable
		],
		focus: hoverIndicatorClass.focus,
	},
	variants: {
		size: {
			md: {
				root: 'size-5',
				indicator: 'size-4',
				hover: 'size-3',
			},
			lg: {
				root: 'size-6',
				indicator: 'size-5 stroke-[1.75]',
				hover: 'size-3.5',
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

const {
	root: checkbox,
	indicator: checkboxIndicator,
	hoverIndicator: checkboxHoverIndicator,
	focus,
} = _checkbox();

type CheckboxVariantProps = VariantProps<typeof checkbox>;

type CheckboxProps = CheckboxVariantProps &
	ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const Checkbox = React.forwardRef<
	ElementRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ className, size, ...props }, ref) => (
	<FieldContainer
		type={'checkbox'}
		focusClass={focus()}
		disabled={props.disabled ?? false}>
		<CheckboxPrimitive.Root
			ref={ref}
			className={cn(checkbox({ size }), className)}
			{...props}>
			<CheckboxHoverIndicator size={size} />
			<CheckboxIndicator size={size} />
		</CheckboxPrimitive.Root>
	</FieldContainer>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

type CheckboxHoverIndicatorProps = CheckboxVariantProps &
	React.ComponentPropsWithoutRef<'svg'>;

const CheckboxHoverIndicator: React.FC<CheckboxHoverIndicatorProps> = ({
	size,
	className,
	...props
}) => (
	<svg
		className={cn(checkboxHoverIndicator({ size }), className)}
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			d="M13 4.5625L6.125 11.4375L3 8.3125"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.75"
		/>
	</svg>
);

type CheckboxIndicatorProps = CheckboxVariantProps &
	CheckboxPrimitive.CheckboxIndicatorProps;

const CheckboxIndicator: React.FC<CheckboxIndicatorProps> = ({
	size,
	className,
	...props
}) => (
	<CheckboxPrimitive.Indicator {...props} asChild>
		<AnimatePresence>
			<motion.svg
				className={cn(checkboxIndicator({ size }), className)}
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<motion.path
					initial={{ pathLength: 1, pathOffset: 1 }}
					animate={{ pathLength: 1, pathOffset: 0 }}
					transition={{ delay: 0.14, duration: 0.15 }}
					d="M13 4.5625L6.125 11.4375L3 8.3125"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.75"
				/>
			</motion.svg>
		</AnimatePresence>
	</CheckboxPrimitive.Indicator>
);

export { Checkbox };
export type { CheckboxProps };
