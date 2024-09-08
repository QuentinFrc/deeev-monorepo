import React from 'react';
import * as Portal from '@radix-ui/react-portal';
import { AnimatePresence, motion } from 'framer-motion';
import Confetti from 'react-canvas-confetti';
import { TCanvasConfettiInstance } from 'react-canvas-confetti/src/types';
import { useForm } from 'react-hook-form';

import { Step, useContactFormStore } from '@/lib/stores/contact-form';
import { cn } from '@/lib/utils';
import { ContactPayload } from '@/lib/validations/contact';
import { Input, Textarea } from '@repo/ui/fields';
import * as Form from '@repo/ui/form';
import { SimpleButton } from '@ui/components/simple-button';

import { step as stepStyle, transition } from './cn';

const FormControl: React.FC<React.PropsWithChildren> = (props) => {
	return <Form.Control className={cn('w-full')} {...props} />;
};

type FormStepProps = React.PropsWithChildren<{
	step: Step;
	form: ReturnType<typeof useForm<ContactPayload>>;
}>;

const FormStep: React.FC<FormStepProps> = ({ step, ...props }) => {
	const { currentStep } = useContactFormStore();
	const isCurrentStep = currentStep === step;
	return (
		<motion.div
			className={cn(stepStyle())}
			exit={{ opacity: 0 }}
			initial={{ opacity: isCurrentStep ? 1 : 0 }}
			animate={{ opacity: 1 }}
			transition={{
				...transition,
				duration: transition.duration / 2,
				delay: isCurrentStep ? 0 : transition.duration / 2,
			}}
			key="form"
			{...props}
		/>
	);
};

type FieldProps = Pick<FormStepProps, 'form'>;

const NameField: React.FC<FieldProps> = ({ form }) => (
	<Form.Field
		control={form.control}
		name="name"
		render={({ field }) => (
			<Form.Item>
				<Form.Label>Nom</Form.Label>
				<FormControl>
					<Input placeholder="John Deeve" {...field} />
				</FormControl>
				<Form.DescriptionOrMessage>
					Ce nom sera utilisé pour vous identifier dans nos échanges.
				</Form.DescriptionOrMessage>
			</Form.Item>
		)}
	/>
);

const EmailField: React.FC<FieldProps> = ({ form }) => (
	<Form.Field
		control={form.control}
		name="email"
		render={({ field }) => (
			<Form.Item>
				<Form.Label>Email</Form.Label>
				<FormControl>
					<Input placeholder="john@deeev.fr" {...field} />
				</FormControl>
				<Form.DescriptionOrMessage>
					Vous recevrez un email de confirmation pour confirmer le début de notre
					conversation.
				</Form.DescriptionOrMessage>
			</Form.Item>
		)}
	/>
);

const MessageVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const MessageField: React.FC<FieldProps> = ({ form }) => {
	const { withMessage, setWithMessage } = useContactFormStore();
	return (
		<AnimatePresence mode="popLayout" initial={!withMessage}>
			{withMessage ? (
				<motion.div
					initial={MessageVariants.hidden}
					animate={MessageVariants.visible}
					exit={MessageVariants.hidden}>
					<Form.Field
						control={form.control}
						name="message"
						render={({ field }) => (
							<Form.Item>
								<div className={'flex items-center justify-between'}>
									<Form.Label>Message</Form.Label>
									<SimpleButton
										size={'sm'}
										variant={'link'}
										className={'text-contrasted-min'}
										label={'Ne pas ajouter de message'}
										icon={'X'}
										onPress={() => setWithMessage(false)}
									/>
								</div>
								<FormControl>
									<Textarea
										{...field}
										value={field.value ?? ''}
										className={'min-h-48 resize-none md:min-h-64 md:resize-y'}
										placeholder={
											"Bonjour,\n\nJ'aimerais vous contacter pour échanger au sujet de notre projet de..."
										}
									/>
								</FormControl>
							</Form.Item>
						)}
					/>
				</motion.div>
			) : (
				<SimpleButton
					variant={'ghost'}
					size={'sm'}
					label={'Ajouter un message'}
					icon={'Plus'}
					iconPosition={'left'}
					onPress={() => setWithMessage(true)}
				/>
			)}
		</AnimatePresence>
	);
};

type FieldsStepProps = Pick<FormStepProps, 'form'>;

export const FieldsStep: React.FC<FieldsStepProps> = ({ form }) => {
	return (
		<FormStep step={'fields'} form={form}>
			<NameField form={form} />
			<EmailField form={form} />
			<MessageField form={form} />
		</FormStep>
	);
};

type SuccessViewProps = React.ComponentPropsWithoutRef<typeof motion.div>;
export const SuccessStep: React.FC<SuccessViewProps> = (props) => {
	//const confettiConfig = { duration: 2500, delay: transition.duration * 1000, speed: 1 };
	const [instance, setInstance] = React.useState<TCanvasConfettiInstance>();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			onAnimationComplete={async () => {
				if (!instance) return;
				await instance({
					particleCount: 100,
					spread: 70,
					origin: { y: 0.6 },
				});
			}}
			{...props}>
			<div className={'py-12 md:py-24'}>
				<h2 className={'text-center text-2xl font-bold'}>Merci !</h2>
				<p className={'text-center'}>
					Votre message a bien été envoyé, nous vous répondrons dans les plus brefs
					délais.
				</p>
				<Portal.Root className={'relative z-[51]'}>
					<Confetti
						globalOptions={{
							disableForReducedMotion: true,
						}}
						onInit={({ confetti }) => {
							setInstance(() => confetti);
						}}
					/>
				</Portal.Root>
			</div>
		</motion.div>
	);
};
