import React from 'react';

/*import * as Badge from '@repo/ui/badge';*/

import * as Card from './base';

export const SolopreneurCard = () => (
	<Card.Root style={{ '--color': '336 100% 50%' } as React.CSSProperties}>
		<Card.Header>
			<Card.Icon icon={'Trophy'} />
			<Card.Title>Solopreneur</Card.Title>
		</Card.Header>
		<Card.Content size={'sm'} className={'space-y-2'}>
			<p>
				Votre travail est unique, et votre présence en ligne devrait l&apos;être aussi.
			</p>
			<p>
				La landing page est votre meilleur outil pour vous démarquer et{' '}
				<span className="font-semibold">construire une base de clients fidèles.</span>
			</p>
			{/*<ul className={'inline-flex flex-wrap items-center gap-2 pt-2'}>
				{[
					'Mettre en avant votre expertise',
					'Engager efficacement vos visiteurs',
					'Transformer leur intérêt en engagements concrets',
				].map((el) => (
					<li key={el}>
						<Badge.Root variant={'neutral'} type={'outline'} size={'sm'} key={el} asChild>
							<span>
								<Badge.Label>{el}</Badge.Label>
							</span>
						</Badge.Root>
					</li>
				))}
			</ul>*/}
		</Card.Content>
	</Card.Root>
);
