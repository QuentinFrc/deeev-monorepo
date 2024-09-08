import { tv } from 'tailwind-variants';

const variants = tv({
	slots: {
		form: ['flex w-full flex-col justify-between space-y-6'],
		step: ['space-y-6'],
	},
});

export const { form, step } = variants();

export const transition = { type: 'ease', ease: 'easeInOut', duration: 0.8 };
