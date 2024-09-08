'use client';

import { toast } from 'sonner';

import { ButtonRoot } from '@repo/ui/button';

const DESIGN_ASSETS_URL =
	'https://drive.google.com/drive/folders/1mDCzbwj-1zng6A4wqvWugZs0sjxVswQd';

export const DownloadAllDesignAssetsButton = () => {
	return (
		<ButtonRoot
			variant="gradient"
			onClick={() => {
				toast.success(`Tous les assets ont été téléchargés`);
				window.open(DESIGN_ASSETS_URL, '_blank');
			}}>
			Télécharger tous les assets
		</ButtonRoot>
	);
};
