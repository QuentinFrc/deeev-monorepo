import Common from '@content/common/fr.json';
import HomePage from '@content/homepage/fr.json';

type HomePage = typeof HomePage;
type Common = typeof Common;

type Messages = { homepage: HomePage; common: Common };

declare global {
	// Use type safe message keys with `next-intl`
	interface IntlMessages extends Messages {}
}
