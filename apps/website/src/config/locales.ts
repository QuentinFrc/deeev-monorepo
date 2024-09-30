export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const namespaces = ['homepage', 'common'] as const;

export const defaultLocale = 'fr' as const;
