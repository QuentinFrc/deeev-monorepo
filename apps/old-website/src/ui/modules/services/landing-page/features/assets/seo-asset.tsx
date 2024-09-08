import * as Badge from '@repo/ui/badge';
import { Text } from '@ui/components/typography';

export const SeoAsset = () => (
	<div className="size-max space-y-4">
		<LightHouse />
		<Metadata />
		<Semantic />
	</div>
);

const metas = [
	'Titre',
	'Description',
	'Mots Clés',
	'Méta attributs',
	'Schéma JsonLD',
	'robot.txt',
	'sitemap.xml',
	'manifest.webmanifest',
];
const Metadata = () => (
	<div className="space-y-2">
		<Text size={'xs'} contrast={3}>
			Metadata
		</Text>
		<Text
			className={
				'relative -left-8 flex w-max animate-slide-infinite-reverse items-center [--duration:16s] *:mr-2'
			}>
			{new Array(metas.length * 2).fill(null).map((_, i) => (
				<Badge.Root key={i} size={'sm'} variant={'neutral'} type={'outline'}>
					<Badge.Label>{metas[i % metas.length]}</Badge.Label>
				</Badge.Root>
			))}
		</Text>
	</div>
);
const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'img', 'ul', 'ol', 'li'];
const Semantic = () => (
	<div className="space-y-2">
		<Text size={'xs'} contrast={3}>
			Balisage
		</Text>
		<Text
			size={'sm'}
			contrast={2}
			className={
				'relative -left-8 flex w-max animate-slide-infinite items-center *:mr-2'
			}>
			{new Array(tags.length * 2).fill(null).map((_, index) => (
				<code className={'font-mono'} key={index}>
					{'<'}
					{tags[index % tags.length]}
					{'>'}
				</code>
			))}
		</Text>
	</div>
);

const scores = [
	{ value: '92%', label: 'Accessibilité' },
	{ value: '100%', label: 'Seo' },
	{ value: '95%', label: 'Performance' },
] as const;
const LightHouse = () => (
	<div className="space-y-2">
		<Text size={'xs'} contrast={3}>
			LightHouse
		</Text>
		<div className={'flex items-start gap-4'}>
			{scores.map(({ value, label }) => (
				<div key={label} className={'flex items-center gap-4'}>
					<div
						className={
							'flex aspect-square size-6 items-center justify-center rounded-full border-2 border-green-300 bg-green-400/20 ring-2 ring-green-500'
						}
					/>
					<div className="leading-none">
						<Text size={'xl'} className={'font-bold'}>
							{value}
						</Text>
						<Text size={'xs'} contrast={4}>
							{label}
						</Text>
					</div>
				</div>
			))}
		</div>
	</div>
);
