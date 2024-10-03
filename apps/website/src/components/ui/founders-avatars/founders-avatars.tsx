import React from 'react';
import Image, { StaticImageData } from 'next/image';

import * as AvatarPrimitives from '@repo/ui/avatar';
import { cn } from '@repo/ui/utils';

import EnzoAvatarSrc from '../../../../public/avatars/enzo-avatar.webp';
import QuentinAvatarSrc from '../../../../public/avatars/quentin-avatar.webp';
import SebastienAvatarSrc from '../../../../public/avatars/sebastien-avatar.webp';

type AvatarProps = {
	avatarSrc: StaticImageData;
	name: string;
};
export const FounderAvatar: React.FC<AvatarProps> = ({ avatarSrc, name }) => (
	<AvatarPrimitives.Root
		size={'lg'}
		shape={'rounded-md'}
		className={cn(['relative z-10 border-2 border-background'])}>
		<Image
			src={avatarSrc}
			alt={name}
			width={128}
			height={128}
			quality={100}
			className={'aspect-square rounded-inherit bg-border object-cover'}
		/>
	</AvatarPrimitives.Root>
);

const EnzoAvatar = () => {
	return <FounderAvatar avatarSrc={EnzoAvatarSrc} name="Enzo" />;
};

const QuentinAvatar = () => {
	return <FounderAvatar avatarSrc={QuentinAvatarSrc} name="Quentin" />;
};

const SebastienAvatar = () => {
	return <FounderAvatar avatarSrc={SebastienAvatarSrc} name="Sebastien" />;
};

export const FoundersAvatars = {
	EnzoAvatar,
	QuentinAvatar,
	SebastienAvatar,
} as const;
