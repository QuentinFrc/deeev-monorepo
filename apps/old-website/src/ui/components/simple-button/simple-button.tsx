import React from 'react';

import * as Button from '@repo/ui/button';
import {
	ButtonIconProps,
	ButtonLabelProps,
	ButtonRootProps,
	ButtonRootRef,
} from '@repo/ui/button';
import { IconName } from '@repo/ui/icons';

type SimpleButtonProps = ButtonRootProps & {
	label: string;
	labelProps?: ButtonLabelProps;
	icon?: IconName;
	iconPosition?: 'left' | 'right';
	iconProps?: Omit<ButtonIconProps, 'i'>;
};
type SimpleButtonRef = ButtonRootRef;

const SimpleButton = React.forwardRef<SimpleButtonRef, SimpleButtonProps>(
	({ label, labelProps, icon, iconPosition = 'left', iconProps, ...props }, ref) => {
		return (
			<Button.Root ref={ref} {...props}>
				{icon && iconPosition == 'left' && <Button.Icon i={icon} {...iconProps} />}
				<Button.Label {...labelProps}>{label}</Button.Label>
				{icon && iconPosition == 'right' && <Button.Icon i={icon} {...iconProps} />}
			</Button.Root>
		);
	},
);

SimpleButton.displayName = 'SimpleButton';

export { SimpleButton };
export type { SimpleButtonProps };
