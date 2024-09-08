'use client';

import React from 'react';
import { LOGO_COLORS } from '@ui/assets/logo';
import { toast } from 'sonner';

import { BadgeLabel, BadgeRoot } from '@repo/ui/badge';
import { Icon } from '@repo/ui/icons'; //fixme replace with toast from local utils

type BadgeColorProps = {
	color: keyof typeof LOGO_COLORS;
};

export const BadgeColor = ({ color }: BadgeColorProps) => {
	const colorValue = LOGO_COLORS[color];
	return (
		<BadgeRoot
			variant={'neutral'}
			type={'outline'}
			className={'cursor-pointer'}
			onClick={async () => {
				await navigator.clipboard.writeText(colorValue);
				toast.success(`${colorValue} à été copié dans le presse-papier`);
			}}>
			<BadgeLabel>{colorValue}</BadgeLabel>
			<Icon i={'Copy'} className={'text-foreground/60'} />
		</BadgeRoot>
	);
};
