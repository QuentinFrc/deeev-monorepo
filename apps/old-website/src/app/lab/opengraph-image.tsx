import { GraphImage } from '@ui/modules/labs';

export const contentType = 'image/png';

export const size = {
	width: 1200,
	height: 630,
} as const;

export default async function OGImage() {
	return await GraphImage();
}
