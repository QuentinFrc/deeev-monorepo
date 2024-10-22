import { tv } from 'tailwind-variants';

export const DEFAULT_BUTTON_SIZE = 'md';
export const DEFAULT_BUTTON_LAYOUT = 'max';
export const DEFAULT_BUTTON_VARIANT = 'gradient';

const root = tv({
	base: [
		'ui-group ui-relative ui-z-10 ui-inline-flex ui-touch-none ui-select-none ui-items-center ui-justify-center',
		'ui-px-[calc(var(--base-space)*1.5)] ui-py-[var(--base-space)]',
		'ui-select-none ui-outline-none',
		'[&>svg]:ui-relative [&>svg]:ui-z-20 [&>svg]:ui-mr-[var(--label-space)] [&>svg]:ui-inline-block [&>svg]:ui-size-[var(--icon-size,1rem)]',
	],
	variants: {
		variant: {
			gradient: [
				'ui-bg-background ui-text-foreground',
				'pseudo:ui-absolute pseudo:ui-inset-0 pseudo:ui-rounded-inherit pseudo:motion-safe:ui-transition-gpu pseudo:motion-safe:ui-duration-300 pseudo:motion-safe:ui-ease-in-out',
			],
			secondary: ['ui-text-background', 'hover:[--hover-opacity:80%]'],
			outline: [
				'ui-text-foreground',
				'hover:[--hover-opacity:40%]',
				'hover:[--effect-opacity:16%]',
			],
			ghost: [
				'ui-bg-transparent ui-text-contrasted-max',
				'hover:[--hover-opacity:100%] hover:[--hover-scale:100%]',
			],
			link: [
				'ui-bg-transparent ui-transition-colors ui-duration-300',
				'hover:ui-text-contrasted-max',
			],
		},
		size: {
			icon: ['[&>svg]:ui-mr-0'],
			sm: [
				'ui-min-h-8 ui-rounded-sm ui-text-sm',
				'[--base-space:6px] [--label-space:theme(spacing[0.75])]',
				'[--icon-size:theme(spacing[4])]',
			],
			md: [
				'ui-min-h-10 ui-rounded-md ui-text-base',
				'[--base-space:8px] [--label-space:theme(spacing.1)]',
				'[--icon-size:theme(spacing[5])]',
			],
			lg: [
				'ui-min-h-[52px] ui-rounded-lg ui-text-lg',
				'[--base-space:12px] [--label-space:theme(spacing[1.5])]',
				'[--icon-size:theme(spacing[6])]',
			],
		},
		layout: {
			max: ['ui-w-max'],
			full: ['ui-w-full'],
		},
		disabled: {
			true: 'ui-pointer-events-none',
		},
	},
	compoundVariants: [
		{
			variant: ['secondary', 'outline', 'ghost'],
			disabled: true,
			className: 'ui-opacity-50',
		},
		{
			variant: ['link'],
			size: ['sm', 'md', 'lg'],
			className: 'ui-min-h-auto ui-rounded-none [--base-space:0px]',
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
			gradient: ['ui-ring-offset-4 [--halo-opacity:0]'],
			outline: ['[--hover-opacity:40%]'],
			ghost: ['[--hover-opacity:100%] [--hover-scale:100%]'],
		},
		disabled: {
			true: ['ui-ring-0 [--hover-opacity:0%] [--hover-scale:0%]'],
			false: [],
		},
	},
	compoundVariants: [
		{
			variant: ['gradient', 'outline', 'ghost'],
			disabled: true,
			className: 'ui-opacity-50',
		},
	],
});

const hover = tv({
	base: [
		'ui-absolute ui-inset-0 ui-z-10 ui-rounded-inherit',
		'motion-safe:ui-transition-gpu motion-safe:ui-duration-300 motion-safe:ui-ease-in-out',
		'motion-safe:pseudo:ui-transition-gpu motion-safe:pseudo:ui-duration-300 motion-safe:pseudo:ui-ease-in-out',
	],
	variants: {
		variant: {
			secondary: ['ui-bg-foreground', 'ui-opacity-[var(--hover-opacity,100%)]'],
			outline: [
				'ui-border ui-border-foreground',
				'ui-opacity-[var(--hover-opacity,20%)]',
			],
			ghost: [
				'ui-bg-neutral-800',
				'ui-scale-[var(--hover-scale,75%)] ui-opacity-[var(--hover-opacity,0)]',
			],
		},
	},
});

const innerEffect = tv({
	base: [
		'ui-absolute ui-inset-0 ui-z-10 ui-rounded-inherit',
		'motion-safe:ui-transition-gpu motion-safe:ui-duration-300 motion-safe:ui-ease-in-out',
	],
	variants: {
		variant: {
			outline: ['ui-opacity-[var(--effect-opacity,4%)] ui-ring-2 ui-ring-foreground'],
		},
	},
});

const label = tv({
	base: [''],
	variants: {
		srOnly: {
			true: 'ui-sr-only',
			false:
				'ui-relative ui-z-20 ui-inline-block ui-w-fit ui-px-[var(--label-space)] ui-font-semibold',
		},
	},
	defaultVariants: {
		srOnly: false,
	},
});

export { root, focus, hover, label, innerEffect };
