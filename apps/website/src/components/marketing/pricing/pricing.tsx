import { useTranslations } from "next-intl";

const getTranslations = () => {
	const t = useTranslations('homepage.packages');
	return {
		title: t('title'),
		description: t('description'),
		cards: [
			{
				title: t('cards.landing_page.title'),
				target: t('cards.landing_page.target'),
				price: t('cards.landing_page.price'),
				maintenance: t('cards.landing_page.maintenance'),
				features: [
					t('cards.landing_page.features.0')
				]
			},
			{
				title: t('cards.complete_website.title'),
				target: t('cards.complete_website.target'),
				price: t('cards.complete_website.price'),
				maintenance: t('cards.complete_website.maintenance'),
				features: [
					t('cards.complete_website.features.0'),
					t('cards.complete_website.features.1'),
					t('cards.complete_website.features.2'),
					t('cards.complete_website.features.3')
				]
			},
			{
				title: t('cards.web_app.title'),
				target: t('cards.web_app.target'),
				price: t('cards.web_app.price'),
				maintenance: t('cards.web_app.maintenance'),
				features: [
					t('cards.web_app.features.0')
				]
			}
		]
	};
};


type PricingProps = {}

export const Pricing = (props: PricingProps) => {
	const { title, description, cards } = getTranslations();

	return <section>
		<h2>{title}</h2>
		<p>{description}</p>
		<ul>
			{cards.map((card, index) => <li key={index}>
				<h3>{card.title}</h3>
				<p>{card.target}</p>
				<p>{card.price}</p>
				<p>{card.maintenance}</p>
				<ul>
					{card.features.map((feature, index) => <li key={index}>
						<p>{feature}</p>
					</li>)}
				</ul>
			</li>)}
		</ul>
	</section>;
}