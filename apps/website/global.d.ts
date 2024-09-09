import HomePage from '@content/homepage/fr.json';

type HomePage = typeof HomePage;

type Messages = { homepage: HomePage };

declare global {
	// Use type safe message keys with `next-intl`
	interface IntlMessages extends Messages {}
}
