'use client';

import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '#utils';
import { tv, VariantProps } from 'tailwind-variants';

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
		root: 'ui-grid ui-gap-2',
		item: [
			'ui-relative ui-aspect-square ui-shrink-0 ui-rounded-inherit ui-bg-card ui-p-1 ui-outline-none',
			indicatorClass.hover,
			indicatorClass.checked,
			indicatorClass.disabled,
		],
		indicator: [
			'ui-absolute ui-left-1/2 ui-top-1/2 -ui-translate-x-1/2 -ui-translate-y-1/2 ui-rounded-full ui-bg-foreground', //Base
			'ui-scale-[var(--indicator-scale,0)] ui-opacity-[var(--indicator-opacity,0)]', // Apply opacity & scale
			'motion-safe:ui-transition-gpu motion-safe:ui-duration-150 motion-safe:ui-ease-in-out', //Transition
		],
		focus: indicatorClass.focus,
	},
	variants: {
		size: {
			md: {
				item: 'ui-size-5',
				indicator: 'ui-size-2.5',
			},
			lg: {
				item: 'ui-size-6',
				indicator: 'ui-size-3.5',
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
