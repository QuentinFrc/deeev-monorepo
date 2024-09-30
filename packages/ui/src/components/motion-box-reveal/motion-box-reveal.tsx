'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '#utils';
import { motion, MotionConfig, useAnimation } from 'framer-motion';

type TextBoxContext = {
	items: string[];
	activeItemId: string;
};

const TextBoxContext = React.createContext<TextBoxContext | undefined>(undefined);

const useTextBoxContext = () => {
	const context = React.useContext(TextBoxContext);
	if (!context) {
		throw new Error('TextBoxContext must be used within a TextBoxCarousel');
	}
	return context;
};

const variants = {
	initial: { y: '105%', transition: { duration: 0 } },
	hide: { y: '0%' },
	exit: { y: '-105%' },
};

type TextBoxElement = {
	content: string;
	id: string;
} & Pick<React.ComponentPropsWithoutRef<'span'>, 'className' | 'style'>;

type BoxProps = React.PropsWithChildren<{
	items: TextBoxElement[];
	delay?: number;
	direction?: 'to-left' | 'to-right';
}>;

const DEFAULT_DELAY = 5000;

export const TextBoxCarousel = ({ items, delay, children, direction }: BoxProps) => {
	const controls = useAnimation();

	const [activeIndex, setActiveIndex] = React.useState(0);
	const activeItemId = React.useMemo(() => items[activeIndex]!.id, [activeIndex, items]);

	const sequence = () => {
		controls.set('initial');

		controls
			.start('hide')
			.then(() => {
				setActiveIndex((i) => (i + 1) % items.length);
			})
			.then(() => {
				controls.start('exit');
			});
	};

	React.useEffect(() => {
		const interval = setInterval(sequence, delay || DEFAULT_DELAY);

		return () => clearInterval(interval);
	}, [controls]);

	return (
		/*transition={{ duration: 0.24, ease: 'easeIn', staggerChildren: 0.02 }}>*/
		<MotionConfig transition={{ duration: 0.18, ease: 'easeIn', staggerChildren: 0.02 }}>
			<TextBoxContext.Provider
				value={{
					items: items.map((item) => item.content),
					activeItemId,
				}}>
				<span
					className={
						'ui-relative ui-inline-block ui-w-fit ui-overflow-hidden ui-align-bottom'
					}>
					<motion.span
						initial="initial"
						animate={controls}
						className={cn('ui-relative ui-grid')}>
						{children}
						<motion.span
							className={cn(
								'ui-pointer-events-none ui-absolute ui-inset-0 ui-flex -ui-space-x-1',
								direction === 'to-right' ? 'ui-flex-row' : 'ui-flex-row-reverse',
							)}>
							{new Array(24).fill(0).map((_, i) => (
								<motion.span
									key={i}
									variants={variants}
									className={cn('ui-block ui-size-full ui-bg-black [z-index:3]')}
								/>
							))}
						</motion.span>
					</motion.span>
				</span>
			</TextBoxContext.Provider>
		</MotionConfig>
	);
};

type TextBoxElementProps = {
	asChild?: boolean;
	id: string;
} & React.ComponentPropsWithoutRef<'span'>;

export const TextBoxElement = ({
	id,
	asChild,
	className,
	children,
	...props
}: TextBoxElementProps) => {
	const Comp = asChild ? Slot : 'span';
	const { activeItemId } = useTextBoxContext();

	const isActive = React.useMemo(() => activeItemId === id, [activeItemId, id]);
	return (
		<Comp
			className={cn(
				'ui-transition-opacity ui-duration-75 [grid-area:1/1]',
				className,
				!isActive &&
					'ui-pointer-events-none -ui-z-10 ui-select-none ui-opacity-0 ui-delay-100',
			)}
			{...props}>
			{children}
		</Comp>
	);
};
