import { tv } from 'tailwind-variants';

export const DEFAULT_BUTTON_SIZE = 'md';
export const DEFAULT_BUTTON_LAYOUT = 'max';

export const DEFAULT_BUTTON_VARIANT = 'gradient';

const root = tv({
	base: [
		'group relative z-10 inline-flex touch-none select-none items-center justify-center',
		'px-[calc(var(--base-space)*1.5)] py-[var(--base-space)]',
		'bg-transparent outline-none',
	],
	variants: {
		variant: {
			gradient: [
				'text-foreground',
				'bg-background',
				'pseudo:absolute pseudo:inset-0 pseudo:rounded-inherit pseudo:motion-safe:transition-gpu pseudo:motion-safe:duration-300 pseudo:motion-safe:ease-in-out',
			],
			secondary: ['text-background', 'hover:[--hover-opacity:80%]'],
			outline: [
				'text-foreground',
				'hover:[--hover-opacity:40%]',
				'hover:[--effect-opacity:16%]',
			],
			ghost: [
				'text-contrasted-max',
				'hover:[--hover-opacity:100%] hover:[--hover-scale:100%]',
			],
			link: ['transition-colors duration-300', 'hover:text-contrasted-max'],
		},
		size: {
			sm: [
				'min-h-8 rounded-sm text-sm',
				'[--base-space:6px] [--label-space:theme(spacing[0.75])]',
				'[--icon-size:theme(spacing[4])]',
			],
			md: [
				'min-h-10 rounded-md text-base',
				'[--base-space:8px] [--label-space:theme(spacing.1)]',
				'[--icon-size:theme(spacing[5])]',
			],
			lg: [
				'min-h-[52px] rounded-lg text-lg',
				'[--base-space:12px] [--label-space:theme(spacing[1.5])]',
				'[--icon-size:theme(spacing[6])]',
			],
		},
		layout: {
			max: ['w-max'],
			full: ['w-full'],
		},
		disabled: {
			true: 'pointer-events-none',
		},
	},
	compoundVariants: [
		{
			variant: ['secondary', 'outline', 'ghost'],
			disabled: true,
			className: 'opacity-50',
		},
		{
			variant: ['link'],
			size: ['sm', 'md', 'lg'],
			className: 'min-h-auto rounded-none [--base-space:0px]',
		},
	],
	defaultVariants: {
		size: DEFAULT_BUTTON_SIZE,
		layout: DEFAULT_BUTTON_LAYOUT,
	},
});

const focus = tv({
	base: '',
	variants: {
		variant: {
			gradient: ['ring-offset-4 [--halo-opacity:0]'],
			outline: ['[--hover-opacity:40%]'],
			ghost: ['[--hover-opacity:100%] [--hover-scale:100%]'],
		},
		disabled: {
			true: ['ring-0 [--hover-opacity:0%] [--hover-scale:0%]'],
			false: [],
		},
	},
	compoundVariants: [
		{
			variant: ['gradient', 'outline', 'ghost'],
			disabled: true,
			className: 'opacity-50',
		},
	],
});

const hover = tv({
	base: [
		'absolute inset-0 z-10 rounded-inherit',
		'motion-safe:transition-gpu motion-safe:duration-300 motion-safe:ease-in-out',
		'motion-safe:pseudo:transition-gpu motion-safe:pseudo:duration-300 motion-safe:pseudo:ease-in-out',
	],
	variants: {
		variant: {
			secondary: ['bg-foreground', 'opacity-[var(--hover-opacity,100%)]'],
			outline: ['border border-foreground', 'opacity-[var(--hover-opacity,20%)]'],
			ghost: [
				'bg-neutral-800',
				'scale-[var(--hover-scale,75%)] opacity-[var(--hover-opacity,0)]',
			],
		},
	},
});

const innerEffect = tv({
	base: [
		'absolute inset-0 z-10 rounded-inherit',
		'motion-safe:transition-gpu motion-safe:duration-300 motion-safe:ease-in-out',
	],
	variants: {
		variant: {
			outline: ['opacity-[var(--effect-opacity,4%)] ring-2 ring-foreground'],
		},
	},
});

const icon = tv({
	base: ['relative z-20 inline-block', 'size-[var(--icon-size,1rem)]'],
});

const label = tv({
	base: ['relative z-20 inline-block w-fit px-[var(--label-space)] font-semibold'],
});

export { root, focus, hover, icon, label, innerEffect };
