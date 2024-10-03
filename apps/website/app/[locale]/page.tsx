import {
	ContactUs,
	CustomersChallenges,
	FAQ,
	Hero,
	OurProcess,
	OurServices,
	Pricing,
	UseCases,
} from '@/components/marketing';

export default function Home() {
	return (
		<main className={'space-y-32'}>
			<Hero />
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
