/* eslint-disable tailwindcss/no-custom-classname */
import { Link, Section, Text } from '@react-email/components';

import { cn } from '@/lib/utils';

import { text } from './styles';

type MailFooterProps = {
	contactEmail?: string;
};

export const MailFooter = ({ contactEmail = 'contact@deeev.fr' }: MailFooterProps) => {
	return (
		<Section>
			<Text className={cn(text({ contrast: 'min', size: 'sm' }))}>
				© {new Date().getFullYear()} Deeev - Tous droits réservés
			</Text>
			<Text className={cn('mb-0', text({ size: 'sm', contrast: 'min' }))}>
				Si vous n&apos;êtes pas à l&apos;origine de cette demande, vous pouvez ignorer cet
				e-mail.
			</Text>
			<Text className={cn('my-0', text({ size: 'sm', contrast: 'min' }))}>
				Si les messages persistent, contactez-nous à l&apos;adresse :{' '}
				<Link
					href={`mailto:${contactEmail}`}
					className={cn('text-link-light dark:text-link-dark')}>
					{contactEmail}
				</Link>
				.
			</Text>
		</Section>
	);
};
