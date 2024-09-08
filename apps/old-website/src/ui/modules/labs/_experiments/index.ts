import React from 'react';

import { ArtificialDelayPlayground, ArtificialDelayPreview } from './artificial-delay';

export const Playgrounds: Record<string, React.FC> = {
	'artificial-delay': ArtificialDelayPlayground,
};

export const Previews: Record<string, React.FC> = {
	'artificial-delay': ArtificialDelayPreview,
};
