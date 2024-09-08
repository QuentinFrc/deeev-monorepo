import React from 'react';

import { InlineTooltip } from '@ui/components/tooltip';
import { WithMouseMove } from '@ui/components/with-mouse-move';

import { DesignAsset } from './assets/design-asset';
import { SeoAsset } from './assets/seo-asset';
import { UpdateAsset } from './assets/update-asset';
import * as FeatureCard from './card';
import { Feature } from './card';

const Features: Feature[] = [
	{
		order: 1,
		size: 'lg',
		asset: DesignAsset,
		title: 'Micro-interactions, animations, typography, couleurs, images',
		content: (
			<div>
				Designs modernes et épurés pour que vos visiteurs aient une expérience agréable et
				intuitive.
			</div>
		),
	},

	{
		size: 'sm',
		title: 'Codé et optimisé sur mesure',
		content: (
			<div>
				Nous sommes pour une flexibilité et optimisation maximum. Grâce au code et aux
				outils que nous avons mis en place, nous sommes capable de proposer le meilleur
				service.
			</div>
		),
	},
	{
		size: 'sm',
		title: 'Outils de Statistiques et suivi',
		content: (
			<div>
				Avec votre landing page, bénéficiez d&apos;un outil de statistiques pour suivre
				l&apos;évolution et la popularité de votre page.
			</div>
		),
	},
	{
		order: 2,
		size: 'lg',
		asset: SeoAsset,
		title: 'Optimisation SEO',
		content: (
			<div>
				Nous faisons en sorte de mettre en place tous les outils pour que votre site soit
				bien référencé dans Google.
			</div>
		),
	},
	{
		order: 3,
		size: 'lg',
		asset: UpdateAsset,
		title: 'Mise en ligne et maintenance',
		content: (
			<div>
				Nous mettons constamment à jour nos solutions pour assurer leur sécurité et
				stabilité. Nous réalisons nos opérations{' '}
				<InlineTooltip
					size={'lg'}
					content="Votre solution est toujours en ligne pendant la mise à jour, il n'y a aucune interuption.">
					sans downtime.
				</InlineTooltip>
			</div>
		),
	},
	{
		size: 'sm',
		title: 'Responsive & Accessible',
		content: (
			<div>
				Votre page est accessible sur tous les supports, mobile, tablette et ordinateur.
				Nous veillons également à ce qu&apos;elle soit accessible à tous en suivant les
				conventions établies.
			</div>
		),
	},
];

// Order 1 is the first feature to be displayed
// Order 2 is the second feature to be displayed
// ...
const sortedFeatures = Features.sort((a, b) => 1 - (a.order ?? 0) - (0 - (b.order ?? 0)));

export const FeaturesGrid = () => (
	<WithMouseMove>
		<div className="mx-auto grid w-max max-w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
			{sortedFeatures.map(({ title, content, asset: Asset, size }, index) => (
				<FeatureCard.Root key={index} title={title} content={content} size={size}>
					{Asset && (
						<FeatureCard.Asset>
							<Asset />
						</FeatureCard.Asset>
					)}
				</FeatureCard.Root>
			))}
		</div>
	</WithMouseMove>
);
