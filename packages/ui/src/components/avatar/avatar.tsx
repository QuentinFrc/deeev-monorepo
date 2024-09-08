'use client';

import React from 'react';
import Image from 'next/image';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '#utils';
import { tv, VariantProps } from 'tailwind-variants';

const avatarVariants = tv({
	slots: {
		root: [
			'ui-relative ui-flex ui-shrink-0 ui-bg-neutral-950',
			/*'before:absolute before:inset-0 before:z-10 before:size-full before:rounded-inherit before:border before:border-neutral-800',*/
		],
		image: ['ui-aspect-square ui-size-full ui-rounded-inherit'],
		fallback: [
			'ui-flex ui-size-full ui-items-center ui-justify-center ui-rounded-full ui-text-contrasted-max',
		],
		indicator: [
			'ui-absolute ui-bottom-0 ui-right-0 ui-z-20 ui-rounded-full',
			'after:ui-absolute after:ui-inset-0 after:ui-z-10 after:ui-rounded-inherit after:ui-border after:ui-border-background after:ui-opacity-30',
		],
	},
	variants: {
		size: {
			sm: { root: 'ui-size-6 ui-text-[0.5rem]', indicator: 'ui-size-2' },
			md: { root: 'ui-size-8 ui-text-xs', indicator: 'ui-size-2.5' },
			lg: { root: 'ui-size-10 ui-text-sm', indicator: 'ui-size-3' },
			xl: { root: 'ui-size-12 ui-text-base', indicator: 'ui-size-3.5' },
			'2xl': { root: 'ui-size-14 ui-text-lg', indicator: 'ui-size-4' },
			'3xl': { root: 'ui-size-16 ui-text-xl', indicator: 'ui-size-4.5' },
			'4xl': { root: 'ui-size-20 ui-text-2xl', indicator: 'ui-size-5' },
		},
		shape: {
			square: { root: 'ui-rounded-none' },
			rounded: { root: 'ui-rounded' },
			'rounded-sm': { root: 'ui-rounded-sm' },
			'rounded-md': { root: 'ui-rounded-md' },
			'rounded-lg': { root: 'ui-rounded-lg' },
			'rounded-xl': { root: 'ui-rounded-xl' },
			'rounded-full': { root: 'ui-rounded-full' },
		},
		type: {
			online: {
				indicator: 'ui-bg-success-600',
			},
			offline: { indicator: 'ui-bg-danger-600' },
		},
	},
	defaultVariants: {
		size: 'md',
		shape: 'rounded',
		type: 'online',
	},
});
const { root, image, fallback, indicator } = avatarVariants();

type AvatarVariants = VariantProps<typeof root>;

type AvatarProps = AvatarVariants &
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	AvatarProps
>(({ className, size, shape, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn(root({ size, shape }), className)}
		{...props}
	/>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
	Omit<React.ComponentPropsWithoutRef<typeof Image>, 'src'>;
const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	AvatarImageProps
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn(image(), className)}
		{...props}
		alt={props.alt}
		asChild>
		<Image src={props.src ?? ''} alt={props.alt} />
	</AvatarPrimitive.Image>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback ref={ref} className={cn(fallback(), className)} {...props} />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type AvatarIndicatorProps = VariantProps<typeof indicator> &
	React.ComponentPropsWithoutRef<'div'>;

const AvatarIndicator = React.forwardRef<React.ElementRef<'div'>, AvatarIndicatorProps>(
	({ className, size, type, ...props }, ref) => (
		<div ref={ref} className={cn(indicator({ size, type }), className)} {...props} />
	),
);

AvatarIndicator.displayName = 'AvatarIndicator';

export {
	Avatar,
	AvatarImage,
	AvatarFallback,
	AvatarIndicator,
	//
	Avatar as Root,
	AvatarImage as Image,
	AvatarFallback as Fallback,
	AvatarIndicator as Indicator,
};

export type { AvatarProps, AvatarProps as Props };
