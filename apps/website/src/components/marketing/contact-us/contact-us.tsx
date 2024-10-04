import { ContactForm } from '@/components/form/contact-form';
import { getTranslations } from '@/lib/get-translations';

export const getContactUsTranslations = () => {
	const t = getTranslations('common');
	return {
		formTranslations: {
			name_label: t('form.name.label'),
			name_description: t('form.name.description'),
			email_label: t('form.email.label'),
			email_description: t('form.email.description'),
			email_invalid: t('form.email.invalid'),
			message_label: t('form.message.label'),
			message_placeholder: t('form.message.placeholder'),
			send_button_label: t('form.submit'),
		},
	};
};

export const ContactUs = () => {
	const { formTranslations } = getContactUsTranslations();
	return (
		<div className={'container py-24'}>
			<div className="space-y-16 rounded-lg bg-card/80 p-12">
				<div>Contactez nous maintenant</div>
				<div className="mx-auto w-max">
					<ContactForm translations={formTranslations} />
				</div>
			</div>
		</div>
	);
};
