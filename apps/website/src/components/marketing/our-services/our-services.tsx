import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
import { useTranslations } from '@/hooks/use-translations';

import { ServicesCarousel } from './services-carousel';

const getTranslations = () => {
	const t = useTranslations('homepage.our_services');
	return {
		title: t('title'),
		cards: [
			{
				title: t('cards.ui_design.title'),
				description: t('cards.ui_design.description'),
			},
			{
				title: t('cards.animations.title'),
				description: t('cards.animations.description'),
			},
			{
				title: t('cards.seo.title'),
				description: t('cards.seo.description'),
			},
			{
				title: t('cards.hosting.title'),
				description: t('cards.hosting.description'),
			},
			{
				title: t('cards.bug_fixing.title'),
				description: t('cards.bug_fixing.description'),
			},
			{
				title: t('cards.priority_support.title'),
				description: t('cards.priority_support.description'),
			},
		],
	};
};

type OurServicesProps = {};

export const OurServices = (props: OurServicesProps) => {
	const { title, cards } = getTranslations();

	return (
		<section className={'container space-y-16'}>
			<SectionHeader>
				<SectionHeaderAnchor>Anchor</SectionHeaderAnchor>
				<SectionHeaderTitle>{title}</SectionHeaderTitle>
				<SectionHeaderDescription>description</SectionHeaderDescription>
			</SectionHeader>
			<ServicesCarousel cards={cards} />
		</section>
	);
};
