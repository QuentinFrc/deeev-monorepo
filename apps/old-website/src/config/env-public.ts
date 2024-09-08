'client-only';

import { PUBLIC_ENV_KEY } from 'next-runtime-env';

import { PUBLIC_ENV_LIST } from '@/config/env';

type PublicEnv = (typeof PUBLIC_ENV_LIST)[number];
const envFromBrowser = (key: PublicEnv) => {
	return window[PUBLIC_ENV_KEY][key];
};

/** Inlined environment variables that are used on client side. */
export const PUBLIC_APP_URL = envFromBrowser('APP_URL') || '';
export const PUBLIC_STATS_URL = envFromBrowser('STATS_URL') || '';
export const PUBLIC_CONTACT_EMAIL = envFromBrowser('CONTACT_EMAIL') || '';
