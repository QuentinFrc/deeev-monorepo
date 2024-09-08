import React from 'react';

import { cn, tv } from '@/lib/utils';
import { Container } from '@repo/ui/container';
import { DialogTrigger as ContactDialogTrigger } from '@ui/components/contact';
import * as Section from '@ui/components/section';
import { SimpleButton } from '@ui/components/simple-button';

import { LocalBusinessCard, SolopreneurCard, StartupCard, TpePmeCard } from './cards';

export const LandingPageClients = () => (
	<Section.Root size={'lg-responsive'}>
		<Container size={'xl'}>
			<Section.Head className={'md:items-center'}>
				<Section.Heading>Nos Clients</Section.Heading>
				<Section.SubHeading className={'md:max-w-lg md:text-balance md:text-center'}>
					Voici le profil type de nos clients. Si vous vous reconnaissez, nous sommes
					faits pour travailler ensemble.
				</Section.SubHeading>
			</Section.Head>
			<div className="flex flex-col items-center gap-y-8 py-4">
				<TargetClientLandingPageCards />
				{/*Todo: add on card click, update the cta using MotionButton*/}
				<ContactDialogTrigger>
					<SimpleButton
						variant={'secondary'}
						label={'Je suis intéressé'}
						iconPosition={'right'}
						icon={'ArrowRight'}
					/>
				</ContactDialogTrigger>
			</div>
		</Container>
	</Section.Root>
);

const variants = tv({
	slots: {
		grid: ['grid gap-4 md:grid-cols-2'],
		column: ['flex flex-col gap-4'],
	},
});

const { grid, column } = variants();

const TargetClientLandingPageCards = () => (
	<div className={cn(grid())}>
		{/*LEFT*/}
		<div className={cn(column())}>
			<LocalBusinessCard />
			<TpePmeCard />
		</div>

		{/*RIGHT*/}
		<div className={cn(column())}>
			<SolopreneurCard />
			<StartupCard />
		</div>
	</div>
);

/*const motionVariants = {
	title: {
		visible: { opacity: 1, y: '0%' },
		hidden: { opacity: 0, y: '100%' },
	},
	bulletsVariants: {
		visible: { opacity: 1, y: '0%' },
		hidden: { opacity: 0, y: '100%' },
	},
	button: {
		visible: { opacity: 1, y: '0%' },
		hidden: { opacity: 0, y: '100%' },
	},
};

export const TargetClientLandingPageTabs = () => (
	<Tabs.Root defaultValue={Clients[0].id} className={'space-y-16'}>
		<Tabs.List className={'mx-auto'}>
			{Clients.map(({ id, name }) => (
				<Tabs.Trigger key={id} value={id}>
					{name}
				</Tabs.Trigger>
			))}
		</Tabs.List>
		<TabsContent />
	</Tabs.Root>
);*/

/*const TabsContent = () => (
	<div className={'h-[256px] rounded-lg border bg-card p-4'}>
		<MotionConfig transition={{ duration: 0.3, staggerChildren: 0.12 }}>
			{Clients.map(({ id, name, bullets }) => (
				<Tabs.Content key={id} value={id} presenceProps={{ mode: 'popLayout' }}>
					<Headings.H3 asChild>
						<motion.h3 variants={motionVariants.title}>{name}</motion.h3>
					</Headings.H3>
					<ul className={'list-inside list-disc space-y-2'}>
						{bullets.map(({ title, content }) => (
							<motion.li key={title} variants={motionVariants.bulletsVariants}>
								<Text size={'base'} contrast={1}>
									{title}
								</Text>
								<Text size={'sm'} constrast={3}>
									{content}
								</Text>
							</motion.li>
						))}
					</ul>
				</Tabs.Content>
			))}
		</MotionConfig>
	</div>
);*/
