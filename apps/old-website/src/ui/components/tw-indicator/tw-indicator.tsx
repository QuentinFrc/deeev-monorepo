import { APP_ENV } from '@/config/env';
import { Text } from '@ui/components/typography';

export const TailwindIndicator = () =>
	APP_ENV === 'development' && (
		<Text
			size={'sm'}
			contrast={1}
			className={'fixed bottom-4 left-4 z-50 rounded-full border bg-card px-2 font-mono'}>
			<span className="sm:hidden">default</span>
			<span className="hidden sm:inline md:hidden">sm</span>
			<span className="hidden md:inline lg:hidden">md</span>
			<span className="hidden lg:inline xl:hidden">lg</span>
			<span className="hidden xl:inline 2xl:hidden">xl</span>
			<span className="hidden 2xl:inline">2xl</span>
		</Text>
	);
