'use client';

import { navigateToAnchor } from '@/lib/router';
import { useContactDialog } from '@/lib/stores/contact-dialog';

/**
 * This function handles all the keyboard shortcuts
 * - Pressing `Shift + S` -> Navigate to anchor #offers
 * - Pressing `Shift + C` -> Navigate to anchor /contact
 * */
export const useShortcuts = () => {
	const { setOpen, open } = useContactDialog();
	const handleKeyDown = (e: KeyboardEvent) => {
		/*must Check is not writing in input*/
		if (isWritingInInput()) return;

		if (e.shiftKey && e.key === 'S') {
			navigateToAnchor('#pricing');
		}
		if (e.shiftKey && e.key === 'C' && !open) {
			setOpen(true);
		}
	};
	return { handleKeyDown };
};

/*todo: ensure no more element need to be escaped*/
const isWritingInInput = () => {
	const activeElement = document.activeElement;
	if (!activeElement) return false;
	return activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
};
