/*import { contact } from '@/lib/actions/mail';*/

export const GET = async () => {
	/*const { data, error } = await contact({
		to: 'test@deeev.fr',
		name: 'Health Check',
	});*/
	const data = true;
	const error = { name: 'Mocked' };
	const mailerStatus = data ? 'UP' : error?.name || 'DOWN';
	/* todo: Check health of ENV.STATS_URL/api/health */
	return Response.json({
		mailer: mailerStatus,
	});
};
