import { NextResponse } from 'next/server';

import { APP_URL } from '@/config/env';

export function GET(): NextResponse {
	return new NextResponse(
		`User-agent: *\nAllow: /\nDisallow: /private\nSitemap: ${APP_URL}/sitemap.xml`,
		{
			headers: new Headers({ 'Content-Type': 'text/plain' }),
		},
	);
}
