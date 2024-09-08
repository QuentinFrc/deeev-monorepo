import { APP_URL } from '@/config/env';

export const labUrl = `${APP_URL}/lab`;
export const createLabUrl = (slug: string) => `${labUrl}/${slug}`;

export const createLegalsUrl = (slug: string) => `${APP_URL}/legals/${slug}`;
