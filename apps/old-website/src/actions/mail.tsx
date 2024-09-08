'use server';

import {
	AltText as ContactAltText,
	ContactEmail,
	ContactEmailProps,
} from '@/react-emails/contact';
import {
	AltText as ContactNotificationAltText,
	ContactNotificationEmail,
} from '@/react-emails/contact-notif';

import { SendEmailProps } from '@/types/mail';
import { getLogger } from '@/lib/services/logger';
import { mailer } from '@/lib/services/mailer';

const log = getLogger('server-action:contact');

type RequiredProps = Required<
	Pick<ContactEmailProps, 'name'> & {
		to: string;
	}
>;
type OptionalProps = Pick<ContactEmailProps, 'message'>;
type ContactProps = Omit<SendEmailProps, 'react' | 'subject' | 'to'> &
	RequiredProps &
	OptionalProps;

/**
 * Send contact email
 * @param payload
 * @returns [userEmailRes : CreateEmailResponse, adminEmailRes: CreateEmailResponse]
 */
export const contact = async (payload: ContactProps) => {
	log.info('Sending contact email from server');
	const userPayload = {
		to: payload.to,
		subject: 'Merci pour votre prise de contact !',
		text: ContactAltText({ name: payload.name }),
		react: <ContactEmail {...payload} />,
	};
	const adminPayload = {
		to: 'contact@deeev.fr',
		subject: 'Nouveau message reçu !',
		text: ContactNotificationAltText({
			name: payload.name,
			email: payload.to,
			message: payload.message,
		}),
		react: <ContactNotificationEmail email={payload.to} {...payload} />,
	};
	return await mailer.sendMultiple([userPayload, adminPayload]);
};

/*Wait 500ms*/
/*return await new Promise((resolve) => {
	setTimeout(() => {
		resolve('ok');
	}, 500);
}).then(() => ({ data: {}, error: { name: '', message: '' } }));*/
