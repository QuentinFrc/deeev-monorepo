import React from 'react';

import { cn } from '@/lib/utils';
import { Container } from '@repo/ui/container';

import { Documentation } from './documentation';
import { Header } from './header';
import { Playground } from './playground';
import { getExperiment, LabProps } from './utils';

const LabPage: React.FC<LabProps> = ({ slug }) => {
	const { title, description, content } = getExperiment(slug);
	return (
		<Container size={'lg'} className={'md:max-w-4xl'}>
			<div className={cn('space-y-12 pb-8')}>
				<Header title={title} description={description} />
				<Playground slug={slug} />
				<Documentation content={content} />
				{/*todo: add footer link to next lab*/}
			</div>
		</Container>
	);
};

export { LabPage };
