import { pino } from 'pino';

import { LOG_LEVEL } from '@/config/env';

export const getLogger = (name: string) =>
	pino({
		name: name,
		level: LOG_LEVEL || 'info',
	});
