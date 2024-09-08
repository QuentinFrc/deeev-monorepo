import { tv } from 'tailwind-variants';

// eslint-disable-next-line tailwindcss/no-custom-classname
export const text = tv({
	variants: {
		contrast: {
			foreground: ['text-black', 'dark:text-white'],
			max: ['text-gray-950', 'dark:text-gray-50'],
			mid: ['text-gray-700', 'dark:text-gray-400'],
			min: ['text-gray-500', 'dark:text-gray-600'],
		},
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
		},
	},
	defaultVariants: {
		contrast: 'mid',
		size: 'base',
	},
});

// eslint-disable-next-line tailwindcss/no-custom-classname
const styles = tv({
	slots: {
		body: ['m-auto bg-white font-sans dark:bg-black'],
		container: ['mx-auto my-[40px] max-w-screen-sm '],
		card: ['border-gray-100 dark:border-gray-900 rounded-lg border border-solid p-5'],
		logoWrapper: ['mt-[32px]'],
		heading: ['mx-0 my-[30px] p-0 text-center text-2xl font-normal text-black'],
		messageCallout: [
			'bg-gray-50/80 my-8 rounded-md p-8 text-center',
			'dark:bg-gray-950/80',
		],
	},
});

export const { body, container, card, logoWrapper, heading, messageCallout } = styles();
