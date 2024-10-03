import { useTranslations as useTranslationsNextIntl } from 'next-intl';

import { UNRESOLVED_MESSAGE } from '@/i18n/request';

export const useTranslations = (
	...[namespace]: Parameters<typeof useTranslationsNextIntl>
): ReturnType<typeof useTranslationsNextIntl> => {
	return useTranslationsNextIntl(namespace);
};

type TranslationValue<T extends string | string[] | Record<string, any>> =
	| T
	| typeof UNRESOLVED_MESSAGE;

export const escapeMissingTranslation = <
	T extends string | string[] | Record<string, any>,
>(
	value: TranslationValue<T>,
): T => {
	if (Array.isArray(value)) {
		const filteredArray = value
			.map((v) => escapeMissingTranslation(v))
			.filter((v) => v !== undefined) as T;

		// Si tous les éléments sont filtrés, renvoyer undefined
		return filteredArray.length > 0 ? filteredArray : [];
	} else if (typeof value === 'object' && value !== null) {
		// Parcourir chaque clé de l'objet et appliquer la fonction récursive sur la valeur
		const filteredObject = Object.keys(value).reduce(
			(acc, key) => {
				const v = escapeMissingTranslation(value[key]);
				if (v !== undefined) {
					acc[key] = v;
				}
				return acc;
			},
			{} as Record<string, any>,
		);

		// Si l'objet est vide après filtrage, renvoyer undefined
		return Object.keys(filteredObject).length > 0 ? (filteredObject as T) : undefined;
	}

	return value === UNRESOLVED_MESSAGE ? undefined : value;
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
