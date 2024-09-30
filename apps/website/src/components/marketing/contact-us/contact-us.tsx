import { ContactForm } from '@/components/form/contact-form';
import { useTranslations } from '@/hooks/use-translations';

export const getTranslations = () => {
	const t = useTranslations('common');
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
	const { formTranslations } = getTranslations();
	return (
		<div className={'container py-24'}>
			<h1>Contact Us</h1>
			<ContactForm translations={formTranslations} />
		</div>
	);
};
