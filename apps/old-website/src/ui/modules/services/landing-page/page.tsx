/*import { LandingPageValue } from '@ui/sections/landing-page-value';*/
import { LandingPageClients } from './clients';
import { LandingPageFaq } from './faq';
import { LandingPageFeatures } from './features';
import { LandingPageHero } from './hero';
import { LandingPageMockups } from './mockups';
import { LandingPagePricing } from './pricing';

const LandingPage = () => (
	<main>
		<LandingPageHero />
		<LandingPageMockups />
		<LandingPageFeatures />
		<LandingPagePricing />
		{/*<LandingPageValue />*/}
		<LandingPageClients />
		<LandingPageFaq />
	</main>
);

export { LandingPage, LandingPage as Page };
