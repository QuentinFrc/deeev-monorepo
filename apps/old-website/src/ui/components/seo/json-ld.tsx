import React from 'react';
import { Graph } from 'schema-dts';

type JsonLdProps = {
	data: Graph['@graph'];
};

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
	const schema: Graph = { '@context': 'https://schema.org', '@graph': data };
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema),
			}}
		/>
	);
};
