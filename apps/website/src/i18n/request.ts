import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { Locale, locales } from '@/config/locales';
import { getMessages } from '@/i18n/resolve-content';

export const UNRESOLVED_MESSAGE = 'UNRESOLVED_MESSAGE';

const stringLocales = locales.map((locale) => locale.toString());

const isLocaleValid = (locale: string): locale is Locale =>
	stringLocales.includes(locale);

export default getRequestConfig(async ({ locale }) => {
	if (!isLocaleValid(locale)) notFound();

	return {
		messages: await getMessages(locale),
		getMessageFallback: () => {
			return UNRESOLVED_MESSAGE;
		},
	};
});
