import { NextResponse } from 'next/server';
import {
	doesExperimentExists,
	generateAllParams,
	GraphImage,
	LabPageProps,
} from '@ui/modules/lab';

export const generateStaticParams = generateAllParams;

/* @see https://github.com/vercel/next.js/issues/51147 */
export async function GET(req: Request, { params }: LabPageProps) {
	const { slug } = params;
	if (!doesExperimentExists(slug)) {
		return NextResponse.json(
			{ error: "This open graph image doesn't exist" },
			{ status: 404 },
		);
	}

	return await GraphImage({ slug });
}
