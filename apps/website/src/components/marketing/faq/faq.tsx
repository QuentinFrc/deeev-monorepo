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
import { SparklesCore } from '@repo/ui/sparkles';

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
		<section className={'container relative space-y-16 pb-16 pt-48'}>
			<div className="absolute -top-48 left-1/2 -z-10 h-max -translate-x-1/2">
				<SparklesCore
					particleDensity={3}
					direction={'top'}
					straight
					className={
						'absolute inset-0 z-10 size-full [mask-image:radial-gradient(100%_100%_at_50%_75%,transparent_20%,white_70%)]'
					}
				/>
				<Svg className={'relative z-20'} />
			</div>
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

const Svg = (props: React.ComponentPropsWithoutRef<'svg'>) => (
	<svg
		width="1280"
		height="818"
		viewBox="0 0 1280 818"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<g clipPath="url(#clip0_1172_4860)">
			<g filter="url(#filter0_f_1172_4860)">
				<ellipse
					cx="639.5"
					cy="442.5"
					rx="481.5"
					ry="144.5"
					fill="url(#paint0_linear_1172_4860)"
					fillOpacity="0.6"
				/>
			</g>
		</g>
		<path
			d="M640 281C342.319 281 101 521.423 101 818H1179C1179 521.423 937.682 281 640 281Z"
			fill="url(#paint1_linear_1172_4860)"
		/>
		<g clipPath="url(#clip1_1172_4860)">
			<mask
				id="mask0_1172_4860"
				style={{ maskType: 'alpha' }}
				maskUnits="userSpaceOnUse"
				x="101"
				y="281"
				width="1078"
				height="537">
				<path
					d="M640 281C342.319 281 101 521.423 101 818H1179C1179 521.423 937.682 281 640 281Z"
					fill="black"
				/>
			</mask>
			<g mask="url(#mask0_1172_4860)">
				<g opacity="0.2" filter="url(#filter1_f_1172_4860)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M108.645 695.458C151.881 441.989 373.324 249 640 249C906.676 249 1128.12 441.989 1171.36 695.458C1055.29 526.941 860.601 416.412 640 416.412C419.399 416.412 224.705 526.941 108.645 695.458Z"
						fill="url(#paint2_linear_1172_4860)"
					/>
				</g>
				<g opacity="0.5" filter="url(#filter2_f_1172_4860)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M136.34 594.421C213.799 392.444 410.089 249 640 249C869.911 249 1066.2 392.444 1143.66 594.421C1025.66 447.06 843.896 352.636 640 352.636C436.104 352.636 254.339 447.06 136.34 594.421Z"
						fill="url(#paint3_linear_1172_4860)"
					/>
				</g>
				<g filter="url(#filter3_f_1172_4860)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M195.6 482.084C292.775 341.305 455.57 249 640 249C824.43 249 987.225 341.305 1084.4 482.084C968.828 372.245 812.317 304.804 640 304.804C467.683 304.804 311.173 372.245 195.6 482.084Z"
						fill="white"
					/>
				</g>
			</g>
		</g>
		<g clipPath="url(#clip2_1172_4860)">
			<g filter="url(#filter4_dddd_1172_4860)">
				<path
					d="M1179 818C1179 521.423 937.681 281 640 281C342.319 281 101 521.423 101 818"
					stroke="url(#paint4_linear_1172_4860)"
					strokeWidth="5"
				/>
			</g>
		</g>
		<rect y="384" width="1280" height="434" fill="url(#paint5_linear_1172_4860)" />
		<defs>
			<filter
				id="filter0_f_1172_4860"
				x="-154"
				y="-14"
				width="1587"
				height="913"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur stdDeviation="156" result="effect1_foregroundBlur_1172_4860" />
			</filter>
			<filter
				id="filter1_f_1172_4860"
				x="68.6448"
				y="209"
				width="1142.71"
				height="526.458"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_1172_4860" />
			</filter>
			<filter
				id="filter2_f_1172_4860"
				x="96.3397"
				y="209"
				width="1087.32"
				height="425.421"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_1172_4860" />
			</filter>
			<filter
				id="filter3_f_1172_4860"
				x="155.6"
				y="209"
				width="968.8"
				height="313.084"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_1172_4860" />
			</filter>
			<filter
				id="filter4_dddd_1172_4860"
				x="34.5"
				y="214.5"
				width="1211"
				height="667.5"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="32" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.443137 0 0 0 0 0.443137 0 0 0 0 0.478431 0 0 0 1 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_1172_4860"
				/>
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="24" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.443137 0 0 0 0 0.443137 0 0 0 0 0.478431 0 0 0 1 0"
				/>
				<feBlend
					mode="normal"
					in2="effect1_dropShadow_1172_4860"
					result="effect2_dropShadow_1172_4860"
				/>
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="16" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.443137 0 0 0 0 0.443137 0 0 0 0 0.478431 0 0 0 1 0"
				/>
				<feBlend
					mode="normal"
					in2="effect2_dropShadow_1172_4860"
					result="effect3_dropShadow_1172_4860"
				/>
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset />
				<feGaussianBlur stdDeviation="4" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.831373 0 0 0 0 0.831373 0 0 0 0 0.847059 0 0 0 0.8 0"
				/>
				<feBlend
					mode="normal"
					in2="effect3_dropShadow_1172_4860"
					result="effect4_dropShadow_1172_4860"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect4_dropShadow_1172_4860"
					result="shape"
				/>
			</filter>
			<linearGradient
				id="paint0_linear_1172_4860"
				x1="158"
				y1="442.5"
				x2="1121"
				y2="442.5"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#059669" />
				<stop offset="0.5" stopColor="#05AAD5" />
				<stop offset="1" stopColor="#C642FF" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_1172_4860"
				x1="640"
				y1="281"
				x2="640"
				y2="725.345"
				gradientUnits="userSpaceOnUse">
				<stop stopOpacity="0" />
				<stop offset="0.16253" stopOpacity="0.2" />
				<stop offset="1" />
			</linearGradient>
			<linearGradient
				id="paint2_linear_1172_4860"
				x1="108.645"
				y1="472.229"
				x2="1171.36"
				y2="472.229"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#059669" />
				<stop offset="0.5" stopColor="#05AAD5" />
				<stop offset="1" stopColor="#C642FF" />
			</linearGradient>
			<linearGradient
				id="paint3_linear_1172_4860"
				x1="136.34"
				y1="421.711"
				x2="1143.66"
				y2="421.711"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#AEFFDA" />
				<stop offset="0.5" stopColor="#A5EEFC" />
				<stop offset="1" stopColor="#EFCCFF" />
			</linearGradient>
			<linearGradient
				id="paint4_linear_1172_4860"
				x1="640"
				y1="281"
				x2="640"
				y2="818"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#D4D4D8" />
				<stop offset="0.491922" stopColor="#71717A" stopOpacity="0.1" />
				<stop offset="1" stopColor="#71717A" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="paint5_linear_1172_4860"
				x1="640"
				y1="384"
				x2="640"
				y2="818"
				gradientUnits="userSpaceOnUse">
				<stop stopOpacity="0" />
				<stop offset="0.855" />
			</linearGradient>
			<clipPath id="clip0_1172_4860">
				<rect width="1280" height="818" fill="white" />
			</clipPath>
			<clipPath id="clip1_1172_4860">
				<rect width="1078" height="537" fill="white" transform="translate(101 281)" />
			</clipPath>
			<clipPath id="clip2_1172_4860">
				<rect width="1078" height="659" fill="white" transform="translate(101 159)" />
			</clipPath>
		</defs>
	</svg>
);
