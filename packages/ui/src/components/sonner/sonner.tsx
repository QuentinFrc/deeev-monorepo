'use client';

import React from 'react';
import { Toaster as Sonner } from 'sonner';
import { tv } from 'tailwind-variants';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const variants = tv({
	slots: {
		toaster: ['grid !w-full place-items-center'],
		toast: [
			'!static inline-flex min-w-max max-w-[90%] items-center gap-6',
			'rounded-md border bg-background p-2 shadow',
		],
		title: ['text-sm !text-contrasted-max'],
		description: ['text-xs !text-contrasted'],
		actionButton: ['font-medium'],
		cancelButton: ['group/toast:text-contrasted-max'],
	},
});

const { toaster, toast, title, description, actionButton, cancelButton } = variants();

export const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			position={'bottom-center'}
			theme={'dark'}
			className={toaster()}
			offset={32}
			toastOptions={{
				unstyled: true,
				classNames: {
					toast: toast(),
					title: title(),
					description: description(),
					actionButton: actionButton(),
					cancelButton: cancelButton(),
				},
			}}
			{...props}
		/>
	);
};
