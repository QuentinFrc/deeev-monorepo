'use client';

import React, { ComponentPropsWithoutRef, ElementRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '#utils';
import { AnimatePresence, motion } from 'framer-motion';
import { tv, VariantProps } from 'tailwind-variants';

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
			'ui-relative ui-inline-flex ui-shrink-0 ui-items-center ui-justify-center ui-text-foreground focus:ui-outline-none',
			hoverIndicatorClass.hover,
			hoverIndicatorClass.checked,
			hoverIndicatorClass.disabled,
		],
		indicator: [
			'ui-flex ui-items-center ui-justify-center ui-stroke-current ui-p-0.5 ui-text-contrasted-max',
		],
		hoverIndicator: [
			'ui-absolute ui-left-1/2 ui-top-1/2 -ui-translate-x-1/2 -ui-translate-y-1/2 ui-stroke-foreground', //Base
			'motion-safe:ui-transition-opacity motion-safe:ui-delay-75 motion-safe:ui-duration-150 motion-safe:ui-ease-in-out', //Transition
			'ui-opacity-[var(--hover-indicator-opacity,0)]', //Apply css variable
		],
		focus: hoverIndicatorClass.focus,
	},
	variants: {
		size: {
			md: {
				root: 'ui-size-5',
				indicator: 'ui-size-4',
				hover: 'ui-size-3',
			},
			lg: {
				root: 'ui-size-6',
				indicator: 'ui-size-5 ui-stroke-[1.75]',
				hover: 'ui-size-3.5',
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
