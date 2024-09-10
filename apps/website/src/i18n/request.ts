import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { Locale, locales } from '@/config/locales';
import { getMessages } from '@/i18n/resolve-content';

const isLocaleValid = (locale: string): locale is Locale =>
	locales.includes(locale as any);

export default getRequestConfig(async ({ locale }) => {
	if (!isLocaleValid(locale)) notFound();

	return {
		messages: await getMessages(locale),
	};
});
