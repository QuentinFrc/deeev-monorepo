import React from 'react';
import EnzoAvatar from 'public/images/enzo-avatar.webp';
import QuentinAvatar from 'public/images/quentin-avatar.webp';
import SebastienAvatar from 'public/images/sebastien-avatar.webp';

import { cn } from '@/lib/utils';
import * as Badge from '@repo/ui/badge';
import * as Card from '@repo/ui/card';
import { Text } from '@ui/components/typography';

import { Avatar } from './avatars';

const FounderBadge = () => (
	<Badge.Root variant={'neutral'} size={'sm'} type={'outline'}>
		<Badge.Label>Fondateur Deeev</Badge.Label>
	</Badge.Root>
);

const Badges = ({ children }: { children: React.ReactNode }) => (
	<div className={cn('flex items-center gap-1')}>{children}</div>
);

export const EnzoCard = () => {
	return (
		<Card.Root className={'w-max max-w-sm'}>
			<Card.Content className={'space-y-2 p-4'}>
				<Card.Header className={'flex-row gap-x-8'}>
					<div
						className={
							'flex aspect-square size-max items-center justify-center rounded-full ring-2 ring-green-500/20'
						}>
						<Avatar avatarSrc={EnzoAvatar} name={'Enzo Louro'} />
					</div>
					<div className={'space-y-2'}>
						<div>
							<Card.Title>Enzo Louro</Card.Title>
							<Card.Description>
								Créateur de chartes graphiques et d&apos;interfaces web
							</Card.Description>
						</div>
						<Badges>
							<Badge.Root variant={'green'} size={'sm'}>
								<Badge.Label>UI/UX Designer</Badge.Label>
							</Badge.Root>
							<FounderBadge />
						</Badges>
					</div>
				</Card.Header>
				<Text size={'xs'} contrast={'mid'} className={'p-2'}>
					3 ans d&apos;expériences en agence - X projets réalisés
				</Text>
			</Card.Content>
		</Card.Root>
	);
};

export const QuentinCard = () => {
	return (
		<Card.Root className={'w-max max-w-sm'}>
			<Card.Content className={'space-y-2 p-4'}>
				<Card.Header className={'flex-row gap-x-8'}>
					<div
						className={
							'flex aspect-square size-max items-center justify-center rounded-full ring-2 ring-cyan-500/20'
						}>
						<Avatar avatarSrc={QuentinAvatar} name={'Quentin François'} />
					</div>
					<div className={'space-y-2'}>
						<div>
							<Card.Title>Quentin François</Card.Title>
							<Card.Description>
								Développeur web spécialisé en React et Next.js
							</Card.Description>
						</div>
						<Badges>
							<Badge.Root variant={'cyan'} size={'sm'}>
								<Badge.Label>Web Developper</Badge.Label>
							</Badge.Root>
							<FounderBadge />
						</Badges>
					</div>
				</Card.Header>
				<Text size={'xs'} contrast={'mid'} className={'p-2'}>
					3 ans d&apos;expériences en startup - 7 projets réalisés
				</Text>
			</Card.Content>
		</Card.Root>
	);
};

export const SebastienCard = () => {
	return (
		<Card.Root className={'w-max max-w-sm'}>
			<Card.Content className={'space-y-2 p-4'}>
				<Card.Header className={'flex-row gap-x-8'}>
					<div
						className={
							'flex aspect-square size-max items-center justify-center rounded-full ring-2 ring-fuchsia-500/20'
						}>
						<Avatar avatarSrc={SebastienAvatar} name={'Sébastien Cuvellier'} />
					</div>
					<div className={'space-y-2'}>
						<div>
							<Card.Title>Sébastien Cuvellier</Card.Title>
							<Card.Description>
								Spécialiste en architecture et déploiement
							</Card.Description>
						</div>
						<Badges>
							<Badge.Root variant={'fuchsia'} size={'sm'}>
								<Badge.Label>Ingénieur Cloud</Badge.Label>
							</Badge.Root>
							<FounderBadge />
						</Badges>
					</div>
				</Card.Header>
				<Text size={'xs'} contrast={'mid'} className={'p-2'}>
					4 ans d&apos;expériences en grande entreprise - 4 projets réalisés
				</Text>
			</Card.Content>
		</Card.Root>
	);
};

export const FounderCards = {
	EnzoCard,
	QuentinCard,
	SebastienCard,
};
