import * as Card from './base';

export const CardAccess = () => (
	<Card.Root>
		{/*<AccessibilityIllustration />*/}
		<Card.Content>
			<Card.OnTitle icon={'TextInput'}>Accessibilité</Card.OnTitle>
			<Card.Header>
				<Card.Description
					desc={
						"Nous intégrons systématiquement des principes d'accessibilité à chaque site que nous concevons, pour que chacun puisse profiter pleinement de l'expérience en ligne."
					}
				/>
			</Card.Header>
		</Card.Content>
	</Card.Root>
);

/*const AccessibilityIllustration = () => <Card.SvgCard position={'top'}></Card.SvgCard>;*/
