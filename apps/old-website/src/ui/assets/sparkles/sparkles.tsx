'use client';

import React from 'react';
import type { Container } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, useAnimation } from 'framer-motion';

import { cn } from '@/lib/utils';

import { configParticles, ShortOptions } from './sparkles-options';

type ParticlesProps = {
	id?: string;
	className?: string;
} & ShortOptions;
const SparklesCore = ({ id, className, ...props }: ParticlesProps) => {
	const [init, setInit] = React.useState(false);

	React.useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
		return () => {
			setInit(false);
		};
	}, []);
	const controls = useAnimation();

	const options = React.useMemo(() => configParticles(props), [props]);

	const particlesLoaded = async (container?: Container) => {
		if (container) {
			await controls.start({
				opacity: 1,
				transition: {
					duration: 1,
				},
			});
		}
	};

	return (
		<motion.div animate={controls} className={cn('opacity-0', className)}>
			{init && (
				<Particles
					id={id || 'tsparticles'}
					className={cn('size-full')}
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			)}
		</motion.div>
	);
};

export { SparklesCore };
