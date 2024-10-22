'use client';

import React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { AriaButtonProps, useButton } from '@react-aria/button';
import { useObjectRef } from '@react-aria/utils';
import { FocusRing } from '#components/focus-ring';
import { cn, tv } from '#utils';
import { VariantProps } from 'tailwind-variants';

import { Border, Halo } from './_gradient-parts';
import { ButtonLabel, HoverEffect, InnerEffect } from './_parts';
import { DEFAULT_BUTTON_LAYOUT, DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from './cn';

/**
 * Focus: Ring around the button
 * Hover: Background effect
 * inner: Inner effect for outline buttons
 * hover: Hover effect for secondary, outline and ghost buttons
 * tap: Tap effects
 * */
const styles = tv({
	slots: {
		root: [
			'ui-group ui-relative ui-z-10 ui-inline-flex ui-touch-none ui-select-none ui-items-center ui-justify-center',
			'ui-px-[calc(var(--base-space)*1.5)] ui-py-[var(--base-space)]',
			'ui-select-none ui-outline-none',
			'[&>svg]:ui-relative [&>svg]:ui-z-20 [&>svg]:ui-mr-[var(--label-space)] [&>svg]:ui-inline-block [&>svg]:ui-size-[var(--icon-size,1rem)]',
		],
		label: [
			'ui-relative ui-z-20 ui-inline-block ui-w-fit ui-px-[var(--label-space)] ui-font-semibold',
		],
		focus: [],
		hover: [
			'ui-absolute ui-inset-0 ui-z-10 ui-rounded-inherit',
			'motion-safe:ui-transition-gpu motion-safe:ui-duration-300 motion-safe:ui-ease-in-out',
			'motion-safe:pseudo:ui-transition-gpu motion-safe:pseudo:ui-duration-300 motion-safe:pseudo:ui-ease-in-out',
		],
	},
	variants: {
		variant: {
			gradient: {
				root: [
					'ui-bg-background ui-text-foreground',
					'pseudo:ui-absolute pseudo:ui-inset-0 pseudo:ui-rounded-inherit pseudo:motion-safe:ui-transition-gpu pseudo:motion-safe:ui-duration-300 pseudo:motion-safe:ui-ease-in-out',
				],
				focus: ['ui-ring-offset-4 [--halo-opacity:0]'],
			},
			secondary: {
				root: 'ui-text-background hover:[--hover-opacity:80%]',
				hover: 'ui-bg-foreground ui-opacity-[var(--hover-opacity,100%)]',
			},
			outline: {
				root: 'ui-text-foreground hover:[--effect-opacity:16%] hover:[--hover-opacity:40%]',
				hover: 'ui-border ui-border-foreground ui-opacity-[var(--hover-opacity,20%)]',
				focus: '[--hover-opacity:40%]',
			},
			ghost: {
				root: [
					'ui-bg-transparent ui-text-contrasted-max',
					'hover:[--hover-opacity:100%] hover:[--hover-scale:100%]',
				],
				hover: [
					'ui-bg-neutral-800',
					'ui-scale-[var(--hover-scale,75%)] ui-opacity-[var(--hover-opacity,0)]',
				],
				focus: ['[--hover-opacity:100%] [--hover-scale:100%]'],
			},
			link: {
				root: [
					'ui-bg-transparent ui-transition-colors ui-duration-300',
					'hover:ui-text-contrasted-max',
				],
			},
		},
		size: {
			icon: {
				root: ['[&>svg]:ui-mr-0'],
			},
			sm: {
				root: [
					'ui-min-h-8 ui-rounded-sm ui-text-sm',
					'[--base-space:6px] [--label-space:theme(spacing[0.75])]',
					'[--icon-size:theme(spacing[4])]',
				],
			},
			md: {
				root: [
					'ui-min-h-10 ui-rounded-md ui-text-base',
					'[--base-space:8px] [--label-space:theme(spacing.1)]',
					'[--icon-size:theme(spacing[5])]',
				],
			},
			lg: {
				root: [
					'ui-min-h-[52px] ui-rounded-lg ui-text-lg',
					'[--base-space:12px] [--label-space:theme(spacing[1.5])]',
					'[--icon-size:theme(spacing[6])]',
				],
			},
		},
		/*todo remove*/
		layout: {
			max: {
				root: ['ui-w-max'],
			},
			full: {
				root: ['ui-w-full'],
			},
		},
		disabled: {
			true: {
				root: ['ui-pointer-events-none'],
				focus: ['ui-ring-0 [--hover-opacity:0%] [--hover-scale:0%]'],
			},
		},
		srOnly: {
			true: {
				label: '!ui-sr-only',
			},
			false: {
				label: [
					'ui-relative ui-z-20 ui-inline-block ui-w-fit ui-px-[var(--label-space)] ui-font-semibold',
				],
			},
		},
	},
	compoundSlots: [
		{
			className: 'ui-opacity-50',
			variant: ['secondary', 'outline', 'ghost'],
			disabled: true,
			slots: ['root'],
		},
		{
			className: 'ui-min-h-auto ui-rounded-none [--base-space:0px]',
			variant: ['link'],
			size: ['sm', 'md', 'lg'],
			slots: ['root'],
		},
		{
			className: 'ui-opacity-50',
			variant: ['gradient', 'outline', 'ghost'],
			disabled: true,
			slots: ['focus'],
		},
	],
	defaultVariants: {
		size: DEFAULT_BUTTON_SIZE,
		layout: DEFAULT_BUTTON_LAYOUT,
		srOnly: false,
	},
});

const { root, focus } = styles();

type WithLabelOrChildren<T> = T &
	(
		| { children: React.ReactNode; label: never }
		| { children: never; label: React.ReactNode }
	);

type ButtonVariantProps = VariantProps<typeof styles>;

type ButtonProps = WithLabelOrChildren<
	ButtonVariantProps & AriaButtonProps & React.ComponentPropsWithoutRef<'button'>
> & { asChild?: boolean };

const NewButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, asChild, variant, size, label, ...props }, forwardedRef) => {
		const ref = useObjectRef(forwardedRef);

		const Comp = asChild ? Slot : 'button';
		const { buttonProps: ariaProps, isPressed } = useButton({ ...props }, ref);
		const buttonProps = {
			...ariaProps,
			'data-pressed': isPressed,
		};

		/**
		 * <Button label={"Label here"} />
		 * <Button><ButtonLabel>Label Here</ButtonLabel><Button>
		 * */
		const innerLabel = label && !asChild ? <ButtonLabel>label</ButtonLabel> : children;

		const innerButton = (
			<Comp
				className={cn(root({ variant, size, disabled: props.disabled }), className)}
				{...buttonProps}
				/*ref={ref}*/
			>
				{variant === 'outline' && <InnerEffect variant={variant} />}
				{variant != 'link' && variant != 'gradient' && <HoverEffect variant={variant} />}
				<Slottable>{innerLabel}</Slottable>
			</Comp>
		);

		return (
			<FocusRing
				within
				focusRingClass={cn(focus({ variant, disabled: props.disabled }))}
				{...props}>
				{variant === 'gradient' ? (
					// @fixme size issues
					<Halo size={'md'} layout={'max'}>
						<Border size={'md'}>{innerButton}</Border>
					</Halo>
				) : (
					innerButton
				)}
			</FocusRing>
		);
	},
);

NewButton.displayName = 'Button';

export type RootProps = Pick<
	VariantProps<typeof root>,
	'variant' | 'disabled' | 'layout' | 'size'
> &
	React.ComponentPropsWithoutRef<'button'> &
	AriaButtonProps & {
		asChild?: boolean;
	};

const Button = React.forwardRef<HTMLButtonElement, RootProps>(
	(
		{
			className,
			size = DEFAULT_BUTTON_SIZE,
			layout = DEFAULT_BUTTON_LAYOUT,
			disabled,
			variant = DEFAULT_BUTTON_VARIANT,
			children,
			asChild,
			...props
		},
		forwardedRef,
	) => {
		const ref = useObjectRef(forwardedRef);

		const Comp = asChild ? Slot : 'button';
		const { buttonProps: ariaProps, isPressed } = useButton({ ...props }, ref);
		const buttonProps = {
			...ariaProps,
			'data-pressed': isPressed,
		};

		return (
			<Comp
				className={cn(root({ variant, size, layout, disabled }), className)}
				{...buttonProps}
				ref={ref}>
				{variant === 'outline' && <InnerEffect variant={variant} />}
				{variant != 'link' && variant != 'gradient' && <HoverEffect variant={variant} />}
				<Slottable>{children}</Slottable>
			</Comp>
		);
	},
);

Button.displayName = 'Button';

type ButtonRootRef = React.ElementRef<typeof Button>;
type ButtonRootProps = RootProps;

const ButtonRoot = React.forwardRef<ButtonRootRef, ButtonRootProps>(
	(
		{
			children,
			variant = DEFAULT_BUTTON_VARIANT,
			layout = DEFAULT_BUTTON_LAYOUT,
			size = DEFAULT_BUTTON_SIZE,
			...props
		},
		ref,
	) => {
		const innerButton = (
			<Button
				ref={ref}
				variant={variant}
				layout={variant === 'gradient' ? 'full' : layout}
				size={size}
				{...props}>
				{children}
			</Button>
		);

		return (
			<FocusRing
				within
				focusRingClass={cn(focus({ variant, disabled: props.disabled }))}
				{...props}>
				{variant === 'gradient' ? (
					<Halo size={'md'} layout={layout}>
						<Border size={'md'}>{innerButton}</Border>
					</Halo>
				) : (
					innerButton
				)}
			</FocusRing>
		);
	},
);

ButtonRoot.displayName = 'Button';

export { ButtonRoot, ButtonRoot as Root };
export type { ButtonRootProps, ButtonRootRef };
