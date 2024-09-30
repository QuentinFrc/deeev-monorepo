import { useTranslations } from '@/hooks/use-translations';

const getTranslations = () => {
	const t = useTranslations('homepage.our_process');
	return {
		title: t('title'),
		description: t('description'),
		cards: [
			{
				title: t('cards.first_call.title'),
				description: t('cards.first_call.description'),
			},
			{
				title: t('cards.progress.title'),
				description: t('cards.progress.description'),
			},
			{
				title: t('cards.project_management.title'),
				description: t('cards.project_management.description'),
			},
			{
				title: t('cards.as_you_wish.title'),
				description: t('cards.as_you_wish.description'),
			},
		],
	};
};

export const OurProcess = () => {
	const { title, description, cards } = getTranslations();
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<ul>
				{cards.map((card, index) => (
					<li key={index}>
						<h3>{card.title}</h3>
						<p>{card.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
