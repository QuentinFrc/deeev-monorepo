import { Container } from '@repo/ui/container';
import { SectionHeading } from '@ui/sections/_components/section-heading';

import { ProductSwitcher } from './product-switcher';

export const Missions = () => {
	return (
		<Container size={'xl'}>
			<SectionHeading
				headingLevel={'H2'}
				description={'Pourquoi Deeev ?'}
				icon={'Star'}
				align={'start'}>
				Nos missions
			</SectionHeading>
			<p>
				Nous souhaitons accompagner les entreprises dans leur transformation digitale en
				leur proposant des solutions sur-mesure et adaptées à leurs besoins.
			</p>
			<ProductSwitcher />
		</Container>
	);
};
