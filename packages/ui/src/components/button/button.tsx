'use client';

import React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { AriaButtonProps, useButton } from '@react-aria/button';
import { useObjectRef } from '@react-aria/utils';
import { VariantProps } from 'tailwind-variants';

import { cn } from '#utils';

import { Border, Halo } from './_gradient-parts';
import { FocusRing, HoverEffect, InnerEffect } from './_parts';
import {
	DEFAULT_BUTTON_LAYOUT,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT,
	root,
} from './cn';

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
				<InnerEffect safeVariant={variant} />
				<HoverEffect safeVariant={variant} />
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
		return (
			<FocusRing safeVariant={variant} disabled={props.disabled}>
				{variant === 'gradient' ? (
					<Halo size={size} layout={layout}>
						<Border size={size}>
							<Button ref={ref} variant={variant} layout={'full'} size={size} {...props}>
								{children}
							</Button>
						</Border>
					</Halo>
				) : (
					<Button ref={ref} variant={variant} layout={layout} size={size} {...props}>
						{children}
					</Button>
				)}
			</FocusRing>
		);
	},
);

ButtonRoot.displayName = 'Button';

export { ButtonRoot, ButtonRoot as Root };
export type { ButtonRootProps, ButtonRootRef };
