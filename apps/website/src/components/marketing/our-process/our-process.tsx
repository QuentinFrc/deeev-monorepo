import React from 'react';

import { ProcessGrid } from '@/components/marketing/our-process/process-grid';
import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
import { useTranslations } from '@/hooks/use-translations';

const getTranslations = () => {
	const t = useTranslations('homepage.our_process');
	return {
		title: t('title'),
		description: t('description'),
		cards: [
			{
				icon: 'Placeholder',
				title: t('cards.first_call.title'),
				description: t('cards.first_call.description'),
			},
			{
				icon: 'Placeholder',
				title: t('cards.progress.title'),
				description: t('cards.progress.description'),
			},
			{
				icon: 'Placeholder',
				title: t('cards.project_management.title'),
				description: t('cards.project_management.description'),
			},
			{
				icon: 'Placeholder',
				title: t('cards.as_you_wish.title'),
				description: t('cards.as_you_wish.description'),
			},
		],
	};
};

export const OurProcess = () => {
	const { title, description, cards } = getTranslations();
	return (
		<section className={'container space-y-16 py-32'}>
			<SectionHeader>
				<SectionHeaderAnchor>Notre process</SectionHeaderAnchor>
				<SectionHeaderTitle>{title}</SectionHeaderTitle>
				<SectionHeaderDescription>{description}</SectionHeaderDescription>
			</SectionHeader>
			<ProcessGrid cards={cards} />
		</section>
	);
};
