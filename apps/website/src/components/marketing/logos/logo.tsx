import Image from 'next/image';

import { getTranslations } from '@/lib/get-translations';
import { InfiniteSlider } from '@repo/ui/infinite-slider';
import { Typography } from '@repo/ui/typography';

const getLogosTranslations = () => {
	const t = getTranslations('homepage.logos');
	return {
		title: t('title'),
	};
};

export const Logos = () => {
	const { title } = getLogosTranslations();
	return (
		<div className={'container'}>
			<div className="space-y-8 text-start">
				<Typography.p size={'sm'} color={'contrasted-mid'}>
					{title}
				</Typography.p>
				<div className="mr-auto max-w-3xl [mask-image:linear-gradient(90deg,transparent,white_92px,white_calc(100%-92px),transparent)]">
					<InfiniteSlider className={'grayscale'} gap={128}>
						<Image src="/logos/orange-logo.png" alt="Logo 1" width={64} height={64} />
						<Image src="/logos/orange-logo.png" alt="Logo 1" width={64} height={64} />
						<Image src="/logos/orange-logo.png" alt="Logo 1" width={64} height={64} />
						<Image src="/logos/orange-logo.png" alt="Logo 1" width={64} height={64} />
						<Image src="/logos/orange-logo.png" alt="Logo 1" width={64} height={64} />
					</InfiniteSlider>
				</div>
			</div>
		</div>
	);
};
