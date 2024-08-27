import React from 'react';
import { ClassValue } from 'clsx';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '#utils';
import { FocusRing } from '#components/focus-ring';

const _field = tv({
	base: [
		'group flex w-full rounded-inherit bg-card px-3 py-2',
		'text-base font-medium text-contrasted-max focus-visible:outline-none',
		'disabled:cursor-not-allowed disabled:opacity-50', // Disabled state
		'placeholder:text-contrasted-min', // Placeholder
	],
	slots: {
		container: [
			'group relative flex size-max items-center',
			'pseudo:pointer-events-none pseudo:absolute pseudo:inset-0 pseudo:z-10 pseudo:rounded-inherit',
			'before:opacity-[0.04] before:ring-2 before:ring-foreground', //before for ring
			'after:border after:border-foreground after:opacity-20 ', // After for border
			'motion-safe:pseudo:transition-opacity motion-safe:pseudo:duration-150 motion-safe:pseudo:ease-in-out', // Transition
			'[&:has(>[data-state=checked])]:after:opacity-100', // Checked state when enabled
		],
		focus: 'ring-offset-2 after:opacity-40', //Add border hover state when focused
	},
	variants: {
		type: {
			checkbox: {
				container: 'rounded-md',
			},
			radio: {
				container: 'rounded-full',
			},
			switch: {
				container: 'rounded-xl',
			},
			text: {
				container: 'rounded-lg',
				focus: 'ring-offset-1',
			},
		},
		disabled: {
			true: {
				container: 'cursor-not-allowed opacity-50',
			},
			false: {
				container: [
					'hover:before:opacity-[0.16] hover:after:opacity-40', // Hover when enabled
					'peer-hover/label:before:opacity-[0.16] peer-hover/label[&:has(>[data-state=unchecked])]:after:opacity-40', // Hover when label hover & enabled
				],
			},
		},
	},
	defaultVariants: {
		disabled: false,
	},
});

const { container, focus } = _field();

type ContainerProps = VariantProps<typeof container> & VariantProps<typeof focus>;

/** Container for all fields
 *  Disabled state is handled by the container, need to pass it as a prop
 * */
type FieldContainerProps = React.ComponentPropsWithoutRef<'div'> &
	Required<Pick<ContainerProps, 'disabled'>> &
	Omit<ContainerProps, 'disabled'> & {
		focusClass?: ClassValue;
	};

const FieldContainer: React.FC<FieldContainerProps> = ({ type, ...props }) => {
	switch (type) {
		case 'checkbox':
		case 'radio':
		case 'switch':
			return <BoxFieldContainer type={type} {...props} />;
		case 'text':
		default:
			return <TextFieldContainer {...props} />;
	}
};

type TextFieldContainerProps = Omit<FieldContainerProps, 'type'>;

/**
 * Container for text fields (input | textarea)
 */
const TextFieldContainer: React.FC<TextFieldContainerProps> = ({
	children,
	className,
	disabled,
	focusClass,
	...props
}) => (
	<FocusRing focusRingClass={cn(focus({ type: 'text' }), focusClass)} isTextInput within>
		<div className={cn(container({ type: 'text', disabled }), className)} {...props}>
			{children}
		</div>
	</FocusRing>
);

type BoxFieldContainerProps = FieldContainerProps &
	VariantProps<typeof container> & {
		type: 'checkbox' | 'radio' | 'switch';
	};

/**
 * Container for box fields (checkbox | radio buttons)
 * */
const BoxFieldContainer: React.FC<BoxFieldContainerProps> = ({
	children,
	type,
	disabled,
	focusClass,
	className,
	...props
}) => (
	<FocusRing within focusRingClass={cn(focus({ type }), focusClass)}>
		<div className={cn(container({ type, disabled }), className)} {...props}>
			{children}
		</div>
	</FocusRing>
);

export { _field, FieldContainer };
export type { FieldContainerProps, BoxFieldContainerProps };
