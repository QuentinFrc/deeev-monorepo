import React from 'react';

import { cn } from '#utils';
import { Icon, IconProps } from '#components/icons';

import { icon } from '../cn';

type ButtonIconProps = IconProps;
const ButtonIcon: React.FC<ButtonIconProps> = ({ size, i, className, ...props }) => (
	<Icon i={i} size={size} className={cn(icon(), className)} {...props} />
);

export { ButtonIcon, ButtonIcon as Icon };
export type { ButtonIconProps };
