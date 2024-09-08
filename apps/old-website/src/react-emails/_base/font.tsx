import React from 'react';
import { Font } from '@react-email/components';

export const MonaSans = () => (
	<Font
		fontFamily="Mona Sans"
		fallbackFontFamily="Verdana"
		webFont={{
			url: 'https://github.com/github/mona-sans/blob/main/fonts/webfonts/MonaSans%5Bslnt%2Cwdth%2Cwght%5D.woff2',
			format: 'woff2',
		}}
		fontWeight={400}
		fontStyle="normal"
	/>
);
