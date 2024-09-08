'server-only';

/** Inlined environment variables that are used on server. */
export const HAS_DYNAMIC_PUBLIC_ENV_VARS =
	process.env.HAS_DYNAMIC_PUBLIC_ENV_VARS === 'true' ||
	process.env.HAS_DYNAMIC_PUBLIC_ENV_VARS === '1';

export const APP_ENV = process.env.NODE_ENV || 'development';

export const APP_URL = process.env.APP_URL || '';
export const STATS_URL = process.env.STATS_URL || '';
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || '';

export const INSTAGRAM_LINK = process.env.INSTAGRAM_LINK || '';
export const LINKEDIN_LINK = process.env.LINKEDIN_LINK || '';
export const BEHANCE_LINK = process.env.BEHANCE_LINK || '';

export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

/** Public environment variables that will be accessed from the server */
export const PUBLIC_ENV = {
	APP_URL,
	STATS_URL,
	CONTACT_EMAIL,
} as const;

/** Only used in instrumentationHook */
export const PUBLIC_ENV_LIST = Object.keys(PUBLIC_ENV);
