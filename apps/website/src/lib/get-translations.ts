import { useTranslations as getTranslationsNextIntl } from 'next-intl';

import { UNRESOLVED_MESSAGE } from '@/i18n/request';

export const getTranslations = (
	...[namespace]: Parameters<typeof getTranslationsNextIntl>
): ReturnType<typeof getTranslationsNextIntl> => {
	return getTranslationsNextIntl(namespace);
};

export const escapeMissingTranslationsInArray = <T>(value: T[]): T[] => {
	return value
		.map((v) => {
			if (typeof v === 'string') {
				// Pour les chaînes de caractères, remplacer UNRESOLVED_MESSAGE par undefined
				return v === UNRESOLVED_MESSAGE ? undefined : v;
			} else if (typeof v === 'object' && v !== null) {
				// Pour les objets, vérifier si une des valeurs est UNRESOLVED_MESSAGE
				const hasUnresolvedMessage = Object.values(v).some(
					(val) => val === UNRESOLVED_MESSAGE,
				);
				// Si une des valeurs est UNRESOLVED_MESSAGE, retourner undefined pour cet objet
				return hasUnresolvedMessage ? undefined : v;
			}
			return undefined;
		})
		.filter((v) => v !== undefined);
};
