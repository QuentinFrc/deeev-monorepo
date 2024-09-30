import * as z from 'zod';

type Messages = {
	invalid_email: string;
};

export const createContactFormSchemaWithTranslations = (messages: Messages) =>
	z.object({
		name: z.string(),
		email: z.string().email({ message: messages.invalid_email }),
		message: z.string(),
	});

export const contactSchema = createContactFormSchemaWithTranslations({
	invalid_email: 'Invalid email address',
});

export type ContactFormPayload = z.infer<
	ReturnType<typeof createContactFormSchemaWithTranslations>
>;
