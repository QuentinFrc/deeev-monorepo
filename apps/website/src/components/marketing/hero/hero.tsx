import { useTranslations } from 'next-intl';

const members = ["Enzo", "Quentin", "Sebastien"] as const;

const getMember = () => {
	return members[Math.floor(Math.random() * members.length)];
}

const getTranslations = () => {
	const t = useTranslations('homepage.hero');
	return {
		title: t('title'),
		description: t('description'),
		main_cta: {
			default: t('main_cta.default', {name: getMember()}),
			hover: t('main_cta.hover')
		},
		sub_cta: t('sub_cta')
	};
}


type HeroProps = {}

export const Hero = (props: HeroProps) => {
	const { title, description, main_cta, sub_cta } = getTranslations();


	return <section>
		<h1>{title}</h1>
		<p>{description}</p>
		<button>default: {main_cta.default} / hover: {main_cta.hover}</button>
		<a href="#">{sub_cta}</a>
	</section>;
};