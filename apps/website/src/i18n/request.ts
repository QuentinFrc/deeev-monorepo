import { notFound } from 'next/navigation';
import { IntlErrorCode } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { Locale, locales } from '@/config/locales';
import { getMessages } from '@/i18n/resolve-content';

export const UNRESOLVED_MESSAGE = 'UNRESOLVED_MESSAGE';

const isLocaleValid = (locale: string): locale is Locale =>
	locales.includes(locale as any);

export default getRequestConfig(async ({ locale }) => {
	if (!isLocaleValid(locale)) notFound();

	return {
		messages: await getMessages(locale),
		getMessageFallback: ({ namespace, key, error }) => {
			const path = [namespace, key].filter((part) => part != null).join('.');

			/*if (error.code === IntlErrorCode.MISSING_MESSAGE) {
				return '';
			}*/
			return UNRESOLVED_MESSAGE;
		},
	};
});
