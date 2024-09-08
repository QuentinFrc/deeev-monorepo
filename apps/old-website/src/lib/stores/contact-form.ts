import { create } from 'zustand';

import { ContactPayload } from '@/lib/validations/contact';

const steps = ['fields', 'success'] as const;
export type Step = (typeof steps)[number];

const initialData = { name: '', email: '', message: '' };

type ContactFormState = {
	data: ContactPayload;
	setData: (data: Partial<ContactPayload>) => void;
	withMessage: boolean;
	setWithMessage: (state: boolean) => void;
	currentStep: Step;
	setCurrentStep: (step: Step) => void;
	resetForm: () => void;
	successfullySubmitted: boolean;
	setSuccessfullySubmitted: (state: boolean) => void;
};
export const useContactFormStore = create<ContactFormState>((set) => ({
	data: initialData,
	setData: (partial) => set(({ data }) => ({ data: { ...data, ...partial } })),
	withMessage: false,
	setWithMessage: (state) => set({ withMessage: state }),
	currentStep: 'fields',
	setCurrentStep: (step) => set({ currentStep: step }),
	resetForm: () => {
		set({
			withMessage: false,
			currentStep: 'fields',
			data: initialData,
			successfullySubmitted: false,
		});
	},
	successfullySubmitted: false,
	setSuccessfullySubmitted: (state) => set({ successfullySubmitted: state }),
}));
