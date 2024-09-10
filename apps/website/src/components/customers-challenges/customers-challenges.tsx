import { useTranslations } from "next-intl";

const getTranslations = () => {
	const t = useTranslations('homepage.customers_challenges');
	return {
		title: t('title'),
		cards: [
			{
				title: t('cards.visibility.title'),
				description: t('cards.visibility.description')
			},
			{
				title: t('cards.conversion.title'),
				description: t('cards.conversion.description')
			},
			{
				title: t('cards.maintenance.title'),
				description: t('cards.maintenance.description')
			},
			{
				title: t('cards.scalability.title'),
				description: t('cards.scalability.description')
			},
			{
				title: t('cards.project_management.title'),
				description: t('cards.project_management.description')
			},
			{
				title: t('cards.cost.title'),
				description: t('cards.cost.description')
			},
			{
				title: t('cards.long_term_solution.title'),
				description: t('cards.long_term_solution.description')
			}
		]
	};
};

type CustomersChallengesProps = {}

export const CustomersChallenges = (props: CustomersChallengesProps) => {
	const { title, cards } = getTranslations();

	return <section>
		<h2>{title}</h2>
		<ul>
			{cards.map((card, index) => <li key={index}>
				<h3>{card.title}</h3>
				<p>{card.description}</p>
			</li>)}
		</ul>
	</section>;
};