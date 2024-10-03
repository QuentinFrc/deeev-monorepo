import { ContactForm } from '@/components/form/contact-form';
import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
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
			<div className="p-12 rounded-lg bg-card/80 space-y-16">
				{/*<SectionHeader align={'center'}>
					<SectionHeaderAnchor>anchor</SectionHeaderAnchor>
					<SectionHeaderTitle>Contactez nous maintenant</SectionHeaderTitle>
					<SectionHeaderDescription>
						30 Minutes, Gratuit et sans engagement
					</SectionHeaderDescription>
				</SectionHeader>*/}
				<div>Contactez nous maintenant</div>
				<div className="w-max mx-auto">
					<ContactForm translations={formTranslations} />
				</div>
			</div>
		</div>
	);
};
