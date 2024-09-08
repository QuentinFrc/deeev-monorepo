import React from 'react';

import { Card, CardProps } from './card';

const cards: CardProps[] = [
	{
		icon: 'Atom',
		title: 'Atomic design.',
		description: 'Briques par briques, nous créons facilement des interfaces évolutives.',
	},
	{
		icon: 'Grid',
		title: 'Design System.',
		description:
			'Nous assurons la cohérence de votre site web en créant un système de design unique.',
	},
	{
		icon: 'ArrowUpRight',
		title: 'Parcours simples.',
		description:
			"Nos choix de conception se reposent toujours sur des arguments d'ergonomie et d'accessibilité.",
	},
	{
		icon: 'Star',
		title: 'Elégance et minutie.',
		description:
			'De la typographie aux couleurs, nous nous assurons que chaque détail soit travaillé.',
	},
	{
		icon: 'Phone',
		title: 'Responsive.',
		description:
			"Sur tous les appareils, votre site web s’adapte et offre une expérience fluide, c'est évident.",
	},
	{
		icon: 'Lightning',
		title: 'Dynamique.',
		description:
			'Nous utilisons les dernières technologies pour rendre votre site web dynamique et innovant.',
	},
];
export const Cards = () => {
	return (
		<div
			className={
				'my-16 grid gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-16'
			}>
			{cards.map((card) => (
				<Card key={card.title} {...card} />
			))}
		</div>
	);
};
