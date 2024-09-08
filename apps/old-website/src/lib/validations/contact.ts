import * as z from 'zod';

//const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const contactSchema = z.object({
	name: z
		.string()
		.min(1, 'Veillez entrer votre nom')
		.max(50, 'Votre nom est malheureusement trop long'),
	email: z.string().email('Veillez entrer une adresse email valide'),
	message: z.string().nullable(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
