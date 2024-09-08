module.exports = {
	ci: {
		collect: {
			settings: { chromeFlags: '--no-sandbox' },
			url: ['https://dev.deeev.fr'],
			numberOfRuns: 5,
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
