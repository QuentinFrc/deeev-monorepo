import { cn } from '@/lib/utils';
import { Container } from '@repo/ui/container';
import { Headings, headingStyles, Text, textStyles } from '@ui/components/typography';

export const LandingPageValue = () => (
	<section>
		<Container size={'xl'}>
			<div className="space-y-4">
				<Headings.H2>Faites vous connaître ou vendez votre produit</Headings.H2>
				<Text contrast={2}>
					Une landing page c&apos;est le meilleur moyen de définir un objectif et de créer
					le chemin pour l&apos;atteindre
				</Text>
			</div>
			<div className="grid grid-cols-2 gap-24">
				<div className={'my-24 space-y-12 py-4'}>
					<Block
						title={'Définissez un objectif'}
						content={
							'Vendre un produit, décrocher un rendez-vous ou encore simplement faire connaître son entreprise, la landing page est le moyen le plus simple pour remplir ces objectifs.'
						}
					/>
					<Block
						title={'Créez le parcours'}
						content={
							'Accompagnez vos visiteurs dans leur parcours, de la découverte de votre entreprise à la prise de contact, en passant par la découverte de vos produits et services.'
						}
					/>
					<Block
						title={'Optimisez votre conversion'}
						content={
							'Grâce à la landing page, vous pouvez suivre le parcours de vos visiteurs et optimiser votre taux de conversion pour atteindre vos objectifs.'
						}
					/>
				</div>
				<div className="w-full rounded-lg border bg-card">Content Here</div>
			</div>
		</Container>
	</section>
);

const Block = ({ title, content }: { title: string; content: string }) => (
	<div
		className={cn([
			'flex flex-col gap-2 border-l-2 py-2 pl-4',
			'border-cyan-300 first:border-green-300 last:border-fuchsia-300',
		])}>
		<h3 className={cn(headingStyles(), textStyles({ size: 'xl' }))}>{title}</h3>
		<Text size={'sm'} contrast={3}>
			{content}
		</Text>
	</div>
);
