import { config } from './src/styles/tailwind.config';

const { withTV } = require('tailwind-variants/transformer');

export default withTV(config, {
	aliases: ['@/lib/utils'],
});
