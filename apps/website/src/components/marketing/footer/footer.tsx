import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

/*import * as Badge from '@repo/ui/badge';
import { BadgeRootProps } from '@repo/ui/badge';*/
import { Container } from '@repo/ui/container';
import { Logo } from '@repo/ui/logo';
import { Typography } from '@repo/ui/typography';
import { cn } from '@repo/ui/utils';

/*import { Config } from '@/config';*/

/*import { INSTAGRAM_LINK, LINKEDIN_LINK } from '@/config/env';*/
const INSTAGRAM_LINK = 'https://www.instagram.com/';
const LINKEDIN_LINK = 'https://www.linkedin.com/';

export const Footer = () => {
	return (
		<footer>
			<Container size={'lg'}>
				<div className="space-y-12 pb-16 pt-4">
					<div
						className={cn(
							'flex flex-col items-start justify-between gap-12',
							'md:justify-start lg:flex-row',
						)}>
						<div className={'min-w-max space-y-3'}>
							<Link href={'/'} title={'Accueil'}>
								<Logo color={'colorful-white'} variant={'logo-text'} />
							</Link>
							<div>
								<Typography.Default
									/*contrast={2}*/
									/*size={{ initial: 'base', sm: 'lg' }}*/
									className={'space-y-1.5'}>
									{/*{Config.short_description}*/}
								</Typography.Default>
								<Typography.Default size={'sm'} className={'space-x-2'}>
									{/*{Config.authors.map(({ name, url }) => (
										<a href={url} key={name} target={'_blank'}>
											{name}
										</a>
									))}*/}
								</Typography.Default>
							</div>
						</div>
						<Links />
					</div>
					<Typography.Default
						size={'sm'}
						className={cn('flex items-center justify-between gap-6 border-t pt-4')}>
						<div>© {new Date().getFullYear()} - Tous droits réservés</div>
						<Link href={'/legals/legal-notice'}>Mentions légales</Link>
					</Typography.Default>
				</div>
			</Container>
		</footer>
	);
};

const Links = () => (
	/*<div
		className={cn(
			'flex flex-col items-start justify-between gap-6 md:ml-8',
			'lg:flex-row',
		)}>*/
	<div className={'grid w-max gap-8 sm:grid-cols-[repeat(3,minmax(max-content,auto))]'}>
		<LinkColumn title={'Liens utiles'}>
			<Link href={'/'}>Accueil</Link>
			{/*<LinkWithBadge
				href={'#'}
				label={'Soon'}
				fillMode={'outline'}
				className={'pointer-events-none opacity-50'}
				aria-disabled>
				Blog
			</LinkWithBadge>*/}
		</LinkColumn>

		<LinkColumn title={'Réseaux Sociaux'}>
			<a href={INSTAGRAM_LINK} target={'_blank'}>
				Instagram
			</a>
			<a href={LINKEDIN_LINK} target={'_blank'}>
				Linkedin
			</a>
			{/*<a href={BEHANCE_LINK} target={'_blank'}>
									Behance
								</a>*/}
		</LinkColumn>

		{/*<LinkColumn title={'Services'}>
			<LinkWithBadge href={'/services/landing-page'} label={'Nouveau'}>
				Landing Page
			</LinkWithBadge>
			<Link href={'#'}>Site internet</Link>
								<Link href={'#'}>Web App</Link>
		</LinkColumn>*/}
	</div>
);

type LinkColumnProps = React.PropsWithChildren<{
	title: string;
}>;
const LinkColumn: React.FC<LinkColumnProps> = ({ title, children }) => {
	return (
		<div className={'space-y-2 md:px-2'}>
			<Typography.Default
				color={'contrasted-mid'}
				size={'sm'}
				className={'whitespace-nowrap'}>
				{title}
			</Typography.Default>
			<Typography.Default
				className={cn(
					'flex flex-col items-start justify-start gap-1 pl-2 md:gap-2',
					'whitespace-nowrap',
				)}>
				{children}
			</Typography.Default>
		</div>
	);
};
/*
type LinkWithBadgeProps = LinkProps &
	React.ComponentPropsWithoutRef<'a'> & {
		label: string;
		variant?: BadgeRootProps['variant'];
		fillMode?: BadgeRootProps['type'];
	};
const LinkWithBadge: React.FC<LinkWithBadgeProps> = ({
	href,
	label,
	children,
	className,
	variant = 'neutral',
	fillMode = 'fill',
	...linkProps
}) => {
	return (
		<Link
			className={cn('flex items-center gap-1.5', className)}
			href={href}
			{...linkProps}>
			<span>{children}</span>
			<Badge.Root asChild size={'sm'} type={fillMode} variant={variant}>
				<span>
					<Badge.Label>{label}</Badge.Label>
				</span>
			</Badge.Root>
		</Link>
	);
};*/

type LinkProps = NextLinkProps & React.ComponentPropsWithoutRef<'a'>;
const Link: React.FC<LinkProps> = ({ className, ...props }) => {
	return <NextLink className={cn('whitespace-nowrap', className)} {...props} />;
};
