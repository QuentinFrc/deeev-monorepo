import * as z from 'zod';

export const contactFormSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
})