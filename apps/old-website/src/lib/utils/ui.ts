import { DEFAULT_ARTIFICIAL_DELAY } from '@/config/const';

type withArtificialDelayOptions<T> = {
	promise?: Promise<T> | null;
	delay?: number;
};
export const withArtificialDelay = <T extends any>({
	promise = null,
	delay = DEFAULT_ARTIFICIAL_DELAY,
}: withArtificialDelayOptions<T>) =>
	Promise.allSettled([
		promise
			?.then((data) => ({ status: 'fulfilled', data: data }))
			.catch((error) => ({ status: 'rejected', reason: error })),
		new Promise((resolve) => setTimeout(resolve, delay)),
	]).then(([res]) => ({
		status: res.status,
		data: res.status === 'fulfilled' ? res.value : null,
		error: res.status === 'rejected' ? res.reason : null,
	}));
