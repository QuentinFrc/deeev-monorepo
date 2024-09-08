import { experiments } from 'static-content';

import { Container } from '@repo/ui/container';

import { PreviewCard } from './card';

export const Grid = () => {
	return (
		<section className={'flex-1 pb-12 pt-24'}>
			<Container size={'2xl'}>
				<div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{experiments.map((experiment) => (
						<PreviewCard key={experiment.slug} {...experiment} />
					))}
				</div>
			</Container>
		</section>
	);
};
