import * as Badge from '@repo/ui/badge';
import { Icon } from '@repo/ui/icons';
import { SimpleButton } from '@ui/components/simple-button';
import { Text } from '@ui/components/typography';

// 3 Badge, 1 Button,
export const DesignAsset = () => (
	<div className="grid size-max grid-cols-[repeat(2,172px)] gap-4">
		<div className="flex flex-col gap-4">
			<Colors />
			<Texts />
		</div>
		<div className="flex flex-col gap-4">
			<Badges />
			<Icons />
			<Buttons />
		</div>
	</div>
);

const sizes = ['xl', 'lg', 'base', 'sm', 'xs'] as const;
const Texts = () => (
	<div className="w-[172px] space-y-1 [mask-image:linear-gradient(90deg,white_40%,transparent)]">
		<Text size={'xs'} contrast={3}>
			Typography
		</Text>
		<div className={'grid'}>
			{sizes.map((size) => (
				<Text className={'whitespace-nowrap'} size={size} key={size}>
					Lorem ipsum dolor sit amet..
				</Text>
			))}
		</div>
	</div>
);

const variants = [
	{ variant: 'neutral' },
	{ variant: 'gradient' },
	{ variant: 'green' },
	{ variant: 'cyan' },
	{ variant: 'fuchsia' },
] as const;
const Badges = () => (
	<div className="space-y-1">
		<Text size={'xs'} contrast={3}>
			Badges
		</Text>
		<div className={'flex h-max w-[172px] flex-wrap gap-1'}>
			{variants.map(({ variant }) => (
				<Badge.Root
					className={'whitespace-nowrap'}
					variant={variant}
					type={'outline'}
					size={'sm'}
					key={variant}>
					<Badge.Label className={'capitalize'}>{variant}</Badge.Label>
				</Badge.Root>
			))}
		</div>
	</div>
);

const Colors = () => (
	<div className={'space-y-1'}>
		<Text size={'xs'} contrast={3}>
			Couleurs
		</Text>
		<div className={'flex items-center gap-1'}>
			{['bg-white', 'bg-black', 'bg-cyan-500', 'bg-green-500', 'bg-fuchsia-500'].map(
				(color) => (
					<div
						className={`aspect-square size-6 rounded-md ${color} ring-2 ring-inset ring-border/40`}
						key={color}
					/>
				),
			)}
		</div>
	</div>
);

const buttons = [
	{ variant: 'gradient', icon: 'Star' },
	{ variant: 'secondary', icon: 'Rocket' },
	{ variant: 'outline', icon: 'Atom' },
	{ variant: 'ghost', icon: 'ArrowRight' },
] as const;
const Buttons = () => (
	<div className={'space-y-1'}>
		<Text size={'xs'} contrast={3}>
			Buttons
		</Text>
		<div className={'grid w-max grid-cols-2 place-items-center items-center gap-1'}>
			{buttons.map((props, i) => (
				<SimpleButton
					excludeFromTabOrder
					key={i}
					{...props}
					label={'Button'}
					size={'sm'}
					iconPosition={i % 2 === 0 ? 'left' : 'right'}
				/>
			))}
		</div>
	</div>
);

const icons = ['Star', 'AlertCircle', 'ArrowLeft', 'Mail', 'ChevronRight'] as const;
const Icons = () => (
	<div className={'space-y-1'}>
		<Text size={'xs'} contrast={3}>
			Icons
		</Text>
		<div className={'flex items-center gap-1'}>
			{icons.map((i) => (
				<Icon key={i} i={i} />
			))}
		</div>
	</div>
);
