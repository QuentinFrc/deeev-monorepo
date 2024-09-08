//
import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

import { RoundedCalcRelative } from './rounded-relative.plugin';

type WithThemeValues = { theme: PluginAPI['theme'] };

const config: Omit<Config, 'content'> = {
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		colors: {
			/*Primitives*/
			transparent: 'transparent',
			current: 'currentColor',
			black: 'hsl(var(--black)/ <alpha-value>)',
			white: 'hsl(var(--white)/ <alpha-value>)',
			green: {
				50: 'hsl(var(--green-50)/ <alpha-value>)',
				100: 'hsl(var(--green-100)/ <alpha-value>)',
				200: 'hsl(var(--green-200)/ <alpha-value>)',
				300: 'hsl(var(--green-300)/ <alpha-value>)',
				400: 'hsl(var(--green-400)/ <alpha-value>)',
				500: 'hsl(var(--green-500)/ <alpha-value>)',
				600: 'hsl(var(--green-600)/ <alpha-value>)',
				700: 'hsl(var(--green-700)/ <alpha-value>)',
				800: 'hsl(var(--green-800)/ <alpha-value>)',
				900: 'hsl(var(--green-900)/ <alpha-value>)',
				950: 'hsl(var(--green-950)/ <alpha-value>)',
			},
			cyan: {
				50: 'hsl(var(--cyan-50)/ <alpha-value>)',
				100: 'hsl(var(--cyan-100)/ <alpha-value>)',
				200: 'hsl(var(--cyan-200)/ <alpha-value>)',
				300: 'hsl(var(--cyan-300)/ <alpha-value>)',
				400: 'hsl(var(--cyan-400)/ <alpha-value>)',
				500: 'hsl(var(--cyan-500)/ <alpha-value>)',
				600: 'hsl(var(--cyan-600)/ <alpha-value>)',
				700: 'hsl(var(--cyan-700)/ <alpha-value>)',
				800: 'hsl(var(--cyan-800)/ <alpha-value>)',
				900: 'hsl(var(--cyan-900)/ <alpha-value>)',
				950: 'hsl(var(--cyan-950)/ <alpha-value>)',
			},
			fuchsia: {
				50: 'hsl(var(--fuchsia-50)/ <alpha-value>)',
				100: 'hsl(var(--fuchsia-100)/ <alpha-value>)',
				200: 'hsl(var(--fuchsia-200)/ <alpha-value>)',
				300: 'hsl(var(--fuchsia-300)/ <alpha-value>)',
				400: 'hsl(var(--fuchsia-400)/ <alpha-value>)',
				500: 'hsl(var(--fuchsia-500)/ <alpha-value>)',
				600: 'hsl(var(--fuchsia-600)/ <alpha-value>)',
				700: 'hsl(var(--fuchsia-700)/ <alpha-value>)',
				800: 'hsl(var(--fuchsia-800)/ <alpha-value>)',
				900: 'hsl(var(--fuchsia-900)/ <alpha-value>)',
				950: 'hsl(var(--fuchsia-950)/ <alpha-value>)',
			},
			red: {
				50: 'hsl(var(--red-50)/ <alpha-value>)',
				100: 'hsl(var(--red-100)/ <alpha-value>)',
				200: 'hsl(var(--red-200)/ <alpha-value>)',
				300: 'hsl(var(--red-300)/ <alpha-value>)',
				400: 'hsl(var(--red-400)/ <alpha-value>)',
				500: 'hsl(var(--red-500)/ <alpha-value>)',
				600: 'hsl(var(--red-600)/ <alpha-value>)',
				700: 'hsl(var(--red-700)/ <alpha-value>)',
				800: 'hsl(var(--red-800)/ <alpha-value>)',
				900: 'hsl(var(--red-900)/ <alpha-value>)',
				950: 'hsl(var(--red-950)/ <alpha-value>)',
			},
			/*Tokens*/
			background: {
				DEFAULT: 'hsl(var(--background)/ <alpha-value>)',
				reverted: 'hsl(var(--foreground)/ <alpha-value>)',
			},
			foreground: {
				DEFAULT: 'hsl(var(--foreground)/ <alpha-value>)',
				reverted: 'hsl(var(--background)/ <alpha-value>)',
			},
			/*todo remove these old contrast utilities*/
			contrasted: {
				DEFAULT: 'hsl(var(--contrasted)/ <alpha-value>)',
				max: 'hsl(var(--contrasted-max)/ <alpha-value>)',
				min: 'hsl(var(--contrasted-min)/ <alpha-value>)',
				mid: 'hsl(var(--contrasted)/ <alpha-value>)',
			},
			/*--*/
			contrast: {
				max: 'hsl(var(--contrast-max)/ <alpha-value>)',
				'max-reverted': 'hsl(var(--contrast-max-reverted)/ <alpha-value>)',
				high: 'hsl(var(--contrast-high)/ <alpha-value>)',
				'high-reverted': 'hsl(var(--contrast-high-reverted)/ <alpha-value>)',
				mid: 'hsl(var(--contrast-mid)/ <alpha-value>)',
				'mid-reverted': 'hsl(var(--contrast-mid-reverted)/ <alpha-value>)',
				low: 'hsl(var(--contrast-low)/ <alpha-value>)',
				'low-reverted': 'hsl(var(--contrast-low-reverted)/ <alpha-value>)',
				/*todo remove this old contrast utilities*/
				1: 'hsl(var(--contrast-1)/ <alpha-value>)',
				2: 'hsl(var(--contrast-2)/ <alpha-value>)',
				3: 'hsl(var(--contrast-3)/ <alpha-value>)',
				4: 'hsl(var(--contrast-4)/ <alpha-value>)',
			},
			neutral: {
				50: 'hsl(var(--neutral-50)/ <alpha-value>)',
				100: 'hsl(var(--neutral-100)/ <alpha-value>)',
				200: 'hsl(var(--neutral-200)/ <alpha-value>)',
				300: 'hsl(var(--neutral-300)/ <alpha-value>)',
				400: 'hsl(var(--neutral-400)/ <alpha-value>)',
				500: 'hsl(var(--neutral-500)/ <alpha-value>)',
				600: 'hsl(var(--neutral-600)/ <alpha-value>)',
				700: 'hsl(var(--neutral-700)/ <alpha-value>)',
				800: 'hsl(var(--neutral-800)/ <alpha-value>)',
				900: 'hsl(var(--neutral-900)/ <alpha-value>)',
				950: 'hsl(var(--neutral-950)/ <alpha-value>)',
			},
			card: 'hsl(var(--card)/ <alpha-value>)',
			border: 'hsl(var(--border)/ <alpha-value>)',
			danger: {
				50: 'hsl(var(--red-50)/ <alpha-value>)',
				100: 'hsl(var(--red-100)/ <alpha-value>)',
				200: 'hsl(var(--red-200)/ <alpha-value>)',
				300: 'hsl(var(--red-300)/ <alpha-value>)',
				400: 'hsl(var(--red-400)/ <alpha-value>)',
				500: 'hsl(var(--red-500)/ <alpha-value>)',
				600: 'hsl(var(--red-600)/ <alpha-value>)',
				700: 'hsl(var(--red-700)/ <alpha-value>)',
				800: 'hsl(var(--red-800)/ <alpha-value>)',
				900: 'hsl(var(--red-900)/ <alpha-value>)',
				950: 'hsl(var(--red-950)/ <alpha-value>)',
			},
			success: {
				50: 'hsl(var(--green-50)/ <alpha-value>)',
				100: 'hsl(var(--green-100)/ <alpha-value>)',
				200: 'hsl(var(--green-200)/ <alpha-value>)',
				300: 'hsl(var(--green-300)/ <alpha-value>)',
				400: 'hsl(var(--green-400)/ <alpha-value>)',
				500: 'hsl(var(--green-500)/ <alpha-value>)',
				600: 'hsl(var(--green-600)/ <alpha-value>)',
				700: 'hsl(var(--green-700)/ <alpha-value>)',
				800: 'hsl(var(--green-800)/ <alpha-value>)',
				900: 'hsl(var(--green-900)/ <alpha-value>)',
				950: 'hsl(var(--green-950)/ <alpha-value>)',
			},
		},
		borderRadius: {
			DEFAULT: '0.375rem',
			none: '0',
			sm: '0.25rem', // 4px
			md: '0.375rem', // 6px
			lg: '0.5rem', // 8px
			xl: '0.75rem', // 12px
			'2xl': '1rem', // 16px
			inherit: 'inherit',
			full: '9999px',
		},
		fontSize: {
			'7xl': '60px',
			'6xl': '48px',
			'5xl': '36px',
			'4xl': '32px',
			'3xl': '28px',
			'2xl': '24px',
			xl: '20px',
			lg: '18px',
			base: '16px',
			sm: '14px',
			xs: '12px',
			fluid:
				'max(var(--fs-min),min(var(--fs-max), calc(var(--fs-min) + (var(--fs-max-no-unit) - var(--fs-min-no-unit)) * ((100vw - var(--min-breakpoint)) / (var(--max-breakpoint-no-unit) - var(--min-breakpoint-no-unit))))))',
		},
		fontFamily: {
			mono: 'var(--font-mono)',
			sans: 'var(--font-mona-sans)',
			heading: 'var(--font-unbounded)',
		},
		lineHeight: {
			none: '1',
			tight: '1.15',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			spacing: {
				'0.75': '0.1875rem',
				'4.5': '1.125rem',
			},
			width: {
				'4.5': '1.125rem',
			},
			height: {
				'4.5': '1.125rem',
			},
			minWidth: ({ theme }: WithThemeValues) => ({
				...theme('width'),
			}),
			minHeight: ({ theme }: WithThemeValues) => ({
				...theme('height'),
			}),
			maxWidth: ({ theme }: WithThemeValues) => ({
				...theme('width'),
			}),
			maxHeight: ({ theme }: WithThemeValues) => ({
				...theme('height'),
			}),
			rotate: {
				'25': '25deg',
				'30': '30deg',
			},
			skew: {
				30: '30deg',
			},
			scale: {
				10: '0.1',
				20: '0.2',
				30: '0.3',
				40: '0.4',
				60: '0.6',
				70: '0.7',
				80: '0.8',
				200: '2',
				500: '5',
			},
			transitionProperty: {
				gpu: 'transform, opacity',
			},
			keyframes: {
				'animation-slide-left-full': {
					'0%, 80%': {
						transform: 'translate3d(100%, 0, 0) skewX(var(--tw-skew-x))',
					},
					'100%': {
						transform: 'translate3d(-100%, 0, 0) skewX(var(--tw-skew-x))',
					},
				},
				'spin-tw': {
					'100%': {
						transform:
							'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(360deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
					},
				},
				'fade-loading': {
					'50%': {
						opacity: '0.6',
					},
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				spotlight: {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)',
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)',
					},
				},
				'slide-infinite': {
					'0%': {
						transform: 'translateX(0)',
					},
					'100%': {
						transform: 'translateX(-50%)',
					},
				},
				floating: {
					'0%': {
						transform:
							'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate))',
					},
					'100%': {
						transform:
							'translate3d(var(--tw-translate-x), calc(var(--tw-translate-y) + var(--floating-offset,50%)), 0) rotate(var(--tw-rotate))',
					},
				},
				pulse: {
					'0%, 100%': {
						opacity: 'var(--from-opacity,1)',
					},
					'50%': {
						opacity: 'var(--to-opacity,.5)',
					},
				},
			},
			animation: {
				'slide-left-full': 'animation-slide-left-full 7s linear infinite',
				'spin-tw': 'spin-tw 5s linear infinite',
				'spin-tw-card': 'spin-tw 10s linear infinite',
				'fade-loading': 'fade-loading 0.8s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				spotlight: 'spotlight 2s ease .75s 1 forwards',
				'slide-infinite': 'slide-infinite var(--duration,12s) linear infinite',
				'slide-infinite-reverse':
					'slide-infinite var(--duration,12s) linear reverse infinite',
				floating: 'floating var(--duration,8s) linear alternate-reverse infinite',
			},
		},
	},
	plugins: [
		RoundedCalcRelative(),
		/*PseudoElements(),
		GridBackground(),
		Variant(),
		SizeScreenBased(),
		fluidTypography(),*/
	],
};

export default config;
