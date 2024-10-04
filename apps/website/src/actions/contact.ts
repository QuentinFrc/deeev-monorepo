'use server';

import { Mailer } from '@/domain/services/mailer.service';
import { actionClient } from '@/lib/safe-action';
import { contactSchema } from '@/schemas/forms/contact';
import { ContactFormEmail } from '@repo/emails';

export const contactAction = actionClient
	.schema(contactSchema)
	.action(async ({ parsedInput: payload }) => {
		const { name, email: to, message } = payload;
		console.log(name);
		console.log(message);
		const email = await Mailer.send({
			to,
			subject: 'Contact form submitted',
			react: ContactFormEmail(),
		});

		if (email.error) {
			return {
				success: false,
				message: 'Failed to send contact form email',
			};
		}

		return {
			success: true,
			message: 'Contact form submitted successfully',
		};
	});
