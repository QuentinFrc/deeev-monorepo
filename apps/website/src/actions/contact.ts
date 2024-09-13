'use server';

import { ContactFormEmail } from '@repo/emails';
import { actionClient } from '@/lib/safe-action';
import { contactFormSchema } from '@/schemas/forms/contact';
import { Mailer } from '@/domain/services/mailer.service';

export const contactAction = actionClient
	.schema(contactFormSchema)
	.action(async ({parsedInput: payload}) => {
		const { name, email: to, message } = payload;
		const email = await Mailer.send({
			to,
			subject: 'Contact form submitted',
			react: ContactFormEmail(),
		});

		if(email.error) {
			return {
				success: false,
				message: 'Failed to send contact form email',
			}
		}


		return {
			success: true,
			message: 'Contact form submitted successfully',
		}
	})