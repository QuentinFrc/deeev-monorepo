'use client';

import React from 'react';
import {
	AnimatePresence,
	motion,
	MotionConfig,
	useMotionTemplate,
	useTime,
	useTransform,
	wrap,
} from 'framer-motion';
import useMeasure from 'react-use-measure';

import { Icon, IconName } from '@repo/ui/icons';
import { Progress } from '@repo/ui/progress';
import { Typography } from '@repo/ui/typography';
import { cn } from '@repo/ui/utils';

type ProcessCarouselProps = {
	cards: {
		asset: () => React.ReactNode;
		icon: IconName;
		title: string;
		description: string;
	}[];
};

const DELAY = 9000 as const;
const PROGRESS_EXIT_DURATION = 300 as const;

export const ProcessGrid = ({ cards }: ProcessCarouselProps) => {
	const [cardInterval, setCardInterval] = React.useState<NodeJS.Timeout | undefined>(
		undefined,
	);
	// todo: move to a store to share with carousel asset
	const [activeCard, setActiveCard] = React.useState(0);

	const lastTimeReset = React.useRef(0);

	const time = useTime();
	const progress = useTransform(time, (latestTime) => {
		return wrap(0, 100, ((latestTime - lastTimeReset.current) / DELAY) * 100);
	});

	const updateActiveCard = React.useCallback(
		(card?: number) => {
			setActiveCard((activeCard) => (card ?? activeCard + 1) % cards.length);
			if (card !== undefined) {
				lastTimeReset.current = time.get();
				cardInterval && clearInterval(cardInterval);
				const newInterval = setInterval(updateActiveCard, DELAY);
				setCardInterval(newInterval);
			}
		},
		[cards.length, time, cardInterval, setCardInterval],
	);

	React.useEffect(() => {
		const interval = setInterval(updateActiveCard, DELAY);
		setCardInterval(interval);
		return () => clearInterval(interval);
	}, [updateActiveCard]);

	return (
		<MotionConfig transition={{ duration: PROGRESS_EXIT_DURATION / 1000 }}>
			<div className="grid grid-cols-[1fr_1fr] items-start gap-16 [--aside-top-offset:theme(spacing.8)]">
				<motion.div
					className={'space-y-3'}
					style={
						{ '--progress': useMotionTemplate`${progress}%` } as React.CSSProperties
					}>
					{cards.map((card, index) => (
						<ProcessCard
							key={index}
							isActive={activeCard === index}
							onClick={() => activeCard !== index && updateActiveCard(index)}>
							<div>
								<div className={'space-y-1'}>
									<Icon i={card.icon} />
									<Typography.Default weight={'medium'} size={'base'} asChild>
										<motion.div
										/*variants={{
												default: { y: '20%' },
												active: { y: '0%' },
											}}*/
										>
											{card.title}
										</motion.div>
									</Typography.Default>

									{activeCard === index ? (
										<Typography.Default color={'contrasted-mid'} asChild>
											<motion.div
												initial={'default'}
												animate={'active'}
												exit={'default'}
												variants={{
													default: { y: '-20%', opacity: 0 },
													active: { y: '0%', opacity: 1 },
												}}>
												{card.description} Lorem ipsum dolor sit amet, consectetur
												adipisicing elit. Alias dicta dignissimos eos nisi pariatur
												perferendis, quae quaerat quidem sequi voluptates?
											</motion.div>
										</Typography.Default>
									) : (
										<Typography.Default color={'contrasted-mid'} asChild>
											<motion.div
												initial={'default'}
												animate={'active'}
												exit={'default'}
												variants={{
													default: { y: '-20%', opacity: 0 },
													active: { y: '0%', opacity: 1 },
												}}>
												{card.description}
											</motion.div>
										</Typography.Default>
									)}
								</div>
							</div>
						</ProcessCard>
					))}
				</motion.div>
				<div className="relative size-full rounded-2xl p-8 bg-dot-[white] [mask-image:radial-gradient(circle_at_center,white_70%,transparent)]">
					<div className="relative z-10 grid h-full place-items-center bg-neutral-800/40 text-center *:[grid-area:1/1]">
						{/*Asides here: Button Contact, Briefing, Design / Dev Message, Mises à jour et
						maintenance*/}
						{cards.map(({ asset: CardAsset }, index) => (
							<motion.div
								initial={'initial'}
								animate={activeCard === index ? 'active' : 'exit'}
								variants={{
									active: { opacity: 1 },
									initial: { opacity: 0 },
									exit: { opacity: 0, y: '-100%' },
								}}
								key={index}>
								<CardAsset />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</MotionConfig>
	);
};

type ProcessCardProps = Omit<
	React.ComponentPropsWithoutRef<typeof motion.div>,
	'children'
> &
	React.PropsWithChildren<{
		isActive?: boolean;
	}>;

const ProcessCard = ({ children, isActive = false, ...props }: ProcessCardProps) => {
	const [ref, bounds] = useMeasure();
	return (
		<AnimatePresence initial={false} mode="popLayout">
			<motion.div
				className={'relative overflow-hidden'}
				variants={{
					active: { height: bounds.height > 0 ? bounds.height : 'auto', opacity: 1 },
					default: { height: bounds.height > 0 ? bounds.height : 'auto', opacity: 0.4 },
				}}
				animate={isActive ? 'active' : 'default'}
				{...props}>
				<div ref={ref} className={'space-y-4 py-3'}>
					<div className={'space-y-4 border-transparent bg-transparent'}>{children}</div>
					<div className="absolute inset-x-0 bottom-0 h-1">
						<AnimatePresence>
							{isActive && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}>
									<Progress
										className={cn(
											'[--percentage:0]',
											isActive && '[--percentage:var(--progress)]',
										)}
										uncontrolled
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
