import React from 'react';

import { Container } from '@repo/ui/container';

import { SectionHeading } from '../_components/section-heading';
import { CloudEngineerCard, DesignerCard, DeveloperCard } from './cards';
import Enzo from './members/enzo-deeev-team.webp';
import Quentin from './members/quentin-deeev-team.webp';
import Sebastien from './members/sebastien-deeev-team.webp';

export const Team: React.FC = () => (
	<Container className={'flex w-full flex-col justify-center gap-16 py-32'} size={'xl'}>
		<SectionHeading headingLevel={'H2'} icon={'Star'} description={'Nos membres'}>
			Une équipe, des talents
		</SectionHeading>
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<DesignerCard
				firstname={'Enzo'}
				lastname={'Louro'}
				avatarImage={Enzo}
				tasks={['Design System', 'Maquettes', 'Prototypes', 'Parcours client']}
			/>
			<DeveloperCard
				firstname={'Quentin'}
				lastname={'François'}
				avatarImage={Quentin}
				tasks={['Conception', 'Intégration', 'Sécurité', 'Optimisation', 'SEO']}
			/>
			<CloudEngineerCard
				firstname={'Sébastien'}
				lastname={'Cuvellier'}
				avatarImage={Sebastien}
				tasks={['Disponibilité', "Gestion d'incident", 'Monitoring', 'Maintenance']}
			/>
		</div>
	</Container>
);
