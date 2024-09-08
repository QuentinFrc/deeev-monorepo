'use client';

import React from 'react';
import { motion } from 'framer-motion';

import * as Badge from '@repo/ui/badge';
import { Icon } from '@repo/ui/icons';

import DesignPattern from '../lights/green.png';
import * as TeamCard from './base';
import { TeamMember } from './base';

export const DesignerCard: React.FC<TeamMember> = ({
	firstname = '',
	lastname = '',
	tasks = [],
	avatarImage,
}) => {
	return (
		<TeamCard.Root>
			{/*<TeamCard.CursorTracker>
				<FigmaCursor firstname={firstname} lastname={lastname} />
			</TeamCard.CursorTracker>*/}
			<TeamCard.Content>
				<TeamCard.Background src={DesignPattern} alt={"Trainé d'astéroïdes verte"} />
				<TeamCard.Header>
					<TeamCard.Avatar
						variant={'designer'}
						avatarImage={avatarImage}
						lastname={lastname}
						firstname={firstname}
					/>
					<TeamCard.Title firstname={firstname} lastname={lastname} />
					<Badge.Root variant={'green'} type={'outline'}>
						<Badge.Label>UI/UX Designer</Badge.Label>
						<Icon i={'Pencil'} size={'sm'} />
					</Badge.Root>
				</TeamCard.Header>
				<TeamCard.Tasks tasks={tasks} />
			</TeamCard.Content>
		</TeamCard.Root>
	);
};

/*const IconVariants = {
	'show-icons': {
		opacity: 1,
	},
	'hide-icons': {
		opacity: 0,
	},
};

const FigmaIcon = () => (
	<motion.svg
		xmlns="http://www.w3.org/2000/svg"
		className={'h-8 w-8'}
		viewBox="0 0 24 24"
		variants={IconVariants}>
		<path
			fill="currentColor"
			d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334V2Z"
			opacity=".6"></path>
		<path
			fill="currentColor"
			d="M11.667 8.666H8.333a3.333 3.333 0 0 0 0 6.667h3.334V8.666Z"
			opacity=".4"></path>
		<path
			fill="currentColor"
			d="M18.333 12a3.333 3.333 0 1 1-6.667 0a3.333 3.333 0 0 1 6.667 0Z"></path>
		<path
			fill="currentColor"
			d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334Z"
			opacity=".2"></path>
		<path
			fill="currentColor"
			d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333V2Z"
			opacity=".8"></path>
	</motion.svg>
);*/

/*const TypographyIcon = () => (
	<motion.svg
		xmlns="http://www.w3.org/2000/svg"
		className={'h-8 w-8'}
		viewBox="0 0 24 24"
		variants={IconVariants}>
		<path
			opacity="0.4"
			fill="currentColor"
			d="M2 24v-4h20v4zm3.5-7l5.25-14h2.5l5.25 14h-2.4l-1.25-3.6H9.2L7.9 17zm4.4-5.6h4.2l-2.05-5.8h-.1z"
		/>
	</motion.svg>
);*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FigmaCursor: React.FC<Pick<TeamMember, 'firstname' | 'lastname'>> = ({
	firstname,
	lastname,
}) => {
	return (
		<motion.div
			className={'pointer-events-none relative size-max'}
			animate={{
				x: 'calc(var(--mouseX) - 50%)',
				y: 'calc(var(--mouseY) - 50%)',
				opacity: 'var(--cursor-opacity, 0)',
			}}>
			<svg
				width="22"
				height="24"
				viewBox="0 0 22 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_19_487)">
					<path d="M7.5 17L5 4L16 10.5L10.5 12L7.5 17Z" fill="#1BC47D" />
					<path
						d="M7.009 17.0944L7.25595 18.3786L7.92875 17.2572L10.8254 12.4295L16.1316 10.9824L17.2726 10.6712L16.2544 10.0695L5.25436 3.56954L4.29956 3.00533L4.509 4.09442L7.009 17.0944Z"
						stroke="white"
						strokeLinecap="square"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_19_487"
						x="0.599121"
						y="0.0106201"
						width="20.946"
						height="23.7466"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="1" />
						<feGaussianBlur stdDeviation="1.5" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_19_487"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_19_487"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
			<div
				className={
					'absolute -right-4 top-2/3 w-max translate-x-full bg-green-500 p-1 font-medium text-background'
				}>
				{firstname} {lastname}
			</div>
		</motion.div>
	);
};
