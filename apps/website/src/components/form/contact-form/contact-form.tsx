'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import { contactAction } from '@/actions/contact';
import {
	ContactFormPayload,
	createContactFormSchemaWithTranslations,
} from '@/schemas/forms/contact';
import { ButtonLabel, ButtonRoot } from '@repo/ui/button';
import { Input, Textarea } from '@repo/ui/fields';
import {
	Form,
	FormControl,
	FormDescriptionOrMessage,
	FormField,
	FormItem,
	FormLabel,
} from '@repo/ui/form';

const messageVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

type ContactFormProps = {
	translations: {
		name_label: string;
		name_description: string;
		email_label: string;
		email_description: string;
		email_invalid: string;
		message_label: string;
		message_placeholder: string;
		send_button_label: string;
	};
};

export const ContactForm = ({ translations }: ContactFormProps) => {
	const form = useForm<ContactFormPayload>({
		resolver: zodResolver(
			createContactFormSchemaWithTranslations({
				invalid_email: translations.email_invalid,
			}),
		),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const onSubmit = async (data: ContactFormPayload) => {
		await contactAction(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={''}>
				<div>
					{/*Name field*/}
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{translations.name_label}</FormLabel>
								<FormControl>
									<Input placeholder="John Deeve" {...field} />
								</FormControl>
								<FormDescriptionOrMessage>
									{translations.name_description}
								</FormDescriptionOrMessage>
							</FormItem>
						)}
					/>
					{/*Email field*/}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{translations.email_label}</FormLabel>
								<FormControl>
									<Input placeholder="john@deeev.fr" {...field} />
								</FormControl>
								<FormDescriptionOrMessage>
									{translations.email_description}
								</FormDescriptionOrMessage>
							</FormItem>
						)}
					/>
					{/*Message field*/}
					<AnimatePresence mode="popLayout">
						<motion.div
							variants={messageVariants}
							initial={messageVariants.hidden}
							animate={messageVariants.visible}
							exit={messageVariants.hidden}>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<div className={'flex items-center justify-between'}>
											<FormLabel>{translations.message_label}</FormLabel>
											{/*<SimpleButton
												size={'sm'}
												variant={'link'}
												className={'text-contrasted-min'}
												label={'Ne pas ajouter de message'}
												icon={'X'}
												onPress={() => setWithMessage(false)}
											/>*/}
										</div>
										<FormControl>
											<Textarea
												{...field}
												value={field.value ?? ''}
												className={'min-h-48 resize-none md:min-h-64 md:resize-y'}
												placeholder={translations.message_placeholder}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
				<div className="flex flex-col gap-2">
					<ButtonRoot type={'submit'} variant={'secondary'}>
						<ButtonLabel>{translations.send_button_label}</ButtonLabel>
					</ButtonRoot>
				</div>
			</form>
		</Form>
	);
};
