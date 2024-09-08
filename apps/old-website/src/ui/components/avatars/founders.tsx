'use client';

import React from 'react';
import Image from 'next/image';
import { Founders } from '@/config';
import { motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

import { cn } from '@/lib/utils';
import * as Avatar from '@repo/ui/avatar';
import * as Badge from '@repo/ui/badge';
import * as Tooltip from '@repo/ui/tooltip';

export const FoundersAvatars = () => {
	const [currentCard, setCurrentCard] = React.useState<number | null>(null);

	const [ref, bounds] = useMeasure();

	const x = useMotionValue<number>(0);
	/*const width = useMotionValue<number>(0);
	const height = useMotionValue<number>(0);
	const widthTransformed = useSpring(width, { damping: 15, stiffness: 222 });*/

	const onOpenChange = (open: boolean) => {
		if (!open) setCurrentCard(null);
	};

	const handleAvatarMouseHover = (index: number | null) => {
		setCurrentCard(index);
	};

	return (
		// todo resolve bug when tooltip doesn't open on mouse re-enter
		<Tooltip.Root onOpenChange={onOpenChange} open={currentCard != null}>
			<motion.div
				className={'relative flex items-center -space-x-2'}
				onMouseMove={(e) => {
					//Get cursor position relative to target
					const rect = e.currentTarget.getBoundingClientRect();
					const xPos = e.clientX - rect.left;
					x.set(xPos);
				}}>
				<Tooltip.Trigger asChild>
					<div className={'absolute bottom-0 left-1/2 -translate-x-1/2'} />
				</Tooltip.Trigger>
				{Founders.map((f, i) => (
					<Avatar.Root
						className={cn([
							'relative z-10 inline-block rounded-full',
							'size-10 border-2 border-background',
						])}
						key={f.name}
						onMouseEnter={() => handleAvatarMouseHover(i + 1)}
						onMouseLeave={() => handleAvatarMouseHover(null)}>
						<Image
							src={f.avatarSrc}
							alt={f.name}
							width={64}
							height={64}
							quality={90}
							className={'aspect-square rounded-inherit bg-border object-cover'}
						/>
					</Avatar.Root>
				))}
			</motion.div>
			<Tooltip.Content
				side={'bottom'}
				className={'box-content overflow-hidden p-0 rounded-lg-plus-[4px]'}
				transition={{ duration: 0.24 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				style={{
					x,
					width: bounds.width ?? 'auto',
					height: bounds.height ?? 'auto',
				}}>
				<div ref={ref} className={'absolute inset-0 grid size-max'}>
					{Founders.map((f, i) => (
						<motion.div
							className={'flex size-max items-center gap-2 p-1 [grid-area:1_/_1]'}
							key={f.name}
							initial={'top'}
							animate={
								currentCard === i + 1
									? 'active'
									: !currentCard || currentCard >= i + 1
										? 'top'
										: 'bottom'
							}
							variants={{
								top: { opacity: 0, y: '-70%' },
								active: { opacity: 1, y: '0%' },
								bottom: { opacity: 0, y: '70%' },
							}}>
							<Badge.Root size={'sm'} variant={'neutral'}>
								<Badge.Label>{f.job}</Badge.Label>
							</Badge.Root>
							<span className="whitespace-nowrap pl-1 pr-2">{f.name}</span>
						</motion.div>
					))}
				</div>
			</Tooltip.Content>
		</Tooltip.Root>
	);
};
