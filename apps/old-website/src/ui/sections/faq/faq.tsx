import { Container } from '@repo/ui/container';

import { SectionHeading } from '../_components/section-heading';
import { Board } from './board';

export const Faq = () => {
	return (
		<Container className={'flex w-full flex-col justify-center gap-10 py-32'} size={'xl'}>
			<SectionHeading
				headingLevel={'H2'}
				icon={'Star'}
				description={'Pour en savoir plus'}>
				Vos questions les plus fréquentes
			</SectionHeading>
			<Board />
		</Container>
	);
};
