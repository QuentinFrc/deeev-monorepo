import { useTranslations } from "next-intl";

const getTranslations = () => {
	const t = useTranslations('homepage.faq');
	return {
		title: t('title'),
		description: t('description'),
		questions: [
		]
	};
};

export const FAQ = () => {
	const { title, description, questions } = getTranslations();
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<ul>
				{/*{questions.map((question, index) => (
					<li key={index}>
						<h3>{question.title}</h3>
						<p>{question.description}</p>
					</li>
				))}*/}
			</ul>
		</div>
	);
}