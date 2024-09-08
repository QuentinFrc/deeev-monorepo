import { changelog } from 'static-content';

import * as Card from '@repo/ui/card';
import { Container } from '@repo/ui/container';
import { Mdx } from '@ui/components/mdx';

import { ChangelogComponents } from './mdx-components';

export const Changelog = () => {
	const { content } = changelog;
	return (
		<Container className={'py-8'} size={'lg'}>
			<Card.Root>
				<Card.Header className={'mb-4 px-6 pt-6'}>
					<Card.Title asChild>
						<h1 className={'text-2xl'}>Changelog</h1>
					</Card.Title>
					<Card.Description>
						Here you can find the latest updates and changes to the website.
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div className="font-mono">
						<Mdx code={content} components={ChangelogComponents} />
					</div>
				</Card.Content>
			</Card.Root>
		</Container>
	);
};
