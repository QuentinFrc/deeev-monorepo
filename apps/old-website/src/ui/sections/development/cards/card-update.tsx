import * as Card from './base';

export const CardUpdate = () => (
	<Card.Root>
		{/*<UpdateGitGraph />*/}
		<Card.Content>
			<Card.OnTitle icon={'ArrowUp'}>Innovation</Card.OnTitle>
			<Card.Header>
				<Card.Description
					desc={
						"En plus d'utiliser les dernières technologies, nous scrutons les tendances et les nouveautés pour vous proposer des solutions toujours plus performantes."
					}
				/>
			</Card.Header>
		</Card.Content>
	</Card.Root>
);

/*const UpdateGitGraph = () => <Card.SvgCard position={'top'}></Card.SvgCard>;*/
