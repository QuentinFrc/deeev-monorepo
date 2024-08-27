'use client';

import React from 'react';
import Image from 'next/image';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '#utils';

const avatarVariants = tv({
	slots: {
		root: [
			'relative flex shrink-0 bg-neutral-950',
			/*'before:absolute before:inset-0 before:z-10 before:size-full before:rounded-inherit before:border before:border-neutral-800',*/
		],
		image: ['aspect-square size-full rounded-inherit'],
		fallback: [
			'flex size-full items-center justify-center rounded-full text-contrasted-max',
		],
		indicator: [
			'absolute bottom-0 right-0 z-20 rounded-full',
			'after:absolute after:inset-0 after:z-10 after:rounded-inherit after:border after:border-background after:opacity-30',
		],
	},
	variants: {
		size: {
			sm: { root: 'size-6 text-[0.5rem]', indicator: 'size-2' },
			md: { root: 'size-8 text-xs', indicator: 'size-2.5' },
			lg: { root: 'size-10 text-sm', indicator: 'size-3' },
			xl: { root: 'size-12 text-base', indicator: 'size-3.5' },
			'2xl': { root: 'size-14 text-lg', indicator: 'size-4' },
			'3xl': { root: 'size-16 text-xl', indicator: 'size-4.5' },
			'4xl': { root: 'size-20 text-2xl', indicator: 'size-5' },
		},
		shape: {
			square: { root: 'rounded-none' },
			rounded: { root: 'rounded' },
			'rounded-sm': { root: 'rounded-sm' },
			'rounded-md': { root: 'rounded-md' },
			'rounded-lg': { root: 'rounded-lg' },
			'rounded-xl': { root: 'rounded-xl' },
			'rounded-full': { root: 'rounded-full' },
		},
		type: {
			online: {
				indicator: 'bg-success-600',
			},
			offline: { indicator: 'bg-danger-600' },
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
