import { unstable_noStore as noStore } from 'next/cache';
import { EnvScript } from 'next-runtime-env';

import { HAS_DYNAMIC_PUBLIC_ENV_VARS, PUBLIC_ENV, PUBLIC_ENV_LIST } from '@/config/env';
import { getLogger } from '@/lib/services/logger';
import { callOnce } from '@/lib/utils';

const logger = getLogger('public-env-script');

export const PublicEnvScript = () => {
	callOnce(() =>
		logger.warn(
			`${PUBLIC_ENV_LIST} will be accessible on the client side, ensure that these are not sensitive data.`,
		),
	)();
	if (HAS_DYNAMIC_PUBLIC_ENV_VARS) {
		callOnce(() =>
			logger.warn(
				'project has dynamic public env vars and will opt to full dynamic change HAS_DYNAMIC_PUBLIC_ENV_VARS to false to opt out of this behavior',
			),
		)();
		noStore();
	}
	return <EnvScript env={PUBLIC_ENV} />;
};
