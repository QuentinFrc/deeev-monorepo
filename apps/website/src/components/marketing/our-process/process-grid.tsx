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
		icon: IconName;
		title: string;
		description: string;
	}[];
};

const DELAY = 9000 as const;
const PROGRESS_EXIT_DURATION = 300 as const;

export const ProcessGrid = ({ cards }: ProcessCarouselProps) => {
	const intervalRef = React.useRef<number | null>(null);
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
				clearInterval(intervalRef.current);
				intervalRef.current = setInterval(updateActiveCard, DELAY);
			}
		},
		[cards.length],
	);

	React.useEffect(() => {
		const interval = setInterval(updateActiveCard, DELAY);
		intervalRef.current = interval;
		return () => clearInterval(interval);
	}, []);

	return (
		<MotionConfig transition={{ duration: PROGRESS_EXIT_DURATION / 1000 }}>
			<div className="grid grid-cols-[1fr_1fr] items-start gap-16 [--aside-top-offset:theme(spacing.8)]">
				<motion.div
					className={'space-y-3'}
					style={{ '--progress': useMotionTemplate`${progress}%` }}>
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
				<div className="relative rounded-2xl bg-dot-[white] size-full p-8 [mask-image:radial-gradient(circle_at_center,white_70%,transparent)]">
					<div className="relative z-10 flex items-center justify-center h-full text-center bg-neutral-800/40">
						Asides here: Button Contact, Briefing, Design / Dev Message, Mises à jour et
						maintenance
					</div>
				</div>
			</div>
		</MotionConfig>
	);
};

type ProcessCardProps = React.ComponentPropsWithoutRef<typeof motion.div> & {
	isActive?: boolean;
};

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
				<div ref={ref} className={'py-3 space-y-4'}>
					<div className={'space-y-4 border-transparent bg-transparent'}>{children}</div>
					<div className="absolute bottom-0 inset-x-0 h-1">
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
