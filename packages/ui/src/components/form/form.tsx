import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import { Label } from '#components/fields';
import { Icon } from '#components/icons';
import { cn } from '#utils';
import { AnimatePresence } from 'framer-motion';
import {
	Controller,
	ControllerProps,
	FieldError,
	FieldPath,
	FieldValues,
	FormProvider,
	useFormContext,
} from 'react-hook-form';

const Form = FormProvider;

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
	{} as FormFieldContextValue,
);

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	);
};

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext);
	const itemContext = React.useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();

	const fieldState = getFieldState(fieldContext.name, formState);

	if (!fieldContext) {
		throw new Error('useFormField should be used within <FormField>');
	}

	const { id } = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		formState: formState,
		...fieldState,
	};
};

type FormItemContextValue = {
	id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
	{} as FormItemContextValue,
);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const id = React.useId();

		return (
			<FormItemContext.Provider value={{ id }}>
				<div ref={ref} className={cn('ui-space-y-2', className)} {...props} />
			</FormItemContext.Provider>
		);
	},
);
FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, children, ...props }, ref) => {
	const { error, formItemId } = useFormField();

	return (
		<Label
			ref={ref}
			className={className}
			error={!!error}
			htmlFor={formItemId}
			{...props}>
			{children}
			<AnimatePresence>{error && <Icon i={'X'} />}</AnimatePresence>
		</Label>
	);
});
FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<
	React.ElementRef<typeof Slot>,
	React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

	return (
		<Slot
			ref={ref}
			id={formItemId}
			aria-describedby={
				!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`
			}
			aria-invalid={!!error}
			{...props}
		/>
	);
});
FormControl.displayName = 'FormControl';

type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
	({ className, ...props }, ref) => {
		const { formDescriptionId } = useFormField();

		return (
			<p
				ref={ref}
				id={formDescriptionId}
				className={cn('ui-text-sm ui-text-contrasted-low', className)}
				{...props}
			/>
		);
	},
);
FormDescription.displayName = 'FormDescription';

type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement> & {
	formatMessage?: (error: FieldError) => string;
};

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
	({ className, formatMessage, children, ...props }, ref) => {
		const { error, formMessageId } = useFormField();

		const formater = formatMessage ?? ((error) => String(error.message));

		const body = error ? formater(error) : children;

		if (!body) {
			return null;
		}

		return (
			<p
				ref={ref}
				id={formMessageId}
				className={cn('ui-text-sm ui-font-medium ui-text-danger-500', className)}
				{...props}>
				{body}
			</p>
		);
	},
);
FormMessage.displayName = 'FormMessage';

export type FormDescriptionOrMessageProps = FormMessageProps & FormDescriptionProps;

const FormDescriptionOrMessage = (props: FormDescriptionOrMessageProps) => {
	const { error, formState } = useFormField();

	const showError = error && formState.submitCount > 0;
	return showError ? <FormMessage {...props} /> : <FormDescription {...props} />;
};

export {
	useFormField,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	FormDescriptionOrMessage,
	FormField,
	//
	Form as Root,
	FormItem as Item,
	FormLabel as Label,
	FormControl as Control,
	FormDescription as Description,
	FormMessage as Message,
	FormDescriptionOrMessage as DescriptionOrMessage,
	FormField as Field,
};
