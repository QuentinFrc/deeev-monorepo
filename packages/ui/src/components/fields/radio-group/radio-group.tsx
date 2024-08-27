'use client';

import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '#utils';

import { FieldContainer } from '../base';

const indicatorClass = {
	focus: '[--indicator-opacity:0.4] [--indicator-scale:0.6]',
	hover: 'hover:[--indicator-opacity:0.4] hover:[--indicator-scale:0.6]',
	disabled: 'disabled:[--indicator-opacity:0] disabled:[--indicator-scale:0]',
	checked:
		'data-[state="checked"]:[--indicator-opacity:1] data-[state="checked"]:[--indicator-scale:1]',
};

const _radioGroup = tv({
	slots: {
		root: 'grid gap-2',
		item: [
			'relative aspect-square shrink-0 rounded-inherit bg-card p-1 outline-none',
			indicatorClass.hover,
			indicatorClass.checked,
			indicatorClass.disabled,
		],
		indicator: [
			'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground', //Base
			'scale-[var(--indicator-scale,0)] opacity-[var(--indicator-opacity,0)]', // Apply opacity & scale
			'motion-safe:transition-gpu motion-safe:duration-150 motion-safe:ease-in-out', //Transition
		],
		focus: indicatorClass.focus,
	},
	variants: {
		size: {
			md: {
				item: 'size-5',
				indicator: 'size-2.5',
			},
			lg: {
				item: 'size-6',
				indicator: 'size-3.5',
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

const {
	root: radioGroup,
	item: radioItem,
	indicator: radioIndicator,
	focus,
} = _radioGroup();

type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
	className?: string;
};
const RadioGroup = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	RadioGroupProps
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cn(radioGroup(), className)}
			{...props}
			ref={ref}
		/>
	);
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

type RadioItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
	VariantProps<typeof radioItem>;

const RadioItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	RadioItemProps
>(({ className, size = 'md', ...props }, ref) => (
	<FieldContainer type={'radio'} focusClass={focus()} disabled={props.disabled ?? false}>
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(radioItem({ size }), className)}
			{...props}>
			<RadioGroupPrimitive.Indicator
				className={cn(radioIndicator({ size }), className)}
				forceMount
			/>
		</RadioGroupPrimitive.Item>
	</FieldContainer>
));
RadioItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioItem };
export type { RadioGroupProps, RadioItemProps };
