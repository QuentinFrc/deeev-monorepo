'use client';

import React from 'react';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

import { cn, tv } from '@/lib/utils';
import * as Card from '@repo/ui/card';
import { Text } from '@ui/components/typography';

const cardAssetStyle = tv({
	slots: {
		base: ['relative size-full h-[224px] rounded-inherit pt-4'],
		baseMask: [
			/*'after:absolute after:inset-0 after:z-20 after:bg-[linear-gradient(-32deg,theme(colors.background),transparent_40%)]'*/
		],
		box: [
			'pointer-events-none absolute left-8 top-0 size-full overflow-hidden rounded-inherit border border-white/30 p-0.5',
			'bg-[linear-gradient(135deg,theme(colors.white/20%),theme(colors.white/5%))] [backdrop-filter:blur(7px)]',
			'mt-3 duration-300 ease-in-out group-hover/card:mt-6',
		],
		innerBox: [
			'size-full overflow-hidden rounded-inherit border border-white/10 bg-card p-4',
		],
		gradientBorder: [
			'relative size-full max-w-sm overflow-hidden rounded-lg bg-border p-px',
			'before:absolute before:inset-0 before:rounded-inherit before:opacity-[var(--opacity)] before:transition-opacity before:duration-300',
			'before:bg-[radial-gradient(circle_at_var(--posX)_var(--posY),white,transparent_330px)] before:blur-md',
		],
	},
});

const { base, baseMask, box, innerBox, gradientBorder } = cardAssetStyle();
type CardAssetProps = React.ComponentPropsWithoutRef<'div'>;
const CardAsset: React.FC<CardAssetProps> = ({ className, children, ...props }) => (
	<div className={cn(base(), baseMask(), className)} {...props}>
		<div className={cn(box())}>
			<div className={cn(innerBox())}>{children}</div>
		</div>
	</div>
);

export type Feature = {
	title: string;
	content: React.ReactNode;
	asset?: React.FC;
	size: 'lg' | 'sm';
	order?: number;
};

export type FeatureCardProps = Omit<Feature, 'asset'> &
	Omit<React.ComponentPropsWithoutRef<typeof Card.Root>, 'content'>;
const FeatureCard: React.FC<FeatureCardProps> = ({
	title,
	content,
	children,
	className,
	size,
	...props
}) => {
	const [ref, bounds] = useMeasure();

	return (
		<motion.div
			ref={ref}
			style={
				{
					'--offset-x': `calc(${bounds.left}px - var(--mouse-offset-x))`,
					'--offset-y': `calc(${bounds.top}px - var(--mouse-offset-y))`,
					'--posX': 'calc(var(--mouseX) - var(--offset-x))',
					'--posY': 'calc(var(--mouseY) - var(--offset-y))',
				} as React.CSSProperties
			}
			className={cn(gradientBorder())}>
			<Card.Root
				className={cn(
					'group/card relative z-10 flex size-full flex-col justify-between overflow-hidden border-none bg-background rounded-lg-minus-[1px]',
					className,
				)}
				{...props}>
				<Card.Content>
					<Text size={'xl'} className={'line-clamp-2'}>
						{title}
					</Text>
					<Text
						size={'sm'}
						contrast={3}
						className={cn(size === 'sm' && 'hidden sm:block')}
						asChild>
						{content}
					</Text>
				</Card.Content>
				{children}
			</Card.Root>
		</motion.div>
	);
};

export {
	FeatureCard,
	//
	FeatureCard as Root,
	CardAsset as Asset,
};
