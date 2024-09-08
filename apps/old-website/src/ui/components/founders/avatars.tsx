import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';
import * as AvatarPrimitives from '@repo/ui/avatar';

type AvatarProps = {
	avatarSrc: StaticImageData;
	name: string;
};
export const Avatar: React.FC<AvatarProps> = ({ avatarSrc, name }) => (
	<AvatarPrimitives.Root
		className={cn([
			'relative z-10 inline-block rounded-full',
			'size-24 border-2 border-background',
		])}>
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
