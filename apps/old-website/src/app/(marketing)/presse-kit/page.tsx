import { Container } from '@repo/ui/container';
import { Heading } from '@ui/components/section';
import { Text } from '@ui/components/typography';

import {
	BadgeColor,
	DownloadAllDesignAssetsButton,
	LogoFrame,
	LogoVariantGrid,
} from './_components';

const PressePage = () => {
	return (
		<main className={'py-24'}>
			<HeadingSection />
			<LogoSection />
			<ColorSection />
			<DownloadSection />
		</main>
	);
};

const LogoSection = () => (
	<Container className={'space-y-12 py-32'}>
		<section>
			<div>
				<Text size={'4xl'}>Logo complet</Text>
				<Text contrast={'mid'} className={'max-w-5xl'} asChild>
					<p>
						Obtenez notre logo complet, associant élégamment notre monogramme et le nom de
						notre marque, pour renforcer votre identité visuelle et afficher fièrement
						notre emblème dans vos communications.
					</p>
				</Text>
			</div>
			<div className="grid grid-cols-2 gap-4 py-12">
				<LogoVariantGrid label={'Coloré'}>
					<LogoFrame logoColor={'colorful-black'} logoVariant={'logo-with-text'} />
					<LogoFrame logoColor={'colorful-white'} logoVariant={'logo-with-text'} />
				</LogoVariantGrid>
				<LogoVariantGrid label={'Monochrome'}>
					<LogoFrame logoColor={'black-only'} logoVariant={'logo-with-text'} />
					<LogoFrame logoColor={'white-only'} logoVariant={'logo-with-text'} />
				</LogoVariantGrid>
			</div>
		</section>
		<section>
			<div>
				<Text size={'4xl'}>Monogramme</Text>
				<Text contrast={'mid'} className={'max-w-5xl'} asChild>
					<p>
						Téléchargez notre monogramme distinctif, l&apos;essence de notre marque, pour
						un branding élégant et reconnaissable, créant ainsi une signature mémorable
						dans toutes vos communications.
					</p>
				</Text>
			</div>
			<div className="grid grid-cols-2 gap-4 py-12">
				<LogoVariantGrid label={'Coloré'}>
					<LogoFrame logoColor={'colorful-black'} logoVariant={'logo-only'} />
					<LogoFrame logoColor={'colorful-white'} logoVariant={'logo-only'} />
				</LogoVariantGrid>
				<LogoVariantGrid label={'Monochrome'}>
					<LogoFrame logoColor={'black-only'} logoVariant={'logo-only'} />
					<LogoFrame logoColor={'white-only'} logoVariant={'logo-only'} />
				</LogoVariantGrid>
			</div>
		</section>
	</Container>
);

const ColorSection = () => (
	<Container className={'py-16'}>
		<div>
			<Text size={'4xl'}>Couleurs</Text>
			<Text contrast={'mid'} className={'max-w-5xl'} asChild>
				<p>
					Découvrez nos couleurs de marque officielles, conçues pour capturer
					l&apos;essence de notre identité, afin de garantir une harmonie visuelle dans
					toutes vos communications et de renforcer la reconnaissance de notre marque.
				</p>
			</Text>
		</div>
		<div className={'py-12'}>
			<div className="mb-4 rounded-full border border-border/50 bg-foreground/[8%] p-1">
				<div className="h-4 w-full rounded-inherit bg-gradient-to-r from-green-500 via-cyan-500 to-fuchsia-500" />
			</div>
			<div className="grid grid-cols-3">
				<div className={'justify-self-start'}>
					<BadgeColor color={'primary'} />
				</div>
				<div className={'justify-self-center'}>
					<BadgeColor color={'secondary'} />
				</div>
				<div className={'justify-self-end'}>
					<BadgeColor color={'tertiary'} />
				</div>
			</div>
		</div>
	</Container>
);

const HeadingSection = () => (
	<Container>
		<Heading>Presse Kit</Heading>
		<Text contrast={'high'} size={'base'}>
			Découvrez notre collection complète d&apos;assets de marque prêts à télécharger,
			conçus pour vous aider à communiquer efficacement et à représenter notre marque de
			manière cohérente et percutante.
		</Text>
	</Container>
);

const DownloadSection = () => (
	<Container className={'py-4'}>
		<div className="flex justify-center">
			<DownloadAllDesignAssetsButton />
		</div>
	</Container>
);

export default PressePage;
