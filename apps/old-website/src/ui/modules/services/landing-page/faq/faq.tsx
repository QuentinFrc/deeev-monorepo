import React from 'react';

import { Container } from '@repo/ui/container';
import * as FAQ from '@ui/components/faq';
import * as Section from '@ui/components/section';
import { SimpleButton } from '@ui/components/simple-button';

const ITEMS = [
	{
		id: 'already-a-website',
		question: "J'ai déjà un site internet, pouvez-vous ajouter une page à mon site ?",
		answer:
			"Nous travaillons avec des technologies bien précises, certainement différentes de celle de votre site web. Néanmoins, nous pouvons créer une navigation fluide pour que la page que nous développons s'intègre parfaitement dans votre site existant.",
	},
	{
		id: 'no-website',
		question:
			"Je n'ai pas de site internet, est ce pertinent de commencer avec une landing page ?",
		answer:
			"Bien sûr ! C'est même parfois suffisant suivant votre activité et vos objectifs. Nos landing pages peuvent très facilement évoluer vers des sites web plus complet dans le cas où vous en auriez besoin.",
	},
	{
		id: 'no-budget',
		question: "Je n'ai pas le budget pour votre offre, avez-vous des solutions ?",
		answer:
			"Nous analysons chaque projet pour proposer toujours la meilleur offre, n'hésitez pas à nous contacter pour que nous adaptions notre offre à votre budget et vos besoins.",
	},
	{
		id: 'specific-need',
		question:
			"L'offre me plaît, mais j'ai un besoin spécifique qui n'est pas listé dans l'offre.",
		answer:
			"Nos offres ne sont pas figés, nous nous adaptons toujours aux besoins de nos clients. N'hésitez pas à nous contacter pour approfondir ensemble votre projet.",
	},
] as const;

const createLandingPageFaqId = (identifier: string) => `landing-page-item-${identifier}`;
export const LandingPageFaq = () => {
	return (
		<section className={'py-32'}>
			<Container size={'xl'}>
				<Section.Head className={'md:items-center'}>
					<Section.Heading>Questions fréquentes</Section.Heading>
					<Section.SubHeading>
						Des questions ? Nous avons des réponses.
					</Section.SubHeading>
				</Section.Head>
				<FAQ.Root defaultValue={createLandingPageFaqId(ITEMS[0].id)} className={'mb-4'}>
					{ITEMS.map(({ id, question, answer }) => (
						<FAQ.Item key={id} value={createLandingPageFaqId(id)}>
							<FAQ.Trigger>&ldquo;{question}&rdquo;</FAQ.Trigger>
							<FAQ.Content>{answer}</FAQ.Content>
						</FAQ.Item>
					))}
				</FAQ.Root>
				<div className="hidden text-center">
					<SimpleButton
						label={'Plus de question'}
						icon={'Plus'}
						variant={'ghost'}
						iconPosition={'right'}
					/>
				</div>
			</Container>
		</section>
	);
};
