import Link from 'next/link';

import * as Badge from '@repo/ui/badge';
import * as Button from '@repo/ui/button';
import { Container } from '@repo/ui/container';
import { Logo } from '@ui/components/logo';
import { Headings, P } from '@ui/components/typography';

export default function Page() {
	return (
		<Container
			className={'relative flex min-h-screen flex-col justify-center gap-16'}
			size={'lg'}>
			<div className="absolute left-8 top-24">
				<Logo uniqueId={'not-found-page'} />
			</div>
			<div className="flex flex-col justify-center gap-8">
				<div className={'space-y-2'}>
					<Badge.Root variant={'neutral'} type={'outline'}>
						<Badge.Label>404 - Not Found</Badge.Label>
					</Badge.Root>
					<Headings.H1>Vraiment désolé mais on ne l&apos;a pas trouvé</Headings.H1>
					<P contrast={'mid'}>
						Désolé, cette page n&apos;existe pas. Veuillez vérifier l&apos;URL ou revenir
						à la page d&apos;accueil.
					</P>
				</div>
				<Button.Root asChild>
					<Link href={'/'}>
						<Button.Label>Retourner à la page d&apos;accueil</Button.Label>
						<Button.Icon i={'ArrowRight'} />
					</Link>
				</Button.Root>
			</div>
		</Container>
	);
}
