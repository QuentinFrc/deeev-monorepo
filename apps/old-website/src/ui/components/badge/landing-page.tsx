'use client';

import React from 'react';

import * as Badge from '@repo/ui/badge';
import { Icon } from '@repo/ui/icons';
import { DialogTrigger as ContactDialogTrigger } from '@ui/components/contact';
import { SimpleTooltip } from '@ui/components/tooltip';
import { Text } from '@ui/components/typography';

const TooltipContent = () => (
	<Text size={'sm'} contrast={3}>
		Nous proposons cette offre pour notre premier client uniquement, la création de la
		landing page est offerte.
	</Text>
);
export const LandingPageBadge = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<SimpleTooltip
			focusShape={'badge'}
			open={isOpen}
			onOpenChange={setIsOpen}
			size={'xl'}
			content={<TooltipContent />}>
			<ContactDialogTrigger>
				<Badge.Root variant={'neutral'} type={'outline'}>
					<Icon i={'AlertCircle'} />
					<Badge.Label>1 Landing page offerte</Badge.Label>
				</Badge.Root>
			</ContactDialogTrigger>
		</SimpleTooltip>
	);
};
