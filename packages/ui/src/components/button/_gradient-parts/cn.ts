import { tv } from 'tailwind-variants';

const variants = tv({
	slots: {
		effect: [
			'ui-relative ui-flex ui-h-max ui-items-center ui-justify-center',
			'ui-bg-gradient-to-br ui-from-green-500/[16%] ui-via-cyan-500/[16%] ui-to-fuchsia-500/[16%] ui-p-1',
		],
		wrapper: [
			'ui-peer/button-wp ui-relative ui-flex ui-w-full ui-items-center ui-justify-center ui-overflow-hidden',
			'ui-bg-gradient-to-br ui-from-green-500 ui-via-cyan-500 ui-to-fuchsia-500 ui-p-px',
		],
		halo: [
			'peer-hover/ui-button-wp:[--halo-opacity:1]',
			'ui-absolute ui-inset-0 -ui-z-10 ui-rounded-inherit ui-opacity-[var(--halo-opacity,0)]',
			'motion-safe:ui-transition-opacity motion-safe:ui-duration-300 motion-safe:ui-ease-in-out',
			'ui-bg-gradient-to-br ui-from-green-500 ui-via-cyan-500 ui-to-fuchsia-500 ui-blur',
		],
		border: [
			'ui-absolute ui-left-1/2 ui-top-1/2 ui-aspect-square ui-w-full -ui-translate-x-1/2 -ui-translate-y-1/2 ui-scale-200 ui-animate-spin-tw ui-rounded-inherit',
			'[background-image:conic-gradient(from_0deg_at_50%_50%,#FFF_0,transparent_10%,transparent_90%,#FFF)]',
		],
	},
	variants: {
		size: {
			sm: {
				effect: 'ui-rounded-sm-plus-[4px]',
				wrapper: 'ui-rounded-sm-plus-[1px]',
			},
			md: {
				effect: 'ui-rounded-md-plus-[4px]',
				wrapper: 'ui-rounded-md-plus-[1px]',
			},
			lg: {
				effect: 'ui-rounded-lg-plus-[4px]',
				wrapper: 'ui-rounded-lg-plus-[1px]',
			},
		},
		layout: {
			max: {
				effect: 'ui-w-max',
			},
			full: {
				effect: 'ui-w-full',
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
