import React from 'react';

import { cn } from '@/lib/utils';
import { Container } from '@repo/ui/container';
import { Text } from '@ui/components/typography';

/*Reduce size of these img with webp or jpeg*/
import { MockupBlock } from './block';
import MockupBigBang from './mockups/mockups-bigbang.png';
import MockupBoxe from './mockups/mockups-boxe.png';
import MockupConfart from './mockups/mockups-confart.png';
import MockupDress from './mockups/mockups-dress.png';
import MockupEvent from './mockups/mockups-event.png';
import MockupKeyboard from './mockups/mockups-keyboard.png';
import MockupMiaou from './mockups/mockups-miaou.png';
import MockupNailsPink from './mockups/mockups-nails-pink.png';
import MockupNailsWhite from './mockups/mockups-nails-white.png';
import MockupNetwork from './mockups/mockups-network.png';
import MockupVisionMobile from './mockups/mockups-vision-pro-mobile.png';
import MockupVision from './mockups/mockups-vision-pro.png';

export const LandingPageMockups = () => (
	<section className={'max-w-full overflow-x-clip pb-32'}>
		<Container className={'relative mb-12 h-[648px] p-4'}>
			<div className="absolute inset-y-0 left-1/2 h-full w-[1272px] -translate-x-1/2">
				<MockupBlock
					src={MockupBigBang}
					alt={'Mockup BigBang'}
					size={'desktop'}
					className={cn('left-5 top-4')}
				/>
				<MockupBlock
					src={MockupBoxe}
					alt={'Mockup Boxe'}
					size={'desktop'}
					className={cn('left-[296px] top-12')}
				/>
				<MockupBlock
					src={MockupVisionMobile}
					alt={'Mockup Vision Pro Mobile'}
					size={'mobile'}
					className={cn('left-[572px] top-16')}
				/>
				<MockupBlock
					src={MockupMiaou}
					alt={'Mockup Miaou'}
					size={'desktop'}
					className={cn('left-[720px] top-4')}
				/>
				<MockupBlock
					src={MockupDress}
					alt={'Mockup Dress'}
					size={'desktop'}
					className={'left-[996px] top-8'}
				/>
				<MockupBlock
					src={MockupConfart}
					alt={'Mockup Confart'}
					size={'desktop'}
					className={'left-5 top-[218px]'}
				/>
				<MockupBlock
					src={MockupNailsPink}
					alt={'Mockup Nails Pink'}
					size={'desktop'}
					className={'left-[296px] top-[250px]'}
				/>
				<MockupBlock
					src={MockupNailsWhite}
					alt={'Mockup Nails White'}
					size={'desktop'}
					className={'left-5 top-[420px]'}
				/>
				<MockupBlock
					src={MockupNetwork}
					alt={'Mockup Network'}
					size={'desktop'}
					className={'left-[996px] top-[234px]'}
				/>
				<MockupBlock
					src={MockupVision}
					alt={'Mockup Vision Pro'}
					size={'desktop'}
					className={'left-[296px] top-[452px]'}
				/>
				<MockupBlock
					src={MockupKeyboard}
					alt={'Mockup Keyboard'}
					size={'desktop'}
					className={'left-[720px] top-[218px]'}
				/>
				<MockupBlock
					src={MockupEvent}
					alt={'Mockup Event'}
					size={'desktop'}
					className={'left-[720px] top-[420px]'}
				/>
				{/*<EmptyBlock size={'desktop'} className={'left-[996px] top-[436px]'}>
					Votre futur maquette ici <Icon i={'Star'} className={'ml-2'} />
				</EmptyBlock>*/}
				<Text
					size={'sm'}
					contrast={3}
					className={cn('absolute bottom-16 left-1/2 -z-10 -translate-x-1/2')}>
					Venez ajouter votre landing page à notre mur de création.
				</Text>
			</div>
		</Container>
	</section>
);
