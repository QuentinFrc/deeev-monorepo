'use client';

import { create } from 'zustand';

type ContactDialogState = {
	open?: boolean;
	defaultOpen: boolean;
	setDefaultOpen: (open: boolean) => void;
	setOpen: (open: boolean) => void;
	remindToastId?: string;
	setRemindToastId: (remindToastId: string) => void;
	onOpenChange?: (open: boolean) => void;
	setOnOpenChange: (onOpenChange: (open: boolean) => void) => void;
};

export const useContactDialog = create<ContactDialogState>((set) => ({
	open: undefined,
	defaultOpen: false,
	setDefaultOpen: (open) => set({ defaultOpen: open }),
	setOpen: (open) =>
		set(({ onOpenChange }) => {
			onOpenChange?.(open);
			return { open };
		}),
	remindToastId: undefined,
	setRemindToastId: (remindToastId) => set({ remindToastId }),
	onOpenChange: undefined,
	setOnOpenChange: (onOpenChange) => set({ onOpenChange }),
}));
