import { Resend } from 'resend';

import { CreateEmailOptions, SendEmailProps, SendMultipleEmailProps } from '@/types/mail';

import { getLogger } from './logger';

const resend = new Resend('');

const logger = getLogger('services:mailer');

/**
 * Mailer service - a wrapper around Resend
 * @see https://resend.com/docs/api-reference/introduction
 */
export const mailer = {
	/**
	 * Send an email
	 * @param email - ReactElement written with react-email
	 * @param from - Email sender defaults to PROJECT_EMAIL
	 * @param rest - Resend options
	 * @returns the created email
	 */
	send: async ({ from, text, ...rest }: SendEmailProps) => {
		const payload = {
			text: text || '',
			from: from || `${'Project User'} <${'Project Email'}>`,
			...rest,
		};

		logger.info(`Send email with payload: ${JSON.stringify(payload)}`);
		try {
			const res = await resend.emails.send(payload);
			logger.debug(`Réponse de l'envoi de l'email: ${JSON.stringify(res)}`);
			return res;
		} catch (error) {
			logger.error(`Erreur lors de l'envoi de l'email: ${error}`);
			throw error;
		}
	},
	sendMultiple: async (payload: SendMultipleEmailProps) => {
		logger.info(`Send email with payload: ${JSON.stringify(payload)}`);
		try {
			const res = await resend.batch.send(
				payload.map(({ text, from, ...email }) => ({
					text: text || '',
					from: from || `${'Project User'} <${'Project Email'}>`,
					...email,
				})),
			);
			logger.debug(`Réponse de l'envoi de l'email: ${JSON.stringify(res)}`);
			return res;
		} catch (error) {
			logger.error(`Erreur lors de l'envoi des emails: ${error}`);
			throw error;
		}
	},
	/**
	 * Create an email
	 * @param payload - Resend options
	 * @returns the created email
	 */
	create: async (payload: CreateEmailOptions) => {
		logger.info('Create email with payload:', payload);
		try {
			const emailResponse = await resend.emails.create(payload);
			logger.debug('Response from email creation:', emailResponse);
			return emailResponse;
		} catch (error) {
			logger.error(`Error when creating email: ${error}`);
			throw error;
		}
	},
	/**
	 * Get an email
	 * @param id - Email id
	 * @returns the email
	 */
	get: async (id: string) => {
		logger.info('Retrieve email with ID :', id);
		try {
			const getResponse = await resend.emails.get(id);
			logger.debug('Response from email retrieval: ', getResponse);
		} catch (error) {
			logger.error(`Error when retrieving email: ${error}`);
			throw error;
		}
	},
	healthCheck: async () => {
		try {
			const res = await fetch('', {
				method: 'GET',
			});
			return res.status === 200;
		} catch (error) {
			return false;
		}
	},
};
