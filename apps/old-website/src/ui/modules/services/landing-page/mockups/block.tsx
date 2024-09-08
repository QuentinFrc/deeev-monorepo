'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

import { cn, tv } from '@/lib/utils';

const variants = tv({
	base: '',
	slots: {
		image: '',
		wrapper: 'absolute left-0 top-0',
	},
	variants: {
		size: {
			desktop: { wrapper: '', image: 'h-auto w-64' },
			mobile: { wrapper: '', image: 'h-auto w-32' },
		},
	},
});

const { image, wrapper } = variants();

const useParallax = (value: MotionValue<number>, distance: number) => {
	return useTransform(value, [0, 1], [0, -distance]);
};

type ParallaxBlockProps = React.ComponentPropsWithoutRef<typeof motion.div> & {
	size: 'desktop' | 'mobile';
};
const ParallaxBlock: React.FC<ParallaxBlockProps> = ({
	children,
	size,
	className,
	...props
}) => {
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'end start'],
	});

	const range = { min: 200, max: 400 };

	const distance = Math.floor(Math.random() * range.max) + range.min;

	const y = useParallax(scrollYProgress, distance);
	return (
		<motion.div
			className={cn(wrapper({ size }), className)}
			ref={ref}
			{...props}
			style={{ y }}>
			{children}
		</motion.div>
	);
};

type MockupBlockProps = Pick<ImageProps, 'src' | 'alt'> & ParallaxBlockProps;
export const MockupBlock: React.FC<MockupBlockProps> = ({ alt, src, size, ...props }) => {
	return (
		<ParallaxBlock size={size} {...props}>
			<Image
				src={src}
				alt={alt}
				quality={80}
				width={size === 'mobile' ? 128 : 256}
				height={size === 'mobile' ? 290 : 183}
				className={cn(image({ size }))}
				placeholder={'blur'}
			/>
		</ParallaxBlock>
	);
};

type EmptyBlockProps = React.PropsWithChildren<ParallaxBlockProps>;
export const EmptyBlock: React.FC<EmptyBlockProps> = ({ size, children, ...props }) => (
	<ParallaxBlock size={size} {...props}>
		<div
			className={cn(
				image({ size }),
				'absolute rounded-lg bg-neutral-800/80',
				'flex items-center justify-center text-center',
				size === 'mobile' ? 'aspect-[128/290]' : 'aspect-[256/182]',
			)}>
			{children}
		</div>
	</ParallaxBlock>
);
