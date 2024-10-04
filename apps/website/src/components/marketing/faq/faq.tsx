import React from 'react';

import {
	SectionHeader,
	SectionHeaderAnchor,
	SectionHeaderDescription,
	SectionHeaderTitle,
} from '@/components/ui/section-header';
import { MAX_FAQ_ITEM_COUNT } from '@/config/content';
import {
	escapeMissingTranslationsInArray,
	getTranslations,
} from '@/lib/get-translations';
import { FAQContent, FAQItem, FAQ as FAQRoot, FAQTrigger } from '@repo/ui/accordion-faq';
import { ButtonLabel } from '@repo/ui/button';
import { Disclosure, DisclosureContent, DisclosureTrigger } from '@repo/ui/disoclure';

const getFaqTranslations = () => {
	const t = getTranslations('homepage.faq');
	const common = getTranslations('common');
	return {
		title: t('title'),
		description: t('description'),
		questions: escapeMissingTranslationsInArray(
			new Array(MAX_FAQ_ITEM_COUNT).fill(null).map((_, index) => ({
				question: t(`questions.${index}.question`),
				answer: t(`questions.${index}.answer`),
			})),
		),
		see_more: common('see_more'),
		see_less: common('see_less'),
	};
};

export const FAQ = () => {
	const { title, description, questions, see_more, see_less } = getFaqTranslations();
	return (
		<section className={'container relative space-y-16 py-16'}>
			{/*<Svg />*/}
			<SectionHeader align={'center'}>
				<SectionHeaderAnchor>FAQ</SectionHeaderAnchor>
				<SectionHeaderTitle>{title}</SectionHeaderTitle>
				<SectionHeaderDescription>{description}</SectionHeaderDescription>
			</SectionHeader>
			<Disclosure className={'relative mx-auto w-max space-y-4'}>
				<FAQRoot className={'relative'}>
					{questions.slice(0, 4).map(({ question, answer }, index) => (
						<FAQItem
							className={
								'rounded-lg border bg-card px-4 py-2 transition-opacity duration-300'
							}
							key={question}
							value={`item-${index}`}>
							<FAQTrigger className={'text-start'}>{question}</FAQTrigger>
							<FAQContent>{answer}</FAQContent>
						</FAQItem>
					))}
					<DisclosureContent
						className={
							'[--collapse-height:32px] [--collapse-opacity:1] data-[state="closed"]:pointer-events-none data-[state="closed"]:[mask-image:linear-gradient(white,transparent)]'
						}>
						<div className="space-y-2">
							{questions.slice(4, 10).map(({ question, answer }, index) => (
								<FAQItem
									className={
										'rounded-lg border bg-card px-4 py-2 transition-opacity duration-300'
									}
									key={question}
									value={`item-${index + 4}`}>
									<FAQTrigger className={'text-start'}>{question}</FAQTrigger>
									<FAQContent>{answer}</FAQContent>
								</FAQItem>
							))}
						</div>
					</DisclosureContent>
				</FAQRoot>
				<div className="mx-auto grid w-max *:[grid-area:1/1]">
					<DisclosureTrigger variant={'ghost'} className={'data-[state="open"]:hidden'}>
						<ButtonLabel>{see_more}</ButtonLabel>
					</DisclosureTrigger>
					<DisclosureTrigger variant={'ghost'} className={'data-[state="closed"]:hidden'}>
						<ButtonLabel>{see_less}</ButtonLabel>
					</DisclosureTrigger>
				</div>
			</Disclosure>
		</section>
	);
};
/*

const Svg = () => (
	<svg
		className={'absolute left-1/2 top-32 -translate-x-1/2 -translate-y-full rotate-180'}
		width="1440"
		height="342"
		viewBox="0 0 1440 342"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<g filter="url(#filter0_f_1139_3270)">
			<path
				d="M1578.82 -269.337C1571.99 -236.291 1552.49 -203.199 1519.77 -170.874C1478.06 -129.672 1416.34 -91.3304 1337.89 -58.5549C1181.12 6.94791 962.68 48.0987 720 48.0987C477.32 48.0987 258.877 6.94791 102.107 -58.5549C23.6637 -91.3304 -38.0641 -129.672 -79.7719 -170.874C-112.495 -203.199 -131.986 -236.291 -138.82 -269.337L720 -269.337L1578.82 -269.337Z"
				stroke="url(#paint0_linear_1139_3270)"
				strokeWidth="53.8026"
			/>
			<path
				d="M1578.82 -269.337C1571.99 -236.291 1552.49 -203.199 1519.77 -170.874C1478.06 -129.672 1416.34 -91.3304 1337.89 -58.5549C1181.12 6.94791 962.68 48.0987 720 48.0987C477.32 48.0987 258.877 6.94791 102.107 -58.5549C23.6637 -91.3304 -38.0641 -129.672 -79.7719 -170.874C-112.495 -203.199 -131.986 -236.291 -138.82 -269.337L720 -269.337L1578.82 -269.337Z"
				stroke="url(#paint1_linear_1139_3270)"
				strokeWidth="53.8026"
			/>
		</g>
		<g filter="url(#filter1_f_1139_3270)">
			<path
				d="M-168.5 -296.238L720 -296.238L1608.5 -296.238C1608.5 -91.209 1210.7 75 720 75C229.295 75 -168.5 -91.209 -168.5 -296.238Z"
				fill="black"
			/>
			<path
				d="M1540.8 -242.436C1532.1 -225.495 1519.05 -207.972 1500.87 -190.012C1462.41 -152.024 1404.01 -115.337 1327.52 -83.3766C1174.77 -19.5519 960.008 21.1974 720 21.1974C479.992 21.1974 265.232 -19.5519 112.478 -83.3766C35.9852 -115.337 -22.4113 -152.024 -60.8665 -190.012C-79.0476 -207.972 -92.105 -225.495 -100.803 -242.436L720 -242.436L1540.8 -242.436Z"
				stroke="url(#paint2_linear_1139_3270)"
				strokeWidth="107.605"
			/>
			<path
				d="M1540.8 -242.436C1532.1 -225.495 1519.05 -207.972 1500.87 -190.012C1462.41 -152.024 1404.01 -115.337 1327.52 -83.3766C1174.77 -19.5519 960.008 21.1974 720 21.1974C479.992 21.1974 265.232 -19.5519 112.478 -83.3766C35.9852 -115.337 -22.4113 -152.024 -60.8665 -190.012C-79.0476 -207.972 -92.105 -225.495 -100.803 -242.436L720 -242.436L1540.8 -242.436Z"
				stroke="url(#paint3_linear_1139_3270)"
				strokeWidth="107.605"
			/>
		</g>
		<g filter="url(#filter2_f_1139_3270)">
			<path
				d="M-168.5 -296.238L720 -296.238L1608.5 -296.238C1608.5 -91.209 1210.7 75 720 75C229.295 75 -168.5 -91.209 -168.5 -296.238Z"
				fill="black"
			/>
			<path
				d="M1540.8 -242.436C1532.1 -225.495 1519.05 -207.972 1500.87 -190.012C1462.41 -152.024 1404.01 -115.337 1327.52 -83.3766C1174.77 -19.5519 960.008 21.1974 720 21.1974C479.992 21.1974 265.232 -19.5519 112.478 -83.3766C35.9852 -115.337 -22.4113 -152.024 -60.8665 -190.012C-79.0476 -207.972 -92.105 -225.495 -100.803 -242.436L720 -242.436L1540.8 -242.436Z"
				stroke="url(#paint4_linear_1139_3270)"
				strokeWidth="107.605"
			/>
			<path
				d="M1540.8 -242.436C1532.1 -225.495 1519.05 -207.972 1500.87 -190.012C1462.41 -152.024 1404.01 -115.337 1327.52 -83.3766C1174.77 -19.5519 960.008 21.1974 720 21.1974C479.992 21.1974 265.232 -19.5519 112.478 -83.3766C35.9852 -115.337 -22.4113 -152.024 -60.8665 -190.012C-79.0476 -207.972 -92.105 -225.495 -100.803 -242.436L720 -242.436L1540.8 -242.436Z"
				stroke="url(#paint5_linear_1139_3270)"
				strokeWidth="107.605"
			/>
		</g>
		<g filter="url(#filter3_f_1139_3270)">
			<path
				d="M-168.5 -296.238L720 -296.238L1608.5 -296.238C1608.5 -91.209 1210.7 75 720 75C229.295 75 -168.5 -91.209 -168.5 -296.238Z"
				fill="black"
			/>
			<path
				d="M1540.8 -242.436C1532.1 -225.495 1519.05 -207.972 1500.87 -190.012C1462.41 -152.024 1404.01 -115.337 1327.52 -83.3766C1174.77 -19.5519 960.008 21.1974 720 21.1974C479.992 21.1974 265.232 -19.5519 112.478 -83.3766C35.9852 -115.337 -22.4113 -152.024 -60.8665 -190.012C-79.0476 -207.972 -92.105 -225.495 -100.803 -242.436L720 -242.436L1540.8 -242.436Z"
				stroke="url(#paint6_linear_1139_3270)"
				strokeWidth="107.605"
			/>
			<path
				d="M1540.8 -242.436C1532.1 -225.495 1519.05 -207.972 1500.87 -190.012C1462.41 -152.024 1404.01 -115.337 1327.52 -83.3766C1174.77 -19.5519 960.008 21.1974 720 21.1974C479.992 21.1974 265.232 -19.5519 112.478 -83.3766C35.9852 -115.337 -22.4113 -152.024 -60.8665 -190.012C-79.0476 -207.972 -92.105 -225.495 -100.803 -242.436L720 -242.436L1540.8 -242.436Z"
				stroke="url(#paint7_linear_1139_3270)"
				strokeWidth="107.605"
			/>
		</g>
		<g filter="url(#filter4_f_1139_3270)">
			<path
				d="M251.453 -68.3257L720.53 -68.3257L1189.61 -68.3257C1189.61 10.8309 979.594 75 720.53 75C461.466 75 251.453 10.8309 251.453 -68.3257Z"
				fill="black"
			/>
			<path
				d="M1125.52 -34.699C1106.03 -22.3006 1078.16 -10.066 1042.39 0.861931C961.489 25.5814 847.686 41.3734 720.53 41.3734C593.373 41.3734 479.571 25.5814 398.669 0.861931C362.903 -10.066 335.034 -22.3006 315.538 -34.699L720.53 -34.699L1125.52 -34.699Z"
				stroke="#FAFAFA"
				strokeWidth="67.2533"
			/>
		</g>
		<g filter="url(#filter5_f_1139_3270)">
			<path
				d="M385.201 -68.3257L720.273 -68.3257L1055.35 -68.3257C1055.35 10.8309 905.329 75 720.273 75C535.218 75 385.201 10.8309 385.201 -68.3257Z"
				fill="black"
			/>
			<path
				d="M1003.61 -34.699C990.632 -22.1088 970.76 -9.35081 943.981 2.10388C888.442 25.8604 809.372 41.3734 720.273 41.3734C631.174 41.3734 552.105 25.8604 496.566 2.10388C469.787 -9.35081 449.915 -22.1088 436.939 -34.699L720.273 -34.699L1003.61 -34.699Z"
				stroke="#FAFAFA"
				strokeWidth="67.2533"
			/>
		</g>
		<g style={{ mixBlendMode: 'soft-light' }}>
			<path
				opacity="0.61"
				d="M1015.06 70.5L423.94 70.5M1103.26 89.0526L335.735 51.9473M981.775 96.8546L457.224 44.1454M736.84 73.3005L702.16 67.6994M580.24 37.0533L858.76 103.947M1009.77 173.601L429.23 -32.6014M671.529 43.7029L767.471 97.2971M697.831 47.1567L741.169 93.8433M716.056 45.9733L722.944 95.0267M713.178 80.4266L725.822 60.5733M618.412 139.575L820.588 1.42503M749.025 58.2789L689.975 82.7211M669.193 84.3956L769.807 56.6044M628.685 87.5201L810.315 53.4799M896.88 48.9833L542.12 92.0167M444.904 88.7993L994.096 52.2006M489.346 74.5027L949.653 66.4973M828.634 73.8327L610.365 67.1673M357.965 41.2844L1081.03 99.7156M451.134 33.5028L987.866 107.497M772.773 81.6176L666.226 59.3823M402.202 -26.9511L1036.8 167.951M772.444 95.2645L666.556 45.7355M589.811 -35L849.189 176M731.632 99.2075L707.368 41.7925M708.688 101.235L730.312 39.7651M795.398 4.67005L643.602 136.33M858.375 2.71304L580.625 138.287M938.494 0.78723L500.505 140.213M809.931 50.9491L629.069 90.0509M739.033 67.6952L699.967 73.3047M863.005 58.2107L575.995 82.7893M1211.34 53.3085L227.661 87.6915M1223 77.0627L216 63.9373"
				stroke="white"
				strokeWidth="1.05"
				strokeLinecap="round"
			/>
		</g>
		<path
			d="M-39.8978 -242.445L719.856 -242.445L1479.61 -242.445C1479.61 -67.1248 1139.46 75 719.856 75C300.256 75 -39.8978 -67.1248 -39.8978 -242.445Z"
			fill="black"
		/>
		<defs>
			<filter
				id="filter0_f_1139_3270"
				x="-179.261"
				y="-306.999"
				width="1798.52"
				height="392.759"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="5.38026"
					result="effect1_foregroundBlur_1139_3270"
				/>
			</filter>
			<filter
				id="filter1_f_1139_3270"
				x="-211.542"
				y="-339.28"
				width="1863.08"
				height="457.322"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur stdDeviation="21.521" result="effect1_foregroundBlur_1139_3270" />
			</filter>
			<filter
				id="filter2_f_1139_3270"
				x="-276.105"
				y="-403.843"
				width="1992.21"
				height="586.449"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="53.8026"
					result="effect1_foregroundBlur_1139_3270"
				/>
			</filter>
			<filter
				id="filter3_f_1139_3270"
				x="-356.809"
				y="-484.547"
				width="2153.62"
				height="747.856"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="94.1546"
					result="effect1_foregroundBlur_1139_3270"
				/>
			</filter>
			<filter
				id="filter4_f_1139_3270"
				x="240.693"
				y="-79.0862"
				width="959.674"
				height="164.847"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="5.38026"
					result="effect1_foregroundBlur_1139_3270"
				/>
			</filter>
			<filter
				id="filter5_f_1139_3270"
				x="363.68"
				y="-89.8467"
				width="713.187"
				height="186.368"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="10.7605"
					result="effect1_foregroundBlur_1139_3270"
				/>
			</filter>
			<linearGradient
				id="paint0_linear_1139_3270"
				x1="1354.84"
				y1="-34.8196"
				x2="112.971"
				y2="-34.8196"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#08FF8C" />
				<stop offset="0.515625" stopColor="#05AAD5" />
				<stop offset="1" stopColor="#C642FF" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_1139_3270"
				x1="720"
				y1="75"
				x2="720"
				y2="-5.83136"
				gradientUnits="userSpaceOnUse">
				<stop stopOpacity="0" />
				<stop offset="1" />
			</linearGradient>
			<linearGradient
				id="paint2_linear_1139_3270"
				x1="1354.84"
				y1="-34.8196"
				x2="112.971"
				y2="-34.8196"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#08FF8C" />
				<stop offset="0.515625" stopColor="#05AAD5" />
				<stop offset="1" stopColor="#C642FF" />
			</linearGradient>
			<linearGradient
				id="paint3_linear_1139_3270"
				x1="720"
				y1="75"
				x2="720"
				y2="-5.83136"
				gradientUnits="userSpaceOnUse">
				<stop stopOpacity="0" />
				<stop offset="1" />
			</linearGradient>
			<linearGradient
				id="paint4_linear_1139_3270"
				x1="1354.84"
				y1="-34.8196"
				x2="112.971"
				y2="-34.8196"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#08FF8C" />
				<stop offset="0.515625" stopColor="#05AAD5" />
				<stop offset="1" stopColor="#C642FF" />
			</linearGradient>
			<linearGradient
				id="paint5_linear_1139_3270"
				x1="720"
				y1="75"
				x2="720"
				y2="-5.83136"
				gradientUnits="userSpaceOnUse">
				<stop stopOpacity="0" />
				<stop offset="1" />
			</linearGradient>
			<linearGradient
				id="paint6_linear_1139_3270"
				x1="1354.84"
				y1="-34.8196"
				x2="112.971"
				y2="-34.8196"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#08FF8C" />
				<stop offset="0.515625" stopColor="#05AAD5" />
				<stop offset="1" stopColor="#C642FF" />
			</linearGradient>
			<linearGradient
				id="paint7_linear_1139_3270"
				x1="720"
				y1="75"
				x2="720"
				y2="-5.83136"
				gradientUnits="userSpaceOnUse">
				<stop stopOpacity="0" />
				<stop offset="1" />
			</linearGradient>
		</defs>
	</svg>
);
*/
