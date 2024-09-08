import EnzoAvatar from 'public/images/enzo-avatar.webp';
import QuentinAvatar from 'public/images/quentin-avatar.webp';
import SebastienAvatar from 'public/images/sebastien-avatar.webp';

import { SiteConfig, SiteFAQ, SiteFounders, SiteServices } from '@/types/config';
import { APP_URL } from '@/config/env';

export const Founders: SiteFounders = [
	{
		role: 'none',
		name: 'Enzo Louro',
		job: 'Designer',
		email: 'enzo@deeev.fr',
		socialLinks: ['https://www.linkedin.com/in/enzo-louro/'],
		avatarUrl: `${APP_URL}/images/enzo-deeev-team.webp`,
		avatarSrc: EnzoAvatar,
	},
	{
		role: 'publisher',
		name: 'Sebastien Cuvellier',
		job: 'Devops',
		email: 'sebastien@deeev.fr',
		socialLinks: ['https://www.linkedin.com/in/sebastien-cuvellier/'],
		avatarUrl: `${APP_URL}/images/sebastien-deeev-team.webp`,
		avatarSrc: SebastienAvatar,
	},
	{
		role: 'creator',
		name: 'Quentin François',
		job: 'Développeur',
		email: 'quentin@deeev.fr',
		socialLinks: ['https://www.linkedin.com/in/quentin-francois-dev/'],
		avatarUrl: `${APP_URL}/images/quentin-deeev-team.webp`,
		avatarSrc: QuentinAvatar,
	},
];

const Creator = Founders.find((f) => f.role === 'creator')!.name;
const Publisher = Founders.find((f) => f.role === 'publisher')!.name;

export const Config: SiteConfig = {
	short_name: 'Deeev',
	alternante_name: 'Deeev Agency',
	name: 'Deeev | Agence des Créateurs de site web',
	short_description: 'Agence de développement de sites web',
	long_description:
		'Nous sommes une agence de création de site web orchestré par un designer, un développeur et un devops. Nous axons notre travail sur la qualité de votre image de marque et la performance de votre solution. Nous proposons un service premium en rendant la qualité accessible à tous.',
	logo_url: `${APP_URL}/logos/deeev-500X.png`,
	authors: Founders.map((f) => ({ ...f, url: f.socialLinks[0] })),
	creator: Creator,
	publisher: Publisher,
	creationDate: '2024-01-01',
	address: {
		region: 'Île-de-France',
		postalCode: '75000',
		addressCountry: 'FR',
	},
	keywords: [
		'agence',
		'création',
		'site',
		'web',
		'design',
		'développement web',
		'devops',
		'deeev',
	],
} as const;

export const Services: SiteServices = [
	{
		name: 'Développement de Landing Page',
		description:
			'Nous créons des landing pages pour vos campagnes marketing. Nous nous assurons que votre page de destination est optimisée pour la conversion.',
	},
	{
		name: 'Développement de Site Web',
		description:
			'Nous créons des sites web sur mesure pour les entreprises et les particuliers. Nous nous assurons que votre site web est performant et sécurisé.',
	},
	{
		name: 'Développement de Web App',
		description:
			'Nous créons des applications web pour les entreprises et les particuliers. Nous nous assurons que votre application web est performante et sécurisée.',
	},
];

export const FAQ: SiteFAQ = [
	{
		question: 'Quels sont les services que nous proposons ?',
		answer:
			'Nous proposons globalement des services de développement web, mais plus précisément des offres spécifiques de création de site web avec différentes spécificités et technologies que nous maîtrisons.',
	},
	{
		question: 'Quels sont les avantages de faire appel à notre agence ?',
		answer:
			"La synergie de nos compétences nous permet de vous proposer des offres de développement web complètes et de qualité. Nous somme une équipe de freelance mais avec la fluidité d'une agence.",
	},
	{
		question: 'Comment nous contacter ?',
		answer:
			"Vous pouvez nous contacter par mail à l'adresse contact@deeev.fr ou sur Instagram @deeev.fr.",
	},
	{
		question: 'Quelle est notre proposition de valeur ?',
		answer:
			' Notre proposition est simple : développer des sites web rapides et modernes avec une image de marque forte. Tout cela à un prix abordable et avec un service client de qualité.',
	},
	{
		question: "Pourquoi nous choisir c'est miser sur l'avenir ?",
		answer:
			'Sur tous nos projets, nous veillons à rester à jour sur les dernières technologies et les dernières tendances. Notre ambition dépasse le fait de créer des sites web, nous projetons de créer des solutions annexes et innovantes pour nos clients.',
	},
	{
		question: 'Quelles sont les technologies que nous utilisons ?',
		answer:
			'Nous créons nos maquettes avec Figma et nous développons nos sites avec React et NextJS. Le code de nos projets est hébergé sur GitLab et nous mettons en ligne nos sites sur DigitalOcean*. (*ou autre hébergeur selon le projet)',
	},
];
