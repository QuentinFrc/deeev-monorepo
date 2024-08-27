'use client';

import React from 'react';
import {
	AlertCircle,
	ArrowCircleUp,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	ArrowUpRight,
	Atom01,
	Building02,
	Check,
	CheckCircle,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ClipboardDownload,
	Clock,
	Code01,
	Cube01,
	Edit03,
	FileLock01,
	Film03,
	FilterFunnel01,
	Globe01,
	Grid,
	Hearts,
	InfoCircle,
	IconProps as LibIconProps,
	Lightning01,
	Link01,
	Loading02,
	Mail01,
	MessageChatSquare,
	Pencil01,
	Phone01,
	Placeholder,
	Plus,
	Rocket02,
	Send01,
	Star06,
	TextInput,
	Trophy01,
	Users03,
	X,
	XClose,
	ZapFast,
} from '@deeev-pro/deeev-icons';

import { cn, tv, VariantProps } from '#utils';

/*todo: stroke-width based on size*/
const icon = tv({
	base: 'shrink-0 fill-none stroke-current stroke-2',
	variants: {
		size: {
			xs: 'size-3',
			sm: 'size-3.5',
			md: 'size-4',
			lg: 'size-4.5',
			xl: 'size-5',
			xxl: 'size-6',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

type IconVariantProps = Pick<VariantProps<typeof icon>, 'size'>;

const ProjectIcons = {
	ArrowLeft,
	ArrowRight,
	AlertCircle,
	ArrowCircleUp,
	ArrowUp,
	ArrowUpRight,
	Atom: Atom01,
	Check,
	CheckCircle,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Clock,
	Code: Code01,
	Copy: ClipboardDownload,
	Cube: Cube01,
	Edit: Edit03,
	FileLock: FileLock01,
	Film: Film03,
	FilterFunnel01,
	Globe: Globe01,
	Grid,
	Hearts,
	Info: InfoCircle,
	Lightning: Lightning01,
	Link: Link01,
	Loading: Loading02,
	LocalBusiness: Building02,
	Mail: Mail01,
	MessageChatSquare,
	Pencil: Pencil01,
	Placeholder,
	Plus,
	Phone: Phone01,
	Rocket: Rocket02,
	Send: Send01,
	Star: Star06,
	TextInput,
	Trophy: Trophy01,
	Users: Users03,
	X,
	XClose,
	ZapFast,
} as const;

type IconName = keyof typeof ProjectIcons;

type IconProps = LibIconProps &
	IconVariantProps & {
		i: IconName;
	};

const Icon: React.FC<IconProps> = ({ i, size, className, ...props }) => {
	const Icon = ProjectIcons[i];
	return <Icon className={cn(icon({ size }), className)} {...props} />;
};

export { Icon };
export type { IconName, IconProps };
