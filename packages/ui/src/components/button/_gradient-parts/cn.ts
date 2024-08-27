import { tv } from 'tailwind-variants';

const variants = tv({
	slots: {
		effect: [
			'relative flex h-max items-center justify-center',
			'bg-gradient-to-br from-green-500/[16%] via-cyan-500/[16%] to-fuchsia-500/[16%] p-1',
		],
		wrapper: [
			'peer/button-wp relative flex w-full items-center justify-center overflow-hidden',
			'bg-gradient-to-br from-green-500 via-cyan-500 to-fuchsia-500 p-px',
		],
		halo: [
			'peer-hover/button-wp:[--halo-opacity:1]',
			'absolute inset-0 -z-10 rounded-inherit opacity-[var(--halo-opacity,0)]',
			'motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-in-out',
			'bg-gradient-to-br from-green-500 via-cyan-500 to-fuchsia-500 blur',
		],
		border: [
			'absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 scale-200 animate-spin-tw rounded-inherit',
			'[background-image:conic-gradient(from_0deg_at_50%_50%,#FFF_0,transparent_10%,transparent_90%,#FFF)]',
		],
	},
	variants: {
		size: {
			sm: {
				effect: 'rounded-sm-plus-[4px]',
				wrapper: 'rounded-sm-plus-[1px]',
			},
			md: {
				effect: 'rounded-md-plus-[4px]',
				wrapper: 'rounded-md-plus-[1px]',
			},
			lg: {
				effect: 'rounded-lg-plus-[4px]',
				wrapper: 'rounded-lg-plus-[1px]',
			},
		},
		layout: {
			max: {
				effect: 'w-max',
			},
			full: {
				effect: 'w-full',
			},
		},
	},
});

const {
	halo: haloVariant,
	border: borderVariant,
	wrapper: wrapperVariant,
	effect: effectVariant,
} = variants();

export { haloVariant, borderVariant, wrapperVariant, effectVariant };
