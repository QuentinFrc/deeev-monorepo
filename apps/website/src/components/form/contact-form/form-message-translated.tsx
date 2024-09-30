import { FieldError } from 'react-hook-form';

import { useTranslations } from '@/hooks/use-translations';
import { FormDescriptionOrMessage, FormDescriptionOrMessageProps } from '@repo/ui/form';

export const FormMessageTranslated = (props: FormDescriptionOrMessageProps) => {
	const t = useTranslations();
	return (
		<FormDescriptionOrMessage
			formatMessage={(error: FieldError) =>
				error.message ? t(error.message as any) : t('common.form.error')
			}
			{...props}
		/>
	);
};
