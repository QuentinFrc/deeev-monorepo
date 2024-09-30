import { useTranslations as useTranslationsNextIntl } from 'next-intl';

import { UNRESOLVED_MESSAGE } from '@/i18n/request';

export const useTranslations = (
	...[namespace]: Parameters<typeof useTranslationsNextIntl>
): ReturnType<typeof useTranslationsNextIntl> => {
	return useTranslationsNextIntl(namespace);
};

type TranslationValue<T extends string | string[]> = T | typeof UNRESOLVED_MESSAGE;

export const escapeMissingTranslation = <T extends string | string[]>(
	value: TranslationValue<T>,
): TranslationValue<T> | undefined => {
	if (Array.isArray(value)) {
		return value.map((v) => (v === UNRESOLVED_MESSAGE ? undefined : v)) as T;
	}

	return value === UNRESOLVED_MESSAGE ? undefined : value;
};
