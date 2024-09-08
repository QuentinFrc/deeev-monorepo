'use client';

import React from 'react';

import * as Badge from '@repo/ui/badge';
import * as BadgeGroup from '@repo/ui/badge-group';
import { Icon } from '@repo/ui/icons';
import { SimpleButton } from '@ui/components/simple-button';
import { Text } from '@ui/components/typography';

export const UpdateAsset = () => {
	return (
		<div className="size-max space-y-4">
			<Text size={'sm'} contrast={2}>
				Dashboard
			</Text>
			<div className="space-y-8">
				<div className="flex flex-col gap-2">
					<div className={'flex items-center gap-2'}>
						<BadgeGroup.Root variant={'neutral'}>
							<Badge.Root variant={'neutral'} size={'sm'}>
								<Icon i={'AlertCircle'} />
								<Badge.Label>Version</Badge.Label>
							</Badge.Root>
							<BadgeGroup.Content>v2.7.2</BadgeGroup.Content>
						</BadgeGroup.Root>
						<Text size={'sm'} contrast={2} className={'inline-flex items-center gap-1'}>
							<span>Url</span>
							<Icon i={'Link'} />
						</Text>
					</div>
				</div>
				<Dashboard />
			</div>
		</div>
	);
};

const Dashboard = () => {
	const [updateCountdown, setCountdown] = React.useState<null | number>(null);

	React.useEffect(() => {
		setCountdown(2 - new Date().getHours() + 24);
	}, []);
	return (
		<div className="space-y-1">
			<div className="flex items-center gap-1">
				<SimpleButton
					excludeFromTabOrder
					size={'sm'}
					variant={'secondary'}
					label={'Résumer la dernière mise à jour'}
					iconPosition={'right'}
					icon={'Star'}
				/>
				<SimpleButton
					excludeFromTabOrder
					size={'sm'}
					variant={'ghost'}
					label={'Voir les détails'}
					iconPosition={'right'}
					icon={'ArrowRight'}
				/>
			</div>
			<Text size={'xs'} contrast={3}>
				Prochaine mise à jour dans {updateCountdown ?? '--'}heures.
			</Text>
		</div>
	);
};
