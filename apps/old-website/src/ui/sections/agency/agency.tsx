import { cn } from '@/lib/utils';
import { Container } from '@repo/ui/container';

import { SectionHeading } from '../_components/section-heading';
import { SparklesCore } from './particles';

export const Agency = () => (
	<section
		id={'agency'}
		className={'relative flex max-h-[800px] items-center overflow-hidden h-screen-80'}>
		<Container className={'relative py-48'} size={'xl'}>
			<div className={cn('absolute inset-0 -z-10')}>
				<EllipseBackground />
				<SparklesCore
					particleDensity={20}
					className={
						'relative -z-20 [mask:radial-gradient(50%_100%_at_center,black,transparent)]'
					}
				/>
			</div>
			<SectionHeading
				headingLevel={'H2'}
				description={'Centré sur l’UI et l’UX'}
				icon={'Star'}
				align={'center'}
				responsive={true}
				className={'mb-3 w-4/5 sm:w-auto'}>
				Une agence de création
			</SectionHeading>
			<p className={'text-contrasted-mid sm:text-center'}>
				Nous croyons fermement que le design est bien plus qu’une simple esthétique.
				<br /> C’est un langage universel qui communique des émotions, des valeurs et une
				identité propre à votre projet.
				<br /> C’est pourquoi nous plaçons le design au cœur de chaque site web que nous
				créons.
			</p>
		</Container>
	</section>
);

const EllipseBackground = () => (
	<svg
		className={cn(
			'absolute left-1/2 top-[20%] -z-10 -translate-x-1/2 [backdrop-filter:blur(10px)]',
			'w-[640px] rotate-30',
			'sm:w-full sm:rotate-0',
			'min-w-[calc(100vw_/_cos(60deg))] sm:min-w-[1200px]',
		)}
		viewBox="0 0 1310 312"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		{/*FILL-MASK*/}
		<mask
			id={'ellipse-fill-mask'}
			style={{ maskType: 'alpha' }}
			maskUnits="userSpaceOnUse">
			<path
				d="M1.00334 310.5C1.57029 225.624 74.2914 148.512 192.274 92.4931C310.644 36.2899 474.241 1.5 655 1.5C835.759 1.5 999.356 36.2899 1117.73 92.4931C1235.71 148.512 1308.43 225.624 1309 310.5H655H1.00334Z"
				fill={'url(#fill-mask)'}
			/>
		</mask>
		{/*STROKE-MASK*/}
		<mask
			id={'ellipse-stroke-mask'}
			style={{ maskType: 'alpha' }}
			maskUnits="userSpaceOnUse">
			<path
				d="M1.00334 310.5C1.57029 225.624 74.2914 148.512 192.274 92.4931C310.644 36.2899 474.241 1.5 655 1.5C835.759 1.5 999.356 36.2899 1117.73 92.4931C1235.71 148.512 1308.43 225.624 1309 310.5H655H1.00334Z"
				stroke="url('#stroke-mask')"
				strokeWidth={4}
			/>
			{/*todo: add light effect on border using gradient animated*/}
		</mask>
		<g mask={'url(#ellipse-stroke-mask)'}>
			<rect fill={'url(#stroke-gradient)'} x={0} y={0} width={'100%'} height={'100%'} />
		</g>
		<g mask={'url(#ellipse-fill-mask)'}>
			<rect
				fill={'url(#fill-gradient)'}
				x={0}
				y={0}
				width={'100%'}
				height={'100%'}
				opacity={'0.2'}
			/>
		</g>
		<defs>
			<linearGradient
				id="fill-gradient"
				x1="249.5"
				y1="86"
				x2="1036"
				y2="86"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#08FF8C" />
				<stop offset="0.5" stopColor="#05AAD5" />
				<stop offset="1" stopColor="#C642FF" />
			</linearGradient>
			<linearGradient
				id="fill-mask"
				x1="655"
				y1="0.5"
				x2="655"
				y2="104"
				gradientUnits="userSpaceOnUse">
				<stop />
				<stop offset="0.8" stopOpacity="0" />
			</linearGradient>
			{/*--STROKE--*/}
			<linearGradient
				id="stroke-gradient"
				x1="187"
				y1="92.5"
				x2="1102.5"
				y2="92.5"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#08FF8C" />
				<stop offset="0.5" stopColor="#05AAD5" />
				<stop offset="1" stopColor="#C642FF" />
			</linearGradient>
			<linearGradient
				id="stroke-mask"
				x1="655"
				y1="0.5"
				x2="655"
				y2="104.5"
				gradientUnits="userSpaceOnUse">
				<stop />
				<stop offset="1" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
);
