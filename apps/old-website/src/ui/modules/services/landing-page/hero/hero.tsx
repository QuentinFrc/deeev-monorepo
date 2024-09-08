import React from 'react';
import { SparklesCore } from '@ui/assets/sparkles';

import { cn, tv, VariantProps } from '@/lib/utils';
import { Container } from '@repo/ui/container';
import { FoundersAvatars } from '@ui/components/avatars';
import { LandingPageBadge } from '@ui/components/badge';
import { DialogTrigger as ContactDialogTrigger } from '@ui/components/contact';
import * as Section from '@ui/components/section';
import { SimpleButton } from '@ui/components/simple-button';
import { Text } from '@ui/components/typography';

import { metadata } from '../metadata';

export const LandingPageHero = () => (
	<Section.Root
		size={'lg'}
		className={cn(
			'relative mb-16 overflow-hidden',
			'max-h-[792px] min-h-max h-screen-80',
		)}>
		<Background colors={'white'} />
		<Container size={'xl'} className={'space-y-16'}>
			<Section.Head alignement={'center'} className="gap-4 text-center">
				<LandingPageBadge />
				<Section.MainHeading className={'max-w-4xl'}>
					Obtenez votre Landing page maintenant.
				</Section.MainHeading>
				<Section.SubHeading className={'max-w-[578px]'}>
					{metadata.description}
				</Section.SubHeading>
				<ContactDialogTrigger>
					<SimpleButton
						label={'Obtenir ma Landing'}
						icon={'ArrowRight'}
						iconPosition={'right'}
					/>
				</ContactDialogTrigger>
			</Section.Head>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<FoundersAvatars />
				<Text
					size={'sm'}
					contrast={3}
					className={'w-[312px] max-w-full text-balance text-center'}>
					Des profils et compétences variées pour vous offrir le meilleur accompagnement
					et service.
				</Text>
			</div>
		</Container>
	</Section.Root>
);

const variants = tv({
	slots: {
		diamond: [
			'absolute bottom-[32%] left-1/2 top-1/2 z-10 flex aspect-square h-[70%] max-w-full -translate-x-1/2 -translate-y-1/2 rotate-45 flex-col overflow-hidden rounded-[2rem] opacity-80 lg:max-w-6xl',
			'animate-floating [--duration:2s] [--floating-offset:36px]',
		],
	},
	variants: {
		colors: {
			gradient: {
				diamond: [
					'bg-[radial-gradient(circle_at_left_center,theme(colors.green.500/22%),theme(colors.cyan.500/22%),theme(colors.fuchsia.500/22%))]',
				],
			},
			white: {
				diamond: [
					'bg-[radial-gradient(circle_at_left_center,theme(colors.white/22%),transparent)]',
				],
			},
		},
	},
	defaultVariants: {
		colors: 'gradient',
	},
});

const { diamond } = variants();

type BackgroundProps = {
	colors?: VariantProps<typeof diamond>['colors'];
};
const Background: React.FC<BackgroundProps> = ({ colors }) => (
	<div className={'absolute inset-0 -z-10 size-full'}>
		<SparklesCore
			particleDensity={3}
			direction={'top'}
			straight
			className={'absolute inset-0 size-full'}
		/>
		<div className={cn(diamond({ colors }))} />
	</div>
);
