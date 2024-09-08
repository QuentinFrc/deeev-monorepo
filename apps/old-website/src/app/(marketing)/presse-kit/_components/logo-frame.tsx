'use client';

import React from 'react';
import { Logo, LogoProps } from '@ui/assets/logo';
import { renderToString } from 'react-dom/server';
import { toast } from 'sonner';

import { cn, tv, VariantProps } from '@/lib/utils';
import { ButtonLabel, ButtonRoot } from '@repo/ui/button';
import { Icon } from '@repo/ui/icons';

const frameVariants = tv({
	base: 'group relative flex items-center justify-center overflow-hidden rounded-lg border px-12 py-16',
	variants: {
		color: {
			white: 'bg-white text-black',
			black: 'bg-black text-white',
		},
	},
});

type FrameVariantProps = VariantProps<typeof tv>;

type LogoFrameProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & {
	logoColor: LogoProps['color'];
	logoVariant: 'logo-only' | 'logo-with-text';
} & FrameVariantProps;

const getFrameColorFromLogoColor = (color: LogoProps['color']) => {
	switch (color) {
		case 'black-only':
		case 'colorful-black':
			return 'white';
		case 'white-only':
		case 'colorful-white':
			return 'black';
		default:
			throw new Error(`Invalid color: ${color}`);
	}
};

const getButtonVariantFromLogoColor = (color: LogoProps['color']) => {
	switch (color) {
		case 'black-only':
		case 'colorful-black':
			return 'secondary';
		case 'white-only':
		case 'colorful-white':
			return 'outline';
		default:
			throw new Error(`Invalid color: ${color}`);
	}
};

export const LogoFrame = ({
	className,
	logoColor,
	logoVariant,
	...props
}: LogoFrameProps) => {
	const LogoComponent = logoVariant === 'logo-only' ? Logo.LogoOnly : Logo.LogoWithText;

	const LogoJSX = <LogoComponent color={logoColor} />;

	const buttonVariant = getButtonVariantFromLogoColor(logoColor);

	return (
		<div
			className={cn(
				frameVariants({ color: getFrameColorFromLogoColor(logoColor) }),
				className,
			)}
			{...props}>
			{LogoJSX}
			<div
				className={
					'absolute bottom-0 right-1.5 z-10 w-max translate-y-full gap-1 opacity-0 transition-gpu duration-300 group-hover:-translate-y-1.5 group-hover:opacity-100'
				}>
				<ButtonRoot
					size="sm"
					variant={buttonVariant}
					title={'Copy SVG'}
					onClick={async () => {
						await navigator.clipboard.writeText(renderToString(LogoJSX));
						toast.success(`Le SVG à été copié dans le presse-papier`);
					}}>
					<Icon i={'Copy'} className={'relative z-10'} />
					<ButtonLabel>Copier le SVG</ButtonLabel>
				</ButtonRoot>
			</div>
		</div>
	);
};
