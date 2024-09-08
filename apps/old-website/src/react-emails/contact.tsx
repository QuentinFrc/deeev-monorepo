import React from 'react';
import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';

import { cn } from '@/lib/utils';

import {
	body,
	card,
	container,
	heading,
	logoWrapper,
	MailFooter,
	messageCallout,
	MonaSans,
	config as tailwindConfig,
	text,
} from './_base';

export type ContactEmailProps = {
	baseUrl?: string;
	name?: string;
	message?: string | null;
};

export const AltText = ({ name }: Pick<ContactEmailProps, 'name'>) =>
	`Merci pour votre prise de contact ${name} !\n\nNous vous recontacterons dans les plus brefs délais.`;
export const ContactEmail: React.FC<ContactEmailProps> = ({
	baseUrl = process.env.APP_URL,
	name = 'John Doe',
	message,
}) => {
	return (
		<Tailwind config={tailwindConfig}>
			<Html lang={'fr'}>
				<Head>
					<MonaSans />
				</Head>
				<Preview>Merci pour votre prise de contact {name}</Preview>

				<Body className={body()}>
					<Container className={container()}>
						<Section className={card()}>
							<Row className={logoWrapper()}>
								<Img
									src={`${baseUrl}/logos/deeev-300X.png`}
									width="64"
									height="64"
									alt="Deeev"
									className="mx-auto my-0"
								/>
							</Row>
							<Heading className={cn(text({ contrast: 'foreground' }), heading())}>
								On a bien reçu votre message <strong>{name}</strong> !
							</Heading>
							<Text
								className={cn(
									'font-medium leading-[24px]',
									text({ contrast: 'max', size: 'lg' }),
								)}>
								Hello {name} 👋🏻
							</Text>
							<Text className={cn('leading-[24px]', text())}>
								Nous sommes ravis de vous savoir intéressé par nos services.{' '}
								{message
									? 'Nous allons prendre connaissance de votre message et revenir vers vous dans les plus brefs délais.'
									: 'Nous reviendrons vers vous rapidement pour en savoir plus sur votre projet.'}
							</Text>
							{message ? (
								<Section className={cn(messageCallout())}>
									<Text className={cn(text({ size: 'sm', contrast: 'min' }))}>
										Message envoyé
									</Text>
									<Text className={cn(text({ contrast: 'mid' }))}>
										&quot;{message}&quot;
									</Text>
								</Section>
							) : (
								<Text className={cn(text({ contrast: 'mid' }))}>
									En attendant vous pouvez{' '}
									<em className={cn(text({ contrast: 'max' }))}>ajouter un message</em> à
									votre demande en répondant simplement à cet email.
								</Text>
							)}
							<Text className={cn(text())}>À très vite,</Text>
							<Row>
								<Text className={cn('my-0', text({ contrast: 'max' }))}>
									L&apos;équipe Deeev
								</Text>
								<Text className={cn('mt-0', text({ size: 'sm' }))}>
									Enzo, Quentin et Sébastien
								</Text>
							</Row>
						</Section>
						<MailFooter />
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
};

export default ContactEmail;
