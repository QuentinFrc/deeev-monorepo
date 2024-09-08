'use client';

import React from 'react';
import * as TabsPrimitives from '@/components/ui-core/tabs';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

import { WebappProduct } from './webapp';

type TabsElements = {
	id: string;
	trigger: React.ReactNode;
	content: React.ReactNode;
};

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 364 : -364,
		opacity: 0,
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 364 : -364,
		opacity: 0,
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
	}),
};

const items: TabsElements[] = [
	{
		id: '0',
		trigger: 'Agence',
		content: 'Agence',
	},
	{
		id: '1',
		trigger: 'Design',
		content: 'Design',
	},
	{
		id: '2',
		trigger: 'Web App',
		content: <WebappProduct />,
	},
];

export const ProductSwitcher = () => {
	const [activeTab, setActiveTab] = React.useState(items[0].id);

	return (
		<div className={'flex flex-col items-center gap-8 py-12'}>
			<TabsPrimitives.Root
				defaultValue={items[0].id}
				value={activeTab}
				onValueChange={setActiveTab}
				className={'space-y-8'}>
				<TabsPrimitives.List>
					{items.map((item) => (
						<TabsPrimitives.Trigger key={item.id} value={item.id}>
							{item.trigger}
						</TabsPrimitives.Trigger>
					))}
				</TabsPrimitives.List>
				<div className="flex flex-col gap-4">
					{items.map((item) => (
						<TabContent item={item} isActive={activeTab === item.id} key={item.id} />
					))}
				</div>
			</TabsPrimitives.Root>
		</div>
	);
};

type TabContentProps = {
	item: TabsElements;
	isActive: boolean;
};
const TRANSITION = {
	type: 'spring',
	bounce: 0.05,
	duration: 0.3,
};
const TabContent = ({ item }: TabContentProps) => {
	const formContainerRef = React.useRef<HTMLDivElement>(null);
	const uniqueId = React.useId();
	const [isActive, setIsActive] = React.useState(false);

	return (
		<MotionConfig transition={TRANSITION}>
			<div className={'relative'} onClick={() => setIsActive((state) => !state)}>
				<TabsPrimitives.Content value={item.id} forceMount>
					<motion.div
						transition={{ duration: 0.5 }}
						key="tiny"
						className={'bg-contrasted-min'}
						layoutId={`popover-${uniqueId}`}>
						<motion.span
							layout={'position'}
							layoutId={`popover-label-${uniqueId}`}
							className="text-sm">
							{item.trigger}
						</motion.span>
					</motion.div>
					<AnimatePresence>
						{isActive && (
							<motion.div
								ref={formContainerRef}
								layoutId={`popover-${uniqueId}`}
								className="absolute h-[200px] w-[364px] overflow-hidden border bg-contrasted-min outline-none"
								style={{
									borderRadius: 12,
								}}>
								<motion.span
									layoutId={`popover-label-${uniqueId}`}
									aria-hidden="true"
									className="absolute left-4 top-3 select-none text-sm">
									Extended - {item.trigger}
								</motion.span>
								{item.content}
							</motion.div>
						)}
					</AnimatePresence>
				</TabsPrimitives.Content>
			</div>
		</MotionConfig>
	);
};
