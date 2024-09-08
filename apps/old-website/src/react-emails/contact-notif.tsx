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
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import { cn } from '@/lib/utils';

import {
	body,
	card,
	container,
	heading,
	logoWrapper,
	messageCallout,
	MonaSans,
	config as tailwindConfig,
	text,
} from './_base';

export type ContactEmailProps = {
	baseUrl?: string;
	email?: string;
	name: string;
	message?: string | null;
};

type AltTextParams = Pick<ContactEmailProps, 'name' | 'message'> & { email: string };
export const AltText = ({ name, email, message }: AltTextParams) =>
	`Nouveau message reçu de ${name} (${email}) : ${message}`;
export const ContactNotificationEmail: React.FC<Readonly<ContactEmailProps>> = ({
	baseUrl = process.env.APP_URL,
	name = 'John Doe',
	email = 'john@deeev.fr',
	message,
}: ContactEmailProps) => {
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
								Nouveau message !
							</Heading>
							<Text className={cn(text())}>Message reçu de {name}</Text>
							<Text className={cn(text({ contrast: 'mid' }))}>{email}</Text>
							{message ? (
								<Section className={cn(messageCallout())}>
									<Text className={cn(text({ size: 'sm', contrast: 'min' }))}>
										Message
									</Text>
									<Text className={cn(text({ contrast: 'mid' }))}>
										&quot;{message}&quot;
									</Text>
								</Section>
							) : (
								<Text className={cn(text({ contrast: 'mid' }), 'text-center italic')}>
									Pas de message.
								</Text>
							)}
							<hr />
							<Text className={cn(text({ size: 'sm', contrast: 'min' }))}>
								Reçu le &apos;todo: add date here&apos;
								{/*{utcToZonedTime(new Date(), 'Europe/Paris').toLocaleString('fr-FR', {})}*/}
							</Text>
						</Section>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
};

export default ContactNotificationEmail;
