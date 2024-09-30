import React from 'react';
import { FocusRing } from '#components/focus-ring';
import { cn } from '#utils';
import { ClassValue } from 'clsx';
import { tv, VariantProps } from 'tailwind-variants';

const _field = tv({
	base: [
		'ui-group ui-flex ui-w-full ui-rounded-inherit ui-bg-card ui-px-3 ui-py-2',
		'ui-text-base ui-font-medium ui-text-contrasted-max focus-visible:ui-outline-none',
		'disabled:ui-cursor-not-allowed disabled:ui-opacity-50', // Disabled state
		'placeholder:ui-text-contrasted-low', // Placeholder
	],
	slots: {
		container: [
			'ui-group ui-relative ui-flex ui-size-max ui-items-center',
			'pseudo:ui-pointer-events-none pseudo:ui-absolute pseudo:ui-inset-0 pseudo:ui-z-10 pseudo:ui-rounded-inherit',
			'before:ui-opacity-[0.04] before:ui-ring-2 before:ui-ring-foreground', //before for ring
			'after:ui-border after:ui-border-foreground after:ui-opacity-20 ', // After for border
			'motion-safe:pseudo:ui-transition-opacity motion-safe:pseudo:ui-duration-150 motion-safe:pseudo:ui-ease-in-out', // Transition
			'[&:has(>[data-state=checked])]:after:ui-opacity-100', // Checked state when enabled
		],
		focus: 'ui-ring-offset-2 after:ui-opacity-40', //Add border hover state when focused
	},
	variants: {
		type: {
			checkbox: {
				container: 'ui-rounded-md',
			},
			radio: {
				container: 'ui-rounded-full',
			},
			switch: {
				container: 'ui-rounded-xl',
			},
			text: {
				container: 'ui-rounded-lg',
				focus: 'ui-ring-offset-1',
			},
		},
		disabled: {
			true: {
				container: 'ui-cursor-not-allowed ui-opacity-50',
			},
			false: {
				container: [
					'hover:before:ui-opacity-[0.16] hover:after:ui-opacity-40', // Hover when enabled
					'peer-hover/label:before:ui-opacity-[0.16] peer-hover/label[&:has(>[data-state=unchecked])]:after:ui-opacity-40', // Hover when label hover & enabled
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
