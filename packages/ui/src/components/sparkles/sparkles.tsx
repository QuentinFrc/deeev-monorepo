'use client';

import React from 'react';
import type { Container } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { cn } from '#utils';
import { motion, useAnimation } from 'framer-motion';

import { configParticles, ShortOptions } from './sparkles-options';

export type ParticlesProps = {
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
		<motion.div animate={controls} className={cn('ui-opacity-0', className)}>
			{init && (
				<Particles
					id={id || 'tsparticles'}
					className={cn('ui-size-full')}
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			)}
		</motion.div>
	);
};

export { SparklesCore };
