'use client';

import React from 'react';
import { Toaster as Sonner } from 'sonner';
import { tv } from 'tailwind-variants';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const variants = tv({
	slots: {
		toaster: ['ui-grid !ui-w-full ui-place-items-center'],
		toast: [
			'!ui-static ui-inline-flex ui-min-w-max ui-max-w-[90%] ui-items-center ui-gap-6',
			'ui-rounded-md ui-border ui-bg-background ui-p-2 ui-shadow',
		],
		title: ['ui-text-sm !ui-text-contrasted-max'],
		description: ['ui-text-xs !ui-text-contrasted'],
		actionButton: ['ui-font-medium'],
		cancelButton: ['group/toast:ui-text-contrasted-max'],
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
