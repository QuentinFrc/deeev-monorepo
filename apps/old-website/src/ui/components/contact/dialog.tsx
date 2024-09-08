'use client';

import React from 'react';
/*import Link from 'next/link';*/
import { DialogProps } from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';
import { toast } from 'sonner';

import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { useContactDialog } from '@/lib/stores/contact-dialog';
import { useContactFormStore } from '@/lib/stores/contact-form';
import * as DialogPrimitives from '@repo/ui/dialog';
import * as Drawer from '@repo/ui/drawer';
import { Icon } from '@repo/ui/icons';

import { ContactForm } from './form';

const IS_FORM_READY = true;

export type ContactDialogProps = Omit<DialogProps, 'open' | 'onOpenChange' | 'children'>;

const content = {
	title: 'Contactez-nous',
	description: 'Nous vous répondrons dans les plus brefs délais.',
};

const useOnOpenChange = () => {
	const { setOpen, remindToastId } = useContactDialog();
	const { resetForm, successfullySubmitted } = useContactFormStore();
	return (state: boolean) => {
		/*Dismiss toast when opening dialog/drawer*/
		if (state && remindToastId) toast.dismiss(remindToastId);

		/*Display toast when close dialog without filling form*/
		/*todo: remove this when form fixed*/
		if (!successfullySubmitted && !state)
			toast.message("Vous n'avez pas envoyé votre message", {
				id: remindToastId,
				description: "Un message n'engage à rien, n'hésitez pas à nous contacter.",
				action: {
					label: 'Nous contacter',
					onClick: () => setOpen(true),
				},
			});

		/*Reset form when close dialog/drawer*/
		if (successfullySubmitted && !state) resetForm();
	};
};
export const Dialog: React.FC<ContactDialogProps> = ({ defaultOpen, ...props }) => {
	const { open, setOpen, setRemindToastId, remindToastId } = useContactDialog();
	const isDesktop = useMediaQuery({ type: 'min', breakpoint: 'md' });
	const { resetForm } = useContactFormStore();
	const onOpenChange = useOnOpenChange();
	const toastId = React.useId();
	if (!remindToastId) setRemindToastId(toastId);

	const handleOpenChange = (state: boolean) => {
		onOpenChange(state);
		setOpen(state);
	};

	const afterSubmitAction = () => {
		resetForm();
		handleOpenChange(false);
	};

	if (isDesktop)
		return (
			<DialogPrimitives.Root
				defaultOpen={defaultOpen}
				open={open}
				onOpenChange={handleOpenChange}
				{...props}>
				<DialogPrimitives.Content withOverflow>
					<DialogPrimitives.Header>
						<DialogPrimitives.Title>{content.title}</DialogPrimitives.Title>
						<DialogPrimitives.Description>
							{content.description}
						</DialogPrimitives.Description>
					</DialogPrimitives.Header>
					{IS_FORM_READY ? (
						<ContactForm afterSubmitAction={afterSubmitAction} />
					) : (
						<FormNotReady />
					)}
				</DialogPrimitives.Content>
			</DialogPrimitives.Root>
		);

	return (
		<Drawer.Root open={open ?? defaultOpen} onOpenChange={handleOpenChange}>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>{content.title}</Drawer.Title>
					<Drawer.Description>{content.description}</Drawer.Description>
				</Drawer.Header>
				{IS_FORM_READY ? (
					<ContactForm afterSubmitAction={afterSubmitAction} />
				) : (
					<FormNotReady />
				)}
			</Drawer.Content>
		</Drawer.Root>
	);
};

export type ContactDialogTriggerProps = React.PropsWithChildren<{}>;
export const DialogTrigger: React.FC<ContactDialogTriggerProps> = ({
	children,
	...props
}) => {
	const { setOpen } = useContactDialog();
	const onOpenChange = useOnOpenChange();
	return (
		<Slot
			className={'cursor-pointer'}
			onClick={() => {
				onOpenChange(true);
				setOpen(true);
			}}
			{...props}>
			{children}
		</Slot>
	);
};

//todo: remove this when form is ready
const FormNotReady: React.FC = () => (
	<div className={'flex flex-col items-center gap-4 text-center'}>
		<p className="text-contrasted-max">
			Vous pouvez nous joindre à l&apos;adresse suivante
			<a
				className="inline-flex items-center gap-1"
				href="mailto:contact@deeev.fr"
				target={'_blank'}>
				<Icon i={'Mail'} />{' '}
				<span className="text-contrasted-max underline">contact@deeev.fr</span>
			</a>
		</p>
		<p className="text-contrasted-min">ou</p>
		<p className="text-contrasted">
			Par message sur instagram :{' '}
			<a
				className="text-contrasted-max underline"
				href="https://www.instagram.com/deeev.fr/"
				target={'_blank'}>
				@deeev.fr
			</a>
		</p>
	</div>
);
