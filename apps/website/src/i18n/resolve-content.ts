import { Locale, namespaces } from '@/config/locales';

export const getMessages = async (locale: Locale) => {
	return await Promise.all(
		namespaces.map(
			async (namespace) =>
				await import(`../../content/${namespace}/${locale}.json`).then((module) => ({
					[namespace]: module.default,
				})),
		),
	).then((messages) => Object.assign({}, ...messages));
};
