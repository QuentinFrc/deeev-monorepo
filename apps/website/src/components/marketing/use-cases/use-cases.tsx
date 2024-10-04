import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
import { getTranslations } from '@/lib/get-translations';

import { UseCasesCarousel } from './use-cases-carousel';

const getUseCasesTranslations = () => {
	/*const common = useTranslations('common');*/
	const t = getTranslations('homepage.useCases');
	return {
		onTitle: t('onTitle'),
		title: t('title'),
		description: t('description'),
		cards: [
			{
				type: 'Landing Page',
				title: 'title',
				description: 'description',
			},
			{
				type: 'Landing Page',
				title: 'Kaizen',
				description: 'Une page de promotion pour le documentaire Kaizen',
			},
			{
				type: 'Landing Page',
				title: 'title',
				description: 'description',
			},
			{
				type: 'Landing Page',
				title: 'title',
				description: 'description',
			},
			{
				type: 'Landing Page',
				title: 'title',
				description: 'description',
			},
		],
	};
};

export const UseCases = () => {
	const { onTitle, title, description, cards } = getUseCasesTranslations();
	return (
		<section className={'container space-y-16'}>
			<SectionHeader>
				<SectionHeaderAnchor>{onTitle}</SectionHeaderAnchor>
				<SectionHeaderTitle>{title}</SectionHeaderTitle>
				<SectionHeaderDescription>{description}</SectionHeaderDescription>
			</SectionHeader>
			<UseCasesCarousel cards={cards} />
		</section>
	);
};
