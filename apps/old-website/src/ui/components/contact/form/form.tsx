'use client';

import React from 'react';
import { contact } from '@/actions/mail';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useForm } from 'react-hook-form';
import useMeasure from 'react-use-measure';
import { toast } from 'sonner';
import * as z from 'zod';

import { useContactFormStore } from '@/lib/stores/contact-form';
import { cn, withArtificialDelay } from '@/lib/utils';
import { ContactPayload, contactSchema } from '@/lib/validations/contact';
import * as Form from '@repo/ui/form';
import { Icon } from '@repo/ui/icons';
import { Separator } from '@repo/ui/separator';

import { FieldsStep, SuccessStep } from './steps';
import { form as formStyle, transition } from './style';
import { SubmitButton, SubmitButtonProps } from './submit-button';

type ContactFormProps = Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit'> & {
	onSuccess?: () => void;
	onError?: () => void;
} & Pick<SubmitButtonProps, 'afterSubmitAction'>;

export const ContactForm: React.FC<ContactFormProps> = ({
	className,
	onSuccess,
	onError,
	afterSubmitAction,
	...props
}) => {
	const {
		currentStep,
		setCurrentStep,
		withMessage,
		data,
		setData,
		setSuccessfullySubmitted,
	} = useContactFormStore();
	const [ref, bounds] = useMeasure();

	const form = useForm<ContactPayload>({
		resolver: zodResolver(contactSchema),
		defaultValues: data,
	});

	form.watch((values) => {
		setData(values);
	});

	/*registerResetForm(() => form.reset());*/

	const toastId = React.useRef<string>(crypto.randomUUID());

	const handleError = (error: Error) => {
		if (onError) onError();
		toast.error(error.name, {
			id: toastId.current,
			icon: <Icon i={'XClose'} />,
			description: error.message,
		});
		setCurrentStep('fields');
	};
	const handleSuccess = () => {
		setSuccessfullySubmitted(true);
		setCurrentStep('success');
		form.reset();
		if (onSuccess) onSuccess();
	};
	const handleSubmit = async ({
		email,
		message,
		name, //tel,
	}: z.infer<typeof contactSchema>) => {
		const payload = {
			to: email,
			subject: 'Merci pour votre prise de contact !',
			name: name,
			//tel: tel,
			message: withMessage ? message : '',
		};

		const res = await withArtificialDelay({ promise: contact(payload) });
		const { status, error } = res;
		if (status === 'rejected' && error) {
			handleError(error);
			return;
		}
		handleSuccess();
	};

	return (
		<MotionConfig transition={transition}>
			<fieldset className={'flex flex-1'} disabled={form.formState.isSubmitting}>
				<Form.Root {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className={cn(formStyle(), className)}
						{...props}>
						<div>
							<motion.div
								animate={{
									height: bounds.height > 0 ? bounds.height : 'auto',
								}}
								transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}>
								<div ref={ref}>
									<AnimatePresence mode="popLayout">
										{currentStep === 'fields' && <FieldsStep form={form} />}
										{currentStep === 'success' && <SuccessStep />}
									</AnimatePresence>
								</div>
							</motion.div>
						</div>
						<Separator />
						<div className="flex flex-col gap-2">
							<SubmitButton
								formState={form.formState}
								afterSubmitAction={afterSubmitAction}
							/>
						</div>
					</form>
				</Form.Root>
			</fieldset>
		</MotionConfig>
	);
};
