import {
	ContactUs,
	CustomersChallenges,
	FAQ,
	Hero,
	OurProcess,
	OurServices,
	OurStack,
	Pricing,
	UseCases,
} from '@/components/marketing';

export default function Home() {
	return (
		<main className={'space-y-32'}>
			<Hero />
			<OurStack />
			<CustomersChallenges />
			<OurServices />
			<Pricing />
			<OurProcess />
			<UseCases />
			<FAQ />
			<ContactUs />
		</main>
	);
}
