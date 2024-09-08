'use client';

import React from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import * as Avatar from '@repo/ui/avatar';
import * as Badge from '@repo/ui/badge';
import * as Card from '@repo/ui/card';
import { Headings } from '@ui/components/typography';

const cardVariants = tv({
	slots: {
		avatarWrapper: ['relative mx-auto overflow-hidden rounded-full'],
	},
	variants: {
		variant: {
			designer: {
				avatarWrapper: [
					'bg-[linear-gradient(45deg,hsl(var(--green-700)),hsl(var(--green-500)))]',
				],
			},
			developer: {
				avatarWrapper: [
					'bg-[linear-gradient(45deg,hsl(var(--cyan-700)),hsl(var(--cyan-500)))]',
				],
			},
			cloud: {
				avatarWrapper: [
					'bg-[linear-gradient(45deg,hsl(var(--fuchsia-700)),hsl(var(--fuchsia-500)))]',
				],
			},
		},
	},
});

const { avatarWrapper } = cardVariants();

export type TeamMember = {
	firstname: string;
	lastname: string;
	tasks: string[];
	avatarImage: StaticImageData;
};

export type TeamCardAvatarProps = Pick<
	TeamMember,
	'firstname' | 'lastname' | 'avatarImage'
> &
	VariantProps<typeof avatarWrapper> &
	Omit<ImageProps, 'src' | 'alt'>;

export const TeamCardAvatar: React.FC<TeamCardAvatarProps> = ({
	variant,
	avatarImage,
	lastname,
	firstname,
	...props
}) => {
	return (
		<div className={cn(avatarWrapper({ variant }))}>
			<Avatar.Root
				size={'4xl'}
				shape={'rounded-full'}
				className={'size-32 bg-transparent'}>
				{/*<Avatar.Image asChild >*/}
				<Image
					src={avatarImage}
					alt={`${firstname} ${lastname}`}
					quality={100}
					className={'object-cover'}
					width={128}
					height={128}
					{...props}
				/>
				{/*</Avatar.Image>*/}
				{/*<Avatar.Fallback>{firstname.charAt(0) + lastname.charAt(0)}</Avatar.Fallback>*/}
			</Avatar.Root>
		</div>
	);
};

type TeamMemberCardProps = React.PropsWithChildren;
const TeamCard: React.FC<TeamMemberCardProps> = ({ children }) => {
	return (
		<div className="relative max-md:mx-auto max-md:max-w-[450px]">
			<Card.Root className="flex flex-col items-center gap-4 overflow-visible">
				{children}
			</Card.Root>
		</div>
	);
};

type TeamCardContentProps = React.PropsWithChildren;

const TeamCardContent: React.FC<TeamCardContentProps> = ({ children }) => {
	return (
		<Card.Content className={'relative z-10 flex flex-col items-center gap-6'}>
			{children}
		</Card.Content>
	);
};

type TeamCardHeaderProps = React.PropsWithChildren;
const TeamCardHeader: React.FC<TeamCardHeaderProps> = ({ children }) => {
	return (
		<Card.Header className={'relative z-10 flex flex-col items-center gap-2'}>
			{children}
		</Card.Header>
	);
};

type TeamCardTitleProps = {
	firstname: string;
	lastname: string;
};
const TeamCardTitle: React.FC<TeamCardTitleProps> = ({ firstname, lastname }) => {
	return (
		<Headings.H3 className={'text-center text-contrasted-max'}>
			{firstname} <span className="block uppercase">{lastname}</span>
		</Headings.H3>
	);
};

const TeamCardTasks: React.FC<{ tasks: string[] }> = ({ tasks }) => {
	return (
		<div className={'flex max-w-[90%] flex-row flex-wrap justify-center gap-2'}>
			{tasks.map((job) => (
				<Badge.Root
					variant={'neutral'}
					type={'outline'}
					key={job}
					className={'inline-flex items-center gap-1'}>
					<Badge.Label>{job}</Badge.Label>
				</Badge.Root>
			))}
		</div>
	);
};

type TeamCardBackgroundProps = {
	src: ImageProps['src'];
	alt: ImageProps['alt'];
} & React.ComponentPropsWithoutRef<'div'>;
const TeamCardBackground: React.FC<TeamCardBackgroundProps> = ({
	alt,
	src,
	...props
}) => (
	<div
		className={cn('absolute inset-0 -z-10 overflow-hidden rounded-lg opacity-100')}
		{...props}>
		<Image alt={alt} src={src} fill />
	</div>
);

export const CursorTracker: React.FC<React.PropsWithChildren> = ({ children }) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const opacity = useMotionValue(0);

	const templateX = useMotionTemplate`${mouseX}px`;
	const templateY = useMotionTemplate`${mouseY}px`;

	const OFFSET = 5;

	/**
	 * Track mouse cursor and set mouseX & mouseY*/
	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		mouseX.set(event.clientX - rect.left); // set mouseX to the horizontal position of the mouse cursor relative to the current target element
		mouseY.set(event.clientY - rect.top); // set mouseY to the vertical position of the mouse cursor relative to the current target element

		/**
		 * Check cursor is near to target border
		 * -> Progressively fade out cursor
		 * */
		const borderDistanceX = Math.min(
			Math.abs(event.clientX - rect.left),
			Math.abs(event.clientX - rect.right),
		);

		const borderDistanceY = Math.min(
			Math.abs(event.clientY - rect.top),
			Math.abs(event.clientY - rect.bottom),
		);

		const borderDistance = Math.min(borderDistanceX, borderDistanceY) + OFFSET;

		opacity.set(borderDistance / 50);
	};

	const handleMouseLeave = () => {
		opacity.set(0);
	};
	return (
		<motion.div
			className={'absolute inset-0 z-20 cursor-none'}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={
				{
					'--mouseX': templateX,
					'--mouseY': templateY,
					'--cursor-opacity': opacity,
				} as any
			}>
			{children}
		</motion.div>
	);
};

export {
	TeamCard as Root,
	TeamCardContent as Content,
	TeamCardHeader as Header,
	TeamCardAvatar as Avatar,
	TeamCardTitle as Title,
	TeamCardTasks as Tasks,
	TeamCardBackground as Background,
};
