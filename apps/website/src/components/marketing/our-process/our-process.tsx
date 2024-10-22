import React from 'react';

import {
	MaintenanceAsset,
	ManagementAsset,
	MeetingAsset,
	ProgressionAsset,
} from '@/components/marketing/our-process/process-assets';
import { ProcessGrid } from '@/components/marketing/our-process/process-grid';
import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
import { getTranslations } from '@/lib/get-translations';
import { IconName } from '@repo/ui/icons';

const getOurProcessTranslations = () => {
	const t = getTranslations('homepage.our_process');
	return {
		title: t('title'),
		description: t('description'),
		cards: [
			{
				icon: 'Placeholder',
				asset: MeetingAsset,
				title: t('cards.first_call.title'),
				description: t('cards.first_call.description'),
			},
			{
				icon: 'Placeholder',
				asset: ProgressionAsset,
				title: t('cards.progress.title'),
				description: t('cards.progress.description'),
			},
			{
				icon: 'Placeholder',
				asset: ManagementAsset,
				title: t('cards.project_management.title'),
				description: t('cards.project_management.description'),
			},
			{
				icon: 'Placeholder',
				asset: MaintenanceAsset,
				title: t('cards.as_you_wish.title'),
				description: t('cards.as_you_wish.description'),
			},
		],
	};
};

export const OurProcess = () => {
	const { title, description, cards } = getOurProcessTranslations();
	return (
		<section className={'container space-y-16 py-32'}>
			<SectionHeader>
				<SectionHeaderAnchor>Notre process</SectionHeaderAnchor>
				<SectionHeaderTitle>{title}</SectionHeaderTitle>
				<SectionHeaderDescription>{description}</SectionHeaderDescription>
			</SectionHeader>
			<ProcessGrid
				cards={
					cards as {
						asset: () => React.ReactNode;
						icon: IconName;
						title: string;
						description: string;
					}[]
				}
			/>
		</section>
	);
};
