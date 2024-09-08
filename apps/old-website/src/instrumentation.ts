import { makeEnvPublic } from 'next-runtime-env';

import { PUBLIC_ENV_LIST } from '@/config/env';

export const register = () => {
	makeEnvPublic(PUBLIC_ENV_LIST);
};
