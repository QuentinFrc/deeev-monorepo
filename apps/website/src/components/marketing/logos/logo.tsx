import Image from 'next/image';

import { useTranslations } from '@/hooks/use-translations';
import { InfiniteSlider } from '@repo/ui/infinite-slider';
import { Typography } from '@repo/ui/typography';

const getTranslations = () => {
	const t = useTranslations('homepage.logos');
	return {
		title: t('title'),
	};
};

export const Logos = () => {
	const { title } = getTranslations();
	return (
		<div className={'container'}>
			<div className="text-start space-y-8">
				<Typography.p size={'sm'} color={'contrasted-mid'}>
					{title}
				</Typography.p>
				<div className="max-w-3xl mr-auto [mask-image:linear-gradient(90deg,transparent,white_92px,white_calc(100%-92px),transparent)]">
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
